/**
 * 版本: 2026.11.08-islands
 * 文件来源: 梓笙园动线网页工作区 /workspace/src/experience/screens.ts
 * 文件内容: 屏幕内容。形象线框、环幕、圆桌、报告分层、海图和院区立面等画布贴图。人物只出现在屏幕上，不作为空间里的模型。
 * 说明: 本文件是该版本的源码存档，不替代仓库根目录 index.html 与 atlas/ 静态入口。
 */
import * as THREE from "three";
import { FONT, canvasTex } from "./geom";

export type LiveCanvas = {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  tex: ReturnType<typeof canvasTex>;
};

function ctx2d(w: number, h: number): LiveCanvas {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("2d");
  const tex = canvasTex(canvas, true);
  return { canvas, ctx, tex };
}

export function makePlate(title: string, sub: string) {
  const live = ctx2d(512, 160);
  paintPlate(live, title, sub);
  return live;
}

function paintPlate(live: LiveCanvas, title: string, sub: string) {
  const { ctx } = live;
  ctx.clearRect(0, 0, 512, 160);
  ctx.fillStyle = "#14181c";
  ctx.fillRect(0, 0, 512, 160);
  ctx.strokeStyle = "rgba(110,207,198,0.85)";
  ctx.lineWidth = 4;
  ctx.strokeRect(10, 10, 492, 140);
  ctx.fillStyle = "#e7e4dc";
  ctx.font = `600 54px ${FONT}`;
  ctx.fillText(title, 32, 78);
  ctx.fillStyle = "#a7aba3";
  ctx.font = `400 28px ${FONT}`;
  ctx.fillText(sub, 32, 122);
  live.tex.needsUpdate = true;
}

export function makeCulture() {
  const titles = ["医院文化", "专业基础", "服务与目的"];
  const lines = [
    ["人的表达先于系统的解释", "空间、协作与照料"],
    ["既有临床路径仍在院内", "体验不改写诊疗流程"],
    ["确认、体验、再生成", "不自动给出评判"],
  ];
  return titles.map((title, i) => {
    const live = ctx2d(640, 360);
    const { ctx } = live;
    ctx.fillStyle = "#1a1e24";
    ctx.fillRect(0, 0, 640, 360);
    ctx.fillStyle = "#6ecfc6";
    ctx.fillRect(0, 0, 8, 360);
    ctx.fillStyle = "#e7e4dc";
    ctx.font = `600 48px ${FONT}`;
    ctx.fillText(title, 40, 90);
    ctx.fillStyle = "#c5c2b8";
    ctx.font = `400 30px ${FONT}`;
    ctx.fillText(lines[i]?.[0] ?? "", 40, 170);
    ctx.fillText(lines[i]?.[1] ?? "", 40, 220);
    ctx.strokeStyle = "rgba(208,160,106,0.45)";
    ctx.strokeRect(40, 270, 180, 2);
    live.tex.needsUpdate = true;
    return live;
  });
}

export function makeReports() {
  const liveA = ctx2d(768, 420);
  const liveB = ctx2d(768, 420);
  const liveC = ctx2d(768, 420);
  paintJourney(liveA);
  paintConfirmed(liveB);
  paintBasis(liveC);
  return [liveA, liveB, liveC] as const;
}

function panelBg(ctx: CanvasRenderingContext2D, w: number, h: number, accent: string) {
  ctx.fillStyle = "#12161b";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = accent;
  ctx.fillRect(0, 0, w, 6);
}

function paintJourney(live: LiveCanvas) {
  const { ctx } = live;
  panelBg(ctx, 768, 420, "#6ecfc6");
  ctx.fillStyle = "#e7e4dc";
  ctx.font = `600 36px ${FONT}`;
  ctx.fillText("本次航行足迹", 36, 70);
  ctx.fillStyle = "#9aa097";
  ctx.font = `400 22px ${FONT}`;
  ctx.fillText("只记录经过的空间，不含评分", 36, 108);
  const names = ["展厅", "形象", "岛屿", "走廊", "圆桌", "分叉", "镜映"];
  ctx.strokeStyle = "rgba(110,207,198,0.8)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(70, 230);
  ctx.bezierCurveTo(200, 160, 360, 300, 680, 200);
  ctx.stroke();
  names.forEach((n, i) => {
    const x = 70 + i * 98;
    const y = 230 + Math.sin(i * 0.9) * 36;
    ctx.fillStyle = i % 2 ? "#b7a6d6" : "#6ecfc6";
    ctx.beginPath();
    ctx.arc(x, y, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#d9d6cc";
    ctx.font = `400 20px ${FONT}`;
    ctx.fillText(n, x - 22, y + 32);
  });
  live.tex.needsUpdate = true;
}

function paintConfirmed(live: LiveCanvas) {
  const { ctx } = live;
  panelBg(ctx, 768, 420, "#b7a6d6");
  ctx.fillStyle = "#e7e4dc";
  ctx.font = `600 36px ${FONT}`;
  ctx.fillText("本人确认的表达", 36, 70);
  ctx.fillStyle = "#9aa097";
  ctx.font = `400 22px ${FONT}`;
  ctx.fillText("未经确认的内容不进入这面墙", 36, 108);
  const rows = [
    ["节律", "可视化波形，不是诊断读数"],
    ["笔触", "当次绘画的形态"],
    ["声音", "本人选择保留的片段"],
    ["选择", "形象、路线与是否进入支路"],
  ];
  rows.forEach((row, i) => {
    const y = 160 + i * 58;
    ctx.fillStyle = "rgba(183,166,214,0.18)";
    ctx.fillRect(36, y - 28, 690, 48);
    ctx.fillStyle = "#e7e4dc";
    ctx.font = `600 24px ${FONT}`;
    ctx.fillText(row[0] ?? "", 52, y);
    ctx.fillStyle = "#b7b3aa";
    ctx.font = `400 22px ${FONT}`;
    ctx.fillText(row[1] ?? "", 160, y);
  });
  live.tex.needsUpdate = true;
}

function paintBasis(live: LiveCanvas) {
  const { ctx } = live;
  panelBg(ctx, 768, 420, "#d0a06a");
  ctx.fillStyle = "#e7e4dc";
  ctx.font = `600 36px ${FONT}`;
  ctx.fillText("团队、技术与依据", 36, 70);
  const lines = [
    "院内专业团队仍负责临床判断。",
    "利笙、Copilot、小笙 JITAI、晚星",
    "是陪伴与流程界面，不是诊断者。",
    "本墙不提供疗效、风险或注册信息。",
    "可展开查看来源说明与适用边界。",
  ];
  ctx.font = `400 26px ${FONT}`;
  ctx.fillStyle = "#d5d1c6";
  lines.forEach((line, i) => ctx.fillText(line, 36, 140 + i * 46));
  live.tex.needsUpdate = true;
}

export function makeAvatar() {
  const live = ctx2d(1024, 768);
  paintAvatar(live, 0);
  return live;
}

export function paintAvatar(live: LiveCanvas, sway: number) {
  const { ctx } = live;
  ctx.fillStyle = "#12161c";
  ctx.fillRect(0, 0, 1024, 768);
  const bands = ["#6ecfc6", "#d0a06a", "#b7a6d6"];
  bands.forEach((c, i) => {
    ctx.fillStyle = c;
    ctx.globalAlpha = 0.85;
    ctx.fillRect(70, 160 + i * 36, 180, 18);
  });
  ctx.globalAlpha = 1;
  ctx.fillStyle = "#9aa097";
  ctx.font = `400 28px ${FONT}`;
  ctx.fillText("服装色带", 70, 130);
  ctx.fillText("声音与偏好", 70, 340);
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.strokeStyle = i === 1 ? "#e7e4dc" : "#3c444c";
    ctx.lineWidth = 3;
    ctx.arc(110 + i * 70, 400, 18, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.save();
  ctx.translate(560 + sway * 16, 400);
  ctx.strokeStyle = "#d5efe8";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(0, -150, 36, 46, 0, 0, Math.PI * 2);
  ctx.moveTo(0, -104);
  ctx.lineTo(0, 10);
  ctx.moveTo(-90, -30);
  ctx.lineTo(0, -70);
  ctx.lineTo(86, -18);
  ctx.moveTo(0, 10);
  ctx.lineTo(-46, 130);
  ctx.moveTo(0, 10);
  ctx.lineTo(52, 128);
  ctx.stroke();
  ctx.restore();
  ctx.beginPath();
  ctx.strokeStyle = "#6ecfc6";
  ctx.lineWidth = 2;
  ctx.arc(860, 180, 54, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(820, 190);
  ctx.quadraticCurveTo(860, 150, 900, 196);
  ctx.quadraticCurveTo(860, 214, 820, 190);
  ctx.stroke();
  ctx.fillStyle = "#9aa097";
  ctx.font = `400 26px ${FONT}`;
  ctx.fillText("岛屿徽章", 800, 270);
  ctx.strokeStyle = "rgba(110,207,198,0.35)";
  ctx.beginPath();
  ctx.moveTo(620, 390);
  ctx.lineTo(980, 390);
  ctx.stroke();
  ctx.fillStyle = "#6d756f";
  ctx.font = `400 22px ${FONT}`;
  ctx.fillText("可随体验更新  ·  不生成理想人格", 620, 640);
  live.tex.needsUpdate = true;
}

export function makeSeaChart() {
  const live = ctx2d(768, 420);
  const { ctx } = live;
  ctx.fillStyle = "#14181e";
  ctx.fillRect(0, 0, 768, 420);
  ctx.strokeStyle = "rgba(110,207,198,0.45)";
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 7; i++) {
    ctx.beginPath();
    ctx.moveTo(40, 80 + i * 28);
    for (let x = 40; x <= 720; x += 20) {
      const y = 80 + i * 28 + Math.sin(x * 0.02 + i) * 16 + Math.sin(x * 0.05) * 6;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  ctx.fillStyle = "#e7e4dc";
  ctx.font = `600 36px ${FONT}`;
  ctx.fillText("下一次，会是另一条航线", 48, 340);
  ctx.fillStyle = "#9aa097";
  ctx.font = `400 22px ${FONT}`;
  ctx.fillText("基于新的表达与状态，而不是同一份剧本", 48, 380);
  live.tex.needsUpdate = true;
  return live;
}

export function makeRingScreen() {
  const live = ctx2d(2048, 512);
  paintRing(live, 0);
  return live;
}

export function paintRing(live: LiveCanvas, t: number) {
  const { ctx } = live;
  const g = ctx.createLinearGradient(0, 0, 0, 512);
  g.addColorStop(0, "#141824");
  g.addColorStop(0.45, "#24343a");
  g.addColorStop(0.62, "#1a3a40");
  g.addColorStop(1, "#10161a");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 2048, 512);
  ctx.globalAlpha = 0.35;
  for (let i = 0; i < 18; i++) {
    ctx.fillStyle = i % 2 ? "#6ecfc6" : "#b7a6d6";
    ctx.fillRect((i * 180 + t * 40) % 2100, 40 + (i % 5) * 30, 90, 2);
  }
  ctx.globalAlpha = 1;
  ctx.fillStyle = "#0e1418";
  ctx.beginPath();
  ctx.moveTo(0, 360);
  for (let x = 0; x <= 2048; x += 16) {
    const y =
      300 +
      Math.sin(x * 0.008 + t) * 28 +
      Math.sin(x * 0.02 + t * 0.7) * 12 +
      Math.sin(x * 0.004) * 36;
    ctx.lineTo(x, y);
  }
  ctx.lineTo(2048, 512);
  ctx.lineTo(0, 512);
  ctx.fill();
  ctx.strokeStyle = "rgba(180,210,206,0.35)";
  ctx.stroke();
  live.tex.needsUpdate = true;
}

export function makeTableScreen() {
  const live = ctx2d(512, 512);
  paintTable(live, 0);
  return live;
}

export function paintTable(live: LiveCanvas, t: number) {
  const { ctx } = live;
  ctx.fillStyle = "#102226";
  ctx.fillRect(0, 0, 512, 512);
  ctx.save();
  ctx.translate(256, 256);
  ctx.rotate(t * 0.15);
  ctx.strokeStyle = "rgba(110,207,198,0.55)";
  ctx.lineWidth = 2;
  const pts: [number, number][] = [
    [-70, -20],
    [80, -60],
    [20, 70],
    [-90, 80],
    [110, 40],
  ];
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i];
    const b = pts[(i + 2) % pts.length];
    if (!a || !b) continue;
    ctx.beginPath();
    ctx.moveTo(a[0], a[1]);
    ctx.lineTo(b[0], b[1]);
    ctx.stroke();
  }
  pts.forEach((p, i) => {
    ctx.fillStyle = i % 2 ? "#c8b6e4" : "#8fd0c8";
    ctx.beginPath();
    ctx.ellipse(p[0], p[1], 28 + (i % 3) * 8, 18, i, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();
  live.tex.needsUpdate = true;
}

export function makeWave() {
  const live = ctx2d(256, 128);
  paintWave(live, 0);
  return live;
}

export function paintWave(live: LiveCanvas, t: number) {
  const { ctx } = live;
  ctx.fillStyle = "#101418";
  ctx.fillRect(0, 0, 256, 128);
  ctx.strokeStyle = "#6ecfc6";
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let x = 0; x < 256; x++) {
    const y = 64 + Math.sin(x * 0.08 + t * 2) * 18 + Math.sin(x * 0.03 + t) * 8;
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  live.tex.needsUpdate = true;
}

export function makeQuietIsland() {
  const live = ctx2d(640, 360);
  const { ctx } = live;
  const g = ctx.createLinearGradient(0, 0, 0, 360);
  g.addColorStop(0, "#1a1c24");
  g.addColorStop(1, "#101318");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 640, 360);
  ctx.fillStyle = "#2a3034";
  ctx.beginPath();
  ctx.moveTo(40, 250);
  ctx.quadraticCurveTo(180, 160, 320, 230);
  ctx.quadraticCurveTo(460, 140, 620, 240);
  ctx.lineTo(620, 320);
  ctx.lineTo(40, 320);
  ctx.fill();
  ctx.fillStyle = "#8d9390";
  ctx.font = `400 24px ${FONT}`;
  ctx.fillText("个人情境  ·  可按需要变化", 40, 56);
  live.tex.needsUpdate = true;
  return live;
}

export function makeNarrative() {
  const live = ctx2d(1024, 512);
  const { ctx } = live;
  ctx.fillStyle = "#16141a";
  ctx.fillRect(0, 0, 1024, 512);
  ctx.strokeStyle = "rgba(208,160,106,0.55)";
  ctx.lineWidth = 2;
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(60, 80 + i * 70);
    ctx.bezierCurveTo(300, 40 + i * 40, 640, 160 + i * 20, 960, 90 + i * 55);
    ctx.stroke();
  }
  ctx.fillStyle = "#e7e4dc";
  ctx.font = `500 32px ${FONT}`;
  ctx.fillText("各组不同的叙事线索", 60, 450);
  live.tex.needsUpdate = true;
  return live;
}

export function makeFacade() {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 512;
  const ctx = c.getContext("2d");
  if (!ctx) throw new Error("2d");
  ctx.fillStyle = "#c3c6cb";
  ctx.fillRect(0, 0, 256, 512);
  for (let i = 0; i < 1400; i++) {
    const v = 170 + ((i * 17) % 50);
    ctx.fillStyle = `rgba(${v},${v},${v + 4},0.18)`;
    ctx.fillRect((i * 37) % 256, (i * 19) % 512, 3, 2);
  }
  for (let y = 24; y < 490; y += 36) {
    for (let x = 16; x < 240; x += 28) {
      const lit = (x * 3 + y) % 17 > 12;
      ctx.fillStyle = lit ? "#e4d0ae" : "#667480";
      ctx.fillRect(x, y, 14, 20);
    }
  }
  return canvasTex(c, true);
}

export function makeStone() {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 512;
  const ctx = c.getContext("2d");
  if (!ctx) throw new Error("2d");
  ctx.fillStyle = "#4a5360";
  ctx.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 6000; i++) {
    const v = 22 + (i % 28);
    ctx.fillStyle = `rgba(${v + 8},${v + 10},${v + 12},0.35)`;
    ctx.fillRect((i * 53) % 512, (i * 97) % 512, 2, 2);
  }
  ctx.strokeStyle = "rgba(0,0,0,0.28)";
  ctx.lineWidth = 2;
  for (let i = 0; i <= 512; i += 128) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, 512);
    ctx.moveTo(0, i);
    ctx.lineTo(512, i);
    ctx.stroke();
  }
  const tex = canvasTex(c, true);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(8, 6);
  return tex;
}

export function makeRough() {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 256;
  const ctx = c.getContext("2d");
  if (!ctx) throw new Error("2d");
  const img = ctx.createImageData(256, 256);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = 150 + ((i * 13) % 80);
    img.data[i] = n;
    img.data[i + 1] = n;
    img.data[i + 2] = n;
    img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const tex = canvasTex(c, false);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(6, 6);
  return tex;
}
