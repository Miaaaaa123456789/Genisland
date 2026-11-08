/**
 * 版本: 2026.11.08-islands
 * 文件来源: 梓笙园动线网页工作区 /workspace/src/experience/Experience.tsx
 * 文件内容: 页面界面。全景画布、站点说明、迷你地图，以及全景、导览、剖切和静音控制。
 * 说明: 本文件是该版本的源码存档，不替代仓库根目录 index.html 与 atlas/ 静态入口。
 */
import { useEffect, useRef, useState } from "react";
import { Box, Compass, Route, Volume2, VolumeX } from "lucide-react";
import { STATIONS, neighbors, type StationId } from "./content";
import type { Engine } from "./engine";

type Hover = { id: StationId; x: number; y: number };

export function Experience() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Engine | null>(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<StationId | null>(null);
  const [hover, setHover] = useState<Hover | null>(null);
  const [more, setMore] = useState(false);
  const [shell, setShell] = useState(false);
  const [muted, setMuted] = useState(false);
  const [touring, setTouring] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let dead = false;
    let engine: Engine | null = null;
    void import("./engine").then(({ mountExperience }) => {
      if (dead || !canvasRef.current) return;
      try {
        engine = mountExperience(canvasRef.current, {
          onReady: () => {
            if (!dead) setReady(true);
          },
          onError: (message) => {
            if (!dead) setError(message);
          },
          onSelect: (id) => {
            if (dead) return;
            setSelected(id);
            setMore(false);
            setTouring(false);
          },
          onHover: (id, x, y) => {
            if (dead) return;
            setHover(id ? { id, x, y } : null);
          },
          onTour: (active) => {
            if (!dead) setTouring(active);
          },
        });
        engineRef.current = engine;
      } catch (err) {
        if (!dead) setError(err instanceof Error ? err.message : "空间未能生成");
      }
    });
    return () => {
      dead = true;
      engine?.dispose();
      engineRef.current = null;
    };
  }, []);

  const station = STATIONS.find((s) => s.id === selected) ?? null;
  const nav = station ? neighbors(station.id) : null;

  const go = (id: StationId | "overview") => engineRef.current?.goto(id);

  return (
    <div className="zs">
      <canvas ref={canvasRef} className="zs-canvas" aria-label="梓笙园三维动线" />
      <div className="zs-ui">
        <header className="zs-title">
          <p className="zs-kicker">医院内的生成式群岛</p>
          <h1>梓笙园</h1>
          <p>点下面的一站就会飞过去。拖拽旋转，滚轮或点空白处拉近。</p>
        </header>

        <div className="zs-controls" role="toolbar" aria-label="视角">
          <button type="button" onClick={() => go("overview")}>
            <Compass />
            全景
          </button>
          <button
            type="button"
            onClick={() => {
              if (touring) engineRef.current?.stop();
              else engineRef.current?.tour();
            }}
          >
            <Route />
            {touring ? "停止浏览" : "沿动线浏览"}
          </button>
          <button
            type="button"
            aria-pressed={shell}
            onClick={() => {
              const next = !shell;
              setShell(next);
              engineRef.current?.setShell(next);
            }}
          >
            <Box />
            {shell ? "剖切全景" : "完整外壳"}
          </button>
          <button
            type="button"
            aria-pressed={muted}
            onClick={() => {
              const next = !muted;
              setMuted(next);
              engineRef.current?.setMuted(next);
            }}
          >
            {muted ? <VolumeX /> : <Volume2 />}
            {muted ? "打开声音" : "静音"}
          </button>
        </div>

        <nav className="zs-route" aria-label="动线站点">
          {STATIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              aria-pressed={s.id === selected}
              onClick={() => go(s.id)}
            >
              {s.short}
            </button>
          ))}
        </nav>

        {station && nav && (
          <aside className="zs-panel" aria-live="polite">
            <p className="zs-kicker">
              {station.id} · {station.short}
            </p>
            <h2>{station.name}</h2>
            <p>{station.summary}</p>
            <p>
              <strong>设备</strong>
              {station.devices}
            </p>
            <p>
              <strong>位置</strong>
              {station.why}
            </p>
            {more && (
              <>
                <p>
                  <strong>依据</strong>
                  {station.basis}
                </p>
                <p>
                  <strong>边界</strong>
                  {station.limit}
                </p>
              </>
            )}
            <div className="zs-row">
              <button type="button" onClick={() => setMore((v) => !v)}>
                {more ? "收起说明" : "依据与边界"}
              </button>
              {station.id === "00" && (
                <button type="button" onClick={() => engineRef.current?.pulseCampus()}>
                  点亮院区轮廓
                </button>
              )}
              {station.id === "01" && (
                <button
                  type="button"
                  onClick={() => {
                    engineRef.current?.confirmAvatar();
                    setConfirmed(true);
                  }}
                >
                  {confirmed ? "形象已确认" : "确认初始形象"}
                </button>
              )}
              {station.id === "05B" && (
                <button type="button" onClick={() => engineRef.current?.nudge()}>
                  调整小岛距离
                </button>
              )}
              {station.id === "07" &&
                ["航行足迹", "已确认表达", "团队与依据"].map((label, i) => (
                  <button type="button" key={label} onClick={() => engineRef.current?.focusReport(i)}>
                    {label}
                  </button>
                ))}
            </div>
            <div className="zs-row">
              <button type="button" disabled={!nav.prev} onClick={() => nav.prev && go(nav.prev)}>
                上一站
              </button>
              {nav.choice ? (
                <>
                  <button type="button" onClick={() => go("05A")}>
                    先看个人岛
                  </button>
                  <button type="button" onClick={() => go("05B")}>
                    先看共创
                  </button>
                </>
              ) : (
                <button type="button" disabled={!nav.next} onClick={() => nav.next && go(nav.next)}>
                  下一站
                </button>
              )}
              {nav.alt && (
                <button type="button" onClick={() => nav.alt && go(nav.alt)}>
                  {nav.alt === "05A" ? "去看个人岛" : "去看共创"}
                </button>
              )}
              <button type="button" onClick={() => go("overview")}>
                返回全景
              </button>
            </div>
          </aside>
        )}

        {hover && (
          <div className="zs-hover" style={{ left: hover.x, top: hover.y }}>
            {STATIONS.find((s) => s.id === hover.id)?.name}
          </div>
        )}

        <p className="zs-status">
          {error ? error : ready ? "剖切全景 · 空间内没有人物" : "正在生成空间"}
        </p>
      </div>
    </div>
  );
}
