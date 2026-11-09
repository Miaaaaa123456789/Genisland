import { startAtmosphere } from './atmosphere.js'
import { createEffects } from './effects.js'
import { createStationMedia } from './station-media.js'
import { stations } from './stations'
import { sitePath } from '../site-paths'

const OPENING_DELAY = 5000
const READING_DELAY = 12000
const BRANCH_DELAY = 5200
const LAST_STATION = stations.length - 1

const formatNumber = (number) => String(number).padStart(2, '0')

export function mountExperience(host) {
  const lifecycle = new AbortController()
  const { signal } = lifecycle
  const find = (selector) => host.querySelector(selector)
  const onClick = (selector, callback) => {
    find(selector).addEventListener('click', callback, { signal })
  }
  const world = find('#world')
  const panorama = find('#panorama')
  const scenePlate = find('#scenePlate')
  const sceneDepth = find('#sceneDepth')
  const transition = find('#cinematicTransition')
  const panel = find('#chapterPanel')
  const evidencePanel = find('#stationEvidence')
  const evidenceSources = find('#evidenceSources')
  const branch = find('#branchChoice')
  const opening = find('#opening')
  const tourControls = ['#topline', '#transport', '#hint'].map(find)
  const facts = find('#facts')
  const detailToggle = find('#detailToggle')
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)')
  const effects = createEffects(find('#cinemaFx'))
  const stationMedia = createStationMedia(find, () => schedule(READING_DELAY), signal, () => clearTimeout(timer))

  const visitTrail = []
  let selected = -1
  let entered = false
  let openingAutoStart = true
  let autoplay = false
  let autoPausedByUser = false
  let route = null
  let timer
  let openingTimer
  let sceneFrame
  let scale = 1
  let drag = null

  function showOverview() {
    stationMedia.clear()
    cancelAnimationFrame(sceneFrame)
    visitTrail.length = 0
    selected = -1
    route = null
    panel.classList.remove('open')
    evidencePanel.hidden = true
    branch.classList.remove('open')
    world.classList.remove('focused')
    scenePlate.classList.remove('visible')
    sceneDepth.classList.remove('visible')
    effects.setChapter(-1)
    find('#chapter').textContent = '全景 · ' + stations.length + ' 个空间'
    find('#mission').textContent = '从医院序厅，到下一次启航'
    find('#progressFill').style.width = '0%'
    find('#counter').textContent = '00 / ' + formatNumber(LAST_STATION)
    panorama.style.backgroundPosition = 'center'
    panorama.style.transform = 'scale(' + scale + ')'
  }

  function setDetails(expanded) {
    facts.classList.toggle('expanded', expanded)
    detailToggle.setAttribute('aria-expanded', String(expanded))
    detailToggle.innerHTML = expanded
      ? '收起设计细节 <span>－</span>'
      : '展开空间与专业设计 <span>＋</span>'
  }

  function showEvidence(evidence) {
    find('#evidenceTopic').textContent = evidence.topic
    find('#evidenceSummary').textContent = evidence.summary
    const links = evidence.sources.map(({ label, url }) => {
      const link = document.createElement('a')
      link.href = url
      link.target = '_blank'
      link.rel = 'noopener noreferrer'
      link.textContent = label + ' ↗'
      return link
    })
    evidenceSources.replaceChildren(...links)
    evidenceSources.hidden = links.length === 0
    evidencePanel.hidden = false
  }

  function focus(index) {
    const station = stations[index]
    if (!station) return
    clearTimeout(timer)
    selected = index
    effects.setChapter(index)
    setDetails(autoplay)
    world.classList.add('focused')
    panel.classList.add('open')
    branch.classList.remove('open')
    scenePlate.classList.remove('visible')
    sceneDepth.classList.remove('visible')
    transition.classList.remove('run')
    void transition.offsetWidth
    transition.classList.add('run')

    const sceneImage = sitePath('assets/' + station.img)
    for (const layer of [scenePlate, sceneDepth]) {
      layer.style.backgroundImage = 'url("' + sceneImage + '")'
      layer.style.backgroundPosition = station.pan
    }
    world.dataset.chapter = String(index)
    cancelAnimationFrame(sceneFrame)
    sceneFrame = requestAnimationFrame(() => {
      sceneFrame = requestAnimationFrame(() => {
        scenePlate.classList.add('visible')
        sceneDepth.classList.add('visible')
      })
    })

    const chapterNumber = formatNumber(index)
    find('#chapter').textContent = chapterNumber + ' / ' + station.loc
    find('#mission').textContent = station.name
    find('#panelKicker').textContent = chapterNumber + '  /  ' + station.loc
    find('#panelTitle').textContent = station.name
    find('#sceneAction').textContent = station.action + '  ↗'
    find('#panelLead').textContent = station.lead
    showEvidence(station.evidence)
    const image = find('#panelImage')
    image.src = sceneImage
    image.alt = station.name + '概念画面'
    find('#panelCaption').textContent = station.caption
    panel.dataset.gallery = String(Boolean(station.secondaryImg))
    const secondary = find('#panelSecondary')
    secondary.hidden = !station.secondaryImg
    if (station.secondaryImg) secondary.src = sitePath('assets/' + station.secondaryImg)

    facts.replaceChildren(...station.facts.map(([label, content]) => {
      const row = document.createElement('div')
      row.className = 'fact'
      const heading = document.createElement('b')
      heading.textContent = label
      const description = document.createElement('p')
      description.textContent = content
      row.append(heading, description)
      return row
    }))

    find('#progressFill').style.width = (index / LAST_STATION * 100) + '%'
    find('#counter').textContent = chapterNumber + ' / ' + formatNumber(LAST_STATION)
    panorama.style.backgroundPosition = station.pan
    panel.scrollTop = 0
    find('#openModel').hidden = index !== LAST_STATION
    if (!stationMedia.show(station, autoplay || !reducedMotion.matches)) schedule(READING_DELAY)
  }

  function visit(index, nextRoute = route) {
    visitTrail.push({ index: selected, route })
    route = nextRoute
    focus(index)
  }

  function schedule(delay) {
    clearTimeout(timer)
    if (autoplay && !document.hidden && selected <= LAST_STATION) {
      timer = setTimeout(() => {
        if (selected === LAST_STATION) {
          setAuto(false)
          stationMedia.openModel()
        } else advance()
      }, delay)
    }
  }

  function setAuto(enabled) {
    autoplay = enabled
    clearTimeout(timer)
    const play = find('#play')
    play.textContent = enabled ? '暂停自动播放' : '自动播放'
    play.setAttribute('aria-pressed', String(enabled))
  }

  function advance() {
    if (selected === 5 && !branch.classList.contains('open')) {
      stationMedia.clear()
      panel.classList.remove('open')
      evidencePanel.hidden = true
      branch.classList.add('open')
      schedule(BRANCH_DELAY)
      return
    }
    if (selected === 6 && route !== null) {
      visit(8)
      return
    }
    if (selected >= LAST_STATION) {
      setAuto(false)
      showOverview()
      return
    }
    visit(selected + 1)
  }

  function setEntered(value) {
    entered = value
    opening.classList.toggle('hidden', value)
    opening.inert = value
    for (const control of tourControls) control.classList.toggle('active', value)
  }

  function enter(withRoute) {
    clearTimeout(openingTimer)
    const fromOpening = !entered
    setEntered(true)
    autoPausedByUser = !withRoute
    setAuto(withRoute)
    if (!withRoute) showOverview()
    else if (fromOpening) focus(0)
    else visit(0, null)
  }

  function goBack() {
    autoPausedByUser = true
    setAuto(false)
    if (branch.classList.contains('open')) {
      focus(selected)
      return
    }
    const previous = visitTrail.pop()
    if (previous?.index >= 0) {
      route = previous.route
      focus(previous.index)
    } else if (previous) {
      showOverview()
    } else {
      showOverview()
      setEntered(false)
      openingAutoStart = false
      queueOpening()
      find('#enter').focus({ preventScroll: true })
    }
  }

  function queueOpening() {
    clearTimeout(openingTimer)
    const automatic = openingAutoStart && !reducedMotion.matches
    find('#openingStatus').textContent = automatic
      ? '约 5 秒后自动开始 · 逐站播放原声与介绍 · 最后自动进入 3D 全景'
      : '选择「从第一站开始」即可逐站自动播放 · 最后自动进入 3D 全景'
    if (!entered && !document.hidden && automatic) {
      openingTimer = setTimeout(() => enter(true), OPENING_DELAY)
    }
  }

  onClick('#enter', () => enter(true))
  onClick('#enterMap', () => enter(false))
  function leaveStation() {
    autoPausedByUser = true
    setAuto(false)
    showOverview()
  }
  onClick('#overview', leaveStation)
  onClick('#back', leaveStation)
  onClick('#previous', goBack)
  onClick('#sceneAction', () => {
    effects.regenerate()
    const action = find('#sceneAction')
    action.classList.remove('activated')
    void action.offsetWidth
    action.classList.add('activated')
  })
  onClick('#detailToggle', () => {
    setDetails(!facts.classList.contains('expanded'))
  })
  onClick('#advance', advance)
  onClick('#next', advance)
  onClick('#play', () => {
    if (autoplay) {
      autoPausedByUser = true
      setAuto(false)
      stationMedia.pause()
      return
    }
    if (selected < 0 || selected === LAST_STATION) {
      enter(true)
      return
    }
    autoPausedByUser = false
    setAuto(true)
    setDetails(true)
    if (branch.classList.contains('open')) schedule(BRANCH_DELAY)
    else if (!stationMedia.resume()) schedule(READING_DELAY)
  })
  for (const button of host.querySelectorAll('[data-stop]')) {
    button.addEventListener('click', () => {
      if (!entered) {
        clearTimeout(openingTimer)
        setEntered(true)
      }
      setAuto(!autoPausedByUser)
      visit(Number(button.dataset.stop), null)
    }, { signal })
  }
  for (const button of host.querySelectorAll('[data-branch]')) {
    button.addEventListener('click', () => {
      const choice = Number(button.dataset.branch)
      visit(choice, choice)
    }, { signal })
  }
  onClick('#sound', stationMedia.toggleSound)
  onClick('#openModel', () => {
    autoPausedByUser = true
    setAuto(false)
    stationMedia.openModel()
  })

  document.addEventListener('visibilitychange', () => {
    if (!entered) queueOpening()
    else if (document.hidden) clearTimeout(timer)
    else if (autoplay && !stationMedia.isPending()) {
      schedule(branch.classList.contains('open') ? BRANCH_DELAY : READING_DELAY)
    }
  }, { signal })
  reducedMotion.addEventListener('change', queueOpening, { signal })
  queueOpening()

  world.addEventListener('pointerdown', (event) => {
    if (event.target.closest('button')) return
    drag = { x: event.clientX, y: event.clientY }
    world.classList.add('grabbing')
    world.setPointerCapture(event.pointerId)
  }, { signal })
  world.addEventListener('pointermove', (event) => {
    effects.move(event.clientX, event.clientY)
    world.style.setProperty('--pointer-x', ((event.clientX / innerWidth - 0.5) * 24).toFixed(1) + 'px')
    world.style.setProperty('--pointer-y', ((event.clientY / innerHeight - 0.5) * 14).toFixed(1) + 'px')
    if (!drag) return
    const translation = Math.max(-70, Math.min(70, (event.clientX - drag.x) * 0.3))
    panorama.style.transform = 'translateX(' + translation + 'px) scale(' + scale + ')'
    world.classList.add('dragging')
  }, { signal })
  function stopDragging() {
    drag = null
    world.classList.remove('grabbing', 'dragging')
  }
  world.addEventListener('pointerup', (event) => {
    if (drag && Math.abs(event.clientX - drag.x) + Math.abs(event.clientY - drag.y) < 8) {
      effects.interact(event.clientX, event.clientY)
    }
    stopDragging()
  }, { signal })
  world.addEventListener('pointercancel', stopDragging, { signal })
  world.addEventListener('wheel', (event) => {
    event.preventDefault()
    scale = Math.max(1, Math.min(1.38, scale + (event.deltaY < 0 ? 0.055 : -0.055)))
    if (selected < 0) panorama.style.transform = 'scale(' + scale + ')'
  }, { passive: false, signal })
  document.addEventListener('keydown', (event) => {
    if (find('#modelDialog').open || event.defaultPrevented || event.target.closest?.('video')) return
    if (event.key === 'Escape' && entered) leaveStation()
    if (event.key === 'ArrowRight' && entered) advance()
  }, { signal })

  void startAtmosphere(find('#atmosphere'), signal)

  return () => {
    lifecycle.abort()
    clearTimeout(timer)
    clearTimeout(openingTimer)
    cancelAnimationFrame(sceneFrame)
    stationMedia.clear()
    effects.dispose()
  }
}
