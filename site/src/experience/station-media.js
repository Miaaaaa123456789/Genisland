import { modelPath, sitePath } from '../site-paths'

export function createStationMedia(find, onFinish, signal) {
  const film = find('#stationFilm')
  const video = find('#stationVideo')
  const note = find('#filmNote')
  const sound = find('#sound')
  const dialog = find('#modelDialog')
  const model = find('#modelFrame')
  let current = null
  let pending = false
  let soundEnabled = false
  let resumeOnReturn = false

  function finish() {
    if (!pending) return
    pending = false
    onFinish()
  }

  function clear() {
    current = null
    pending = false
    resumeOnReturn = false
    film.hidden = true
    video.pause()
    if (video.hasAttribute('src')) {
      video.removeAttribute('src')
      video.load()
    }
  }

  function updateSoundButton() {
    const audible = current ? !video.muted && video.volume > 0 : soundEnabled
    sound.textContent = audible ? '关闭原声' : '打开原声'
    sound.setAttribute('aria-pressed', String(audible))
  }

  function play() {
    const name = current
    void video.play().catch((error) => {
      if (name !== current || error.name !== 'NotAllowedError') return
      if (video.muted) {
        note.textContent = '此浏览器限制自动播放，请点击影片的播放键。'
        return
      }
      video.muted = true
      play()
    })
  }

  function show(station, autoPlayFilm) {
    clear()
    current = station.film ?? null
    if (!current) {
      updateSoundButton()
      return false
    }

    pending = true
    film.hidden = false
    const filmPath = sitePath('assets/films/' + current)
    video.poster = filmPath + '.webp'
    video.setAttribute('aria-label', station.name + '影片')
    video.muted = !soundEnabled
    note.textContent = station.silentFilm ? '这段影片无音轨。' : '影片保留原声，可随时暂停。'
    video.src = filmPath + '.mp4'
    updateSoundButton()
    if (autoPlayFilm && !document.hidden) play()
    return true
  }

  function toggleSound() {
    soundEnabled = current ? video.muted || video.volume === 0 : !soundEnabled
    video.muted = !soundEnabled
    if (soundEnabled && video.volume === 0) video.volume = 1
    updateSoundButton()
  }

  video.addEventListener('volumechange', updateSoundButton, { signal })
  video.addEventListener('ended', () => {
    if (video.ended) finish()
  }, { signal })
  video.addEventListener('error', () => {
    if (!current || !video.error) return
    note.textContent = '影片暂时无法播放，可继续看本站说明。'
    finish()
  }, { signal })

  function openModel() {
    video.pause()
    model.src = modelPath
    dialog.showModal()
  }

  find('#closeModel').addEventListener('click', () => dialog.close(), { signal })
  dialog.addEventListener('close', () => model.removeAttribute('src'), { signal })
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      resumeOnReturn = pending && !video.paused
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
    pause() {
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
