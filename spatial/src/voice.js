// Prerecorded Chinese narration; no browser speech synthesis. One audible source at a time.
export function createVoice({ onState, onCaption }) {
  const audio = new Audio()
  audio.preload = 'none'
  let enabled = false, timer = 0, current = -1, sequence = 0, fade = 0, blocked = false
  const parent = window.parent !== window ? window.parent : null
  function notify(state) { onState(state); parent?.postMessage({ source: 'genisland-tour', type: state }, location.origin) }
  function stop() {
    clearTimeout(timer); cancelAnimationFrame(fade); sequence++
    if (!audio.paused) {
      const initial = audio.volume, start = performance.now(), id = sequence
      const tick = now => {
        if (id !== sequence) return
        const t = Math.min(1, (now - start) / 260)
        audio.volume = initial * (1 - t)
        if (t < 1) fade = requestAnimationFrame(tick)
        else { audio.pause(); audio.currentTime = 0; audio.volume = 1; notify('voice-end') }
      }
      fade = requestAnimationFrame(tick)
    } else notify('voice-end')
  }
  async function play(index) {
    if (!enabled || blocked || index < 0 || current === index) return
    stop(); current = index
    audio.src = `audio/guide-${String(index + 1).padStart(2, '0')}.mp3`
    audio.volume = 0
    try {
      await audio.play()
      notify('voice-start')
      const id = sequence, start = performance.now()
      const rise = now => {
        if (id !== sequence) return
        audio.volume = Math.min(.92, .92 * (now - start) / 420)
        if (audio.volume < .92) fade = requestAnimationFrame(rise)
      }
      fade = requestAnimationFrame(rise)
    } catch { onCaption('请先点击「开启讲解」，即可收听语音。') }
  }
  audio.addEventListener('ended', () => { current = -1; notify('voice-end') })
  return {
    enable() { enabled = true; blocked = false; onState('voice-ready') },
    disable() { enabled = false; current = -1; stop(); onState('voice-off') },
    // Leaving a hit target cancels only a pending cue; it never cuts off a spoken sentence.
    hover(index) { clearTimeout(timer); if (index < 0) return; if (enabled && !blocked && current !== index) timer = setTimeout(() => play(index), 900) },
    select(index) { if (enabled && !blocked) play(index) },
    block(value) { blocked = value; if (value) { current = -1; stop() } },
    get enabled() { return enabled }
  }
}
