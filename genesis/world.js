/* 生成式群岛 · 几何生成器
   只生成「线」：岛岸、人物轮廓、航线、粒子、数字墙。
   约定：所有线条带 aOrder（生成顺序），自下而上 / 由核心向外生长。 */

import * as THREE from 'three'

/* ---------- 确定性随机与噪声 ---------- */
export function mulberry32(seed) {
  let a = seed >>> 0
  return function () {
    a = (a + 0x6D2B79F5) >>> 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function makeNoise1(seed) {
  const rnd = mulberry32(seed)
  const table = new Float32Array(256)
  for (let i = 0; i < 256; i++) table[i] = rnd()
  return x => {
    const i = Math.floor(x)
    const f = x - i
    const u = f * f * (3 - 2 * f)
    const a = table[((i % 256) + 256) % 256]
    const b = table[(((i + 1) % 256) + 256) % 256]
    return a + (b - a) * u
  }
}

/* ---------- 线条缓冲 ---------- */
export class LineBuf {
  constructor() {
    this.pos = []
    this.col = []
    this.ord = []
    this.pha = []
  }

  /** 一段线。oa/ob 为两端生成顺序，可不同 → 线条「被画出来」。 */
  seg(ax, ay, az, bx, by, bz, color, oa, ob = oa, phase = 0) {
    this.pos.push(ax, ay, az, bx, by, bz)
    const c = color instanceof THREE.Color ? color : new THREE.Color(color)
    this.col.push(c.r, c.g, c.b, c.r, c.g, c.b)
    this.ord.push(oa, ob)
    this.pha.push(phase, phase)
  }

  /** 折线：points 为 [x,y,z][] */
  poly(points, color, orderFn, phase = 0) {
    for (let i = 0; i < points.length - 1; i++) {
      const a = points[i]
      const b = points[i + 1]
      this.seg(a[0], a[1], a[2], b[0], b[1], b[2], color, orderFn(a), orderFn(b), phase)
    }
  }

  get count() { return this.ord.length }
}

export function lineGeometry(buf) {
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.Float32BufferAttribute(buf.pos, 3))
  g.setAttribute('aColor', new THREE.Float32BufferAttribute(buf.col, 3))
  g.setAttribute('aOrder', new THREE.Float32BufferAttribute(buf.ord, 1))
  g.setAttribute('aPhase', new THREE.Float32BufferAttribute(buf.pha, 1))
  return g
}

/* ---------- 水平填充面（只负责遮挡，不发光） ---------- */
export function fanGeometry(points, y) {
  const n = points.length
  const positions = new Float32Array(n * 9)
  let cx = 0, cz = 0
  for (const p of points) { cx += p[0]; cz += p[1] }
  cx /= n; cz /= n
  let k = 0
  for (let i = 0; i < n; i++) {
    const a = points[i], b = points[(i + 1) % n]
    positions[k++] = cx; positions[k++] = y; positions[k++] = cz
    positions[k++] = a[0]; positions[k++] = y; positions[k++] = a[1]
    positions[k++] = b[0]; positions[k++] = y; positions[k++] = b[1]
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  g.computeVertexNormals()
  return g
}

/* ---------- 竖直平面填充（人物躯干与头） ---------- */
/** depth: 沿法线后退的距离，避免与轮廓线共面闪烁 */
export function verticalQuad(pts, transform, depth = 0.006) {
  const positions = []
  const idx = []
  for (const [px, py] of pts) {
    const v = transform(px, py, depth)
    positions.push(v[0], v[1], v[2])
  }
  for (let i = 1; i < pts.length - 1; i++) idx.push(0, i, i + 1)
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  g.setIndex(idx)
  g.computeVertexNormals()
  return g
}

export function verticalDisc(cx, cy, r, transform, segments = 22, depth = 0.006) {
  const positions = []
  const idx = []
  for (let i = 0; i < segments; i++) {
    const a = (i / segments) * Math.PI * 2
    const v = transform(cx + Math.cos(a) * r, cy + Math.sin(a) * r, depth)
    positions.push(v[0], v[1], v[2])
  }
  for (let i = 1; i < segments - 1; i++) idx.push(0, i, i + 1)
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  g.setIndex(idx)
  g.computeVertexNormals()
  return g
}

/* ---------- 岛岸 ---------- */
export function buildIsland(opts) {
  const {
    cx = 0, cz = 0, radius = 2.2, seed = 7, style = 'calm',
    gate = 0, teal = 0x76a98c, gold = 0xdfaa7f, detail = 76, accent = true,
    orderBase = 0, orderSpan = 1,
  } = opts
  const noise = makeNoise1(seed)
  const buf = new LineBuf()
  const fills = []
  const n = detail
  const pts = []
  for (let i = 0; i < n; i++) {
    const t = i / n
    const a = t * Math.PI * 2
    let f
    if (style === 'angular') f = 0.70 + 0.40 * noise(t * 4.3 + seed) + 0.20 * noise(t * 12.7 + seed)
    else if (style === 'open') f = 0.86 + 0.24 * noise(t * 2.1 + seed * 1.7) + 0.10 * noise(t * 6.3 + seed)
    else f = 0.80 + 0.28 * noise(t * 3.1 + seed * 0.9) + 0.13 * noise(t * 8.9 + seed)
    const r = radius * f
    const y = 0.05 * noise(t * 5.0 + seed * 2.3) - 0.015
    pts.push({ x: cx + Math.cos(a) * r, z: cz + Math.sin(a) * r, y, a })
  }

  // 抵达点：最接近 gate 方向的岸线点
  let gatePt = pts[0], gateD = Infinity
  for (const p of pts) {
    const d = Math.abs(((p.a - gate + Math.PI * 3) % (Math.PI * 2)) - Math.PI)
    if (d < gateD) { gateD = d; gatePt = p }
  }
  const maxD = radius * 2.2
  const dist = p => Math.hypot(p.x - gatePt.x, p.z - gatePt.z) / maxD
  // 相对分布 → 绝对顺序区间
  const order = p => orderBase + orderSpan * Math.min(1, 0.08 + 0.62 * dist(p))

  const cTeal = new THREE.Color(teal)
  const cGold = new THREE.Color(gold)

  // 岸线
  for (let i = 0; i < n; i++) {
    const a = pts[i], b = pts[(i + 1) % n]
    buf.seg(a.x, a.y, a.z, b.x, b.y, b.z, cTeal, order(a), order(b), i * 0.37)
  }
  fills.push(fanGeometry(pts.map(p => [p.x, p.z]), 0))

  // 稀疏等深线
  const inner = [0.68, 0.42]
  inner.forEach((scale, k) => {
    const y = -0.07 - k * 0.09
    let seg = []
    for (let i = 0; i <= n; i++) {
      const p = pts[i % n]
      const ix = cx + (p.x - cx) * scale
      const iz = cz + (p.z - cz) * scale
      const o = order(p) + orderSpan * (0.16 + k * 0.10)
      seg.push([ix, y, iz, o])
      if (i % 3 === 2) {
        for (let j = 0; j < seg.length - 1; j++) {
          const A = seg[j], B = seg[j + 1]
          buf.seg(A[0], A[1], A[2], B[0], B[1], B[2], cTeal, A[3], B[3], i * 0.21 + k)
        }
        seg = []
      }
    }
  })

  // 竖向崖线：自下而上生长
  for (let i = 0; i < n; i += 5) {
    const p = pts[i]
    const depth = 0.22 + 0.30 * noise(i * 0.37 + seed)
    const o = order(p)
    buf.seg(p.x, p.y, p.z, p.x, p.y - depth, p.z, cTeal,
      o + orderSpan * 0.06, o + orderSpan * 0.42, i * 0.13)
  }

  // 抵达处的暖金标记
  if (accent) {
    const g0 = pts[Math.floor(((gateD / (Math.PI * 2)) * n) + n / 2) % n]
    buf.seg(g0.x, g0.y + 0.02, g0.z, g0.x, g0.y + 0.30, g0.z, cGold,
      order(g0), order(g0) + orderSpan * 0.25, 0.4)
  }

  // 少量笔触，避免均匀
  for (let i = 0; i < 10; i++) {
    const p = pts[(i * 7 + 3) % n]
    const o = order(p) + orderSpan * 0.05
    buf.seg(p.x, p.y + 0.005, p.z, cx + (p.x - cx) * 0.93, p.y + 0.005, cz + (p.z - cz) * 0.93,
      cTeal, o, o + orderSpan * 0.08, i * 0.5)
  }

  return { buf, fills, points: pts, center: [cx, cz], radius, gatePoint: gatePt }
}

/* ---------- 人物轮廓 ---------- */
/**
 * 人物。orderBase/orderSpan：把人物自身的纵向顺序映射到全局绝对顺序区间，
 * 保证「自下而上」生长且与全局生成进度一致。
 */
export function buildFigure(opts) {
  const {
    x = 0, y = 0, z = 0, scale = 1, facing = 0,
    color = 0x76a98c, accent = 0xdfaa7f,
    hair = 'short', outfit = 'coat', mark = 'wave', gesture = null,
    mirror = false, orderBase = 0, orderSpan = 0.2,
  } = opts
  const buf = new LineBuf()
  const fills = []
  const cMain = new THREE.Color(color)
  const cAcc = new THREE.Color(accent)
  const H = 1.68
  const s = scale

  const mx = v => (mirror ? -v : v)
  // rot(lx, ly, lz)：局部坐标 → 世界坐标。lx 左右，ly 高度，lz 深度。
  const rot = (lx, ly, lz) => {
    const c = Math.cos(facing), sn = Math.sin(facing)
    const px = mx(lx)
    return [
      x + (px * c - lz * sn) * s,
      y + ly * s,
      z + (px * sn + lz * c) * s,
    ]
  }
  // 纵向顺序 → 绝对顺序：脚在区间起点，头在终点
  const orderY = ly => orderBase + orderSpan * Math.max(0, Math.min(1, ly / H))

  const headR = 0.135
  const headY = 1.50
  const shoulderY = 1.305
  const hipY = 0.86

  /* 头 */
  for (let i = 0; i < 22; i++) {
    const a0 = (i / 22) * Math.PI * 2
    const a1 = ((i + 1) / 22) * Math.PI * 2
    const p0 = rot(Math.cos(a0) * headR, headY + Math.sin(a0) * headR, 0)
    const p1 = rot(Math.cos(a1) * headR, headY + Math.sin(a1) * headR, 0)
    buf.seg(p0[0], p0[1], p0[2], p1[0], p1[1], p1[2], cMain,
      orderY(headY + Math.sin(a0) * headR), orderY(headY + Math.sin(a1) * headR), i * 0.29)
  }
  // 头部不铺填充：参考影片中人物是纯线条勾勒，内部留空更接近原稿，也避免与轮廓线争深度

  /* 颈与肩 */
  buf.poly([
    rot(-0.045, 1.345, 0), rot(-0.045, 1.395, 0),
    rot(0.045, 1.395, 0), rot(0.045, 1.345, 0),
  ], cMain, p => orderY(p[1]), 0.11)
  const shL = rot(-0.215, shoulderY, 0), shR = rot(0.215, shoulderY, 0)
  buf.seg(shL[0], shL[1], shL[2], shR[0], shR[1], shR[2], cMain, orderY(shoulderY), orderY(shoulderY), 0.2)

  /* 躯干：肩线、腰线、胯线柔和收束，避免矩形感 */
  const torsoL = [
    [0.205, shoulderY], [0.212, 1.20], [0.188, 1.02], [0.152, hipY], [0.140, 0.78],
  ]
  const torsoR = [
    [-0.205, shoulderY], [-0.212, 1.20], [-0.188, 1.02], [-0.152, hipY], [-0.140, 0.78],
  ]
  ;[torsoL, torsoR].forEach((side, si) => {
    buf.poly(side.map(([px, py]) => rot(px, py, 0)), cMain, p => orderY(p[1]), 0.3 + si * 0.1)
  })
  // 肩部弧线：从颈根向外下垂
  buf.poly([
    rot(-0.048, 1.352, 0), rot(-0.135, 1.322, 0), rot(-0.205, shoulderY, 0),
  ], cMain, p => orderY(p[1]), 0.24)
  buf.poly([
    rot(0.048, 1.352, 0), rot(0.135, 1.322, 0), rot(0.205, shoulderY, 0),
  ], cMain, p => orderY(p[1]), 0.25)
  fills.push({
    geo: verticalQuad([[-0.19, shoulderY], [0.19, shoulderY], [0.14, 0.80], [-0.14, 0.80]], rot, 0.012),
    color: 0x0a1311,
  })

  /* 服装下摆 */
  if (outfit === 'coat') {
    buf.poly([rot(-0.185, hipY, 0), rot(-0.20, 0.60, 0)], cMain, p => orderY(p[1]), 0.42)
    buf.poly([rot(0.185, hipY, 0), rot(0.20, 0.60, 0)], cMain, p => orderY(p[1]), 0.43)
    const a = rot(-0.20, 0.60, 0), b = rot(0.20, 0.60, 0)
    buf.seg(a[0], a[1], a[2], b[0], b[1], b[2], cMain, orderY(0.60), orderY(0.60), 0.5)
  } else if (outfit === 'cloak') {
    buf.poly([rot(-0.185, hipY, 0), rot(-0.30, 0.32, 0)], cMain, p => orderY(p[1]), 0.44)
    buf.poly([rot(0.185, hipY, 0), rot(0.30, 0.32, 0)], cMain, p => orderY(p[1]), 0.45)
    const a = rot(-0.30, 0.32, 0), b = rot(0.30, 0.32, 0)
    buf.seg(a[0], a[1], a[2], b[0], b[1], b[2], cMain, orderY(0.32), orderY(0.32), 0.52)
  } else if (outfit === 'dress') {
    buf.poly([rot(-0.185, hipY, 0), rot(-0.34, 0.46, 0)], cMain, p => orderY(p[1]), 0.44)
    buf.poly([rot(0.185, hipY, 0), rot(0.34, 0.46, 0)], cMain, p => orderY(p[1]), 0.45)
    const a = rot(-0.34, 0.46, 0), b = rot(0.34, 0.46, 0)
    buf.seg(a[0], a[1], a[2], b[0], b[1], b[2], cMain, orderY(0.46), orderY(0.46), 0.52)
  }

  /* 手臂 */
  ;[-1, 1].forEach((side, ai) => {
    const sx = side * 0.205
    let elbow, hand
    if (gesture === 'reach') { elbow = [sx + side * 0.06, 1.12]; hand = [sx + side * 0.16, 1.02] }
    else if (gesture === 'listen') { elbow = [sx + side * 0.04, 1.08]; hand = [sx + side * 0.02, 0.92] }
    else if (gesture === 'settle') { elbow = [sx + side * 0.02, 1.06]; hand = [sx + side * 0.03, 0.88] }
    else { elbow = [sx + side * 0.035, 1.10]; hand = [sx + side * 0.045, 0.94] }
    buf.poly([
      rot(sx, shoulderY - 0.02, 0),
      rot(elbow[0], elbow[1], 0),
      rot(hand[0], hand[1], 0),
    ], cMain, p => orderY(p[1]), 0.6 + ai * 0.07)
  })

  /* 腿：从胯位（0.78）向下 */
  ;[-1, 1].forEach((side, li) => {
    const hx = side * 0.072
    const knee = [hx + side * 0.018, 0.42]
    const foot = [hx + side * 0.022, 0.02]
    buf.poly([
      rot(hx, 0.78, 0), rot(knee[0], knee[1], 0), rot(foot[0], foot[1], 0),
    ], cMain, p => orderY(p[1]), 0.7 + li * 0.06)
    const f = rot(foot[0] + 0.03, 0.012, 0)
    const t = rot(foot[0] - 0.07, 0.012, 0)
    buf.seg(f[0], f[1], f[2], t[0], t[1], t[2], cMain, orderY(0.02), orderY(0.02), 0.8)
  })

  /* 发型 */
  if (hair === 'short') {
    for (let i = 0; i < 14; i++) {
      const a0 = Math.PI * (0.06 + 0.88 * (i / 14))
      const a1 = Math.PI * (0.06 + 0.88 * ((i + 1) / 14))
      const p0 = rot(Math.cos(a0) * headR * 1.06, headY + Math.sin(a0) * headR * 1.06, 0)
      const p1 = rot(Math.cos(a1) * headR * 1.06, headY + Math.sin(a1) * headR * 1.06, 0)
      buf.seg(p0[0], p0[1], p0[2], p1[0], p1[1], p1[2], cAcc, orderY(p0[1]), orderY(p1[1]), i * 0.33)
    }
  } else {
    for (const side of [-1, 1]) {
      const pts = []
      for (let i = 0; i <= 8; i++) {
        const t = i / 8
        pts.push(rot(side * (headR * 1.05 + 0.02 * Math.sin(t * 3)), headY + headR * 0.7 - t * 0.62, 0))
      }
      buf.poly(pts, cAcc, p => orderY(p[1]), 0.9 + side * 0.05)
    }
  }

  /* 胸前标记（航标） */
  const my = 1.14
  if (mark === 'wave') {
    for (let k = 0; k < 2; k++) {
      const pts = []
      for (let i = 0; i <= 8; i++) {
        const t = i / 8
        pts.push(rot(-0.075 + t * 0.15, my + k * 0.055 + Math.sin(t * Math.PI * 2) * 0.022, 0))
      }
      buf.poly(pts, cAcc, p => orderY(p[1]), 0.95)
    }
  } else if (mark === 'star') {
    const pts = []
    for (let i = 0; i <= 10; i++) {
      const a = (i / 10) * Math.PI * 2 - Math.PI / 2
      const r = i % 2 === 0 ? 0.075 : 0.032
      pts.push(rot(Math.cos(a) * r, my + Math.sin(a) * r, 0))
    }
    buf.poly(pts, cAcc, p => orderY(p[1]), 0.95)
  } else {
    buf.poly([
      rot(-0.06, my - 0.06, 0), rot(0.06, my - 0.06, 0),
      rot(0, my + 0.07, 0), rot(-0.06, my - 0.06, 0),
    ], cAcc, p => orderY(p[1]), 0.95)
  }

  /* 姿态回应 */
  if (gesture === 'reach') {
    const a = rot(0.30, 1.02, 0), b = rot(0.72, 1.00, 0)
    buf.seg(a[0], a[1], a[2], b[0], b[1], b[2], cAcc, orderY(a[1]), orderY(b[1]), 0.96)
    for (let i = 0; i < 3; i++) {
      const t = 0.25 + i * 0.3
      const m = [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]
      buf.seg(m[0], m[1], m[2], m[0], m[1] + 0.05, m[2], cAcc, orderY(m[1]), orderY(m[1]), 0.97)
    }
  } else if (gesture === 'listen') {
    for (let i = 0; i < 14; i++) {
      const a0 = -0.9 + (i / 14) * 1.8
      const a1 = -0.9 + ((i + 1) / 14) * 1.8
      const p0 = rot(-0.14 + Math.cos(a0) * 0.30, 1.44 + Math.sin(a0) * 0.30, 0)
      const p1 = rot(-0.14 + Math.cos(a1) * 0.30, 1.44 + Math.sin(a1) * 0.30, 0)
      buf.seg(p0[0], p0[1], p0[2], p1[0], p1[1], p1[2], cAcc, orderY(p0[1]), orderY(p1[1]), 0.98)
    }
  } else if (gesture === 'settle') {
    const c = rot(0, 0.015, 0)
    for (let i = 0; i < 26; i++) {
      const a0 = (i / 26) * Math.PI * 2, a1 = ((i + 1) / 26) * Math.PI * 2
      const p0 = [c[0] + Math.cos(a0) * 0.42, c[1], c[2] + Math.sin(a0) * 0.42]
      const p1 = [c[0] + Math.cos(a1) * 0.42, c[1], c[2] + Math.sin(a1) * 0.42]
      buf.seg(p0[0], p0[1], p0[2], p1[0], p1[1], p1[2], cAcc, orderBase, orderBase, i * 0.19)
    }
  }

  return { buf, fills }
}

/* ---------- 航线 ---------- */
export function buildRoute(points, opts = {}) {
  const { teal = 0x76a98c, gold = 0xdfaa7f, samples = 130, dash = 0, seed = 3 } = opts
  const curve = new THREE.CatmullRomCurve3(
    points.map(p => new THREE.Vector3(p[0], p[1], p[2])), false, 'catmullrom', 0.4)
  const buf = new LineBuf()
  const cTeal = new THREE.Color(teal)
  const cGold = new THREE.Color(gold)
  const pts = curve.getSpacedPoints(samples)
  const skip = dash ? Math.max(1, Math.round(samples / (dash * 2))) : 0
  for (let i = 0; i < samples; i++) {
    if (skip && i % skip !== 0 && i !== samples - 1) continue
    const a = pts[i], b = pts[i + 1]
    const t0 = i / samples, t1 = (i + 1) / samples
    const col = (t0 < 0.12 || t0 > 0.9) ? cGold : cTeal
    buf.seg(a.x, a.y, a.z, b.x, b.y, b.z, col, t0, t1, seed * 0.11 + i * 0.03)
  }
  return { buf, curve, points: pts }
}

/* ---------- 沿航线流动的粒子 ---------- */
export function buildParticles(routes, opts = {}) {
  const { count = 260, teal = 0xd6ffed, gold = 0xffd9b1, size = 0.7, seed = 11 } = opts
  const rnd = mulberry32(seed)
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const sizes = new Float32Array(count)
  const alphas = new Float32Array(count)
  const state = []
  const cTeal = new THREE.Color(teal)
  const cGold = new THREE.Color(gold)
  const nRoutes = Math.max(1, routes.length)
  for (let i = 0; i < count; i++) {
    // 沿航线均匀铺开，再用少量抖动，避免聚成亮团
    const ri = i % nRoutes
    const c = rnd() < 0.14 ? cGold : cTeal
    colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b
    sizes[i] = size * (0.5 + rnd() * 0.8)
    alphas[i] = 0.16 + rnd() * 0.26
    const base = Math.floor(i / nRoutes) / Math.ceil(count / nRoutes)
    state.push({
      ri,
      t: (base + rnd() * 0.06) % 1,
      sp: 0.010 + rnd() * 0.020,
      w: 0.6 + rnd() * 1.4,
    })
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geo.setAttribute('aColor', new THREE.BufferAttribute(colors, 3))
  geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))
  geo.setAttribute('aAlpha', new THREE.BufferAttribute(alphas, 1))
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 } },
    vertexShader: `
      attribute float aSize; attribute vec3 aColor; attribute float aAlpha;
      varying vec3 vColor; varying float vAlpha;
      void main(){
        vColor = aColor; vAlpha = aAlpha;
        vec4 mv = modelViewMatrix * vec4(position,1.0);
        // 尺寸有上限，避免近处粒子变成巨大的光斑
        gl_PointSize = clamp(aSize * (90.0 / max(0.001, -mv.z)), 0.6, 7.0);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      varying vec3 vColor; varying float vAlpha;
      void main(){
        vec2 c = gl_PointCoord - 0.5;
        float d = length(c);
        float a = smoothstep(0.5, 0.06, d);
        a *= a;
        if (a < 0.01) discard;
        gl_FragColor = vec4(vColor, a * vAlpha);
      }`,
  })
  const points = new THREE.Points(geo, mat)
  points.frustumCulled = false
  const tmp = new THREE.Vector3()
  function update(dt, time) {
    for (let i = 0; i < count; i++) {
      const st = state[i]
      st.t += st.sp * dt
      if (st.t > 1) st.t -= 1
      const route = routes[st.ri]
      if (!route) continue
      route.curve.getPointAt(Math.min(0.999, Math.max(0.001, st.t)), tmp)
      positions[i * 3] = tmp.x + Math.sin(time * st.w + i) * 0.035
      positions[i * 3 + 1] = tmp.y + Math.cos(time * st.w * 0.8 + i) * 0.035
      positions[i * 3 + 2] = tmp.z + Math.sin(time * st.w * 0.6 + i * 1.7) * 0.035
    }
    geo.attributes.position.needsUpdate = true
    mat.uniforms.uTime.value = time
  }
  return { points, update }
}

/* ---------- 报告数字墙 ---------- */
export const REPORT_LAYERS = [
  {
    id: 'self', label: '本人确认记录', color: '#a8e6c8', alpha: 1,
    note: '由参与者本人确认或修改的航行片段、暂停与表达。',
    rows: ['确认片段 11', '主动暂停 3', '修改表达 1', '未采纳 2'],
  },
  {
    id: 'ai', label: 'AI 整理', color: '#76a98c', alpha: 0.82,
    note: '按主题归并的草稿，尚未经本人确认，不作为结论。',
    rows: ['主题归并 4', '草稿段落 9', '待确认 5', '冲突标记 1'],
  },
  {
    id: 'scale', label: '量表观察', color: '#5c7f6d', alpha: 0.6,
    note: '标准化量表的节点记录，仅为观察数据，不作诊断。',
    rows: ['量表节点 3', '观察项 12', '缺失 1', '复测计划 1'],
  },
  {
    id: 'pro', label: '专业判断', color: '#dfaa7f', alpha: 0.95,
    note: '由专业人员给出的复核意见，需签署后才进入后续讨论。',
    rows: ['复核意见 1', '待签署 1', '随访建议 2', '风险提示 0'],
  },
]

export function buildReportTexture(layers = REPORT_LAYERS) {
  const W = 1024, H = 640
  const cv = document.createElement('canvas')
  cv.width = W; cv.height = H
  const g = cv.getContext('2d')
  g.clearRect(0, 0, W, H)
  const rowH = H / (layers.length + 1)
  g.textBaseline = 'middle'
  layers.forEach((layer, i) => {
    const y = rowH * (i + 0.95)
    g.globalAlpha = Math.min(1, layer.alpha * 1.25)
    g.fillStyle = layer.color
    g.font = '600 26px "PingFang SC", system-ui, sans-serif'
    g.fillText(layer.label, 40, y - 24)
    g.globalAlpha = layer.alpha * 0.32
    g.fillRect(40, y + 4, W - 80, 1)
    g.globalAlpha = Math.min(1, layer.alpha * 1.2)
    g.font = '500 31px ui-monospace, Menlo, "SF Mono", monospace'
    layer.rows.forEach((txt, j) => g.fillText(txt, 40 + j * 228, y + 32))
    g.globalAlpha = layer.alpha * 0.45
    for (let k = 0; k < 46; k++) {
      const h = 4 + ((k * 37) % 13)
      g.fillRect(516 + k * 10, y + 30 - h / 2, 1.5, h)
    }
  })
  g.globalAlpha = 1
  g.fillStyle = '#dfaa7f'
  g.font = '400 19px "PingFang SC", system-ui, sans-serif'
  g.fillText('演示样例 · 不来自真实个案', 40, H - 20)
  const tex = new THREE.CanvasTexture(cv)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  return tex
}
