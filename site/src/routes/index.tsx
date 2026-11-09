import { createFileRoute } from '@tanstack/react-router'
import { type CSSProperties, useEffect, useRef } from 'react'
import { mountExperience } from '../experience/controller.js'
import evidenceStyles from '../experience/station-evidence.css?url'
import { stations } from '../experience/stations'
import { sitePath } from '../site-paths'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: '梓笙园 AI 体验中心｜生成式群岛' },
      { name: 'description', content: '沿真实动线构想的沉浸式生成体验中心视觉 Demo' },
    ],
    links: [
      { rel: 'stylesheet', href: sitePath('style.css') },
      { rel: 'stylesheet', href: sitePath('films.css?v=3') },
      { rel: 'stylesheet', href: evidenceStyles },
    ],
  }),
  component: Experience,
})

function Experience() {
  const experience = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (experience.current) return mountExperience(experience.current)
  }, [])

  return (
    <div ref={experience}>
      <div className="grain" aria-hidden="true" />
      <main id="app">
        <Panorama />
        <canvas id="atmosphere" aria-hidden="true" />
        <canvas id="cinemaFx" aria-hidden="true" />
        <header className="header">
          <div className="brand">
            <span className="brandmark">✧</span>
            <span>梓笙园 <em>AI 体验中心</em></span>
          </div>
          <div className="header-right">
            <span className="demo-tag">VISUAL DEMO · 概念演示</span>
            <button id="sound" className="icon film-sound" type="button" aria-pressed="true">关闭原声</button>
          </div>
        </header>
        <Opening />
        <div className="topline" id="topline">
          <span id="chapter">全景 · {stations.length} 个空间</span>
          <span id="mission">从医院序厅，到下一次启航</span>
        </div>
        <ChapterPanel />
        <BranchChoice />
        <nav className="transport" id="transport" aria-label="动线控制">
          <button id="previous" type="button"><span aria-hidden="true">←</span> 返回</button>
          <button id="overview" type="button">◇ <span>全景</span></button>
          <div className="progress"><div id="progressFill" /></div>
          <span id="counter">00 / {stations.length - 1}</span>
          <button id="play" type="button" aria-pressed="false">自动播放</button>
          <button id="next" type="button" aria-label="下一站">→</button>
        </nav>
        <div className="hint" id="hint">拖动全景 · 滚轮缩放 · 点击站点</div>
      </main>
      <dialog id="modelDialog" aria-labelledby="modelTitle">
        <div className="model-toolbar">
          <h2 id="modelTitle">梓笙园 AI 体验中心 · 3D 全景</h2>
          <button type="button" id="closeModel">关闭全景</button>
        </div>
        <iframe id="modelFrame" title="梓笙园 AI 体验中心可交互三维全景" />
      </dialog>
    </div>
  )
}

function Panorama() {
  return (
    <section className="world" id="world" aria-label="体验中心动线全景">
      <div className="panorama" id="panorama" />
      <div className="scene-plate" id="scenePlate" aria-hidden="true" />
      <div className="scene-depth" id="sceneDepth" aria-hidden="true" />
      <div className="scene-beam" id="sceneBeam" aria-hidden="true" />
      <div className="cinematic-transition" id="cinematicTransition" aria-hidden="true" />
      <div className="veil" />
      <div className="route-line" aria-hidden="true">
        <svg viewBox="0 0 1000 470" preserveAspectRatio="none">
          <path d="M90 359 C160 350 168 294 230 285 S324 243 390 237 S497 198 548 184 C607 168 616 244 668 249 S755 163 823 144 S883 123 929 113" />
        </svg>
      </div>
      <div id="hotspots" className="hotspots">
        {stations.map((station, index) => (
          <button
            key={station.name}
            className="hotspot"
            type="button"
            data-stop={index}
            style={{ '--x': station.x + '%', '--y': station.y + '%' } as CSSProperties}
            aria-label={'查看' + station.name}
          >
            <b>{String(index).padStart(2, '0')}</b><span>{station.name}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

function Opening() {
  return (
    <div className="opening" id="opening">
      <div className="eyebrow">A VOYAGE THAT BEGINS WITH YOU</div>
      <h1>每一次登岛，<br /><i>世界都会重新生成。</i></h1>
      <p>
        从情绪被看见，到关系被重新书写。<br />
        这是医院为青少年设计的心理体验空间。<br />
        跟着一位来访者看短片，了解每个空间可以做什么。
      </p>
      <div className="opening-actions">
        <button className="primary" id="enter" type="button">从第一站开始 <span>↗</span></button>
        <button className="opening-map" id="enterMap" type="button">先看动线图</button>
      </div>
      <div className="opening-note">
        <span id="openingStatus">约 5 秒后自动开始 · 最后一站可打开 3D 全景</span>
      </div>
    </div>
  )
}

function ChapterPanel() {
  return (
    <section className="chapter-panel" id="chapterPanel" aria-live="polite">
      <div className="panel-kicker" id="panelKicker" />
      <h2 id="panelTitle" />
      <p className="panel-lead" id="panelLead" />
      <aside className="station-evidence" id="stationEvidence" aria-labelledby="evidenceHeading" hidden>
        <div className="evidence-heading">
          <h3 id="evidenceHeading">循证要点</h3>
          <span id="evidenceTopic" />
        </div>
        <p id="evidenceSummary" />
        <nav className="evidence-sources" id="evidenceSources" aria-label="循证来源" hidden />
      </aside>
      <div className="station-film" id="stationFilm" hidden>
        <video id="stationVideo" controls playsInline preload="metadata" />
        <p id="filmNote" />
      </div>
      <button className="scene-action" id="sceneAction" type="button" />
      <div className="panel-image">
        <img id="panelImage" alt="" />
        <img id="panelSecondary" alt="报告厅专业复核场景" hidden />
        <div className="image-caption" id="panelCaption" />
      </div>
      <button className="detail-toggle" id="detailToggle" type="button" aria-expanded="false">
        展开空间与专业设计 <span>＋</span>
      </button>
      <div className="facts" id="facts" />
      <p className="interaction-tip" id="interactionTip">移动鼠标或点击画面，观察空间回应。</p>
      <button id="openModel" className="model-button" type="button" hidden>打开完整 3D 全景 ↗</button>
      <div className="panel-actions">
        <button id="back" type="button">返回全景</button>
        <button id="advance" type="button">继续航行 <span>→</span></button>
      </div>
    </section>
  )
}

function BranchChoice() {
  return (
    <div className="branch-choice" id="branchChoice" role="group" aria-label="选择体验支路">
      <div className="eyebrow">THE ROUTE SPLITS HERE</div>
      <h2>在这里，航线分开。</h2>
      <p>两条路径会在镜映空间再次相遇。自动播放会依次展示两条支路，也可以选一条先看。</p>
      <div className="branch-buttons">
        <button type="button" data-branch="6">隐秘个人岛 <small>情境练习 / 舒缓调节</small></button>
        <button type="button" data-branch="7">共创空间 <small>留下作品 / 与人连接</small></button>
      </div>
    </div>
  )
}
