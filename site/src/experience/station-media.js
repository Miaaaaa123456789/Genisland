import { modelPath, sitePath } from '../site-paths'

export function createStationMedia(find, onFinish, signal, onPlayback = () => {}) {
  const film = find('#stationFilm')
  const video = find('#stationVideo')
  const note = find('#filmNote')
  const sound = find('#sound')
  const enableAudio = find('#enableAudio')
  const dialog = find('#modelDialog')
  const model = find('#modelFrame')
  let current = null
  let pending = false
  let soundEnabled = true
  let soundBlocked = false
  let playbackFailed = false
  let playbackAttempt = 0
  let resumeOnReturn = false

  function finish() {
    if (!pending) return
    pending = false
    onFinish()
  }

  function clear() {
    current = null
    pending = false
    soundBlocked = false
    playbackFailed = false
    enableAudio.textContent = '开启原声并继续 ▶'
    enableAudio.hidden = true
    playbackAttempt += 1
    resumeOnReturn = false
    film.hidden = true
    video.pause()
    if (video.hasAttribute('src')) {
      video.removeAttribute('src')
      video.load()
    }
    updateSoundButton()
  }

  function isSoundOn() {
    if (!current || current.silentFilm) return soundEnabled
    return !video.muted && video.volume > 0
  }

  function updateSoundButton() {
    const audible = isSoundOn()
    sound.textContent = audible ? '关闭原声' : '打开原声'
    sound.setAttribute('aria-pressed', String(audible))
  }

  function showFilmNote() {
    note.textContent = current.silentFilm ? '这段影片无音轨。' : '影片保留原声，可随时暂停。'
  }

  function play() {
    const attempt = ++playbackAttempt
    void video.play().catch((error) => {
      if (attempt !== playbackAttempt || !current || !pending) return
      if (error.name !== 'NotAllowedError') {
        playbackFailed = true
        soundBlocked = true
        enableAudio.textContent = '重试播放并继续 ▶'
        enableAudio.hidden = false
        note.textContent = '影片未能启动，请点按「重试播放并继续」；也可以点「下一站」继续浏览。'
        return
      }
      if (video.muted) {
        note.textContent = '此浏览器限制自动播放，请点击影片的播放键。'
        return
      }
      // Keep original audio enabled: never silently replace it with muted playback.
      soundBlocked = true
      enableAudio.hidden = false
      note.textContent = '原声默认已开启，但浏览器阻止了有声自动播放。只需点按「开启原声并继续」，后续节点将按顺序播放。'
      updateSoundButton()
    })
  }

  function show(station, autoPlayFilm) {
    clear()
    if (!station.film) return false

    current = station
    pending = true
    film.hidden = false
    const filmPath = sitePath('assets/films/' + station.film)
    video.poster = filmPath + '.webp'
    video.setAttribute('aria-label', station.name + '影片')
    video.muted = !soundEnabled || Boolean(station.silentFilm)
    showFilmNote()
    video.src = filmPath + '.mp4'
    updateSoundButton()
    if (autoPlayFilm && !document.hidden) play()
    return true
  }

  function applySound() {
    const wasBlocked = soundBlocked
    const resumeWithSound = wasBlocked && Boolean(current)
    soundBlocked = false
    playbackFailed = false
    enableAudio.textContent = '开启原声并继续 ▶'
    enableAudio.hidden = true
    video.muted = !soundEnabled || Boolean(current?.silentFilm)
    if (soundEnabled && video.volume === 0) video.volume = 1
    updateSoundButton()
    if (wasBlocked) showFilmNote()
    if (resumeWithSound) play()
  }

  function toggleSound() {
    soundEnabled = !isSoundOn()
    applySound()
  }

  enableAudio.addEventListener('click', () => {
    if (!playbackFailed) soundEnabled = true
    applySound()
  }, { signal })
  // A native replay/seek starts a new viewing cycle. Cancel the old reading
  // timer immediately, or it can cut off a replay halfway through.
  function beginPlayback() {
    if (!current || video.ended) return
    pending = true
    onPlayback()
  }
  video.addEventListener('play', beginPlayback, { signal })
  video.addEventListener('seeking', beginPlayback, { signal })
  video.addEventListener('playing', () => {
    beginPlayback()
    soundBlocked = false
    playbackFailed = false
    enableAudio.textContent = '开启原声并继续 ▶'
    enableAudio.hidden = true
    if (current) showFilmNote()
    updateSoundButton()
  }, { signal })
  video.addEventListener('volumechange', () => {
    if (current && !current.silentFilm) soundEnabled = !video.muted && video.volume > 0
    updateSoundButton()
  }, { signal })
  video.addEventListener('ended', () => {
    if (video.ended) finish()
  }, { signal })
  video.addEventListener('error', () => {
    if (!current || !video.error) return
    soundBlocked = false
    playbackFailed = false
    enableAudio.textContent = '开启原声并继续 ▶'
    enableAudio.hidden = true
    note.textContent = '影片暂时无法播放，可继续看本站说明。'
    finish()
  }, { signal })

  function reconcileEnd() {
    // Some mobile media engines omit ended after a seek, suspension or decode tail.
    // Never advance a buffering clip or an explicitly paused mid-film frame.
    if (current && pending && !video.seeking && (video.ended ||
      (video.paused && Number.isFinite(video.duration) && video.duration > 0 &&
       video.currentTime >= video.duration - 0.05))) finish()
  }

  function openModel() {
    playbackAttempt += 1
    video.pause()
    model.src = modelPath
    dialog.showModal()
  }

  find('#closeModel').addEventListener('click', () => dialog.close(), { signal })
  dialog.addEventListener('close', () => model.removeAttribute('src'), { signal })
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      resumeOnReturn = pending && !video.paused
      playbackAttempt += 1
      video.pause()
    } else if (resumeOnReturn && pending) {
      resumeOnReturn = false
      play()
    }
  }, { signal })

  return {
    show,
    clear,
    openModel,
    toggleSound,
    isPending: () => pending,
    reconcileEnd,
    playbackStatus: () => playbackFailed ? '影片未能启动 · 请重试播放或选择下一站' : soundBlocked ? '请先点按影片下方「开启原声并继续」'
      : pending ? (video.paused ? '影片已暂停，点播放键继续' : '正在播放本站影片 · 播完自动前往下一站') : '',
    pause() {
      playbackAttempt += 1
      resumeOnReturn = false
      video.pause()
    },
    resume() {
      if (!pending) return false
      play()
      return true
    },
  }
}
