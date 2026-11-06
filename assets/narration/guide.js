// Scroll-led narration cues. Recording paths are supplied through manifest.json.
// Missing recordings remain captions; browser speech synthesis is never used.
(async () => {
  const manifest = await fetch('assets/narration/manifest.json').then(r => r.json())
  const tracks = manifest.tracks
  const panel = document.createElement('aside')
  panel.className = 'narration-dock'
  panel.setAttribute('aria-live', 'polite')
  panel.innerHTML = '<div class="narration-head"><span>空间导览</span><button type="button" aria-label="暂停导览" id="narrationToggle">暂停</button></div><p id="narrationCaption">沿航线前行，场景会在这里得到说明。</p><small id="narrationState">字幕随画面出现 · 正式配音待制作</small>'
  document.body.append(panel)
  const caption = panel.querySelector('#narrationCaption')
  const state = panel.querySelector('#narrationState')
  const toggle = panel.querySelector('#narrationToggle')
  const audio = new Audio()
  audio.preload = 'none'
  let active = '', enabled = true, token = 0, timer = 0, speaking = false, faded = 0
  const available = new Set(tracks.filter(t => t.audio).map(t => t.id))
  function setSpeaking(value) {
    speaking = value
    window.genislandNarration = { get speaking() { return speaking } }
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
    if (!enabled || !track || active === track.id) return
    active = track.id
    clearTimeout(timer)
    const wasPlaying = !audio.paused
    stop()
    caption.textContent = track.text
    panel.dataset.current = track.id
    if (!available.has(track.id)) {
      state.textContent = '导览字幕 · 正式配音待制作'
      return
    }
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
      state.textContent = '旁白播放中'
      const started = performance.now()
      const rise = now => {
        if (id !== token) return
        audio.volume = Math.min(.9, .9 * (now - started) / 450)
        if (audio.volume < .9) faded = requestAnimationFrame(rise)
      }
      faded = requestAnimationFrame(rise)
    } catch {
      state.textContent = '导览字幕 · 点击首页「开启声音」后可听正式录音'
    }
  }
  audio.addEventListener('ended', () => { setSpeaking(false); state.textContent = '本段已结束' })
  toggle.addEventListener('click', () => {
    enabled = !enabled
    toggle.textContent = enabled ? '暂停' : '继续'
    toggle.setAttribute('aria-label',enabled ? '暂停导览' : '继续导览')
    if (!enabled) { active = ''; stop(); panel.classList.add('paused') }
    else { panel.classList.remove('paused'); active = ''; const id = panel.dataset.current; show(tracks.find(t => t.id === id) || tracks[0]) }
  })
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
  window.genislandNarration = { get speaking() { return speaking } }
})().catch(err => console.warn('Narration manifest unavailable',err))
