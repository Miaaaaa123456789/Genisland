/* 生成式群岛 · 主场景
   视觉语言（以参考影片为准）：近乎黑色的无边界空间；纤细青绿与暖金发光线条
   逐渐勾勒主体；少量粒子沿线流动；光从核心向外扩散；有「从无到有」的生成过程；
   线条有疏密、前后遮挡、余辉与轻微呼吸感。

   本文件负责：场景、章节推进、镜头、交互、旁白同步、界面。 */

import * as THREE from 'three'
import { EffectComposer } from '../assets/vendor/three-addons/postprocessing/EffectComposer.js'
import { RenderPass } from '../assets/vendor/three-addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from '../assets/vendor/three-addons/postprocessing/UnrealBloomPass.js'
import { OutputPass } from '../assets/vendor/three-addons/postprocessing/OutputPass.js'
import {
  buildIsland, buildFigure, buildRoute, buildParticles, buildReportTexture,
  lineGeometry, LineBuf, REPORT_LAYERS,
} from './world.js'

const TEAL = 0x76a98c
const TEAL_BRIGHT = 0xd6ffed
const GOLD = 0xdfaa7f
const GOLD_BRIGHT = 0xffd9b1
const VOICE_BASE = '../assets/narration/audio/'

/* ------------------------------------------------------------------ */
/* 章节：每章 = 一段旁白 + 一个机位 + 一个生成目标                     */
/* ------------------------------------------------------------------ */
const CHAPTERS = [
  {
    id: 'intro', audio: 'g-intro.m4a',
    kicker: 'THE PROJECT / 这是什么',
    title: '面向经专业评估适宜的青少年',
    desc: '在专业支持下，练习表达、情绪调节与人际沟通。',
    camera: { pos: [1.5, 1.35, 5.4], look: [0.55, 1.00, 0.4], fov: 38 },
    gen: 0.24,
  },
  {
    id: 'entry', audio: 'g-entry.m4a',
    kicker: '01 / ENTRY · 入口',
    title: '黑暗中的一枚航标',
    desc: '先建立一个愿意带走的形象，以及可以随时撤回的边界。',
    camera: { pos: [1.5, 1.40, 4.6], look: [0.85, 1.00, 0.4], fov: 40 },
    gen: 0.34,
  },
  {
    id: 'corridor', audio: 'g-corridor.m4a',
    kicker: '03 / GROWTH CORRIDOR · 生成长廊',
    title: '确认的线索，长出不同的岸线',
    desc: '改变一条确认线索，岛岸与岸边角色会给出不同回应。',
    camera: { pos: [-0.4, 1.95, 7.2], look: [-1.9, 0.85, 0.2], fov: 45 },
    gen: 0.72,
  },
  {
    id: 'shared', audio: 'g-shared.m4a',
    kicker: '04 / SHARED · 团体互动区',
    title: '几个人，面对同一张航图',
    desc: '一次清楚的请求，或一次认真倾听，都值得被看见。',
    camera: { pos: [3.1, 2.25, 7.8], look: [1.5, 0.85, 0.2], fov: 44 },
    gen: 0.79,
  },
  {
    id: 'personal', audio: 'g-personal.m4a',
    kicker: '05 / PERSONAL · 个人岛',
    title: '一个人，也可以先照顾自己',
    desc: '走近、停留，或换一条更安静的路线。节奏由本人决定。',
    camera: { pos: [6.7, 1.85, 6.0], look: [5.9, 0.80, 1.4], fov: 42 },
    gen: 0.93,
  },
  {
    id: 'mirror', audio: 'g-mirror.m4a',
    kicker: '06 / MIRROR · 镜映',
    title: '镜中的人，仍是入口时的你',
    desc: '同一个形象、同一件长外套、同一枚胸前的航标。',
    camera: { pos: [11.3, 1.65, 3.6], look: [10.2, 1.05, 0.2], fov: 40 },
    gen: 0.96,
  },
  {
    id: 'cocreate', audio: 'g-cocreate.m4a',
    kicker: '07 / CO-CREATION · 共创空间',
    title: '两座岛，可以靠近，也可以移远',
    desc: '调整距离会立刻改变连线与关系标签；随时可以撤回。',
    camera: { pos: [15.4, 2.70, 8.4], look: [13.5, 0.70, 1.5], fov: 46 },
    gen: 0.99,
  },
  {
    id: 'report', audio: 'g-report.m4a',
    kicker: '08 / REPORT · 报告数字墙',
    title: '离开前，看清每一条记录的来源',
    desc: '本人确认、AI 整理、量表观察、专业判断，分层呈现。',
    camera: { pos: [19.4, 1.90, 4.2], look: [18.7, 1.55, -0.35], fov: 46 },
    gen: 1.00,
  },
]

/* ------------------------------------------------------------------ */
/* 状态                                                               */
/* ------------------------------------------------------------------ */
const state = {
  chapter: -1,
  started: false,
  free: false,
  genTime: 0,
  genTarget: 0,
  voice: null,
  voiceToken: 0,
  hovered: null,
  clue: 'steady',
  clueHistory: [],
  distance: 1.0,
  distanceHistory: [],
  reportLayer: 'self',
  visitor: {
    name: '听潮者', outfit: 'coat', hair: 'short', color: 'tide',
    mark: 'wave', stance: 'observe', direction: 'express',
  },
}

const VISITOR_LIGHT = {
  tide: [0x76a98c, 0xd6ffed],
  dawn: [0xdfaa7f, 0xffd9b1],
  violet: [0x8f86c4, 0xd7c0ff],
}

/* ------------------------------------------------------------------ */
/* 渲染器                                                             */
/* ------------------------------------------------------------------ */
const canvas = document.getElementById('stage')
const renderer = new THREE.WebGLRenderer({
  canvas, antialias: true, alpha: false, powerPreference: 'high-performance',
})
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.75))
renderer.setSize(innerWidth, innerHeight)
renderer.setClearColor(0x050b0a, 1)
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.25
renderer.outputColorSpace = THREE.SRGBColorSpace

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x050b0a)
scene.fog = new THREE.FogExp2(0x050b0a, 0.038)

const camera = new THREE.PerspectiveCamera(46, innerWidth / innerHeight, 0.5, 300)
camera.position.set(...CHAPTERS[0].camera.pos)

const composer = new EffectComposer(renderer)
composer.addPass(new RenderPass(scene, camera))
// 泛光克制但阈值要低到能吃到线条本身：strength 低、radius 小、threshold 中低
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.55, 0.45, 0.12)
composer.addPass(bloom)
composer.addPass(new OutputPass())

/* 光：从核心向外扩散。强度刻意压低，光只用于勾边而非照明全场。 */
const coreLight = new THREE.PointLight(TEAL_BRIGHT, 0, 18, 2.2)
coreLight.position.set(0, 1.2, 0)
scene.add(coreLight)
const rimLight = new THREE.PointLight(GOLD, 0, 14, 2.4)
rimLight.position.set(-2.4, 1.6, 0.6)
scene.add(rimLight)
const fillLight = new THREE.PointLight(TEAL, 0, 20, 2.0)
fillLight.position.set(10, 2.2, 0.5)
scene.add(fillLight)
const reportLight = new THREE.PointLight(GOLD, 0, 12, 2.2)
reportLight.position.set(18.8, 1.8, 1.4)
scene.add(reportLight)

/* ------------------------------------------------------------------ */
/* 线条材质：按生成顺序显现 + 余辉 + 呼吸                             */
/* ------------------------------------------------------------------ */
const lineMaterial = new THREE.ShaderMaterial({
  transparent: true,
  depthWrite: false,
  // 用普通混合：叠加不会互相吃掉亮度，线条保持纤细清晰
  blending: THREE.NormalBlending,
  // 把线条在深度缓冲里往相机方向推一点，保证共面时不被填充面遮掉
  polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4,
  uniforms: {
    uTime: { value: 0 },
    uGen: { value: 0 },
    uDim: { value: 0 },
  },
  vertexShader: `
    attribute vec3 aColor;
    attribute float aOrder;
    attribute float aPhase;
    varying vec3 vColor;
    varying float vOrder;
    varying float vPhase;
    void main(){
      vColor = aColor; vOrder = aOrder; vPhase = aPhase;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  fragmentShader: `
    uniform float uTime;
    uniform float uGen;
    uniform float uDim;
    varying vec3 vColor;
    varying float vOrder;
    varying float vPhase;
    void main(){
      // 线条被「画出来」：uGen 是当前生成位置，vOrder 是该线的生成顺序
      float reveal = smoothstep(vOrder - 0.035, vOrder + 0.035, uGen);
      if (reveal <= 0.002) discard;
      // 余辉：刚生成的一段更亮，随后缓慢回落
      float trail = exp(-max(0.0, uGen - vOrder) * 6.0);
      // 轻微呼吸
      float breathe = 0.90 + 0.10 * sin(uTime * 1.05 + vPhase * 6.2831);
      float a = (0.62 + 0.34 * trail) * breathe;
      a *= (1.0 - uDim * 0.72);
      // 余辉段偏冷白，普通段保持本色
      vec3 col = mix(vColor, vec3(0.82, 1.0, 0.93), trail * 0.40);
      gl_FragColor = vec4(col, a);
    }`,
})

const fillMaterial = new THREE.MeshBasicMaterial({
  color: 0x0c1714, transparent: true, opacity: 0.88,
  side: THREE.DoubleSide, depthWrite: true,
  // 把填充面在深度缓冲里往后推一点，避免遮掉共面的轮廓线
  polygonOffset: true, polygonOffsetFactor: 2, polygonOffsetUnits: 4,
})

/* ------------------------------------------------------------------ */
/* 世界容器                                                           */
/* ------------------------------------------------------------------ */
const world = new THREE.Group()
scene.add(world)
const lineObjects = []
const routes = []
const dynamic = {
  entry: false, corridor: null, shared: false,
  cocreate: null, mirror: false, report: false,
}

function addLines(buf, opts = {}) {
  const geo = lineGeometry(buf)
  const mat = lineMaterial.clone()
  mat.uniforms.uGen = { value: 0 }
  mat.uniforms.uDim = { value: 0 }
  const obj = new THREE.LineSegments(geo, mat)
  obj.frustumCulled = false
  obj.userData.base = opts.base ?? 0
  obj.userData.span = opts.span ?? 0.2
  obj.userData.tag = opts.tag || ''
  // 记录该对象内部的生成顺序范围（归一化到 0..1），用于把窗口进度映射回来
  const ord = geo.getAttribute('aOrder')
  let lo = Infinity, hi = -Infinity
  for (let i = 0; i < ord.count; i++) {
    const v = ord.getX(i)
    if (v < lo) lo = v
    if (v > hi) hi = v
  }
  const range = Math.max(1e-6, hi - lo)
  for (let i = 0; i < ord.count; i++) {
    ord.setX(i, (ord.getX(i) - lo) / range)
  }
  ord.needsUpdate = true
  obj.userData.ordMin = 0
  obj.userData.ordMax = 1
  if (opts.local) obj.userData.local = { t: 0, span: opts.local }
  world.add(obj)
  lineObjects.push(obj)
  return obj
}

function addFills(fills) {
  ;(fills || []).forEach(f => {
    const color = (f && typeof f === 'object' && f.color !== undefined) ? f.color : 0x0c1714
    const geo = (f && typeof f === 'object' && f.geo) ? f.geo : f
    const mesh = new THREE.Mesh(geo, fillMaterial.clone())
    mesh.material.color.setHex(color)
    mesh.renderOrder = -2
    world.add(mesh)
  })
}

function removeByTag(prefix) {
  const doomed = lineObjects.filter(o => o.userData.tag.startsWith(prefix))
  doomed.forEach(o => {
    o.parent?.remove(o)
    o.geometry.dispose()
    o.material.dispose()
  })
  const keep = lineObjects.filter(o => !o.userData.tag.startsWith(prefix))
  lineObjects.length = 0
  lineObjects.push(...keep)
}

/* ------------------------------------------------------------------ */
/* 01 入口：航标 + 访客                                               */
/* ------------------------------------------------------------------ */
function buildEntry() {
  const buf = new LineBuf()
  const c = new THREE.Color(TEAL)
  const g = new THREE.Color(GOLD)
  const mastY = [0.0, 1.10, 1.72]
  for (let i = 0; i < 3; i++) {
    const w = 0.16 - i * 0.045
    buf.seg(0, mastY[i], -w, 0, mastY[i], w, i === 1 ? g : c,
      0.02 + i * 0.06, 0.02 + i * 0.06, i * 0.3)
  }
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2
    const r = 0.036 + 0.018 * Math.sin(i * 1.7)
    buf.seg(Math.cos(a) * r, 1.72 + Math.sin(a) * r, 0,
      Math.cos(a) * r * 1.25, 1.72 + Math.sin(a) * r * 1.25, 0, g, 0.14, 0.15, i * 0.2)
  }
  for (let i = 0; i < 30; i++) {
    const a0 = (i / 30) * Math.PI * 2, a1 = ((i + 1) / 30) * Math.PI * 2
    buf.seg(Math.cos(a0) * 0.62, 0.012, Math.sin(a0) * 0.62,
      Math.cos(a1) * 0.62, 0.012, Math.sin(a1) * 0.62, c, 0.0, 0.0, i * 0.11)
  }
  addLines(buf, { base: 0.00, span: 0.14, tag: 'entry-beacon' })

  const [lc, lb] = VISITOR_LIGHT[state.visitor.color] || VISITOR_LIGHT.tide
  const fig = buildFigure({
    x: 1.30, y: 0, z: 1.20, scale: 1, facing: -0.38,
    color: lc, accent: lb,
    hair: state.visitor.hair, outfit: state.visitor.outfit, mark: state.visitor.mark,
    gesture: 'reach', orderBase: 0.05, orderSpan: 0.14,
  })
  addLines(fig.buf, { base: 0.04, span: 0.18, tag: 'entry-figure' })
  addFills(fig.fills)
  dynamic.entry = true
}

/* ------------------------------------------------------------------ */
/* 03 生成长廊                                                        */
/* ------------------------------------------------------------------ */
const CLUES = {
  steady: {
    label: '平稳呼吸', hint: '节奏稳定 · 岸线平缓',
    seed: 21, style: 'calm', gesture: 'settle',
    reply: '岸边角色保持距离，等你先开口。',
  },
  wave: {
    label: '情绪起伏', hint: '强度有波动 · 岸线外探',
    seed: 58, style: 'angular', gesture: 'reach',
    reply: '岸线向外探出，角色朝你伸出了手。',
  },
  fold: {
    label: '收拢防御', hint: '向内收束 · 岸线收紧',
    seed: 93, style: 'open', gesture: 'listen',
    reply: '岸线向内收拢，另一侧的角色安静地听着。',
  },
}

function buildCorridor() {
  const clue = CLUES[state.clue] || CLUES.steady
  const cx = -2.4, cz = 0.6

  /* 长廊框架（静态，只建一次） */
  if (!dynamic.corridor) {
    const frame = new LineBuf()
    const c = new THREE.Color(TEAL)
    const g = new THREE.Color(GOLD)
    for (let side = -1; side <= 1; side += 2) {
      for (let i = 0; i < 34; i++) {
        const t = i / 34
        const z = 2.6 - t * 9.5
        const w = 1.55 - t * 1.05
        const y = 0.02 + t * 0.30
        const nx = cx + side * w + Math.sin(t * 5.2 + clue.seed) * 0.22
        const o = 0.26 + t * 0.12
        frame.seg(nx, y, z, nx + side * 0.02, y + 0.012, z - 0.28, c, o, o + 0.006, i * 0.13)
      }
    }
    for (let i = 0; i < 46; i++) {
      const t = i / 46
      const z = 3.0 - t * 10.4
      const o = 0.28 + t * 0.10
      frame.seg(cx + Math.sin(t * 3.1 + clue.seed) * 0.10, 0.015, z,
        cx + Math.sin((t + 0.02) * 3.1 + clue.seed) * 0.10, 0.015, z - 0.22,
        t > 0.85 ? g : c, o, o + 0.005, i * 0.09)
    }
    addLines(frame, { base: 0.26, span: 0.16, tag: 'corridor-frame' })
  }

  /* 岸线岛（随线索重建） */
  const island = buildIsland({
    cx, cz, radius: 2.30, seed: clue.seed, style: clue.style,
    gate: 0.25, teal: TEAL, gold: GOLD, detail: 68,
    orderBase: 0.38, orderSpan: 0.13,
  })
  addLines(island.buf, { base: 0.40, span: 0.16, tag: 'corridor-island', local: 1.9 })
  addFills(island.fills)

  /* 岸边角色（随线索重建，姿态随之改变） */
  const role = buildFigure({
    x: cx + 1.45, y: 0, z: cz - 0.60, scale: 0.92, facing: -2.55,
    color: TEAL, accent: GOLD, hair: 'long', outfit: 'cloak', mark: 'fold',
    gesture: clue.gesture, orderBase: 0.52, orderSpan: 0.11,
  })
  addLines(role.buf, { base: 0.50, span: 0.14, tag: 'corridor-role', local: 1.7 })
  addFills(role.fills)

  /* 可确认的线索：三条悬于走廊上方 */
  const clueBuf = new LineBuf()
  const active = ['steady', 'wave', 'fold'].indexOf(state.clue)
  ;['steady', 'wave', 'fold'].forEach((k, i) => {
    const on = i === active
    const col = on ? new THREE.Color(GOLD_BRIGHT) : new THREE.Color(TEAL)
    const y = 1.58 + i * 0.20
    const zc = cz - 1.20
    if (k === 'steady') {
      clueBuf.seg(cx - 0.95, y, zc, cx + 0.95, y, zc, col, 0.58, 0.60, i * 0.3)
    } else if (k === 'wave') {
      let prev = null
      for (let j = 0; j <= 12; j++) {
        const t = j / 12
        const p = [cx - 0.95 + t * 1.9, y + Math.sin(t * Math.PI * 2.2) * 0.11, zc]
        if (prev) clueBuf.seg(prev[0], prev[1], prev[2], p[0], p[1], p[2], col, 0.58, 0.59, i * 0.3)
        prev = p
      }
    } else {
      const pts = [[cx - 0.95, y, zc], [cx + 0.2, y - 0.09, zc], [cx + 0.95, y + 0.03, zc]]
      clueBuf.poly(pts, col, () => 0.58, i * 0.3)
    }
  })
  addLines(clueBuf, { base: 0.58, span: 0.10, tag: 'corridor-clue', local: 1.2 })
  dynamic.corridor = { clueKey: state.clue }
}

/* ------------------------------------------------------------------ */
/* 04 团体互动区                                                      */
/* ------------------------------------------------------------------ */
function buildShared() {
  const buf = new LineBuf()
  const c = new THREE.Color(TEAL)
  const g = new THREE.Color(GOLD)
  const cx = 0.6, cz = 0.2
  for (let r = 0; r < 3; r++) {
    const rad = 0.85 + r * 0.42
    for (let i = 0; i < 34; i++) {
      const a0 = (i / 34) * Math.PI * 2, a1 = ((i + 1) / 34) * Math.PI * 2
      const y = 0.56 + r * 0.008
      buf.seg(cx + Math.cos(a0) * rad, y, cz + Math.sin(a0) * rad,
        cx + Math.cos(a1) * rad, y, cz + Math.sin(a1) * rad,
        r === 1 ? g : c, 0.54 + r * 0.04, 0.54 + r * 0.04, i * 0.11)
    }
  }
  for (let i = 0; i < 3; i++) {
    let prev = null
    for (let j = 0; j <= 18; j++) {
      const a = (j / 18) * Math.PI * 2
      const rad = 0.22 + 0.10 * Math.sin(a * 3 + i)
      const p = [cx + Math.cos(a) * rad, 0.585, cz + Math.sin(a) * rad]
      if (prev) buf.seg(prev[0], prev[1], prev[2], p[0], p[1], p[2], i === 1 ? g : c, 0.62, 0.63, j * 0.15)
      prev = p
    }
  }
  addLines(buf, { base: 0.54, span: 0.14, tag: 'shared-table' })

  const seats = [
    { a: 0.5, g: 'listen' },
    { a: 2.6, g: 'reach' },
    { a: 4.7, g: 'settle' },
  ]
  seats.forEach((s, i) => {
    const r = 1.95
    const px = cx + Math.cos(s.a) * r
    const pz = cz + Math.sin(s.a) * r
    const fig = buildFigure({
      x: px, y: 0, z: pz, scale: 0.95,
      facing: Math.atan2(cz - pz, cx - px),
      color: i === 1 ? GOLD : TEAL,
      accent: i === 1 ? GOLD_BRIGHT : TEAL_BRIGHT,
      hair: i === 0 ? 'short' : 'long',
      outfit: i === 0 ? 'coat' : 'cloak',
      mark: i === 0 ? 'star' : 'fold',
      gesture: s.g, orderBase: 0.64, orderSpan: 0.12,
    })
    addLines(fig.buf, { base: 0.64, span: 0.14, tag: 'shared-figure' })
    addFills(fig.fills)
  })
  dynamic.shared = true
}

/* ------------------------------------------------------------------ */
/* 05 个人岛                                                          */
/* ------------------------------------------------------------------ */
function buildPersonal() {
  const island = buildIsland({
    cx: 6.0, cz: 1.4, radius: 1.72, seed: 41, style: 'calm',
    gate: Math.PI * 1.15, teal: TEAL, gold: GOLD, detail: 60,
    orderBase: 0.72, orderSpan: 0.11,
  })
  addLines(island.buf, { base: 0.70, span: 0.14, tag: 'personal-island' })
  addFills(island.fills)

  const buf = new LineBuf()
  const c = new THREE.Color(TEAL)
  const g = new THREE.Color(GOLD)
  const hx = 7.5, hz = 2.4
  for (let i = 0; i < 6; i++) {
    const a0 = (i / 6) * Math.PI * 2, a1 = ((i + 1) / 6) * Math.PI * 2
    buf.seg(hx + Math.cos(a0) * 0.52, 0.02, hz + Math.sin(a0) * 0.52,
      hx + Math.cos(a1) * 0.52, 0.02, hz + Math.sin(a1) * 0.52, c, 0.74, 0.75, i * 0.2)
  }
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2
    buf.seg(hx + Math.cos(a) * 0.52, 0.02, hz + Math.sin(a) * 0.52,
      hx + Math.cos(a) * 0.52, 0.86, hz + Math.sin(a) * 0.52, c, 0.78, 0.82, i * 0.25)
  }
  for (let i = 0; i < 22; i++) {
    const a0 = (i / 22) * Math.PI * 2, a1 = ((i + 1) / 22) * Math.PI * 2
    buf.seg(hx + Math.cos(a0) * 0.52, 0.88, hz + Math.sin(a0) * 0.52,
      hx + Math.cos(a1) * 0.52, 0.88, hz + Math.sin(a1) * 0.52, g, 0.82, 0.83, i * 0.14)
  }
  addLines(buf, { base: 0.74, span: 0.12, tag: 'personal-hut' })

  const [lc, lb] = VISITOR_LIGHT[state.visitor.color] || VISITOR_LIGHT.tide
  const fig = buildFigure({
    x: 5.95, y: 0, z: 1.5, scale: 0.98, facing: 1.9,
    color: lc, accent: lb,
    hair: state.visitor.hair, outfit: state.visitor.outfit, mark: state.visitor.mark,
    gesture: 'settle', orderBase: 0.82, orderSpan: 0.10,
  })
  addLines(fig.buf, { base: 0.80, span: 0.12, tag: 'personal-figure' })
  addFills(fig.fills)
}

/* ------------------------------------------------------------------ */
/* 06 镜映：与入口完全同一位人物                                     */
/* ------------------------------------------------------------------ */
function buildMirror() {
  const buf = new LineBuf()
  const c = new THREE.Color(TEAL)
  const g = new THREE.Color(GOLD)
  const mx = 10.4, mz = 0.2
  const w = 1.05, h = 1.55, y0 = 0.05
  const corners = [[-w, y0], [w, y0], [w, y0 + h], [-w, y0 + h]]
  for (let i = 0; i < 4; i++) {
    const a = corners[i], b = corners[(i + 1) % 4]
    buf.seg(mx + a[0], a[1], mz, mx + b[0], b[1], mz, i % 2 === 0 ? g : c, 0.82, 0.84, i * 0.3)
  }
  for (let i = 0; i < 4; i++) {
    const a = corners[i], b = corners[(i + 1) % 4]
    buf.seg(mx + a[0] * 0.86, a[1] * 0.94 + 0.06, mz + 0.07,
      mx + b[0] * 0.86, b[1] * 0.94 + 0.06, mz + 0.07, c, 0.86, 0.87, i * 0.4)
  }
  addLines(buf, { base: 0.82, span: 0.08, tag: 'mirror-frame' })

  const [lc, lb] = VISITOR_LIGHT[state.visitor.color] || VISITOR_LIGHT.tide
  const fig = buildFigure({
    x: mx, y: 0.06, z: mz - 0.02, scale: 1, facing: Math.PI,
    color: lc, accent: lb,
    hair: state.visitor.hair, outfit: state.visitor.outfit, mark: state.visitor.mark,
    gesture: 'reach', mirror: true, orderBase: 0.86, orderSpan: 0.09,
  })
  addLines(fig.buf, { base: 0.86, span: 0.08, tag: 'mirror-figure' })
  addFills(fig.fills)
  dynamic.mirror = true
}

/* ------------------------------------------------------------------ */
/* 07 共创空间                                                        */
/* ------------------------------------------------------------------ */
function buildCocreate() {
  const cx = 14.2, cz = 1.6
  ;[{ dx: -1, seed: 77 }, { dx: 1, seed: 88 }].forEach((cfg, i) => {
    const isle = buildIsland({
      cx: cx + cfg.dx * 2.6, cz, radius: 1.32, seed: cfg.seed,
      style: i === 0 ? 'calm' : 'angular',
      gate: cfg.dx > 0 ? Math.PI : 0, teal: TEAL, gold: GOLD, detail: 54,
      orderBase: 0.86, orderSpan: 0.08,
    })
    addLines(isle.buf, { base: 0.84, span: 0.10, tag: 'cocreate-isle' })
    addFills(isle.fills)
  })
  ;[{ x: cx - 2.6, g: 'reach' }, { x: cx + 2.6, g: 'listen' }].forEach((cfg, i) => {
    const fig = buildFigure({
      x: cfg.x, y: 0, z: cz + 0.30, scale: 0.95,
      facing: i === 0 ? -Math.PI / 2 : Math.PI / 2,
      color: i === 0 ? TEAL : GOLD,
      accent: i === 0 ? TEAL_BRIGHT : GOLD_BRIGHT,
      hair: 'long', outfit: 'cloak', mark: 'fold', gesture: cfg.g,
      orderBase: 0.88, orderSpan: 0.09,
    })
    addLines(fig.buf, { base: 0.88, span: 0.10, tag: 'cocreate-figure' })
    addFills(fig.fills)
  })
  dynamic.cocreate = { cx, cz, linkObj: null, label: '' }
  updateCocreateLink()
}

function updateCocreateLink() {
  if (!dynamic.cocreate) return
  const { cx, cz } = dynamic.cocreate
  const gap = 2.6 * state.distance
  const buf = new LineBuf()
  const c = new THREE.Color(TEAL)
  const g = new THREE.Color(GOLD)
  const x0 = cx - gap, x1 = cx + gap
  const N = 26
  for (let i = 0; i < N; i++) {
    const t = i / N
    const ax = x0 + (x1 - x0) * t
    const bx = x0 + (x1 - x0) * (t + 1 / N)
    const ya = 0.20 + Math.sin(t * Math.PI * 2.4) * 0.06 * state.distance
    const yb = 0.20 + Math.sin((t + 1 / N) * Math.PI * 2.4) * 0.06 * state.distance
    buf.seg(ax, ya, cz, bx, yb, cz, i % 6 === 0 ? g : c, 0.90, 0.91, i * 0.1)
  }
  const label = state.distance < 0.62 ? '靠近 · 关系紧密'
    : state.distance < 0.95 ? '适中 · 可以对话'
      : '移远 · 各自保留'
  const cAcc = new THREE.Color(state.distance < 0.95 ? GOLD : TEAL)
  buf.seg(cx - 0.42, 0.40, cz, cx + 0.42, 0.40, cz, cAcc, 0.92, 0.93, 0.2)
  buf.seg(cx, 0.40, cz, cx, 0.58, cz, cAcc, 0.93, 0.94, 0.25)
  if (state.distance < 0.62) {
    for (let i = 0; i < 3; i++) {
      const r = 0.16 + i * 0.10
      for (let k = 0; k < 12; k++) {
        const a0 = (k / 12) * Math.PI * 2, a1 = ((k + 1) / 12) * Math.PI * 2
        buf.seg(cx + Math.cos(a0) * r, 0.20 + r, cz + Math.sin(a0) * r,
          cx + Math.cos(a1) * r, 0.20 + r, cz + Math.sin(a1) * r, g, 0.94, 0.95, k * 0.1)
      }
    }
  }
  if (dynamic.cocreate.linkObj) {
    dynamic.cocreate.linkObj.parent?.remove(dynamic.cocreate.linkObj)
    dynamic.cocreate.linkObj.geometry.dispose()
    dynamic.cocreate.linkObj.material.dispose()
    const i = lineObjects.indexOf(dynamic.cocreate.linkObj)
    if (i >= 0) lineObjects.splice(i, 1)
  }
  const obj = addLines(buf, { base: 0.90, span: 0.06, tag: 'cocreate-link' })
  dynamic.cocreate.linkObj = obj
  dynamic.cocreate.label = label
}

/* ------------------------------------------------------------------ */
/* 08 报告数字墙                                                      */
/* ------------------------------------------------------------------ */
let reportMesh = null
function buildReport() {
  const tex = buildReportTexture(REPORT_LAYERS)
  const geo = new THREE.PlaneGeometry(4.6, 2.9)
  const mat = new THREE.MeshBasicMaterial({
    map: tex, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide,
  })
  reportMesh = new THREE.Mesh(geo, mat)
  reportMesh.position.set(18.8, 1.62, -0.4)
  reportMesh.rotation.y = -0.12
  reportMesh.renderOrder = 1
  world.add(reportMesh)

  const buf = new LineBuf()
  const c = new THREE.Color(TEAL)
  const g = new THREE.Color(GOLD)
  const w = 2.45, h = 1.62, y0 = 0.26
  const corners = [[-w, y0], [w, y0], [w, y0 + h], [-w, y0 + h]]
  for (let i = 0; i < 4; i++) {
    const a = corners[i], b = corners[(i + 1) % 4]
    buf.seg(18.8 + a[0], a[1], -0.36, 18.8 + b[0], b[1], -0.36,
      i % 2 === 0 ? g : c, 0.90, 0.92, i * 0.3)
  }
  REPORT_LAYERS.forEach((layer, i) => {
    const y = y0 + 0.30 + i * 0.32
    for (let k = 0; k < 40; k++) {
      const x = 18.8 - 2.2 + k * 0.11
      buf.seg(x, y, -0.36, x + 0.06, y, -0.36, new THREE.Color(layer.color),
        0.93 + i * 0.015, 0.93 + i * 0.015, k * 0.1)
    }
  })
  addLines(buf, { base: 0.90, span: 0.08, tag: 'report-frame' })
  dynamic.report = true
}

function updateReportHighlight() {
  if (!reportMesh) return
  const layer = REPORT_LAYERS.find(l => l.id === state.reportLayer) || REPORT_LAYERS[0]
  const tex = buildReportTexture(REPORT_LAYERS.map(l => ({
    ...l, alpha: l.id === layer.id ? 1 : 0.22,
  })))
  reportMesh.material.map?.dispose()
  reportMesh.material.map = tex
  reportMesh.material.needsUpdate = true
}

/* ------------------------------------------------------------------ */
/* 航线                                                                */
/* ------------------------------------------------------------------ */
const routeHitboxes = []
function buildRoutes() {
  const defs = [
    [[0, 0.30, 1.2], [-1.3, 0.32, 0.9], [-2.4, 0.30, 0.6]],
    [[-2.4, 0.30, 0.6], [-1.2, 0.34, 0.7], [0.6, 0.42, 0.4]],
    [[0.6, 0.42, 0.4], [3.0, 0.36, 1.0], [6.0, 0.28, 1.4]],
    [[6.0, 0.28, 1.4], [8.4, 0.32, 0.8], [10.4, 0.34, 0.2]],
    [[10.4, 0.34, 0.2], [12.2, 0.36, 1.0], [14.2, 0.34, 1.6]],
    [[14.2, 0.34, 1.6], [16.6, 0.36, 0.8], [18.8, 0.40, 0.0]],
  ]
  defs.forEach((pts, i) => {
    const r = buildRoute(pts, { teal: TEAL, gold: GOLD, samples: 60, seed: i * 3 + 1 })
    addLines(r.buf, { base: 0.08, span: 0.20, tag: 'route' })
    routes.push(r)
    const curve = new THREE.CatmullRomCurve3(r.points.map(p => new THREE.Vector3(p.x, p.y, p.z)))
    const mesh = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 40, 0.11, 6, false),
      new THREE.MeshBasicMaterial({ visible: false })
    )
    world.add(mesh)
    routeHitboxes.push({ mesh, index: i })
  })
}

/* ------------------------------------------------------------------ */
/* 粒子                                                               */
/* ------------------------------------------------------------------ */
let particles = null
function buildParticleField() {
  particles = buildParticles(routes, { count: 210, seed: 17 })
  world.add(particles.points)
}

/* ------------------------------------------------------------------ */
/* 生成进度                                                           */
/* ------------------------------------------------------------------ */
function applyGen(dt) {
  const g = state.genTime
  const now = performance.now() / 1000
  for (const o of lineObjects) {
    const mat = o.material
    // 该对象在全局进度中的时间窗口：从 base 到 base+span
    const base = o.userData.base ?? 0
    const span = Math.max(0.001, o.userData.span ?? 0.2)
    const t = (g - base) / span
    if (o.userData.local) {
      // 局部生长：交互后重建的元素自己从头长起
      o.userData.local.t += dt
      const lt = Math.min(1, o.userData.local.t / o.userData.local.span)
      mat.uniforms.uGen.value = o.userData.ordMin + (o.userData.ordMax - o.userData.ordMin) * lt
    } else if (t <= 0) {
      mat.uniforms.uGen.value = -1
    } else if (t >= 1) {
      mat.uniforms.uGen.value = 2
    } else {
      // 把窗口内的进度映射到该对象内部的顺序区间
      mat.uniforms.uGen.value = o.userData.ordMin + (o.userData.ordMax - o.userData.ordMin) * t
    }
    mat.uniforms.uTime.value = now
  }
}

/* ------------------------------------------------------------------ */
/* 界面引用                                                           */
/* ------------------------------------------------------------------ */
const chapterEl = {
  kicker: document.getElementById('chKicker'),
  title: document.getElementById('chTitle'),
  desc: document.getElementById('chDesc'),
  box: document.getElementById('chapter'),
}
const progFill = document.getElementById('progFill')
const progDot = document.getElementById('progDot')
const introCopy = document.getElementById('introCopy')
const hoverHint = document.getElementById('hoverHint')
const soundHint = document.getElementById('soundHint')
const viewToggle = document.getElementById('viewToggle')

const camTarget = {
  pos: new THREE.Vector3(...CHAPTERS[0].camera.pos),
  look: new THREE.Vector3(...CHAPTERS[0].camera.look),
}
const camLook = new THREE.Vector3(...CHAPTERS[0].camera.look)
let camFovTarget = CHAPTERS[0].camera.fov

/* ------------------------------------------------------------------ */
/* 章节推进                                                           */
/* ------------------------------------------------------------------ */
function setChapter(idx, opts = {}) {
  if (idx === state.chapter) return
  const ch = CHAPTERS[idx]
  if (!ch) return
  state.chapter = idx

  camTarget.pos.set(...ch.camera.pos)
  camTarget.look.set(...ch.camera.look)
  camLook.set(...ch.camera.look)
  camFovTarget = ch.camera.fov

  chapterEl.kicker.textContent = ch.kicker
  chapterEl.title.textContent = ch.title
  chapterEl.desc.textContent = ch.desc
  chapterEl.box.classList.add('show')

  state.genTarget = ch.gen
  // 世界已经生成的进度不会倒退；未到达的部分继续生长
  if (state.genTime < state.genTarget - 0.001) {
    // 保持连续生长
  }

  const p = (idx + 1) / CHAPTERS.length
  progFill.style.width = (p * 100).toFixed(1) + '%'
  progDot.style.left = (p * 100).toFixed(1) + '%'

  renderToolPanel()
  if (!opts.silent) playVoice(ch.audio)
}

/* ------------------------------------------------------------------ */
/* 旁白：全部来自 <audio> 文件，绝不使用浏览器语音合成                 */
/* ------------------------------------------------------------------ */
function playVoice(file) {
  stopVoice()
  const token = ++state.voiceToken
  const a = new Audio(VOICE_BASE + file)
  a.preload = 'auto'
  a.volume = 0
  state.voice = a
  const start = performance.now()
  const rise = () => {
    if (state.voiceToken !== token) return
    a.volume = Math.min(0.92, 0.92 * (performance.now() - start) / 520)
    if (a.volume < 0.92) requestAnimationFrame(rise)
  }
  a.play().then(() => requestAnimationFrame(rise)).catch(() => {})
  a.onended = () => {
    if (state.voiceToken !== token) return
    state.voice = null
    advanceChapter()
  }
}

function stopVoice() {
  state.voiceToken++
  if (state.voice) {
    state.voice.pause()
    state.voice.onended = null
    state.voice = null
  }
}

let advanceTimer = 0
function advanceChapter() {
  if (state.free) return
  clearTimeout(advanceTimer)
  advanceTimer = setTimeout(() => {
    if (state.chapter < CHAPTERS.length - 1) {
      setChapter(state.chapter + 1)
    } else {
      state.free = true
      viewToggle.classList.add('show')
      viewToggle.textContent = '自由观察'
      document.getElementById('afterword')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, 1600)
}

/* ------------------------------------------------------------------ */
/* 交互：靠近航线显示连接场景                                         */
/* ------------------------------------------------------------------ */
const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()

const ROUTE_INFO = [
  { kicker: '01 — 02 · 入口与产品', text: '先确定形象与授权边界，哪些信息可以被使用。' },
  { kicker: '02 — 03 · 生成长廊', text: '确认的线索驱动岸线与角色的回应。' },
  { kicker: '03 — 04 · 团体互动区', text: '同一张航图，各自看见的东西都可以被说出来。' },
  { kicker: '04 — 05 · 个人岛', text: '走近、停留，或换一条安静的路线。' },
  { kicker: '05 — 06 · 镜映', text: '同一段旅程，从另一个角度看。' },
  { kicker: '06 — 07 · 共创空间', text: '两座岛的距离，代表愿意靠近的程度。' },
]

function onPointerMove(e) {
  if (!state.started || !routeHitboxes.length) return
  pointer.x = (e.clientX / innerWidth) * 2 - 1
  pointer.y = -(e.clientY / innerHeight) * 2 + 1
  raycaster.setFromCamera(pointer, camera)
  const hits = raycaster.intersectObjects(routeHitboxes.map(h => h.mesh), false)
  if (hits.length) {
    const idx = routeHitboxes.find(h => h.mesh === hits[0].object).index
    state.hovered = idx
    hoverHint.innerHTML = `<small>${ROUTE_INFO[idx].kicker}</small>${ROUTE_INFO[idx].text}`
    hoverHint.style.left = Math.min(innerWidth - 250, e.clientX + 18) + 'px'
    hoverHint.style.top = Math.min(innerHeight - 120, e.clientY + 18) + 'px'
    hoverHint.classList.add('show')
  } else {
    state.hovered = null
    hoverHint.classList.remove('show')
  }
}

/* ------------------------------------------------------------------ */
/* 交互：03 确认线索                                                  */
/* ------------------------------------------------------------------ */
function rebuildCorridor() {
  removeByTag('corridor-island')
  removeByTag('corridor-role')
  removeByTag('corridor-clue')
  buildCorridor()
}

function setClue(key) {
  if (state.clue === key || !CLUES[key]) return
  state.clueHistory.push(state.clue)
  state.clue = key
  rebuildCorridor()
  showFeedback(`确认线索 → ${CLUES[key].label}｜${CLUES[key].reply}`, 'clue')
}

function undoClue() {
  if (!state.clueHistory.length) return
  state.clue = state.clueHistory.pop()
  rebuildCorridor()
  showFeedback(`已撤回线索变更 → ${CLUES[state.clue].label}`, 'undo')
}

/* ------------------------------------------------------------------ */
/* 交互：07 共创距离                                                  */
/* ------------------------------------------------------------------ */
function setDistance(d) {
  const v = Math.max(0.45, Math.min(1.6, d))
  if (Math.abs(v - state.distance) < 0.001) return
  state.distanceHistory.push(state.distance)
  state.distance = v
  updateCocreateLink()
  showFeedback(`两岛距离 ${(v * 100).toFixed(0)}%｜${dynamic.cocreate?.label || ''}`, 'distance')
}

function undoDistance() {
  if (!state.distanceHistory.length) return
  state.distance = state.distanceHistory.pop()
  updateCocreateLink()
  showFeedback(`已撤回距离调整 → ${(state.distance * 100).toFixed(0)}%｜${dynamic.cocreate?.label || ''}`, 'undo')
}

/* ------------------------------------------------------------------ */
/* 反馈条                                                             */
/* ------------------------------------------------------------------ */
let feedbackEl = null
let feedbackTimer = 0
function showFeedback(text, kind = '') {
  if (!feedbackEl) {
    feedbackEl = document.createElement('div')
    feedbackEl.className = 'feedback'
    feedbackEl.setAttribute('role', 'status')
    document.body.appendChild(feedbackEl)
  }
  feedbackEl.textContent = text
  feedbackEl.dataset.kind = kind
  feedbackEl.classList.add('show')
  clearTimeout(feedbackTimer)
  feedbackTimer = setTimeout(() => feedbackEl.classList.remove('show'), 4600)
}

/* ------------------------------------------------------------------ */
/* 章节工具面板                                                       */
/* ------------------------------------------------------------------ */
const panel = document.createElement('div')
panel.className = 'tool-panel collapsed'
panel.setAttribute('role', 'group')
panel.setAttribute('aria-label', '场景操作')
panel.innerHTML = `
  <div class="tp-head"><span id="tpTitle">操作</span><button type="button" id="tpUndo">撤回</button><button type="button" class="tp-toggle" id="tpToggle" aria-label="展开或收起操作面板" aria-expanded="false">▾</button></div>
  <div class="tp-body" id="tpBody"></div>`
document.body.appendChild(panel)
const tpTitle = panel.querySelector('#tpTitle')
const tpBody = panel.querySelector('#tpBody')
const tpUndo = panel.querySelector('#tpUndo')
const tpToggle = panel.querySelector('#tpToggle')

tpToggle.addEventListener('click', () => {
  const collapsed = panel.classList.toggle('collapsed')
  tpToggle.setAttribute('aria-expanded', String(!collapsed))
})
panel.querySelector('.tp-head').addEventListener('click', e => {
  if (e.target === tpUndo || e.target === tpToggle) return
  const collapsed = panel.classList.toggle('collapsed')
  tpToggle.setAttribute('aria-expanded', String(!collapsed))
})

tpUndo.addEventListener('click', () => {
  if (state.chapter === 2) undoClue()
  else if (state.chapter === 6) undoDistance()
})

function renderToolPanel() {
  const idx = state.chapter
  let title = ''
  let html = ''
  let undoable = false
  if (idx === 2) {
    title = '确认线索 · 03 生成长廊'
    html = ['steady', 'wave', 'fold'].map(k => {
      const c = CLUES[k]
      const on = state.clue === k
      return `<button type="button" class="tp-btn${on ? ' active' : ''}" data-clue="${k}"><b>${c.label}</b><span>${c.hint}</span></button>`
    }).join('')
    undoable = state.clueHistory.length > 0
  } else if (idx === 6) {
    title = '关系距离 · 07 共创空间'
    html = `
      <div class="tp-slider">
        <label for="tpRange">两岛距离</label>
        <input id="tpRange" type="range" min="45" max="160" value="${Math.round(state.distance * 100)}" step="1">
        <output id="tpOut">${Math.round(state.distance * 100)}%</output>
      </div>
      <p class="tp-note" id="tpRelation">${dynamic.cocreate?.label || ''}</p>
      <p class="tp-note">靠近或移远会立刻改变连线与关系标签；撤回可回到上一次距离。</p>`
    undoable = state.distanceHistory.length > 0
  } else if (idx === 7) {
    title = '记录来源 · 08 报告数字墙'
    html = REPORT_LAYERS.map(l => {
      const on = state.reportLayer === l.id
      return `<button type="button" class="tp-btn tp-layer${on ? ' active' : ''}" data-layer="${l.id}"><b>${l.label}</b><span>${l.note}</span></button>`
    }).join('')
  }
  tpTitle.textContent = title
  tpBody.innerHTML = html
  tpUndo.style.display = undoable ? '' : 'none'
  panel.classList.toggle('show', !!html)
  // 需要操作的章节自动展开，其余保持收起以免遮挡场景
  const needsInteraction = idx === 2 || idx === 6 || idx === 7
  if (html) panel.classList.toggle('collapsed', !needsInteraction)
  tpToggle.setAttribute('aria-expanded', String(!panel.classList.contains('collapsed')))

  panel.querySelectorAll('[data-clue]').forEach(b => b.addEventListener('click', () => {
    setClue(b.dataset.clue)
    renderToolPanel()
  }))
  const range = panel.querySelector('#tpRange')
  if (range) {
    range.addEventListener('input', e => {
      setDistance(+e.target.value / 100)
      const out = panel.querySelector('#tpOut')
      if (out) out.textContent = `${e.target.value}%`
      const rel = panel.querySelector('#tpRelation')
      if (rel) rel.textContent = dynamic.cocreate?.label || ''
    })
    range.addEventListener('change', () => renderToolPanel())
  }
  panel.querySelectorAll('[data-layer]').forEach(b => b.addEventListener('click', () => {
    state.reportLayer = b.dataset.layer
    updateReportHighlight()
    renderToolPanel()
  }))
}

/* ------------------------------------------------------------------ */
/* 循环                                                               */
/* ------------------------------------------------------------------ */
const clock = new THREE.Clock()
let running = true

function tick() {
  if (!running) return
  requestAnimationFrame(tick)
  const dt = Math.min(0.05, clock.getDelta())
  const time = clock.elapsedTime

  if (state.genTime < state.genTarget) {
    state.genTime = Math.min(state.genTarget, state.genTime + dt * 0.42)
  }
  applyGen(dt)

  const ease = 1 - Math.pow(0.0012, dt)
  camera.position.lerp(camTarget.pos, ease * 0.85)
  camLook.lerp(camTarget.look, ease * 0.85)
  camera.lookAt(camLook)
  if (Math.abs(camera.fov - camFovTarget) > 0.01) {
    camera.fov += (camFovTarget - camera.fov) * ease * 0.8
    camera.updateProjectionMatrix()
  }

  particles?.update(dt, time)

  const b = 0.86 + 0.14 * Math.sin(time * 0.7)
  coreLight.intensity = (state.chapter >= 0 ? 4.5 : 0) * b
  rimLight.intensity = (state.chapter >= 2 ? 3.2 : 0) * b
  fillLight.intensity = (state.chapter >= 3 ? 2.6 : 0) * b
  reportLight.intensity = (state.chapter >= 7 ? 3.4 : 0) * b

  if (reportMesh) {
    const target = state.chapter >= 7 ? 0.94 : 0
    reportMesh.material.opacity += (target - reportMesh.material.opacity) * Math.min(1, dt * 1.6)
  }

  composer.render()
}

function onResize() {
  camera.aspect = innerWidth / innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(innerWidth, innerHeight)
  composer.setSize(innerWidth, innerHeight)
  bloom.setSize(innerWidth, innerHeight)
}
addEventListener('resize', onResize)

/* ------------------------------------------------------------------ */
/* 访客身份：与首页同一位                                             */
/* ------------------------------------------------------------------ */
function loadVisitor() {
  try {
    const saved = JSON.parse(localStorage.getItem('genisland-avatar-v1') || 'null')
    if (saved && typeof saved === 'object') {
      const allowed = {
        outfit: ['coat', 'cloak', 'dress'], hair: ['short', 'long'],
        color: ['tide', 'dawn', 'violet'], mark: ['wave', 'star', 'fold'],
        stance: ['observe', 'speak', 'near'], direction: ['express', 'boundary', 'connect'],
      }
      for (const k of Object.keys(allowed)) {
        if (allowed[k].includes(saved[k])) state.visitor[k] = saved[k]
      }
      if (typeof saved.name === 'string') {
        state.visitor.name = saved.name.slice(0, 12).trim() || state.visitor.name
      }
    }
  } catch (_) {}
}
loadVisitor()

/* ------------------------------------------------------------------ */
/* 构建整个世界                                                       */
/* ------------------------------------------------------------------ */
buildEntry()
buildRoutes()
buildParticleField()
buildCorridor()
buildShared()
buildPersonal()
buildMirror()
buildCocreate()
buildReport()

/* ------------------------------------------------------------------ */
/* 启动                                                               */
/* ------------------------------------------------------------------ */
const enterBtn = document.getElementById('enterBtn')

function begin() {
  if (state.started) return
  state.started = true
  introCopy.classList.add('hidden')
  soundHint.classList.remove('show')
  try {
    const AC = window.AudioContext || window.webkitAudioContext
    if (AC) { const c = new AC(); c.resume?.(); setTimeout(() => c.close?.(), 800) }
  } catch (_) {}
  window.parent?.postMessage({ type: 'genesis-voice', state: 'start' }, '*')
  setChapter(0)
}

enterBtn.addEventListener('click', begin)
canvas.addEventListener('pointerdown', () => { if (!state.started) begin() })
addEventListener('pointermove', onPointerMove)
addEventListener('keydown', e => {
  if (!state.started) return
  if (e.key === 'ArrowRight') {
    stopVoice()
    if (state.chapter < CHAPTERS.length - 1) setChapter(state.chapter + 1)
  }
  if (e.key === 'ArrowLeft' && state.chapter > 0) {
    stopVoice()
    setChapter(state.chapter - 1)
  }
  if (e.key === 'Escape') {
    state.free = true
    viewToggle.classList.add('show')
  }
})

viewToggle.addEventListener('click', () => {
  state.free = !state.free
  viewToggle.textContent = state.free ? '跟随动线' : '自由观察'
  if (!state.free) viewToggle.classList.remove('show')
})

document.addEventListener('visibilitychange', () => {
  if (document.hidden) { running = false; stopVoice() }
  else { running = true; clock.getDelta(); tick() }
})

window.addEventListener('message', e => {
  if (e.data?.type === 'genesis-visible') {
    running = true
    clock.getDelta()
    tick()
    if (state.started && !state.free && !state.voice) advanceChapter()
  }
  if (e.data?.type === 'genesis-hidden') {
    running = false
    stopVoice()
  }
})

tick()

/* 调试钩子 */
window.__genesis = {
  get chapter() { return state.chapter },
  get clue() { return state.clue },
  get distance() { return state.distance },
  get voice() { return state.voice?.src || '' },
  get gen() { return state.genTime },
  get lineCount() { return lineObjects.length },
  get visitor() { return { ...state.visitor } },
  get cam() { return { p: camera.position.toArray().map(n => +n.toFixed(2)), look: camLook.toArray().map(n => +n.toFixed(2)), fov: +camera.fov.toFixed(1) } },
  get bounds() {
    const box = new THREE.Box3()
    const v = new THREE.Vector3()
    let min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity]
    for (const o of lineObjects) {
      const pos = o.geometry.getAttribute('position')
      for (let i = 0; i < pos.count; i += 7) {
        v.fromBufferAttribute(pos, i)
        min = [Math.min(min[0], v.x), Math.min(min[1], v.y), Math.min(min[2], v.z)]
        max = [Math.max(max[0], v.x), Math.max(max[1], v.y), Math.max(max[2], v.z)]
      }
    }
    void box
    return { min: min.map(n => +n.toFixed(2)), max: max.map(n => +n.toFixed(2)) }
  },
  get visible() {
    // 每个对象在相机视锥内且有可见像素的比例估算
    const frustum = new THREE.Frustum().setFromProjectionMatrix(
      new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse))
    return lineObjects.map(o => ({
      tag: o.userData.tag,
      inView: frustum.intersectsObject(o),
      uGen: +o.material.uniforms.uGen.value.toFixed(3),
      matVisible: o.material.visible,
      opacity: o.material.uniforms.uGen.value > 0,
    }))
  },
  get objects() {
    return lineObjects.map(o => ({
      tag: o.userData.tag,
      n: o.geometry.getAttribute('position').count / 2,
      min: +o.userData.ordMin?.toFixed(3),
      max: +o.userData.ordMax?.toFixed(3),
      uGen: +o.material.uniforms.uGen.value.toFixed(3),
      visible: o.visible,
    }))
  },
  /** 几何签名：用来验证同一空间拓扑下不同线索产生了不同的岸线与角色 */
  get signature() {
    const out = {}
    for (const o of lineObjects) {
      const pos = o.geometry.getAttribute('position')
      let h = 0
      for (let i = 0; i < pos.count; i += 3) {
        h = (h * 31 + Math.round(pos.getX(i) * 1000) + Math.round(pos.getY(i) * 1000) * 7 + Math.round(pos.getZ(i) * 1000) * 13) % 2147483647
      }
      out[o.userData.tag] = { n: pos.count / 2, hash: h }
    }
    return out
  },
  goto(i) { stopVoice(); setChapter(i) },
  setClue, setDistance, undoDistance, undoClue,
  begin,
}
