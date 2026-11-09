import { readFile } from 'node:fs/promises'
import assert from 'node:assert/strict'
import test from 'node:test'
const source = (await readFile(new URL('../src/experience/station-media.js', import.meta.url), 'utf8'))
  .replace("import { modelPath, sitePath } from '../site-paths'", "const modelPath = '/model/'; const sitePath = p => '/' + p")
const { createStationMedia } = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'))
class Element extends EventTarget {
  hidden = true; muted = false; volume = 1; paused = true; attributes = {}; calls = []
  setAttribute(k, v) { this.attributes[k] = v }
  hasAttribute(k) { return k in this.attributes }
  removeAttribute(k) { delete this.attributes[k] }
  pause() { this.paused = true }
  load() {}
  play() {
    this.calls.push(this.muted)
    if (this.rejectPlay) return Promise.reject(Object.assign(new Error(), { name: 'NotAllowedError' }))
    this.paused = false
    this.dispatchEvent(new Event('playing'))
    return Promise.resolve()
  }
}
function setup(onFinish = () => {}, onPlayback = () => {}) {
  globalThis.document = new Element()
  document.hidden = false
  const elements = new Map()
  const find = k => { if (!elements.has(k)) elements.set(k, new Element()); return elements.get(k) }
  const media = createStationMedia(find, onFinish, new AbortController().signal, onPlayback)
  return { media, video: find('#stationVideo'), fallback: find('#enableAudio'), sound: find('#sound') }
}
const film = { film: 'test', name: 'test' }
test('automatically attempts original audio without any interaction', () => {
  const {media, video, fallback} = setup()
  media.show(film, true)
  assert.deepEqual(video.calls, [false])
  assert.equal(video.paused, false)
  assert.equal(fallback.hidden, true)
})
test('blocked autoplay stays unmuted and one explicit action starts original audio', async () => {
  const {media, video, fallback} = setup()
  video.rejectPlay = true
  media.show(film, true)
  await Promise.resolve()
  assert.deepEqual(video.calls, [false])
  assert.equal(video.muted, false)
  assert.equal(fallback.hidden, false)
  video.rejectPlay = false
  fallback.dispatchEvent(new Event('click'))
  assert.equal(video.paused, false)
  assert.equal(video.muted, false)
  assert.equal(fallback.hidden, true)
  media.show({...film, film:'next'}, true)
  assert.equal(video.muted, false)
})
test('explicit mute persists across stations and can be reversed', () => {
  const {media, video} = setup()
  media.show(film, true)
  media.toggleSound()
  media.show({...film, film:'next'}, true)
  assert.equal(video.muted, true)
  media.toggleSound()
  assert.equal(video.muted, false)
})
test('stale rejected playback cannot affect a newer station or cleared player', async () => {
  const {media, video, fallback} = setup()
  video.rejectPlay = true
  media.show(film, true)
  video.rejectPlay = false
  media.show({...film, film:'next'}, true)
  await Promise.resolve()
  assert.equal(fallback.hidden, true)
  assert.equal(video.muted, false)
  video.rejectPlay = true
  media.show(film, true)
  media.clear()
  await Promise.resolve()
  assert.equal(fallback.hidden, true)
})
test('silent films remain muted without a misleading autoplay fallback', () => {
  const {media, video, fallback} = setup()
  media.show({...film, silentFilm:true}, true)
  assert.equal(video.muted, true)
  assert.equal(fallback.hidden, true)
})

test('native replay cancels reading countdown and completes a fresh cycle', () => {
  let finished = 0; let started = 0
  const {media, video} = setup(() => finished++, () => started++)
  media.show(film, true)
  video.ended = true; video.dispatchEvent(new Event('ended'))
  assert.equal(finished, 1); assert.equal(media.isPending(), false)
  video.ended = false; video.dispatchEvent(new Event('play'))
  assert.equal(started, 2); assert.equal(media.isPending(), true)
  video.ended = true; video.dispatchEvent(new Event('ended'))
  assert.equal(finished, 2)
})
test('native seeking cancels old countdown and native mute survives a station change', () => {
  let started = 0
  const {media, video} = setup(() => {}, () => started++)
  media.show(film, true)
  video.ended = true; video.dispatchEvent(new Event('ended'))
  video.ended = false; video.dispatchEvent(new Event('seeking'))
  assert.equal(started, 2); assert.equal(media.isPending(), true)
  video.muted = true; video.dispatchEvent(new Event('volumechange'))
  media.show({...film, film:'next'}, true)
  assert.equal(video.muted, true)
})

test('missing ended event is recovered only at the end, never mid-clip or while seeking', () => {
  let finished=0
  const {media,video}=setup(()=>finished++)
  media.show(film,true);video.duration=10;video.currentTime=5;video.paused=true
  media.reconcileEnd();assert.equal(finished,0)
  video.currentTime=10;video.seeking=true;media.reconcileEnd();assert.equal(finished,0)
  video.seeking=false;media.reconcileEnd();assert.equal(finished,1)
  media.reconcileEnd();assert.equal(finished,1)
})
