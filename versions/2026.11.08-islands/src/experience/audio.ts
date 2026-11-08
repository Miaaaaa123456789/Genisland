/**
 * 版本: 2026.11.08-islands
 * 文件来源: 梓笙园动线网页工作区 /workspace/src/experience/audio.ts
 * 文件内容: 声音。按区域切换的环境声，语音或视频开始时压低，结束后恢复。
 * 说明: 本文件是该版本的源码存档，不替代仓库根目录 index.html 与 atlas/ 静态入口。
 */
import type { StationId } from "./content";

type Bed = {
  gain: GainNode;
  filter: BiquadFilterNode;
};

export class AudioBus {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private beds = new Map<string, Bed>();
  private current = "hall";
  muted = false;
  private started = false;

  private ensure() {
    if (this.ctx) return;
    const ctx = new AudioContext();
    const master = ctx.createGain();
    master.gain.value = 0.18;
    master.connect(ctx.destination);
    const buffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    const specs: { id: string; type: BiquadFilterType; freq: number; q: number; vol: number }[] = [
      { id: "hall", type: "lowpass", freq: 380, q: 0.7, vol: 0.22 },
      { id: "wave", type: "lowpass", freq: 520, q: 0.9, vol: 0.28 },
      { id: "grit", type: "highpass", freq: 1800, q: 0.6, vol: 0.08 },
      { id: "drone", type: "lowpass", freq: 180, q: 1.2, vol: 0.32 },
      { id: "quiet", type: "lowpass", freq: 240, q: 0.5, vol: 0.08 },
      { id: "room", type: "bandpass", freq: 640, q: 0.8, vol: 0.12 },
    ];
    for (const spec of specs) {
      const src = ctx.createBufferSource();
      src.buffer = buffer;
      src.loop = true;
      const filter = ctx.createBiquadFilter();
      filter.type = spec.type;
      filter.frequency.value = spec.freq;
      filter.Q.value = spec.q;
      const gain = ctx.createGain();
      gain.gain.value = spec.id === "hall" ? spec.vol : 0;
      src.connect(filter);
      filter.connect(gain);
      gain.connect(master);
      src.start();
      this.beds.set(spec.id, { gain, filter });
    }
    this.ctx = ctx;
    this.master = master;
  }

  async unlock() {
    this.ensure();
    if (!this.ctx) return;
    if (this.ctx.state !== "running") await this.ctx.resume();
    this.started = true;
    this.applyMute();
  }

  setMuted(m: boolean) {
    this.muted = m;
    this.applyMute();
  }

  private applyMute() {
    if (!this.master || !this.ctx) return;
    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.linearRampToValueAtTime(this.muted || !this.started ? 0 : 0.18, now + 0.2);
  }

  setZone(id: StationId | "overview" | null) {
    if (!this.ctx) return;
    const key =
      id === "02"
        ? "wave"
        : id === "03"
          ? "grit"
          : id === "04"
            ? "drone"
            : id === "05A" || id === "06"
              ? "quiet"
              : id === "05B"
                ? "room"
                : "hall";
    if (key === this.current) return;
    this.current = key;
    const now = this.ctx.currentTime;
    for (const [name, bed] of this.beds) {
      const target =
        name === "hall" ? 0.16 : name === key ? (name === "grit" ? 0.1 : 0.3) : name === "hall" ? 0.16 : 0;
      const vol = name === key ? (name === "grit" ? 0.11 : name === "quiet" ? 0.07 : 0.28) : name === "hall" ? 0.12 : 0;
      bed.gain.gain.cancelScheduledValues(now);
      bed.gain.gain.linearRampToValueAtTime(vol, now + 0.8);
      void target;
    }
  }

  tick(time: number) {
    const wave = this.beds.get("wave");
    if (!wave || !this.ctx) return;
    wave.filter.frequency.value = 420 + Math.sin(time * 0.35) * 140;
  }
}
