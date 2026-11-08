/**
 * 版本: 2026.11.08-islands
 * 文件来源: 梓笙园动线网页工作区 /workspace/src/experience/engine.ts
 * 文件内容: 交互引擎。开场环视、拖拽旋转、缩放、平移、点击走位、沿动线浏览、剖切与外壳切换、悬停光晕和信息层。
 * 说明: 本文件是该版本的源码存档，不替代仓库根目录 index.html 与 atlas/ 静态入口。
 */
import * as THREE from "three";
import { AudioBus } from "./audio";
import { CAMERAS, STATIONS, type StationId } from "./content";
import { disposeAssets } from "./geom";
import { paintAvatar, paintRing, paintTable, paintWave } from "./screens";
import { buildWorld, type World } from "./world";

export type EngineHooks = {
  onSelect: (id: StationId | null) => void;
  onHover: (id: StationId | null, x: number, y: number) => void;
  onReady: () => void;
  onError: (message: string) => void;
  onTour: (active: boolean) => void;
};

export type Engine = {
  goto: (id: StationId | "overview") => void;
  tour: () => void;
  stop: () => void;
  setShell: (full: boolean) => void;
  setMuted: (muted: boolean) => void;
  nudge: () => void;
  confirmAvatar: () => void;
  pulseCampus: () => void;
  focusReport: (layer: number) => void;
  dispose: () => void;
};

type Pose = { p: [number, number, number]; t: [number, number, number]; d: number };

const TOUR: Pose[] = [
  { p: [2, 2.2, 16], t: [8, 1.2, 24], d: 3.4 },
  { p: [12, 1.85, 19], t: [20, 1.55, 28], d: 3.6 },
  { p: [22, 2.4, 18], t: [34, 1.4, 31.5], d: 3.8 },
  { p: [38, 1.75, 26], t: [46, 1.5, 31], d: 2.6 },
  { p: [44.4, 1.68, 30.92], t: [56.2, 1.5, 31], d: 4.4 },
  { p: [58, 2.6, 22], t: [64, 0.9, 30], d: 3.4 },
  { p: [68, 4.2, 20], t: [84, 0.5, 30], d: 3.2 },
  { p: [78, 1.85, 40], t: [86.5, 1.1, 45.2], d: 3.6 },
  { p: [80, 4.2, 30], t: [86, 0.7, 15], d: 3.0 },
  { p: [76, 1.9, 20], t: [85, 0.9, 14.2], d: 3.4 },
  { p: [90, 2.3, 23], t: [99.5, 1.65, 30], d: 3.4 },
  { p: [103, 2.1, 20], t: [112, 1.4, 32], d: 3.6 },
  { p: [113, 1.85, 18], t: [120, 1.15, 24], d: 3.2 },
];

export function mountExperience(canvas: HTMLCanvasElement, hooks: EngineHooks): Engine {
  let disposed = false;
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setClearColor(0x10141a, 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.28;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.08, 240);
  const world = buildWorld(scene, renderer);
  const audio = new AudioBus();
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const target = new THREE.Vector3(...CAMERAS.overview.t);
  const spherical = new THREE.Spherical();
  const overviewLook = new THREE.Vector3(...CAMERAS.overview.t);
  const overviewBase = new THREE.Vector3(...CAMERAS.overview.p);
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const introDur = reduce ? 0.2 : 1.35;

  let mode: "intro" | "fly" | "tour" | "free" = "intro";
  let introT = 0;
  let selected: StationId | null = null;
  let hoverId: StationId | null = null;
  let hoverSince = 0;
  let hoverShown: StationId | null = null;
  let pulse = 0;
  let shellFull = false;
  let raf = 0;
  let last = performance.now();
  let screenAcc = 0;
  let dragging = false;
  let moved = 0;
  let lastX = 0;
  let lastY = 0;
  let pinch = 0;
  let flyFromP = new THREE.Vector3();
  let flyToP = new THREE.Vector3();
  let flyFromT = new THREE.Vector3();
  let flyToT = new THREE.Vector3();
  let flyU = 0;
  let flyDur = 1.6;
  let tourTime = 0;
  const tourTotal = TOUR.slice(0, -1).reduce((sum, k) => sum + k.d, 0);

  const placeIntro = (yaw: number) => {
    const offset = overviewBase.clone().sub(overviewLook);
    const c = Math.cos(yaw);
    const s = Math.sin(yaw);
    camera.position.set(
      overviewLook.x + offset.x * c - offset.z * s,
      overviewBase.y,
      overviewLook.z + offset.x * s + offset.z * c,
    );
    target.copy(overviewLook);
    camera.lookAt(target);
  };
  placeIntro(-0.06);

  const syncSpherical = () => {
    spherical.setFromVector3(camera.position.clone().sub(target));
  };

  const applySpherical = () => {
    spherical.phi = THREE.MathUtils.clamp(spherical.phi, 0.22, 1.45);
    spherical.radius = THREE.MathUtils.clamp(spherical.radius, 4, 90);
    const offset = new THREE.Vector3().setFromSpherical(spherical);
    camera.position.copy(target).add(offset);
    camera.lookAt(target);
  };

  const armFree = () => {
    mode = "free";
    syncSpherical();
    hooks.onTour(false);
  };

  const startFly = (p: [number, number, number], t: [number, number, number], dur = 1.65) => {
    flyFromP.copy(camera.position);
    flyFromT.copy(target);
    flyToP.set(p[0], p[1], p[2]);
    flyToT.set(t[0], t[1], t[2]);
    flyU = 0;
    flyDur = reduce ? 0.35 : dur;
    mode = "fly";
    hooks.onTour(false);
  };

  const resize = () => {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    const aspect = w / Math.max(1, h);
    renderer.setSize(w, h, false);
    camera.aspect = aspect;
    camera.fov = aspect < 0.9 ? 24 : 40;
    camera.updateProjectionMatrix();
    const u = world.particles.uniforms.uPixel;
    if (u) u.value = renderer.getPixelRatio();
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);

  const pick = (clientX: number, clientY: number) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(world.hits, false)[0];
    const direct = (hit?.object.userData.station as StationId | undefined) ?? null;
    if (direct) return direct;
    camera.updateMatrixWorld();
    let best: StationId | null = null;
    let bestPx = 96;
    const probe = new THREE.Vector3();
    for (const s of STATIONS) {
      probe.set(s.x, 1.6, s.z).project(camera);
      if (probe.z < -1 || probe.z > 1) continue;
      const sx = (probe.x * 0.5 + 0.5) * rect.width + rect.left;
      const sy = (-probe.y * 0.5 + 0.5) * rect.height + rect.top;
      const d = Math.hypot(sx - clientX, sy - clientY);
      if (d < bestPx) {
        bestPx = d;
        best = s.id;
      }
    }
    return best;
  };

  const nudgeCloser = () => {
    if (mode !== "free") armFree();
    spherical.radius = THREE.MathUtils.clamp(spherical.radius * 0.72, 4, 90);
    applySpherical();
  };

  const goto = (id: StationId | "overview") => {
    const cam = CAMERAS[id];
    startFly(cam.p, cam.t, id === "03" ? 2.1 : 1.7);
    selected = id === "overview" ? null : id;
    hooks.onSelect(selected);
    if (selected) audio.setZone(selected);
  };

  const onPointerDown = (e: PointerEvent) => {
    if (e.pointerType === "touch") return;
    if (e.button !== 0 && e.button !== 2 && e.button !== 1) return;
    dragging = true;
    moved = 0;
    lastX = e.clientX;
    lastY = e.clientY;
    canvas.setPointerCapture(e.pointerId);
    void audio.unlock();
  };
  const onPointerMove = (e: PointerEvent) => {
    if (e.pointerType === "touch") return;
    if (!dragging) {
      const id = pick(e.clientX, e.clientY);
      const now = performance.now();
      if (id !== hoverId) {
        hoverId = id;
        hoverSince = now;
        if (hoverShown) {
          hoverShown = null;
          hooks.onHover(null, 0, 0);
        }
      } else if (id && hoverShown === id) {
        hooks.onHover(id, e.clientX, e.clientY);
      } else if (id && now - hoverSince > 1000) {
        hoverShown = id;
        hooks.onHover(id, e.clientX, e.clientY);
      }
      return;
    }
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    moved += Math.abs(dx) + Math.abs(dy);
    if (moved > 3 && mode !== "free") armFree();
    if (mode !== "free") return;
    if (e.buttons === 2 || e.buttons === 4) {
      camera.updateMatrix();
      const right = new THREE.Vector3().setFromMatrixColumn(camera.matrix, 0);
      const up = new THREE.Vector3().setFromMatrixColumn(camera.matrix, 1);
      const scale = spherical.radius * 0.0014;
      target.addScaledVector(right, -dx * scale);
      target.addScaledVector(up, dy * scale);
      target.y = THREE.MathUtils.clamp(target.y, 0, 8);
      applySpherical();
    } else {
      spherical.theta -= dx * 0.008;
      spherical.phi -= dy * 0.006;
      applySpherical();
    }
  };
  const onPointerUp = (e: PointerEvent) => {
    if (e.pointerType === "touch") return;
    if (!dragging) return;
    dragging = false;
    if (moved < 5) {
      const id = pick(e.clientX, e.clientY);
      if (id) goto(id);
      else nudgeCloser();
    }
  };
  const onWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (mode !== "free") armFree();
    spherical.radius = THREE.MathUtils.clamp(spherical.radius * Math.exp(e.deltaY * 0.0011), 4, 90);
    void audio.unlock();
  };
  const onContext = (e: Event) => e.preventDefault();
  const onTouchStart = (e: TouchEvent) => {
    void audio.unlock();
    if (e.touches.length === 1) {
      dragging = true;
      moved = 0;
      const t = e.touches[0];
      if (!t) return;
      lastX = t.clientX;
      lastY = t.clientY;
    } else if (e.touches.length === 2) {
      const a = e.touches[0];
      const b = e.touches[1];
      if (!a || !b) return;
      pinch = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      if (mode !== "free") armFree();
    }
  };
  const onTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    if (e.touches.length === 2) {
      const a = e.touches[0];
      const b = e.touches[1];
      if (!a || !b || pinch <= 0) return;
      const d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      if (mode !== "free") armFree();
      spherical.radius = THREE.MathUtils.clamp(spherical.radius * (pinch / d), 4, 90);
      pinch = d;
      return;
    }
    const t = e.touches[0];
    if (!t || !dragging) return;
    const dx = t.clientX - lastX;
    const dy = t.clientY - lastY;
    lastX = t.clientX;
    lastY = t.clientY;
    moved += Math.abs(dx) + Math.abs(dy);
    if (moved > 4 && mode !== "free") armFree();
    if (mode !== "free") return;
    spherical.theta -= dx * 0.009;
    spherical.phi -= dy * 0.007;
    applySpherical();
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (e.touches.length > 0) return;
    if (moved < 8 && dragging) {
      const t = e.changedTouches[0];
      if (t) {
        const id = pick(t.clientX, t.clientY);
        if (id) goto(id);
        else nudgeCloser();
      }
    }
    dragging = false;
    pinch = 0;
  };

  canvas.addEventListener("pointerdown", onPointerDown);
  canvas.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);
  canvas.addEventListener("wheel", onWheel, { passive: false });
  canvas.addEventListener("contextmenu", onContext);
  canvas.addEventListener("touchstart", onTouchStart, { passive: true });
  canvas.addEventListener("touchmove", onTouchMove, { passive: false });
  canvas.addEventListener("touchend", onTouchEnd);

  const smooth = (u: number) => u * u * (3 - 2 * u);
  const lerpPose = (a: Pose, b: Pose, u: number) => {
    camera.position.set(
      THREE.MathUtils.lerp(a.p[0], b.p[0], u),
      THREE.MathUtils.lerp(a.p[1], b.p[1], u),
      THREE.MathUtils.lerp(a.p[2], b.p[2], u),
    );
    target.set(
      THREE.MathUtils.lerp(a.t[0], b.t[0], u),
      THREE.MathUtils.lerp(a.t[1], b.t[1], u),
      THREE.MathUtils.lerp(a.t[2], b.t[2], u),
    );
    camera.lookAt(target);
  };

  const tick = (now: number) => {
    if (disposed) return;
    raf = requestAnimationFrame(tick);
    const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
    last = now;
    const t = now / 1000;

    if (mode === "intro") {
      introT += dt;
      const u = smooth(Math.min(1, introT / introDur));
      placeIntro(THREE.MathUtils.lerp(-0.06, 0, u));
      if (u >= 1) armFree();
    } else if (mode === "fly") {
      flyU += dt / flyDur;
      const u = smooth(Math.min(1, flyU));
      camera.position.lerpVectors(flyFromP, flyToP, u);
      target.lerpVectors(flyFromT, flyToT, u);
      camera.lookAt(target);
      if (flyU >= 1) armFree();
    } else if (mode === "tour") {
      tourTime += dt;
      if (tourTime >= tourTotal) {
        armFree();
      } else {
        let acc = 0;
        for (let i = 0; i < TOUR.length - 1; i++) {
          const a = TOUR[i];
          const b = TOUR[i + 1];
          if (!a || !b) break;
          if (tourTime <= acc + a.d) {
            lerpPose(a, b, smooth((tourTime - acc) / a.d));
            break;
          }
          acc += a.d;
        }
      }
    } else {
      applySpherical();
    }

    world.particles.uniforms.uTime && (world.particles.uniforms.uTime.value = t);
    for (const mote of world.motes) {
      const step = dt * mote.speed;
      mote.u = Number.isFinite(mote.u + step) ? (mote.u + step) % 1 : 0;
      if (mote.u < 0) mote.u += 1;
      const p = mote.curve.points.length > 1 ? mote.curve.getPoint(Math.min(mote.u, 0.999)) : null;
      if (p) mote.sprite.position.set(p.x, 0.38 + Math.sin(t * 2 + mote.u * 8) * 0.05, p.z);
    }
    world.confirmMat.opacity = world.confirmed ? 0.45 + Math.sin(t * 3) * 0.28 : 0.12;
    if (pulse > 0) {
      pulse = Math.max(0, pulse - dt);
      world.holo.opacity = 0.35 + Math.abs(Math.sin(t * 5)) * 0.6;
    } else {
      world.holo.opacity = THREE.MathUtils.damp(world.holo.opacity, 0.42, 2, dt);
    }
    for (const [id, mat] of world.halos) {
      const goal = id === selected || id === hoverShown ? 0.95 : 0;
      mat.opacity = THREE.MathUtils.damp(mat.opacity, goal, 5, dt);
    }
    for (const [id, lamp] of world.lights) {
      const goal = id === selected ? lamp.hot : lamp.base;
      lamp.light.intensity = THREE.MathUtils.damp(lamp.light.intensity, goal, 3, dt);
    }
    const layout = world.layouts[world.layoutIndex] ?? world.layouts[0];
    if (layout) {
      world.islands.forEach((mesh, i) => {
        const p = layout[i];
        if (!p) return;
        mesh.position.x = THREE.MathUtils.damp(mesh.position.x, p[0], 2.8, dt);
        mesh.position.z = THREE.MathUtils.damp(mesh.position.z, p[1], 2.8, dt);
      });
    }
    const buf = world.linePos;
    let ptr = 0;
    let segments = 0;
    for (let i = 0; i < world.islands.length; i++) {
      for (let j = i + 1; j < world.islands.length; j++) {
        const a = world.islands[i];
        const b = world.islands[j];
        if (!a || !b) continue;
        const dist = Math.hypot(a.position.x - b.position.x, a.position.z - b.position.z);
        if (dist < 1.25 && ptr + 6 <= buf.length) {
          buf[ptr++] = a.position.x;
          buf[ptr++] = 0.05;
          buf[ptr++] = a.position.z;
          buf[ptr++] = b.position.x;
          buf[ptr++] = 0.05;
          buf[ptr++] = b.position.z;
          segments++;
        }
      }
    }
    const attr = world.lines.geometry.getAttribute("position") as THREE.BufferAttribute;
    attr.needsUpdate = true;
    world.lines.geometry.setDrawRange(0, segments * 2);

    const dist = camera.position.distanceTo(world.mirrorPoint);
    const mirrorGoal = selected === "06" ? 0.78 : dist < 9 ? THREE.MathUtils.clamp(1.2 - dist / 9, 0, 0.8) : 0;
    world.mirrorFade.opacity = THREE.MathUtils.damp(world.mirrorFade.opacity, mirrorGoal, 3, dt);
    world.reportMats.forEach((mat, i) => {
      const hot = world.reportFocus === i;
      mat.emissiveIntensity = THREE.MathUtils.damp(mat.emissiveIntensity, hot ? 1.2 : 0.55, 4, dt);
    });
    world.detail.visible = camera.position.y < 22;

    screenAcc += dt;
    if (screenAcc > 0.09) {
      screenAcc = 0;
      paintAvatar(world.avatar, Math.sin(t * 0.7));
      paintRing(world.ring, t);
      paintTable(world.table, t * 0.4);
      paintWave(world.wave, t);
    }
    audio.tick(t);
    let nearest: StationId = "00";
    let best = Infinity;
    for (const s of STATIONS) {
      const d2 = (camera.position.x - s.x) ** 2 + (camera.position.z - s.z) ** 2;
      if (d2 < best) {
        best = d2;
        nearest = s.id;
      }
    }
    audio.setZone(selected ?? nearest);
    renderer.render(scene, camera);
  };
  raf = requestAnimationFrame(tick);
  hooks.onReady();

  return {
    goto,
    tour: () => {
      tourTime = 0;
      mode = "tour";
      selected = null;
      hooks.onSelect(null);
      hooks.onTour(true);
      void audio.unlock();
    },
    stop: () => armFree(),
    setShell: (full: boolean) => {
      shellFull = full;
      world.shell.visible = shellFull;
    },
    setMuted: (muted: boolean) => {
      audio.setMuted(muted);
      if (!muted) void audio.unlock();
    },
    nudge: () => {
      world.layoutIndex = (world.layoutIndex + 1) % world.layouts.length;
    },
    confirmAvatar: () => {
      world.confirmed = true;
    },
    pulseCampus: () => {
      pulse = 4;
    },
    focusReport: (layer: number) => {
      world.reportFocus = layer;
    },
    dispose: () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("wheel", onWheel);
      canvas.removeEventListener("contextmenu", onContext);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
      disposeAssets();
      renderer.dispose();
      renderer.forceContextLoss();
    },
  };
}
