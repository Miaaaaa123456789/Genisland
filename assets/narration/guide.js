// Scroll-led narration cues. Recording paths are supplied through manifest.json.
// Missing recordings remain captions; browser speech synthesis is never used.
(async () => {
  const manifest = await fetch('assets/narration/manifest.json').then(r => r.json())
  const tracks = manifest.tracks
  const panel = document.createElement('aside')
  panel.className = 'narration-dock'
  panel.setAttribute('aria-live', 'polite')
  panel.innerHTML = '<div class="narration-head"><span>空间导览</span><button type="button" aria-label="暂停导览" id="narrationToggle">暂停</button></div><p id="narrationCaption">沿航线前行，场景会在这里得到说明。</p><small id="narrationState">滚动开始讲解</small>'
  document.body.append(panel)
  const caption = panel.querySelector('#narrationCaption')
  const state = panel.querySelector('#narrationState')
  const toggle = panel.querySelector('#narrationToggle')
  const audio = new Audio()
  audio.preload = 'none'
  audio.id = 'narrAudio'
  audio.style.display = 'none'
  document.body.appendChild(audio)
  let pendingTrack = null
  const resumePending = () => {
    const t = pendingTrack; pendingTrack = null
    if (t && active === t.id) { active = ''; show(t) }
  }
  let active = '', enabled = true, token = 0, timer = 0, speaking = false, faded = 0
  // External hold: the embedded 3D scene plays its own track, so page narration waits.
  let held = false
  window.genislandNarrationHold = v => { held = !!v; if (held) stop(); else active = '' }
  // 自动跟随：旁白换段时把对应区块平滑滚入视野；访客手动滚动后暂停跟随 12 秒。
  let follow = true, followPauseTimer = 0
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
  function scrollToTrack(track) {
    if (!follow || !track || held || reducedMotion) return
    const el = document.querySelector(track.selector)
    if (!el) return
    const r = el.getBoundingClientRect()
    // 已经在视口中上部就不动，避免抖动
    if (r.top < innerHeight * .45 && r.bottom > innerHeight * .6) return
    window.scrollTo({ top: window.scrollY + r.top - innerHeight * .18, behavior: 'smooth' })
  }
  let userScrollAt = 0
  window.addEventListener('wheel', () => { follow = false; clearTimeout(followPauseTimer); followPauseTimer = setTimeout(() => { follow = true }, 12000) }, { passive: true })
  window.addEventListener('touchmove', () => { follow = false; clearTimeout(followPauseTimer); followPauseTimer = setTimeout(() => { follow = true }, 12000) }, { passive: true })
  window.genislandNarrationFollow = () => follow
  const available = new Set(tracks.filter(t => t.audio).map(t => t.id))
  function setSpeaking(value) {
    speaking = value
    window.genislandNarration = { get speaking() { return speaking }, get held() { return held } }
    window.genislandAudio?.setNarration(value)
  }
  function stop() {
    token++
    cancelAnimationFrame(faded)
    if (audio.paused) { setSpeaking(false); return }
    const id = token, start = performance.now(), volume = audio.volume
    const fade = now => {
      if (id !== token) return
      const p = Math.min(1, (now - start) / 350)
      audio.volume = volume * (1 - p)
      if (p < 1) faded = requestAnimationFrame(fade)
      else { audio.pause(); audio.currentTime = 0; audio.volume = 1; setSpeaking(false) }
    }
    faded = requestAnimationFrame(fade)
  }
  async function show(track) {
    if (!enabled || held || !track || active === track.id) return
    // 由三维体验承载旁白的区块（#genesis），不在此重复播报
    if (track.handledBy === 'genesis-3d') { active = track.id; return }
    active = track.id
    clearTimeout(timer)
    const wasPlaying = !audio.paused
    stop()
    caption.textContent = track.text
    panel.dataset.current = track.id
    if (track.kind === 'section') scrollToTrack(track)
    if (!available.has(track.id)) {
      state.textContent = '导览字幕 · 正式配音待制作'
      return
    }
    // 占位音（温润女声合成）：能听，但明确标注，待正式录音替换
    const placeholder = track.source === 'system-synth-placeholder' || track.source === 'system-synth-warm'
    if (placeholder) state.textContent = '导览播放中 · 配音样带'
    // A playing video is the current voice. The narration waits for its end.
    const clip = track.selector.startsWith('#s0') && +track.id.slice(1) <= 3
    if (clip && window.genislandAudio?.isVideoAudible()) {
      state.textContent = '此段由视频原声讲述'
      return
    }
    const id = token
    if (wasPlaying) {
      await new Promise(resolve => setTimeout(resolve, 380))
      if (id !== token || !enabled) return
    }
    audio.src = track.audio
    audio.volume = 0
    try {
      await audio.play()
      if (id !== token) { audio.pause(); return }
      setSpeaking(true)
      state.textContent = placeholder ? '导览播放中 · 配音样带' : '旁白播放中'
      const started = performance.now()
      const rise = now => {
        if (id !== token) return
        audio.volume = Math.min(.9, .9 * (now - started) / 450)
        if (audio.volume < .9) faded = requestAnimationFrame(rise)
      }
      faded = requestAnimationFrame(rise)
    } catch (err) {
      // 自动播放策略拦截：字幕先走，等首次手势后补播这一段。
      state.textContent = '点击页面任意处开始旁白'
      pendingTrack = track
      window.removeEventListener('pointerdown', resumePending)
      window.addEventListener('pointerdown', resumePending, { once: true })
    }
  }
  audio.addEventListener('ended', () => {
      setSpeaking(false)
      state.textContent = '本段已结束'
      // 自动导览：本段播完约 1.2 秒后前进到下一个 section；手动滚动后暂停此行为。
      if (!follow || held || reducedMotion) return
      clearTimeout(timer)
      timer = setTimeout(() => {
        const cur = tracks.findIndex(t => t.id === panel.dataset.current)
        for (let k = cur + 1; k < tracks.length; k++) {
          const nx = tracks[k]
          if (nx.kind !== 'section') continue
          const el = document.querySelector(nx.selector)
          if (!el) continue
          active = ''
          show(nx)
          return
        }
      }, 1200)
    })
  toggle.addEventListener('click', () => {
    enabled = !enabled
    toggle.textContent = enabled ? '暂停' : '继续'
    toggle.setAttribute('aria-label',enabled ? '暂停导览' : '继续导览')
    if (!enabled) { active = ''; stop(); panel.classList.add('paused') }
    else { panel.classList.remove('paused'); active = ''; const id = panel.dataset.current; show(tracks.find(t => t.id === id) || tracks[0]) }
  })
  /* 兜底看门狗：音频被策略拦住（paused 且停在 0）时，按字幕长度估算节奏推进字幕与前进，
     保证自动导览不因无声环境而卡死。 */
  setInterval(() => {
    if (!active || speaking || !audio.paused) return
    if (audio.currentTime > 0) return
    // 处于「被拦截」状态：累计无声音时间，超过 6 秒强制前进
    if (!window.__narrSilentSince) window.__narrSilentSince = Date.now()
    if (Date.now() - window.__narrSilentSince > 6000) {
      window.__narrSilentSince = 0
      if (!follow || held) return
      const cur = tracks.findIndex(t => t.id === panel.dataset.current)
      for (let k = cur + 1; k < tracks.length; k++) {
        const nx = tracks[k]
        if (nx.kind !== 'section') continue
        if (!document.querySelector(nx.selector)) continue
        active = ''
        show(nx)
        return
      }
    }
  }, 1500)
  const sections = tracks.filter(t => t.kind === 'section').map(t => ({ track:t, element:document.querySelector(t.selector) })).filter(x => x.element)
  const visible = new Map()
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const item = sections.find(x => x.element === entry.target)
      if (item) visible.set(item.track.id,entry.isIntersecting ? entry.intersectionRatio : 0)
    }
    clearTimeout(timer)
    timer = setTimeout(() => {
      const [id,ratio] = [...visible].sort((a,b) => (b[1]+(b[0].startsWith('sensory-')||b[0].startsWith('proof-')?.08:0))-(a[1]+(a[0].startsWith('sensory-')||a[0].startsWith('proof-')?.08:0)))[0] || []
      if (ratio > .15) show(tracks.find(t => t.id === id))
    }, 500)
  }, {threshold:[0,.15,.3,.5,.75]})
  sections.forEach(x => observer.observe(x.element))
  tracks.filter(t => t.kind === 'control').forEach(track => {
    const element = document.querySelector(track.selector)
    element?.addEventListener('click',() => show(track))
  })
  document.addEventListener('visibilitychange',() => { if (document.hidden) stop() })
  // 浏览器自动播放策略：音频需要一次用户手势。首次交互后解锁并补播被拦下的当前段。
  const unlockCtx = () => {
    try { const C = window.AudioContext || window.webkitAudioContext; if (C) { const c = new C(); c.resume?.(); setTimeout(() => c.close?.(), 1200) } } catch (_) {}
  }
  function onFirstGesture() {
    unlockCtx()
    const id = panel.dataset.current
    if (id) { active = ''; const t = tracks.find(x => x.id === id); if (t) show(t) }
    window.removeEventListener('pointerdown', onFirstGesture)
    window.removeEventListener('keydown', onFirstGesture)
  }
  window.addEventListener('pointerdown', onFirstGesture, { once: true })
  window.addEventListener('keydown', onFirstGesture, { once: true })
  // 自动开讲：页面就绪后 2.5 秒从第一段开始（音频若被策略拦下，首次手势后由 onFirstGesture 补播）。
  setTimeout(() => {
    if (!active && !held && enabled) {
      const first = tracks.find(t => t.kind === 'section' && document.querySelector(t.selector))
      if (first) show(first)
    }
  }, 2500)
  window.genislandNarration = { get speaking() { return speaking }, get held() { return held } }
})().catch(err => console.warn('Narration manifest unavailable',err))
