/**
 * 版本: 2026.11.08-islands
 * 文件来源: 梓笙园动线网页工作区 /workspace/src/experience/world.ts
 * 文件内容: 三维场景。用 Three.js 搭建建筑、路径、环幕、粒子走廊、圆桌、分叉、镜面、报告墙和出口。地面是石材岛屿，没有湖面，也没有池堂。
 * 说明: 本文件是该版本的源码存档，不替代仓库根目录 index.html 与 atlas/ 静态入口。
 */
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import {
  PATH_A,
  PATH_AFTER,
  PATH_B,
  PATH_CORRIDOR,
  PATH_MAIN,
  STATIONS,
  type StationId,
} from "./content";
import {
  FONT,
  M,
  box,
  canvasTex,
  curveFrom,
  deckPath,
  glowTexture,
  islandGeo,
  landGeo,
  mulberry32,
  rampGeo,
  rbox,
  ribbonGeo,
  trackGeo,
  trackMat,
  trackTex,
} from "./geom";
import type { LiveCanvas } from "./screens";
import {
  makeAvatar,
  makeCulture,
  makeFacade,
  makeNarrative,
  makePlate,
  makeQuietIsland,
  makeReports,
  makeRingScreen,
  makeRough,
  makeSeaChart,
  makeStone,
  makeTableScreen,
  makeWave,
} from "./screens";

export type World = {
  shell: THREE.Group;
  detail: THREE.Group;
  halos: Map<StationId, THREE.MeshBasicMaterial>;
  hits: THREE.Mesh[];
  lights: Map<StationId, { light: THREE.PointLight; base: number; hot: number }>;
  particles: THREE.ShaderMaterial;
  motes: { sprite: THREE.Sprite; curve: THREE.CatmullRomCurve3; u: number; speed: number }[];
  avatar: LiveCanvas;
  ring: LiveCanvas;
  table: LiveCanvas;
  wave: LiveCanvas;
  mirrorFade: THREE.MeshBasicMaterial;
  mirrorPoint: THREE.Vector3;
  islandGroup: THREE.Group;
  islands: THREE.Object3D[];
  layouts: readonly (readonly [number, number][])[];
  layoutIndex: number;
  lines: THREE.LineSegments;
  linePos: Float32Array;
  reportMats: THREE.MeshStandardMaterial[];
  holo: THREE.LineBasicMaterial;
  confirmMat: THREE.MeshBasicMaterial;
  confirmed: boolean;
  reportFocus: number;
};

type Mats = Record<string, THREE.Material>;

export function buildWorld(scene: THREE.Scene, renderer: THREE.WebGLRenderer): World {
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.22;
  pmrem.dispose();

  const stone = makeStone();
  const rough = makeRough();
  const facade = makeFacade();

  const P = (params: ConstructorParameters<typeof THREE.MeshStandardMaterial>[0]) =>
    trackMat(new THREE.MeshStandardMaterial(params));
  const PH = (params: ConstructorParameters<typeof THREE.MeshPhysicalMaterial>[0]) =>
    trackMat(new THREE.MeshPhysicalMaterial(params));

  const mats: Mats = {
    floor: P({ map: stone, roughnessMap: rough, roughness: 0.78, metalness: 0.05, color: 0xffffff }),
    floorDark: P({ color: 0x2a3038, roughness: 0.92, metalness: 0 }),
    path: P({ color: 0x3a4048, roughness: 0.7, metalness: 0.08 }),
    wall: P({ color: 0x3c434c, roughness: 0.8, metalness: 0.04 }),
    wallAlt: P({ color: 0x4a525c, roughness: 0.74, metalness: 0.06 }),
    titanium: P({ color: 0x9aa1a8, metalness: 0.86, roughness: 0.32 }),
    metalDark: P({ color: 0x2a2e33, metalness: 0.7, roughness: 0.4 }),
    wood: P({ color: 0x6c5140, roughness: 0.62, metalness: 0.02 }),
    fabric: P({ color: 0x2a2628, roughness: 0.9, metalness: 0 }),
    robotGloss: PH({
      color: 0xf4f7f8,
      roughness: 0.18,
      metalness: 0.04,
      clearcoat: 0.65,
      clearcoatRoughness: 0.18,
    }),
    robotMatte: P({ color: 0xe6e1d8, roughness: 0.48, metalness: 0.02 }),
    visor: P({ color: 0x070809, roughness: 0.06, metalness: 0.45 }),
    stripe: P({ color: 0x8fd4e0, roughness: 0.35, metalness: 0.1, emissive: 0x12343a, emissiveIntensity: 0.2 }),
    stripeGray: P({ color: 0x9aa0a6, roughness: 0.4, metalness: 0.2 }),
    pod: P({ color: 0x23282e, roughness: 0.45, metalness: 0.35 }),
    podInner: P({ color: 0x1a121c, roughness: 0.8, emissive: 0x3a2a44, emissiveIntensity: 0.35 }),
    cushion: P({ color: 0x4a403c, roughness: 0.85 }),
    hospital: P({ map: facade, color: 0xffffff, roughness: 0.72, metalness: 0.02, emissive: 0xb9a488, emissiveMap: facade, emissiveIntensity: 0.18 }),
    podium: P({ color: 0xb7b8b4, roughness: 0.66, metalness: 0.05 }),
    resin: PH({
      color: 0x1c6e78,
      roughness: 0.12,
      metalness: 0.05,
      transparent: true,
      opacity: 0.62,
      emissive: 0x0c3338,
      emissiveIntensity: 0.35,
    }),
    glass: PH({
      color: 0x9eb4bc,
      roughness: 0.08,
      metalness: 0.15,
      transparent: true,
      opacity: 0.28,
    }),
    mirrorGlass: P({ color: 0x8d99a3, roughness: 0.08, metalness: 0.92 }),
    island: P({ vertexColors: true, roughness: 1, metalness: 0 }),
    land: P({ vertexColors: true, roughness: 1, metalness: 0 }),
    dune: P({ color: 0x2a3036, roughness: 0.9 }),
  };

  const cyan = trackMat(
    new THREE.MeshBasicMaterial({ color: 0x6ecfc6, transparent: true, opacity: 0.55, toneMapped: true }),
  );
  const cyanDim = trackMat(
    new THREE.MeshBasicMaterial({ color: 0x6ecfc6, transparent: true, opacity: 0.18, toneMapped: true }),
  );
  const amberLine = trackMat(
    new THREE.MeshBasicMaterial({ color: 0xd0a06a, transparent: true, opacity: 0.45, toneMapped: true }),
  );

  scene.background = new THREE.Color(0x1a2028);
  scene.fog = new THREE.FogExp2(0x1a2028, 0.0036);

  scene.add(new THREE.AmbientLight(0xdde4ec, 0.9));
  scene.add(new THREE.HemisphereLight(0x9eb0c0, 0x3a342c, 1.15));
  const key = new THREE.DirectionalLight(0xf6f0e6, 3.1);
  key.position.set(86, 62, 36);
  key.target.position.set(62, 0, 30);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.left = -80;
  key.shadow.camera.right = 80;
  key.shadow.camera.top = 60;
  key.shadow.camera.bottom = -60;
  key.shadow.camera.far = 180;
  key.shadow.bias = -0.0004;
  key.shadow.normalBias = 0.04;
  scene.add(key, key.target);
  const fill = new THREE.DirectionalLight(0xd5e0ea, 1.65);
  fill.position.set(-24, 28, -30);
  fill.target.position.set(50, 0, 30);
  scene.add(fill, fill.target);

  addLand(scene, mats);

  // Raised gallery, portal, and the continuous walkable decks.
  M(scene, rbox(12.4, 0.16, 14.2, 0.08, 3), mats.path, 8, 0.08, 24, { receive: true, cast: true });
  edgeLoop(scene, cyan, 8, 24, 12.5, 14.3, 0.18);
  addPortal(scene, mats, 15.05, 25.6);

    deckPath(scene, PATH_MAIN.slice(2, 8), 2.15, 0.06, 0.05, mats.path);
  deckPath(scene, PATH_MAIN.slice(7), 2.15, 0.06, 0.05, mats.path);
  deckPath(scene, PATH_A, 2.05, 0.07, 0.06, mats.path);
  deckPath(scene, PATH_B, 2.05, 0.07, 0.06, mats.path);
  deckPath(scene, PATH_AFTER, 2.1, 0.06, 0.05, mats.path);

  addRibbon(scene, PATH_MAIN, 0.1, 0.09, cyan);
  addRibbon(scene, PATH_A, 0.11, 0.1, cyan);
  addRibbon(scene, PATH_B, 0.11, 0.1, cyan);
  addRibbon(scene, PATH_AFTER, 0.09, 0.09, amberLine);
  const confirm = addRibbon(scene, [[20, 27], [25, 26.4], [31, 27.6]], 0.16, 0.11, cyan);
  const confirmMat = confirm.material as THREE.MeshBasicMaterial;
  confirmMat.opacity = 0.15;

  addRibbon(scene, PATH_CORRIDOR, 0.08, 0.045, cyanDim);

  // Corridor floor — darker, slightly reflective, no daylight.
  M(scene, box(15.2, 0.04, 7.2), mats.floorDark, 50, 0.02, 31, { receive: true });
  M(scene, box(15, 0.08, 0.08), mats.metalDark, 50, 0.08, 27.85);
  M(scene, box(15, 0.08, 0.08), mats.metalDark, 50, 0.08, 34.15);

  // Bay is a cluster of islands, not a pond.
  M(scene, islandGeo(3.4, 2.4, 0.85, 28), mats.island, 80.2, 0, 30.2, { receive: true, cast: true });
  M(scene, islandGeo(2.2, 1.6, 0.62, 22), mats.island, 86.6, 0, 33.6, { receive: true, cast: true });
  M(scene, islandGeo(1.8, 1.5, 0.5, 20), mats.island, 85.8, 0, 26.4, { receive: true, cast: true });

  // Bridge with visible thickness over the channel.
  M(scene, box(8.2, 0.32, 6.4), mats.path, 96.6, 0.36, 30, { cast: true, receive: true });
  M(scene, box(8.2, 0.04, 6.5), mats.titanium, 96.6, 0.2, 30);
  M(scene, rampGeo(2.6, 6.2, 0.02, 0.48), mats.path, 90.6, 0, 30, { receive: true, cast: true });
  const eastRamp = M(scene, rampGeo(2.4, 5.4, 0.02, 0.48), mats.path, 0, 0, 0, { receive: true, cast: true });
  eastRamp.position.set(103.2, 0, 30);
  eastRamp.rotation.y = Math.PI;
  // side edges only — nothing crosses in front of the mirror
  M(scene, box(7.4, 0.08, 0.08), mats.titanium, 96.6, 0.56, 33.05);
  M(scene, box(7.4, 0.08, 0.08), mats.titanium, 96.6, 0.56, 26.95);

  addBoundary(scene, mats.wall, mats.titanium);

  const detail = new THREE.Group();
  scene.add(detail);

  buildGallery(scene, detail, mats, facade);
  buildAvatar(scene, detail, mats);
  buildEmotion(scene, detail, mats);
  buildCorridorParticles(scene);
  buildTable(scene, detail, mats);
  buildForkRooms(scene, detail, mats);
  buildMirror(scene, mats);
  buildReport(scene, mats);
  buildExit(scene, mats);

  const shell = buildShell(scene, mats.wall, mats.metalDark);

  const halos = new Map<StationId, THREE.MeshBasicMaterial>();
  const hits: THREE.Mesh[] = [];
  const hitGeo = box(1, 1, 1);
  const hitMat = trackMat(
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false, colorWrite: false }),
  );
  const lights = new Map<StationId, { light: THREE.PointLight; base: number; hot: number }>();
  const lightColor: Record<StationId, number> = {
    "00": 0xe0b07a,
    "01": 0x8fd0d2,
    "02": 0xb7a4dc,
    "03": 0x6a5a48,
    "04": 0xe0b07a,
    "05": 0x7ec8c4,
    "05A": 0xb7a6d6,
    "05B": 0xe0b07a,
    "06": 0x8fd0d2,
    "07": 0xc9d0d4,
    "08": 0xe6c2a2,
  };
  const hitSize: Record<StationId, [number, number]> = {
    "00": [12, 13],
    "01": [9, 9],
    "02": [13, 11],
    "03": [14, 6.5],
    "04": [11, 10],
    "05": [7, 7],
    "05A": [11, 8],
    "05B": [11, 8],
    "06": [9, 7],
    "07": [13, 7],
    "08": [7, 6],
  };
  for (const s of STATIONS) {
    const hMat = trackMat(
      new THREE.MeshBasicMaterial({
        color: s.id === "08" || s.id === "04" || s.id === "00" || s.id === "05B" ? 0xd0a06a : 0x6ecfc6,
        transparent: true,
        opacity: 0,
        depthWrite: false,
      }),
    );
    const halo = new THREE.Mesh(trackGeo(new THREE.TorusGeometry(s.halo, 0.03, 6, 64)), hMat);
    halo.rotation.x = Math.PI / 2;
    halo.position.set(s.x, 0.12, s.z);
    scene.add(halo);
    halos.set(s.id, hMat);
    const [hw, hd] = hitSize[s.id];
    const hit = M(scene, hitGeo, hitMat, s.x, 1.3, s.z, { sx: hw, sy: 2.6, sz: hd });
    hit.userData.station = s.id;
    hits.push(hit);
    const base = s.id === "03" ? 0.8 : 2.4;
    const light = new THREE.PointLight(lightColor[s.id], base, s.id === "03" ? 10 : 14, 2);
    light.position.set(s.x, 2.5, s.z);
    scene.add(light);
    lights.set(s.id, { light, base, hot: s.id === "03" ? 2.2 : 8 });
  }

  const particles = (scene.getObjectByName("particles") as THREE.Points).material as THREE.ShaderMaterial;
  const avatar = scene.userData.avatar as LiveCanvas;
  const ring = scene.userData.ring as LiveCanvas;
  const table = scene.userData.table as LiveCanvas;
  const wave = scene.userData.wave as LiveCanvas;

  const motes = makeMotes(scene, [PATH_MAIN, PATH_A, PATH_B, PATH_AFTER]);

  return {
    shell,
    detail,
    halos,
    hits,
    lights,
    particles,
    motes,
    avatar,
    ring,
    table,
    wave,
    mirrorFade: scene.userData.mirrorFade as THREE.MeshBasicMaterial,
    mirrorPoint: scene.userData.mirrorPoint as THREE.Vector3,
    islandGroup: scene.userData.islandGroup as THREE.Group,
    islands: scene.userData.islands as THREE.Object3D[],
    layouts: scene.userData.layouts as World["layouts"],
    layoutIndex: 0,
    lines: scene.userData.lines as THREE.LineSegments,
    linePos: scene.userData.linePos as Float32Array,
    reportMats: scene.userData.reportMats as THREE.MeshStandardMaterial[],
    holo: scene.userData.holo as THREE.LineBasicMaterial,
    confirmMat,
    confirmed: false,
    reportFocus: -1,
  };
}

function edgeLoop(
  parent: THREE.Object3D,
  mat: THREE.Material,
  cx: number,
  cz: number,
  w: number,
  d: number,
  y: number,
) {
  const t = 0.035;
  M(parent, box(w, 0.012, t), mat, cx, y, cz - d / 2);
  M(parent, box(w, 0.012, t), mat, cx, y, cz + d / 2);
  M(parent, box(t, 0.012, d), mat, cx - w / 2, y, cz);
  M(parent, box(t, 0.012, d), mat, cx + w / 2, y, cz);
}

function addRibbon(
  parent: THREE.Object3D,
  points: readonly [number, number][],
  width: number,
  y: number,
  mat: THREE.Material,
) {
  const { geo } = ribbonGeo(points, width, y);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.renderOrder = 2;
  parent.add(mesh);
  return mesh;
}

function addLand(parent: THREE.Object3D, mats: Mats) {
  const lands: [number, number, number, number, number][] = [
    [8, 24, 18, 14, 1.2],
    [24, 30, 10, 8, 1],
    [36, 32, 16, 12, 1.15],
    [51, 31, 11, 8, 0.95],
    [64, 30, 14, 12, 1.1],
    [74, 31, 8, 7, 0.9],
    [85, 45, 12, 8, 1.05],
    [85, 15, 12, 9, 1.05],
    [99, 30, 10, 8, 1],
    [111, 27, 12, 8, 1.05],
    [119, 24, 7, 6, 0.95],
    [60, 60, 64, 18, 1.3],
    [60, 0, 64, 16, 1.15],
    [-4, 30, 12, 24, 1.05],
    [130, 28, 12, 20, 1],
  ];
  for (const [x, z, rx, rz, top] of lands) {
    const mesh = M(parent, landGeo(rx, rz, top, 36), mats.land, x, -top, z, { receive: true });
    mesh.receiveShadow = true;
    mesh.castShadow = true;
  }
}

function addBoundary(parent: THREE.Object3D, wall: THREE.Material, metal: THREE.Material) {
  const slabs: [number, number, number, number, number][] = [
    [16, 2.5, 0.42, 16, 46.5],
    [30, 2.7, 0.42, 44, 42.6],
    [18, 2.35, 0.4, 68, 40.8],
    [22, 2.25, 0.4, 88, 51],
    [22, 2.45, 0.4, 112, 39.5],
  ];
  for (const [w, h, d, x, z] of slabs) {
    M(parent, box(w, h, d), wall, x, h / 2, z, { cast: true, receive: true });
    M(parent, box(w, 0.08, d + 0.04), metal, x, 0.04, z);
  }
  // Entry end, with a door gap.
  M(parent, box(0.4, 2.5, 6), wall, 0.5, 1.25, 16.5, { cast: true, receive: true });
  M(parent, box(0.4, 2.5, 8), wall, 0.5, 1.25, 33, { cast: true, receive: true });
  M(parent, box(0.35, 2.4, 6), wall, 123.2, 1.2, 28, { cast: true });
}

function addPortal(parent: THREE.Object3D, mats: Mats, x: number, z: number) {
  M(parent, box(0.42, 2.85, 0.55), mats.wall, x, 1.42, z - 2.15, { cast: true, receive: true });
  M(parent, box(0.42, 2.85, 0.55), mats.wall, x, 1.42, z + 2.15, { cast: true, receive: true });
  M(parent, box(0.5, 0.28, 4.9), mats.titanium, x, 2.95, z, { cast: true });
  M(parent, box(0.08, 2.4, 0.9), mats.glass, x, 1.4, z - 2.7);
  M(parent, box(0.08, 2.4, 0.9), mats.glass, x, 1.4, z + 2.7);
  M(parent, box(1.2, 0.02, 4.2), mats.titanium, x, 0.16, z);
}

function buildShell(parent: THREE.Object3D, wall: THREE.Material, roofMat: THREE.Material) {
  const shell = new THREE.Group();
  shell.name = "shell";
  shell.visible = false;
  const bands: [number, number, number, number][] = [
    [16, 16, 46.5, 2.5],
    [30, 44, 42.6, 2.7],
    [18, 68, 40.8, 2.35],
    [22, 88, 51, 2.25],
    [22, 112, 39.5, 2.45],
  ];
  for (const [w, x, z, h] of bands) {
    M(shell, box(w, 2.6, 0.36), wall, x, h + 1.3, z);
  }
  // Opaque roof. The corridor stretch is a black soffit — no clerestory.
  M(shell, box(40, 0.16, 28), roofMat, 22, 5.55, 30);
  M(shell, box(16, 0.18, 12), new THREE.MeshStandardMaterial({ color: 0x07080a, roughness: 0.9 }), 50, 5.35, 31);
  M(shell, box(62, 0.16, 26), roofMat, 92, 5.6, 32);
  parent.add(shell);
  return shell;
}

function buildGallery(scene: THREE.Scene, detail: THREE.Group, mats: Mats, _facade: THREE.Texture) {
  const floorY = 0.16;
  const root = new THREE.Group();
  root.position.set(6.35, floorY, 21.5);
  scene.add(root);
  const holo = trackMat(
    new THREE.LineBasicMaterial({ color: 0x6ecfc6, transparent: true, opacity: 0.45 }),
  );
  scene.userData.holo = holo;
  const block = (
    w: number,
    h: number,
    d: number,
    x: number,
    y: number,
    z: number,
    mat: THREE.Material,
  ) => {
    M(root, box(w, h, d), mat, x, y, z, { cast: true, receive: true });
    const lines = new THREE.LineSegments(trackGeo(new THREE.EdgesGeometry(box(w, 0.02, d))), holo);
    lines.position.set(x, y + h / 2 + 0.16, z);
    root.add(lines);
  };
  block(2.7, 0.22, 1.65, 0, 0.11, 0, mats.podium);
  block(1.12, 1.22, 0.7, -0.28, 0.22 + 0.61, -0.12, mats.hospital);
  block(1.05, 0.46, 0.58, 1.05, 0.22 + 0.23, 0.28, mats.hospital);
  block(0.82, 0.34, 0.48, -1.12, 0.22 + 0.17, 0.22, mats.hospital);
  block(0.62, 0.22, 0.26, 0.42, 0.62, 0.02, mats.podium);
  M(root, box(0.72, 0.05, 0.42), mats.titanium, 0.05, 0.48, 0.92, { cast: true });
  for (const sx of [-0.22, 0.22]) {
    for (const sz of [0.78, 1.05]) {
      M(root, box(0.04, 0.36, 0.04), mats.metalDark, sx, 0.28, sz);
    }
  }
  // This center, marked on the model — not a label floating over the hall.
  M(root, box(0.12, 0.08, 0.12), mats.stripe, 0.55, 0.28, -0.35);

  const touch = makePlate("院区", "主楼 · 连廊 · 本中心");
  const touchMat = screenMaterial(touch.tex, 0.55);
  const stand = new THREE.Group();
  stand.position.set(6.3, floorY, 17.7);
  stand.rotation.x = -0.55;
  scene.add(stand);
  M(scene, box(0.42, 0.7, 0.36), mats.metalDark, 6.3, floorY + 0.35, 18.15, { cast: true });
  M(stand, box(0.7, 0.42, 0.04), mats.titanium, 0, 0.55, 0);
  M(stand, new THREE.PlaneGeometry(0.62, 0.32), touchMat, 0, 0.55, 0.03);

  const culture = makeCulture();
  culture.forEach((panel, i) => {
    const x = 3.15 + i * 2.15;
    M(scene, box(1.9, 1.15, 0.08), mats.wallAlt, x, 1.55, 30.35, { cast: true, receive: true });
    M(scene, box(1.7, 0.95, 0.02), mats.titanium, x, 1.55, 30.28);
    M(scene, new THREE.PlaneGeometry(1.58, 0.84), screenMaterial(panel.tex, 0.4), x, 1.55, 30.3);
  });

  M(scene, box(0.28, 2.35, 11.5), mats.wall, 13.7, 1.2, 24.6, { cast: true, receive: true });

  buildLisheng(scene, mats, 11.15, floorY, 29.15);
  buildCopilot(scene, mats, 12.15, floorY, 26.15);
  buildXiaosheng(scene, mats, 12.05, floorY, 23.15);
  buildWanxing(scene, mats, 11.35, floorY, 20.35);
  void detail;
}

function screenMaterial(map: THREE.Texture, emissive = 0.7) {
  return trackMat(
    new THREE.MeshStandardMaterial({
      map,
      emissive: 0xffffff,
      emissiveMap: map,
      emissiveIntensity: emissive,
      roughness: 0.42,
      metalness: 0.04,
    }),
  );
}

function buildLisheng(parent: THREE.Object3D, mats: Mats, x: number, y: number, z: number) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.y = Math.PI;
  const pts = [
    new THREE.Vector2(0.15, 0),
    new THREE.Vector2(0.23, 0.06),
    new THREE.Vector2(0.29, 0.32),
    new THREE.Vector2(0.31, 0.66),
    new THREE.Vector2(0.26, 0.96),
    new THREE.Vector2(0.16, 1.08),
    new THREE.Vector2(0.09, 1.12),
  ];
  const body = new THREE.Mesh(trackGeo(new THREE.LatheGeometry(pts, 36)), mats.robotGloss);
  body.castShadow = true;
  g.add(body);
  const head = new THREE.Mesh(trackGeo(new THREE.SphereGeometry(0.2, 32, 24)), mats.robotGloss);
  head.scale.set(1.28, 0.9, 1.02);
  head.position.set(0, 1.24, 0.02);
  head.castShadow = true;
  g.add(head);
  const visor = new THREE.Mesh(trackGeo(new THREE.SphereGeometry(0.125, 28, 18)), mats.visor);
  visor.scale.set(1.45, 0.95, 0.48);
  visor.position.set(0.01, 1.25, 0.16);
  g.add(visor);
  const dot = new THREE.Mesh(trackGeo(new THREE.SphereGeometry(0.012, 10, 8)), mats.stripe);
  dot.position.set(0.075, 1.27, 0.215);
  g.add(dot);
  M(g, rbox(0.16, 0.1, 0.018, 0.01), mats.visor, 0.04, 0.78, 0.29);
  M(g, box(0.018, 0.72, 0.03), mats.stripe, -0.27, 0.52, 0.06);
  M(g, box(0.014, 0.72, 0.025), mats.stripeGray, -0.25, 0.52, 0.09);
  const ring = new THREE.Mesh(trackGeo(new THREE.TorusGeometry(0.2, 0.016, 8, 28)), mats.titanium);
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.02;
  g.add(ring);
  parent.add(g);
  const plate = makePlate("利笙", "服务终端");
  M(parent, box(0.52, 0.16, 0.03), mats.metalDark, x, y + 0.12, z - 0.55);
  M(parent, new THREE.PlaneGeometry(0.48, 0.13), screenMaterial(plate.tex, 0.45), x, y + 0.12, z - 0.58, {
    ry: Math.PI,
  });
}

function buildCopilot(parent: THREE.Object3D, mats: Mats, x: number, y: number, z: number) {
  M(parent, rbox(0.78, 0.62, 0.42, 0.04, 2), mats.metalDark, x, y + 0.42, z, { cast: true, receive: true });
  M(parent, box(0.7, 0.04, 0.34), mats.titanium, x, y + 0.74, z);
  const tex = trackTex(new THREE.TextureLoader().load("/media/copilot.jpg"));
  tex.colorSpace = THREE.SRGBColorSpace;
  M(parent, rbox(0.46, 0.78, 0.04, 0.02), mats.titanium, x, y + 1.22, z + 0.02, { rx: -0.18, cast: true });
  M(parent, new THREE.PlaneGeometry(0.4, 0.7), screenMaterial(tex, 0.8), x, y + 1.24, z + 0.05, { rx: -0.18 });
  const plate = makePlate("Copilot", "复诊助手界面");
  M(parent, new THREE.PlaneGeometry(0.46, 0.13), screenMaterial(plate.tex, 0.45), x, y + 0.22, z - 0.28, {
    ry: Math.PI,
  });
}

function buildXiaosheng(parent: THREE.Object3D, mats: Mats, x: number, y: number, z: number) {
  M(parent, rbox(0.52, 0.78, 0.46, 0.06, 3), mats.wallAlt, x, y + 0.39, z, { cast: true });
  M(parent, box(0.46, 0.03, 0.4), mats.titanium, x, y + 0.8, z);
  const g = new THREE.Group();
  g.position.set(x, y + 0.8, z);
  g.rotation.y = Math.PI;
  const torso = new THREE.Mesh(trackGeo(new THREE.SphereGeometry(0.2, 28, 20)), mats.robotMatte);
  torso.scale.set(1.05, 1.2, 0.82);
  torso.position.y = 0.28;
  torso.castShadow = true;
  g.add(torso);
  const seam = new THREE.Mesh(trackGeo(new THREE.TorusGeometry(0.19, 0.006, 6, 24)), mats.titanium);
  seam.rotation.x = Math.PI / 2;
  seam.position.y = 0.2;
  g.add(seam);
  const head = new THREE.Mesh(rbox(0.36, 0.26, 0.28, 0.08, 3), mats.robotMatte);
  head.position.y = 0.64;
  head.castShadow = true;
  g.add(head);
  for (const sx of [-1, 1]) {
    const eye = new THREE.Mesh(trackGeo(new THREE.SphereGeometry(0.052, 18, 14)), mats.visor);
    eye.position.set(sx * 0.075, 0.655, 0.13);
    g.add(eye);
    const glint = new THREE.Mesh(trackGeo(new THREE.SphereGeometry(0.012, 8, 8)), mats.robotGloss);
    glint.position.set(sx * 0.09, 0.675, 0.17);
    g.add(glint);
    const arm = new THREE.Mesh(trackGeo(new THREE.CapsuleGeometry(0.04, 0.1, 4, 8)), mats.robotMatte);
    arm.scale.set(0.42, 1.05, 1);
    arm.position.set(sx * 0.25, 0.36, 0);
    g.add(arm);
    const ant = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(0.006, 0.006, 0.2, 6)), mats.visor);
    ant.position.set(sx * 0.1, 0.88, 0);
    g.add(ant);
    const coil = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(0.012, 0.012, 0.028, 6)), mats.visor);
    coil.position.set(sx * 0.1, 0.8, 0);
    g.add(coil);
  }
  const bridge = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(0.009, 0.009, 0.07, 8)), mats.visor);
  bridge.rotation.z = Math.PI / 2;
  bridge.position.set(0, 0.655, 0.145);
  g.add(bridge);
  // JITAI wrist module sits on the same plinth, not a second robot.
  const band = new THREE.Mesh(trackGeo(new THREE.TorusGeometry(0.05, 0.012, 8, 18)), mats.titanium);
  band.position.set(0.16, 0.04, 0.12);
  band.rotation.x = Math.PI / 2.4;
  g.add(band);
  parent.add(g);
  const plate = makePlate("小笙 JITAI", "陪伴与节律");
  M(parent, new THREE.PlaneGeometry(0.48, 0.13), screenMaterial(plate.tex, 0.45), x, y + 0.18, z - 0.32, {
    ry: Math.PI,
  });
}

function buildWanxing(parent: THREE.Object3D, mats: Mats, x: number, y: number, z: number) {
  M(parent, rbox(0.7, 0.28, 0.5, 0.04), mats.wood, x, y + 0.2, z, { cast: true });
  M(parent, box(0.62, 0.06, 0.42), mats.titanium, x, y + 0.38, z);
  const tex = trackTex(new THREE.TextureLoader().load("/media/wanxing.jpg"));
  tex.colorSpace = THREE.SRGBColorSpace;
  M(parent, rbox(0.62, 0.86, 0.06, 0.03), mats.titanium, x, y + 0.95, z, { cast: true });
  M(parent, new THREE.PlaneGeometry(0.54, 0.76), screenMaterial(tex, 0.9), x, y + 0.95, z + 0.04);
  // warm practical behind the night screen only
  const lamp = new THREE.PointLight(0xe0b07a, 1.4, 3.5, 2);
  lamp.position.set(x, y + 1.1, z - 0.3);
  parent.add(lamp);
  const plate = makePlate("晚星", "夜间陪伴界面");
  M(parent, new THREE.PlaneGeometry(0.48, 0.13), screenMaterial(plate.tex, 0.45), x, y + 0.42, z - 0.3, {
    ry: Math.PI,
  });
}

function curvedDisplay(
  parent: THREE.Object3D,
  mats: Mats,
  screenMat: THREE.Material,
  opts: {
    cx: number;
    cz: number;
    y: number;
    radius: number;
    height: number;
    thick: number;
    theta0: number;
    theta1: number;
    count: number;
    inward: boolean;
  },
) {
  const span = opts.theta1 - opts.theta0;
  const step = span / opts.count;
  for (let i = 0; i < opts.count; i++) {
    const a0 = opts.theta0 + step * i + 0.01;
    const a1 = opts.theta0 + step * (i + 1) - 0.01;
    const mid = (a0 + a1) / 2;
    const chord = Math.max(0.12, 2 * opts.radius * Math.sin((a1 - a0) / 2));
    const yaw = Math.atan2(Math.cos(mid), -Math.sin(mid));
    const fx = opts.cx + Math.sin(mid) * opts.radius;
    const fz = opts.cz + Math.cos(mid) * opts.radius;
    const rail = 0.07;
    M(parent, box(opts.thick, rail, chord), mats.titanium, fx, opts.y + opts.height / 2, fz, {
      ry: yaw,
      cast: true,
    });
    M(parent, box(opts.thick, rail, chord), mats.titanium, fx, opts.y - opts.height / 2, fz, {
      ry: yaw,
      cast: true,
    });
    const tx = Math.cos(mid);
    const tz = -Math.sin(mid);
    const half = chord / 2 - 0.03;
    M(parent, box(opts.thick, opts.height, 0.05), mats.titanium, fx + tx * half, opts.y, fz + tz * half, {
      ry: yaw,
      cast: true,
    });
    M(parent, box(opts.thick, opts.height, 0.05), mats.titanium, fx - tx * half, opts.y, fz - tz * half, {
      ry: yaw,
      cast: true,
    });
    const backR = opts.radius + (opts.inward ? 0.28 : -0.28);
    const bx = opts.cx + Math.sin(mid) * backR;
    const bz = opts.cz + Math.cos(mid) * backR;
    M(parent, box(0.1, opts.height * 0.62, chord * 0.45), mats.metalDark, bx, opts.y, bz, { ry: yaw });
    if (i % 3 === 0) {
      M(parent, box(0.08, opts.y - opts.height / 2, 0.08), mats.titanium, fx, (opts.y - opts.height / 2) / 2, fz);
    }
    // vent slot at the plinth — architectural, not a spray cannon
    M(parent, box(0.04, 0.03, chord * 0.6), mats.visor, fx, 0.22, fz, { ry: yaw });
  }
  const screenR = opts.radius + (opts.inward ? 0.015 : -0.015);
  const screen = new THREE.Mesh(
    trackGeo(
      new THREE.CylinderGeometry(screenR, screenR, opts.height - 0.2, Math.max(12, opts.count * 8), 1, true, opts.theta0, span),
    ),
    screenMat,
  );
  screen.position.set(opts.cx, opts.y, opts.cz);
  (screen.material as THREE.MeshStandardMaterial).side = opts.inward ? THREE.BackSide : THREE.FrontSide;
  parent.add(screen);
}

function buildAvatar(scene: THREE.Scene, detail: THREE.Group, mats: Mats) {
  M(scene, box(8.5, 3.05, 0.28), mats.wall, 21.2, 1.55, 36.2, { cast: true, receive: true });
  const avatar = makeAvatar();
  scene.userData.avatar = avatar;
  const mat = screenMaterial(avatar.tex, 0.65);
  curvedDisplay(scene, mats, mat, {
    cx: 21.2,
    cz: 34.6,
    y: 1.75,
    radius: 3.6,
    height: 2.55,
    thick: 0.14,
    theta0: Math.PI - 0.58,
    theta1: Math.PI + 0.58,
    count: 5,
    inward: false,
  });
  // service cabinets behind the screen
  M(detail, box(2.2, 0.7, 0.35), mats.metalDark, 21.2, 0.45, 35.6);
  const cable = trackGeo(
    new THREE.TubeGeometry(
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(22.4, 0.7, 34.2),
        new THREE.Vector3(22.6, 0.25, 34.8),
        new THREE.Vector3(22.2, 0.08, 35.4),
      ]),
      8,
      0.012,
      5,
      false,
    ),
  );
  detail.add(new THREE.Mesh(cable, mats.visor));
}

function buildEmotion(scene: THREE.Scene, detail: THREE.Group, mats: Mats) {
  const ring = makeRingScreen();
  scene.userData.ring = ring;
  const mat = screenMaterial(ring.tex, 0.7);
  curvedDisplay(scene, mats, mat, {
    cx: 34,
    cz: 33.4,
    y: 1.85,
    radius: 6.15,
    height: 2.7,
    thick: 0.16,
    theta0: -2.12,
    theta1: 2.12,
    count: 8,
    inward: true,
  });
  // personal island, with two smaller islands instead of a pool
  M(scene, islandGeo(1.35, 0.95, 0.72, 32), mats.island, 34, 0.08, 31.7, { cast: true, receive: true });
  M(scene, islandGeo(0.55, 0.4, 0.28, 18), mats.island, 32.5, 0.04, 30.6, { cast: true });
  M(scene, islandGeo(0.42, 0.34, 0.2, 16), mats.island, 35.3, 0.04, 31.1, { cast: true });

  // three input devices, west side of the clearing
  const wave = makeWave();
  scene.userData.wave = wave;
  const waveMat = screenMaterial(wave.tex, 0.8);
  // HRV dock
  M(scene, rbox(0.46, 0.08, 0.36, 0.02), mats.titanium, 30.2, 0.08, 30.6, { cast: true });
  const puck = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(0.1, 0.11, 0.04, 20)), mats.metalDark);
  puck.position.set(30.2, 0.14, 30.6);
  scene.add(puck);
  const band = new THREE.Mesh(trackGeo(new THREE.TorusGeometry(0.07, 0.016, 8, 20)), mats.stripe);
  band.rotation.x = Math.PI / 2;
  band.position.set(30.2, 0.2, 30.6);
  scene.add(band);
  M(scene, box(0.28, 0.42, 0.04), mats.titanium, 30.55, 0.4, 30.85);
  M(scene, new THREE.PlaneGeometry(0.24, 0.32), waveMat, 30.55, 0.42, 30.88);
  cableBetween(detail, mats.visor, [30.2, 0.12, 30.75], [30.5, 0.05, 30.9], [30.55, 0.2, 30.85]);

  // drawing table
  M(scene, rbox(1.15, 0.06, 0.62, 0.02), mats.wood, 31.6, 0.72, 28.7, { cast: true });
  M(scene, box(0.06, 0.68, 0.06), mats.metalDark, 31.15, 0.36, 28.45);
  M(scene, box(0.06, 0.68, 0.06), mats.metalDark, 32.05, 0.36, 28.45);
  M(scene, box(0.06, 0.68, 0.06), mats.metalDark, 31.15, 0.36, 28.95);
  M(scene, box(0.06, 0.68, 0.06), mats.metalDark, 32.05, 0.36, 28.95);
  const paper = ctxPaper();
  M(scene, new THREE.PlaneGeometry(1.0, 0.5), screenMaterial(paper, 0.35), 31.6, 0.76, 28.7, { rx: -Math.PI / 2 });
  M(detail, box(0.12, 0.02, 0.02), mats.metalDark, 32.05, 0.78, 28.95, { rz: 0.4 });

  // listening ring
  M(scene, rbox(0.42, 0.06, 0.42, 0.02), mats.titanium, 33.4, 0.08, 30.15);
  const ear = new THREE.Mesh(trackGeo(new THREE.TorusGeometry(0.28, 0.025, 10, 28)), mats.titanium);
  ear.position.set(33.4, 0.72, 30.15);
  scene.add(ear);
  const mic = new THREE.Mesh(trackGeo(new THREE.CapsuleGeometry(0.03, 0.12, 4, 8)), mats.visor);
  mic.position.set(33.4, 0.72, 30.15);
  scene.add(mic);
  M(scene, box(0.04, 0.64, 0.04), mats.metalDark, 33.4, 0.38, 30.15);

  // hidden environmental interface — a flush control plate, not a cannon
  M(detail, box(0.34, 0.02, 0.16), mats.metalDark, 36.4, 0.2, 34.8);
  for (const dx of [-0.08, 0, 0.08]) {
    const b = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(0.015, 0.015, 0.02, 8)), mats.titanium);
    b.position.set(36.4 + dx, 0.22, 34.8);
    detail.add(b);
  }
}

function ctxPaper() {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 256;
  const g = c.getContext("2d");
  if (!g) throw new Error("2d");
  g.fillStyle = "#e7e2d6";
  g.fillRect(0, 0, 512, 256);
  g.strokeStyle = "#6d6256";
  g.lineWidth = 3;
  g.beginPath();
  g.moveTo(40, 180);
  g.quadraticCurveTo(140, 40, 240, 150);
  g.quadraticCurveTo(320, 230, 460, 80);
  g.stroke();
  return canvasTex(c, true);
}

function cableBetween(
  parent: THREE.Object3D,
  mat: THREE.Material,
  a: [number, number, number],
  b: [number, number, number],
  c: [number, number, number],
) {
  const geo = trackGeo(
    new THREE.TubeGeometry(
      new THREE.CatmullRomCurve3([new THREE.Vector3(...a), new THREE.Vector3(...b), new THREE.Vector3(...c)]),
      10,
      0.01,
      5,
      false,
    ),
  );
  parent.add(new THREE.Mesh(geo, mat));
}

function buildCorridorParticles(scene: THREE.Scene) {
  const N = 10000;
  const positions = new Float32Array(N * 3);
  const seeds = new Float32Array(N);
  const kinds = new Float32Array(N);
  const rand = mulberry32(11);
  let i = 0;
  const push = (x: number, y: number, z: number, kind: number) => {
    if (i >= N) return;
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    seeds[i] = rand();
    kinds[i] = kind;
    i++;
  };
  const x0 = 43;
  const x1 = 57.2;
  for (let n = 0; n < 6400; n++) {
    const x = x0 + rand() * (x1 - x0);
    const y = 0.15 + Math.pow(rand(), 0.85) * 4.9;
    const side = n % 2 === 0 ? 27.75 : 34.45;
    push(x, y, side + (rand() - 0.5) * 0.9, 1);
  }
  for (let n = 0; n < 1600; n++) {
    push(x0 + rand() * (x1 - x0), n % 4 === 0 ? 0.12 + rand() * 0.3 : 4.4 + rand() * 0.75, 28.3 + rand() * 5.4, 0.3);
  }
  for (let n = 0; n < 1200; n++) {
    push(x0 + rand() * (x1 - x0), 0.7 + rand() * 2.4, 30.3 + (rand() - 0.5) * 1.5, 2);
  }
  for (let n = 0; n < 800; n++) {
    const a = rand() * Math.PI * 2;
    const r = 0.5 + Math.sin(a * 4.0) * 0.16 + rand() * 0.1;
    push(50.2 + Math.cos(a) * r * 1.5, 1.45 + Math.sin(a) * r, 31 + (rand() - 0.5) * 0.28, 3);
  }
  const geo = trackGeo(new THREE.BufferGeometry());
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geo.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
  geo.setAttribute("aKind", new THREE.BufferAttribute(kinds, 1));
  const material = trackMat(
    new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uPixel: { value: 1 },
      },
      vertexShader: `
        attribute float aSeed;
        attribute float aKind;
        varying float vKind;
        varying float vSeed;
        uniform float uTime;
        uniform float uPixel;
        void main() {
          vec3 p = position;
          p.y += sin(uTime * 0.45 + aSeed * 18.0) * 0.03;
          if (aKind > 2.5) {
            float gather = 0.5 + 0.5 * sin(uTime * 0.42);
            vec3 center = vec3(50.2, 1.45, 31.0);
            vec3 scatter = vec3(sin(aSeed * 20.0), cos(aSeed * 12.0), sin(aSeed * 8.0)) * (1.0 - gather) * 1.6;
            p = mix(p, center, 0.0) + scatter * 0.35 + (p - center) * (0.45 + gather * 0.55) + center * 0.0;
            p = mix(center + (position - center), position + scatter, 1.0 - gather);
          }
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          float dist = max(2.0, -mv.z);
          gl_PointSize = clamp(280.0 / dist * uPixel, 1.4, 13.0);
          vKind = aKind;
          vSeed = aSeed;
        }
      `,
      fragmentShader: `
        varying float vKind;
        varying float vSeed;
        uniform float uTime;
        void main() {
          vec2 c = gl_PointCoord - vec2(0.5);
          float d = length(c);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.08, d);
          vec3 col = vec3(1.0, 0.93, 0.82);
          if (vKind > 1.5) {
            float k = 0.5 + 0.5 * sin(uTime * 0.8 + vSeed * 24.0);
            col = mix(vec3(0.45, 0.85, 0.8), vec3(0.72, 0.62, 0.95), k);
          }
          float tw = 0.45 + 0.55 * sin(uTime * 1.5 + vSeed * 30.0);
          float alpha = a * tw * (vKind > 1.5 ? 0.8 : 0.42);
          gl_FragColor = vec4(col, alpha);
        }
      `,
    }),
  );
  const points = new THREE.Points(geo, material);
  points.name = "particles";
  points.frustumCulled = false;
  scene.add(points);
}

function buildTable(scene: THREE.Scene, detail: THREE.Group, mats: Mats) {
  const x = 63;
  const z = 30;
  const slab = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(3.25, 3.32, 0.16, 48)), mats.metalDark);
  slab.position.set(x, 0.66, z);
  slab.castShadow = true;
  slab.receiveShadow = true;
  scene.add(slab);
  const rim = new THREE.Mesh(trackGeo(new THREE.TorusGeometry(3.25, 0.035, 8, 48)), mats.titanium);
  rim.rotation.x = Math.PI / 2;
  rim.position.set(x, 0.74, z);
  scene.add(rim);
  const table = makeTableScreen();
  scene.userData.table = table;
  const disc = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(1.7, 1.7, 0.02, 40)), screenMaterial(table.tex, 0.85));
  disc.position.set(x, 0.75, z);
  scene.add(disc);
  // warm indirect cove under the rim
  const cove = new THREE.PointLight(0xe0b07a, 2.2, 8, 2);
  cove.position.set(x, 0.4, z);
  scene.add(cove);

  const angles = [0.35, 1.15, 2.05, 2.9, 3.75, 4.55, 5.4];
  angles.forEach((a, i) => {
    const rad = 4.05 + (i % 3) * 0.12;
    const cx = x + Math.sin(a) * rad;
    const cz = z + Math.cos(a) * rad;
    addChair(scene, mats, cx, cz, Math.atan2(x - cx, z - cz), i % 2 === 0);
  });

  // VR rack — headsets and controllers, no wearers
  const rackX = 68.4;
  const rackZ = 26.6;
  M(scene, rbox(1.5, 0.08, 0.42, 0.02), mats.titanium, rackX, 0.78, rackZ, { cast: true });
  M(scene, box(0.06, 0.74, 0.06), mats.metalDark, rackX - 0.6, 0.4, rackZ);
  M(scene, box(0.06, 0.74, 0.06), mats.metalDark, rackX + 0.6, 0.4, rackZ);
  for (let i = 0; i < 4; i++) {
    addHeadset(scene, mats, rackX - 0.52 + i * 0.34, 0.95, rackZ);
  }
  M(detail, box(1.3, 0.04, 0.12), mats.metalDark, rackX, 0.7, rackZ + 0.2);

  // narrative wall
  const story = makeNarrative();
  curvedDisplay(scene, mats, screenMaterial(story.tex, 0.45), {
    cx: x,
    cz: 37.2,
    y: 1.7,
    radius: 4.4,
    height: 2.15,
    thick: 0.12,
    theta0: -1.15,
    theta1: 1.15,
    count: 5,
    inward: true,
  });
  // acoustic fins, varied — not a fence
  for (let i = 0; i < 7; i++) {
    const h = 1.4 + (i % 3) * 0.35;
    M(scene, box(0.08, h, 0.45), mats.fabric, 58.2 + i * 0.55, h / 2, 36.4, { ry: 0.15 * (i % 2 ? 1 : -1) });
  }

  // particle instrument
  const dome = new THREE.Mesh(trackGeo(new THREE.SphereGeometry(0.42, 24, 16)), mats.glass);
  dome.position.set(58.6, 0.7, 33.4);
  scene.add(dome);
  M(scene, rbox(0.7, 0.12, 0.7, 0.04), mats.titanium, 58.6, 0.2, 33.4, { cast: true });
  const mini = makeMiniPoints();
  mini.position.set(58.6, 0.72, 33.4);
  scene.add(mini);
}

function addChair(
  parent: THREE.Object3D,
  mats: Mats,
  x: number,
  z: number,
  yaw: number,
  arms: boolean,
) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = yaw;
  const legs: [number, number][] = [
    [-0.18, -0.18],
    [0.18, -0.18],
    [-0.18, 0.16],
    [0.18, 0.16],
  ];
  for (const [lx, lz] of legs) {
    M(g, box(0.035, 0.44, 0.035), mats.metalDark, lx, 0.22, lz, { cast: true });
  }
  M(g, rbox(0.5, 0.06, 0.46, 0.02), mats.wood, 0, 0.46, 0, { cast: true });
  M(g, rbox(0.46, 0.42, 0.045, 0.02), mats.wood, 0, 0.74, -0.2, { rx: -0.12, cast: true });
  if (arms) {
    M(g, box(0.04, 0.16, 0.28), mats.metalDark, -0.24, 0.58, 0);
    M(g, box(0.04, 0.16, 0.28), mats.metalDark, 0.24, 0.58, 0);
  }
  parent.add(g);
}

function addHeadset(parent: THREE.Object3D, mats: Mats, x: number, y: number, z: number) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  M(g, rbox(0.16, 0.09, 0.1, 0.03), mats.metalDark, 0, 0, 0);
  M(g, box(0.12, 0.06, 0.02), mats.visor, 0, 0, 0.05);
  const strap = new THREE.Mesh(trackGeo(new THREE.TorusGeometry(0.07, 0.008, 6, 14, Math.PI)), mats.titanium);
  strap.rotation.z = Math.PI;
  strap.position.set(0, 0.02, -0.02);
  g.add(strap);
  parent.add(g);
  M(parent, box(0.04, 0.05, 0.08), mats.visor, x + 0.1, y - 0.16, z);
}

function makeMiniPoints() {
  const n = 280;
  const pos = new Float32Array(n * 3);
  const rand = mulberry32(3);
  for (let i = 0; i < n; i++) {
    const a = rand() * Math.PI * 2;
    const r = Math.pow(rand(), 0.5) * 0.28;
    pos[i * 3] = Math.cos(a) * r;
    pos[i * 3 + 1] = (rand() - 0.4) * 0.22;
    pos[i * 3 + 2] = Math.sin(a) * r * 0.8;
  }
  const geo = trackGeo(new THREE.BufferGeometry());
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const mat = trackMat(
    new THREE.PointsMaterial({
      color: 0xc8b6e4,
      size: 0.02,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    }),
  );
  return new THREE.Points(geo, mat);
}

function buildForkRooms(scene: THREE.Scene, detail: THREE.Group, mats: Mats) {
  // 05A — quieter rear room, still readable in section
  M(scene, box(8.5, 2.15, 0.22), mats.wall, 84, 1.08, 49.3, { cast: true, receive: true });
  M(scene, box(0.22, 2.05, 5.2), mats.wall, 78.2, 1.02, 45.2, { cast: true });
  M(scene, box(0.22, 2.05, 5.2), mats.wall, 89.6, 1.02, 45.2, { cast: true });
  const quiet = makeQuietIsland();
  M(scene, new THREE.PlaneGeometry(3.2, 1.5), screenMaterial(quiet.tex, 0.35), 84, 1.55, 49.1);

  // personal VR desk
  M(scene, rbox(1.2, 0.06, 0.55, 0.02), mats.wood, 80.4, 0.78, 44.6, { cast: true });
  M(scene, box(0.05, 0.74, 0.05), mats.metalDark, 79.95, 0.39, 44.4);
  M(scene, box(0.05, 0.74, 0.05), mats.metalDark, 80.85, 0.39, 44.4);
  addHeadset(scene, mats, 80.15, 0.92, 44.6);
  M(scene, box(0.16, 0.05, 0.28), mats.titanium, 80.7, 0.84, 44.75);
  M(scene, box(0.04, 0.9, 0.7), mats.titanium, 79.3, 1.15, 46.2);
  const ctxScreen = makeQuietIsland();
  M(scene, new THREE.PlaneGeometry(0.62, 0.4), screenMaterial(ctxScreen.tex, 0.4), 79.3, 1.2, 46.15, { ry: Math.PI / 2 });

  addPod(scene, mats, 87.4, 45.1, -0.4);

  // 05B co-create
  const tableTop = 0.78;
  M(scene, rbox(3.4, 0.12, 1.9, 0.06, 3), mats.wood, 84, tableTop - 0.02, 15.2, { cast: true, receive: true });
  const group = new THREE.Group();
  group.position.set(84, tableTop + 0.08, 15.2);
  scene.add(group);
  const layouts: [number, number][][] = [
    [
      [-0.7, 0.15],
      [0.55, 0.4],
      [-0.2, -0.45],
      [0.85, -0.3],
      [0.05, 0.45],
    ],
    [
      [-0.2, 0.05],
      [0.22, 0.16],
      [0.02, -0.2],
      [0.32, -0.02],
      [-0.28, 0.22],
    ],
    [
      [-1.15, -0.45],
      [1.15, 0.45],
      [-1.0, 0.5],
      [1.05, -0.5],
      [0, 0],
    ],
  ];
  const islands: THREE.Object3D[] = [];
  const scales: [number, number, number][] = [
    [0.28, 0.16, 0.2],
    [0.22, 0.2, 0.16],
    [0.18, 0.12, 0.18],
    [0.24, 0.14, 0.14],
    [0.16, 0.18, 0.16],
  ];
  layouts[0].forEach((p, i) => {
    const sc = scales[i] ?? [0.2, 0.14, 0.16];
    const mesh = new THREE.Mesh(islandGeo(sc[0], sc[2], sc[1], 14), mats.island);
    mesh.position.set(p[0], 0, p[1]);
    group.add(mesh);
    islands.push(mesh);
  });
  const linePos = new Float32Array(10 * 2 * 3);
  const lineGeo = trackGeo(new THREE.BufferGeometry());
  lineGeo.setAttribute("position", new THREE.BufferAttribute(linePos, 3));
  lineGeo.setDrawRange(0, 0);
  const lines = new THREE.LineSegments(
    lineGeo,
    trackMat(new THREE.LineBasicMaterial({ color: 0x6ecfc6, transparent: true, opacity: 0.8 })),
  );
  group.add(lines);
  scene.userData.islandGroup = group;
  scene.userData.islands = islands;
  scene.userData.layouts = layouts;
  scene.userData.lines = lines;
  scene.userData.linePos = linePos;

  // seats, archive, work rail — merch only on the outer edge
  M(scene, rbox(1.4, 0.08, 0.42, 0.03), mats.wood, 78.6, 0.46, 16.4, { cast: true });
  M(scene, box(0.08, 0.42, 1.2), mats.metalDark, 78.1, 0.24, 16.4);
  M(scene, box(0.08, 0.42, 1.2), mats.metalDark, 79.1, 0.24, 16.4);
  for (let i = 0; i < 5; i++) {
    M(scene, box(0.28, 0.55, 0.22), mats.wallAlt, 80.2 + i * 0.42, 0.7, 18.6);
    M(scene, box(0.22, 0.4, 0.02), mats.glass, 80.2 + i * 0.42, 0.75, 18.48);
  }
  // outer shelf
  M(scene, box(3.6, 0.08, 0.42), mats.titanium, 84, 0.72, 9.6, { cast: true });
  M(scene, box(0.06, 0.68, 0.36), mats.metalDark, 82.4, 0.36, 9.6);
  M(scene, box(0.06, 0.68, 0.36), mats.metalDark, 85.6, 0.36, 9.6);
  M(scene, rbox(0.28, 0.16, 0.2, 0.02), mats.fabric, 83.1, 0.86, 9.6);
  M(scene, rbox(0.22, 0.22, 0.18, 0.02), mats.wood, 83.6, 0.9, 9.6);
  // a second, smaller lens-robot only as product on the outer shelf — same asset language
  const mini = new THREE.Group();
  mini.position.set(85.1, 0.78, 9.6);
  mini.scale.setScalar(0.45);
  const head = new THREE.Mesh(rbox(0.36, 0.26, 0.28, 0.08, 2), mats.robotMatte);
  head.position.y = 0.5;
  mini.add(head);
  for (const sx of [-1, 1]) {
    const eye = new THREE.Mesh(trackGeo(new THREE.SphereGeometry(0.05, 12, 10)), mats.visor);
    eye.position.set(sx * 0.07, 0.52, 0.12);
    mini.add(eye);
  }
  scene.add(mini);
  void detail;
}

function addPod(parent: THREE.Object3D, mats: Mats, x: number, z: number, ry: number) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = ry;
  M(g, rbox(2.35, 0.12, 1.15, 0.06), mats.titanium, 0.05, 0.08, 0, { cast: true, receive: true });
  const tube = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(0.5, 0.5, 1.65, 28, 1, true)), mats.pod);
  tube.rotation.z = Math.PI / 2;
  tube.position.set(0.15, 0.62, 0);
  tube.castShadow = true;
  g.add(tube);
  const cap = new THREE.Mesh(
    trackGeo(new THREE.SphereGeometry(0.5, 24, 16, 0, Math.PI * 2, 0, Math.PI)),
    mats.pod,
  );
  cap.rotation.z = Math.PI / 2;
  cap.position.set(0.95, 0.62, 0);
  cap.castShadow = true;
  g.add(cap);
  const rim = new THREE.Mesh(trackGeo(new THREE.TorusGeometry(0.5, 0.028, 8, 24)), mats.titanium);
  rim.rotation.y = Math.PI / 2;
  rim.position.set(-0.68, 0.62, 0);
  g.add(rim);
  M(g, rbox(1.15, 0.08, 0.62, 0.03), mats.cushion, 0.15, 0.4, 0);
  M(g, rbox(0.28, 0.1, 0.28, 0.04), mats.cushion, 0.72, 0.48, 0);
  const glass = new THREE.Mesh(
    trackGeo(new THREE.CylinderGeometry(0.52, 0.52, 0.7, 24, 1, true, Math.PI * 0.15, Math.PI * 0.7)),
    mats.glass,
  );
  glass.rotation.z = Math.PI / 2;
  glass.position.set(0.2, 0.66, 0);
  g.add(glass);
  for (let i = 0; i < 5; i++) {
    M(g, box(0.16, 0.025, 0.03), mats.visor, 0.15 + i * 0.02, 0.78, 0.48);
  }
  M(g, box(0.04, 0.28, 0.22), mats.titanium, -0.2, 0.55, 0.62);
  M(g, box(0.02, 0.16, 0.12), mats.visor, -0.2, 0.55, 0.74);
  const glow = new THREE.PointLight(0xc6b0dc, 0.9, 3.2, 2);
  glow.position.set(0.1, 0.62, 0);
  g.add(glow);
  parent.add(g);
}

function buildMirror(scene: THREE.Scene, mats: Mats) {
  const g = new THREE.Group();
  const x = 99.7;
  const z = 30;
  const y = 0.52;
  g.position.set(x, y, z);
  const W = 4.3;
  const H = 2.85;
  M(g, box(0.16, 0.12, W), mats.titanium, 0, H, 0, { cast: true });
  M(g, box(0.16, 0.12, W), mats.titanium, 0, 0, 0, { cast: true });
  M(g, box(0.16, H, 0.12), mats.titanium, 0, H / 2, W / 2, { cast: true });
  M(g, box(0.16, H, 0.12), mats.titanium, 0, H / 2, -W / 2, { cast: true });
  M(g, box(0.06, H - 0.2, W - 0.24), mats.mirrorGlass, 0.02, H / 2, 0);
  // back structure, visible from the east
  M(g, box(0.1, H - 0.3, W - 0.5), mats.metalDark, 0.16, H / 2, 0);
  M(g, box(0.08, H, 0.08), mats.titanium, 0.22, H / 2, -0.8);
  M(g, box(0.08, H, 0.08), mats.titanium, 0.22, H / 2, 0.8);
  M(g, box(0.12, 0.16, 0.9), mats.titanium, 0, -0.02, 0);
  const fadeMat = trackMat(
    new THREE.MeshBasicMaterial({
      map: (scene.userData.avatar as LiveCanvas | undefined)?.tex,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    }),
  );
  // avatar canvas exists — buildAvatar runs before buildMirror
  const avatar = scene.userData.avatar as LiveCanvas;
  fadeMat.map = avatar.tex;
  const fade = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 1.7), fadeMat);
  fade.position.set(-0.06, H * 0.58, 0);
  fade.rotation.y = -Math.PI / 2;
  g.add(fade);
  scene.add(g);
  scene.userData.mirrorFade = fadeMat;
  scene.userData.mirrorPoint = new THREE.Vector3(x, y + H * 0.5, z);
}

function buildReport(scene: THREE.Scene, mats: Mats) {
  M(scene, box(12.6, 0.28, 0.55), mats.wallAlt, 109.2, 0.2, 32.4, { cast: true, receive: true });
  const reports = makeReports();
  const matsR = reports.map((r) => screenMaterial(r.tex, 0.55));
  const depths = [0, 0.18, 0.36];
  const widths = [4.05, 3.7, 3.55];
  reports.forEach((r, i) => {
    const x = 104.2 + i * 4.15;
    M(scene, box(widths[i] ?? 3.6, 2.15, 0.06), mats.titanium, x, 1.55, 32.15 - (depths[i] ?? 0), {
      cast: true,
    });
    const screen = M(
      scene,
      new THREE.PlaneGeometry((widths[i] ?? 3.6) - 0.22, 1.9),
      matsR[i] ?? mats.glass,
      x,
      1.55,
      32.1 - (depths[i] ?? 0),
    );
    screen.position.z += 0.04;
    // data trace
    M(scene, box((widths[i] ?? 3) * 0.8, 0.012, 0.012), mats.stripe, x, 0.55 + i * 0.08, 31.7 - i * 0.1);
  });
  scene.userData.reportMats = matsR;
  // consultation table, no clinician model
  M(scene, rbox(1.6, 0.08, 0.7, 0.03), mats.wood, 108.5, 0.74, 24.6, { cast: true });
  M(scene, box(0.06, 0.7, 0.06), mats.metalDark, 107.9, 0.36, 24.35);
  M(scene, box(0.06, 0.7, 0.06), mats.metalDark, 109.1, 0.36, 24.35);
  addChair(scene, mats, 108.5, 23.7, 0, false);
  const tab = makePlate("交流", "只谈已确认的内容");
  M(scene, new THREE.PlaneGeometry(0.42, 0.28), screenMaterial(tab.tex, 0.4), 109.15, 0.8, 24.6, { rx: -0.9 });
}

function buildExit(scene: THREE.Scene, mats: Mats) {
  M(scene, islandGeo(0.55, 0.4, 0.55, 18), mats.island, 118.2, 0.05, 24.2, { cast: true });
  const lamp = new THREE.PointLight(0xe6c2a2, 3.5, 7, 2);
  lamp.position.set(118.2, 0.9, 24.2);
  scene.add(lamp);
  const bead = new THREE.Mesh(trackGeo(new THREE.SphereGeometry(0.08, 16, 12)), mats.stripe);
  bead.position.set(118.2, 0.72, 24.2);
  scene.add(bead);
  const chart = makeSeaChart();
  M(scene, box(1.5, 0.9, 0.08), mats.titanium, 116.4, 1.35, 26.4, { cast: true });
  M(scene, new THREE.PlaneGeometry(1.35, 0.75), screenMaterial(chart.tex, 0.55), 116.4, 1.35, 26.32);
  M(scene, box(0.28, 2.5, 1.4), mats.wall, 122.5, 1.25, 21.6, { cast: true });
  M(scene, box(0.28, 2.5, 1.4), mats.wall, 122.5, 1.25, 25.4, { cast: true });
  M(scene, box(0.4, 0.2, 2.4), mats.titanium, 122.5, 2.55, 23.5);
}

function makeMotes(parent: THREE.Object3D, paths: readonly (readonly [number, number][])[]) {
  const map = glowTexture();
  const motes: World["motes"] = [];
  paths.forEach((pts, pi) => {
    const curve = curveFrom(pts, 0.2);
    const count = pi === 0 ? 8 : 5;
    for (let i = 0; i < count; i++) {
      const mat = trackMat(
        new THREE.SpriteMaterial({
          map,
          color: pi === 3 ? 0xd0a06a : i % 4 === 0 ? 0xb7a6d6 : 0x6ecfc6,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          opacity: 0.85,
        }),
      );
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(0.55, 0.55, 1);
      parent.add(sprite);
      motes.push({ sprite, curve, u: i / count, speed: 0.025 + (i % 3) * 0.008 });
    }
  });
  return motes;
}

void FONT;
