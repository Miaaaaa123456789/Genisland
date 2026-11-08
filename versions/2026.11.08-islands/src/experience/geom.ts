/**
 * 版本: 2026.11.08-islands
 * 文件来源: 梓笙园动线网页工作区 /workspace/src/experience/geom.ts
 * 文件内容: 几何工具。共享方体、圆角盒、坡道、路径带、丝带，以及岛屿（islandGeo）和台地岛（landGeo）。
 * 说明: 本文件是该版本的源码存档，不替代仓库根目录 index.html 与 atlas/ 静态入口。
 */
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

const geos = new Set<THREE.BufferGeometry>();
const mats = new Set<THREE.Material>();
const textures = new Set<THREE.Texture>();
const boxCache = new Map<string, THREE.BoxGeometry>();
const roundCache = new Map<string, RoundedBoxGeometry>();

export function trackGeo<T extends THREE.BufferGeometry>(g: T): T {
  geos.add(g);
  return g;
}

export function trackMat<T extends THREE.Material>(m: T): T {
  mats.add(m);
  return m;
}

export function trackTex<T extends THREE.Texture>(t: T): T {
  textures.add(t);
  return t;
}

export function disposeAssets() {
  geos.forEach((g) => g.dispose());
  mats.forEach((m) => m.dispose());
  textures.forEach((t) => t.dispose());
  geos.clear();
  mats.clear();
  textures.clear();
  boxCache.clear();
  roundCache.clear();
}

export function box(w: number, h: number, d: number) {
  const k = `${w}|${h}|${d}`;
  let g = boxCache.get(k);
  if (!g) {
    g = trackGeo(new THREE.BoxGeometry(w, h, d));
    boxCache.set(k, g);
  }
  return g;
}

export function rbox(w: number, h: number, d: number, r = 0.04, s = 2) {
  const k = `${w}|${h}|${d}|${r}|${s}`;
  let g = roundCache.get(k);
  if (!g) {
    const rad = Math.min(r, w / 2 - 0.001, h / 2 - 0.001, d / 2 - 0.001);
    g = trackGeo(new RoundedBoxGeometry(w, h, d, s, Math.max(0.001, rad)));
    roundCache.set(k, g);
  }
  return g;
}

type PutOpts = {
  rx?: number;
  ry?: number;
  rz?: number;
  sx?: number;
  sy?: number;
  sz?: number;
  cast?: boolean;
  receive?: boolean;
};

export function M(
  parent: THREE.Object3D,
  geo: THREE.BufferGeometry,
  mat: THREE.Material,
  x: number,
  y: number,
  z: number,
  opts: PutOpts = {},
) {
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(x, y, z);
  if (opts.rx) mesh.rotation.x = opts.rx;
  if (opts.ry) mesh.rotation.y = opts.ry;
  if (opts.rz) mesh.rotation.z = opts.rz;
  if (opts.sx || opts.sy || opts.sz) {
    mesh.scale.set(opts.sx ?? 1, opts.sy ?? 1, opts.sz ?? 1);
  }
  mesh.castShadow = opts.cast ?? false;
  mesh.receiveShadow = opts.receive ?? false;
  parent.add(mesh);
  return mesh;
}

export function curveFrom(points: readonly [number, number][], y = 0) {
  return new THREE.CatmullRomCurve3(
    points.map(([x, z]) => new THREE.Vector3(x, y, z)),
    false,
    "catmullrom",
    0.12,
  );
}

/** Stone deck with real thickness. Local +Z of each slab follows the path. */
export function deckPath(
  parent: THREE.Object3D,
  points: readonly [number, number][],
  width: number,
  thick: number,
  top: number,
  mat: THREE.Material,
) {
  const curve = curveFrom(points, 0);
  const length = curve.getLength();
  const n = Math.max(1, Math.ceil(length / 0.85));
  const geo = box(1, 1, 1);
  for (let i = 0; i < n; i++) {
    const a = curve.getPoint(i / n);
    const b = curve.getPoint((i + 1) / n);
    const dx = b.x - a.x;
    const dz = b.z - a.z;
    const seg = Math.hypot(dx, dz) + 0.06;
    const midX = (a.x + b.x) / 2;
    const midZ = (a.z + b.z) / 2;
    M(parent, geo, mat, midX, top - thick / 2, midZ, {
      ry: Math.atan2(dx, dz),
      sx: width,
      sy: thick,
      sz: seg,
      receive: true,
      cast: true,
    });
  }
  return curve;
}

export function ribbonGeo(points: readonly [number, number][], width: number, y: number) {
  const curve = curveFrom(points, 0);
  const n = Math.max(8, Math.floor(curve.getLength() * 3));
  const positions: number[] = [];
  const indices: number[] = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const p = curve.getPoint(t);
    const tan = curve.getTangent(t);
    const side = new THREE.Vector3(-tan.z, 0, tan.x);
    if (side.lengthSq() < 1e-6) side.set(1, 0, 0);
    side.normalize().multiplyScalar(width);
    positions.push(p.x + side.x, y, p.z + side.z, p.x - side.x, y, p.z - side.z);
    if (i < n) {
      const a = i * 2;
      indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
  }
  const geo = trackGeo(new THREE.BufferGeometry());
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return { geo, curve };
}

/** Prism sloping along +X from h0 to h1. */
export function rampGeo(length: number, width: number, h0: number, h1: number) {
  const w = width / 2;
  const v = [
    [0, h0, -w],
    [0, h0, w],
    [length, h1, w],
    [length, h1, -w],
    [0, 0, -w],
    [0, 0, w],
    [length, 0, w],
    [length, 0, -w],
  ];
  const positions = new Float32Array(v.flat());
  const indices = [
    0, 1, 2, 0, 2, 3, 4, 6, 5, 4, 7, 6, 0, 3, 7, 0, 7, 4, 1, 5, 6, 1, 6, 2, 0, 4, 5, 0, 5, 1, 3, 2, 6, 3,
    6, 7,
  ];
  const geo = trackGeo(new THREE.BufferGeometry());
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

export function islandGeo(rx: number, rz: number, height: number, seg = 28) {
  const geo = trackGeo(new THREE.CircleGeometry(1, Math.max(12, seg)));
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const x = (pos.getX(i) ?? 0) * rx;
    const z = (pos.getZ(i) ?? 0) * rz;
    pos.setX(i, x);
    pos.setZ(i, z);
    const nx = x / rx;
    const nz = z / rz;
    const ang = Math.atan2(nz, nx);
    const d = Math.hypot(nx, nz);
    const coast = Math.sin(ang * 3 + 0.6) * 0.08 + Math.sin(ang * 7) * 0.035;
    const h = Math.max(0, 1.04 - d + coast);
    const shaped = h * h * height;
    pos.setY(i, shaped);
    const shore = shaped < height * 0.12;
    colors[i * 3] = shore ? 0.34 : 0.4 + shaped * 0.35;
    colors[i * 3 + 1] = shore ? 0.32 : 0.38 + shaped * 0.22;
    colors[i * 3 + 2] = shore ? 0.3 : 0.34 + shaped * 0.08;
  }
  geo.computeVertexNormals();
  geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  return geo;
}

export function landGeo(rx: number, rz: number, top: number, seg = 40) {
  const geo = trackGeo(new THREE.CircleGeometry(1, Math.max(18, seg)));
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const x = (pos.getX(i) ?? 0) * rx;
    const z = (pos.getZ(i) ?? 0) * rz;
    pos.setX(i, x);
    pos.setZ(i, z);
    const nx = rx === 0 ? 0 : x / rx;
    const nz = rz === 0 ? 0 : z / rz;
    const ang = Math.atan2(nz, nx);
    const coast = Math.sin(ang * 3 + 0.4) * 0.07 + Math.sin(ang * 5.5) * 0.035;
    const d = Math.hypot(nx, nz);
    const edge = 0.74 + coast;
    const h = d > edge ? top * Math.max(0, (1.05 - d) / Math.max(0.08, 1.05 - edge)) : top;
    pos.setY(i, h);
    const shore = d > edge - 0.05;
    colors[i * 3] = shore ? 0.78 : 0.68;
    colors[i * 3 + 1] = shore ? 0.74 : 0.64;
    colors[i * 3 + 2] = shore ? 0.66 : 0.58;
  }
  geo.computeVertexNormals();
  geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  return geo;
}

export function canvasTex(c: HTMLCanvasElement, color = true) {
  const tex = trackTex(new THREE.CanvasTexture(c));
  tex.colorSpace = color ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return tex;
}

export function glowTexture() {
  const c = document.createElement("canvas");
  c.width = 128;
  c.height = 128;
  const g = c.getContext("2d");
  if (!g) throw new Error("canvas");
  const grd = g.createRadialGradient(64, 64, 4, 64, 64, 64);
  grd.addColorStop(0, "rgba(255,255,255,1)");
  grd.addColorStop(0.35, "rgba(255,255,255,0.55)");
  grd.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  const tex = canvasTex(c, false);
  return tex;
}

export function mulberry32(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const FONT = '"WenQuanYi Zen Hei", "Noto Sans SC", sans-serif';
