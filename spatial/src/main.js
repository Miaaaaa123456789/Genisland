import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { stations } from './stations.js'
import './style.css'

// This is a production-oriented look-development harness, not the nine finished rooms.
// Photo references remain HTML images. They are NEVER used as fake 3D backdrops.
const app = document.querySelector('#app')
app.innerHTML = `<div class="stage" aria-label="可旋转的空间白模"></div>
  <header><div class="eyebrow">梓笙园 AI 体验中心 · 空间制作工作台</div><h1>生成式群岛</h1>
  <p>同一条动线，故事随当下状态和自主选择变化。</p></header>
  <nav class="tools" aria-label="视角与光照"><button id="overview">全景</button><button id="walk">步行</button><button id="day">昼 / 夜</button><button id="quality">画质：高</button></nav>
  <aside class="detail"><span class="tag">概念白模 · 等待九站 GLB 资产</span><div class="counter">01 / 09</div><h2>入口与形象</h2><p class="question"></p><p class="function"></p>
  <img class="reference" alt="当前场景视觉母版，仅供建模参照，不是三维背景" hidden><p class="credit">概念图未随本次公开发布；三维画面需由真实几何、PBR 材质和灯光实现。</p><div class="pager"><button id="previous">上一站</button><button id="next">下一站</button></div></aside>
  <div class="asset-status" role="status" aria-live="polite"></div><div class="hint">拖拽旋转 · 滚轮缩放 · 点击区域 · 步行模式 WASD / QE</div>`

const stage = app.querySelector('.stage')
const reference = app.querySelector('.reference')
reference.onload = () => { reference.hidden = false; app.querySelector('.credit').textContent = '视觉母版只作对照；三维画面需由真实几何、PBR 材质和灯光实现。' }
reference.onerror = () => { reference.hidden = true; app.querySelector('.credit').textContent = '此站视觉母版尚未公开提供；请按逐站资产规范制作，勿用图片冒充 3D。' }
const scene = new THREE.Scene()
scene.background = new THREE.Color('#16191d')
scene.fog = new THREE.FogExp2('#16191d', 0.009)
const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 180)
camera.position.set(-2, 27, 66)
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.15
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
stage.append(renderer.domElement)
const controls = new OrbitControls(camera, renderer.domElement)
controls.target.set(2, 0, 0)
controls.enableDamping = true
controls.minDistance = 8
controls.maxDistance = 105
controls.maxPolarAngle = Math.PI * 0.49
controls.update()

const hemi = new THREE.HemisphereLight(0xe4edee, 0x36323a, 2.05)
scene.add(hemi)
const sun = new THREE.DirectionalLight(0xffeed9, 3.2)
sun.position.set(-18, 30, 20)
sun.castShadow = true
sun.shadow.mapSize.set(2048, 2048)
sun.shadow.camera.left = -38; sun.shadow.camera.right = 38
sun.shadow.camera.top = 26; sun.shadow.camera.bottom = -26
sun.shadow.bias = -0.0002
scene.add(sun)
const practicals = stations.map(s => {
  const lamp = new THREE.PointLight(0xffca9a, 0.25, 7, 2)
  lamp.position.set(s.position[0], 3.6, s.position[2])
  scene.add(lamp)
  return lamp
})

// Honest site-plan datum and station interaction volumes. No miniature booths or fake final rooms.
const floor = new THREE.Mesh(new THREE.PlaneGeometry(64, 26), new THREE.MeshStandardMaterial({ color: 0x32343a, roughness: 0.82, metalness: 0.02 }))
floor.rotation.x = -Math.PI / 2
floor.receiveShadow = true
scene.add(floor)
const routePoints = stations.map(s => new THREE.Vector3(s.position[0], 0.035, s.position[2]))
const curve = new THREE.CatmullRomCurve3(routePoints, false, 'centripetal', 0.35)
const route = new THREE.Mesh(new THREE.TubeGeometry(curve, 180, 0.018, 5, false), new THREE.MeshStandardMaterial({ color: 0x7c9e9e, emissive: 0x153232, emissiveIntensity: 0.28, roughness: 0.55 }))
scene.add(route)
const hitGeometry = new THREE.CylinderGeometry(1, 1, 0.1, 32)
const hitVolumes = stations.map((s, i) => {
  const object = new THREE.Mesh(hitGeometry, new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }))
  object.position.set(s.position[0], 0.12, s.position[2])
  object.scale.set(s.radius, 1, s.radius)
  object.userData.stationIndex = i
  scene.add(object)
  return object
})
const markers = stations.map(s => {
  const m = new THREE.Mesh(new THREE.RingGeometry(0.18, 0.22, 32), new THREE.MeshBasicMaterial({ color: 0x839e9c, side: THREE.DoubleSide }))
  m.rotation.x = -Math.PI / 2
  m.position.set(s.position[0], 0.07, s.position[2])
  scene.add(m)
  return m
})

// Author zone models in Blender with real human scale, named materials and correct pivots.
// Missing models are surfaced in the UI; generated rings are navigation targets only.
const loader = new GLTFLoader()
const missing = []
const loaded = new Map()
for (const [i, s] of stations.entries()) {
  loader.load(s.model, gltf => {
    const group = gltf.scene
    group.position.set(...s.position)
    group.traverse(o => {
      if (!o.isMesh) return
      o.castShadow = true; o.receiveShadow = true
      o.userData.stationIndex = i
      if (o.material?.map) o.material.map.colorSpace = THREE.SRGBColorSpace
      if (o.material) {
        o.material.side = THREE.FrontSide
        o.material.userData.baseEmissive = o.material.emissive?.clone()
        o.material.userData.baseIntensity = o.material.emissiveIntensity
      }
    })
    scene.add(group)
    loaded.set(i, group)
    reportAssets()
  }, undefined, () => { missing.push(s.id); reportAssets() })
}
function reportAssets() {
  app.querySelector('.asset-status').textContent = `${loaded.size}/9 场景模型已加载${missing.length ? ` · 待制作 ${missing.join('、')}` : ''}`
}
const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()
let selected = 0, hovered = -1, walking = false, night = false, highQuality = true
let travel = null
let walkHeading = 0
const pressed = new Set()
const clock = new THREE.Clock()
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
const overview = { position: new THREE.Vector3(-2, 27, 66), target: new THREE.Vector3(2, 0, 0) }

function highlight(index) {
  hovered = index
  markers.forEach((m, i) => m.material.color.setHex(i === index ? 0xffd1a1 : 0x839e9c))
  practicals.forEach((light, i) => { light.intensity = i === index ? (night ? 3 : 2.3) : (night ? 0.65 : 0.25) })
  loaded.forEach((group, i) => group.traverse(o => {
    const m = o.material
    if (!o.isMesh || !m?.emissive) return
    m.emissive.copy(m.userData.baseEmissive || new THREE.Color(0))
    m.emissiveIntensity = m.userData.baseIntensity ?? 1
    if (i === index && o.name.toLowerCase().includes('accent')) {
      m.emissive.set(0x2f8b91); m.emissiveIntensity = 0.35
    }
  }))
}
function pick(e) {
  const rect = renderer.domElement.getBoundingClientRect()
  pointer.set((e.clientX - rect.left) / rect.width * 2 - 1, -(e.clientY - rect.top) / rect.height * 2 + 1)
  raycaster.setFromCamera(pointer, camera)
  const targets = [...hitVolumes, ...Array.from(loaded.values())]
  const hit = raycaster.intersectObjects(targets, true)[0]
  if (!hit) return -1
  let o = hit.object
  while (o && o.userData.stationIndex === undefined) o = o.parent
  return o?.userData.stationIndex ?? -1
}
let pointerDown = null
renderer.domElement.addEventListener('pointerdown', e => { pointerDown = [e.clientX, e.clientY] })
renderer.domElement.addEventListener('pointermove', e => {
  if (pointerDown && Math.hypot(e.clientX - pointerDown[0], e.clientY - pointerDown[1]) > 5) return
  const i = pick(e)
  if (i !== hovered) highlight(i)
  renderer.domElement.style.cursor = i < 0 ? 'grab' : 'pointer'
})
renderer.domElement.addEventListener('pointerup', e => {
  if (!pointerDown || Math.hypot(e.clientX - pointerDown[0], e.clientY - pointerDown[1]) > 5) { pointerDown = null; return }
  pointerDown = null
  const i = pick(e)
  if (i >= 0) select(i)
})
renderer.domElement.addEventListener('pointerleave', () => highlight(-1))

function moveTo(position, target) {
  travel = {
    start: performance.now(), duration: prefersReduced.matches ? 0 : 1150,
    fromPosition: camera.position.clone(), fromTarget: controls.target.clone(),
    toPosition: position, toTarget: target
  }
}
function select(index) {
  selected = (index + stations.length) % stations.length
  const s = stations[selected]
  app.querySelector('.counter').textContent = `${s.id} / 09`
  app.querySelector('h2').textContent = s.name
  app.querySelector('.question').textContent = s.question
  app.querySelector('.function').textContent = s.function
  reference.hidden = true
  reference.src = s.reference
  if (!walking) {
    const target = new THREE.Vector3(s.position[0], 0.8, s.position[2])
    moveTo(target.clone().add(new THREE.Vector3(6.5, 7.2, 11)), target)
  }
  highlight(selected)
}
function setNight(value) {
  night = value
  scene.background.set(value ? '#101524' : '#16191d')
  scene.fog.color.copy(scene.background)
  hemi.intensity = value ? 0.45 : 2.05
  sun.intensity = value ? 0.22 : 3.2
  renderer.toneMappingExposure = value ? 1.28 : 1.15
  highlight(hovered >= 0 ? hovered : selected)
}
app.querySelector('#overview').onclick = () => { walking = false; controls.enabled = true; moveTo(overview.position.clone(), overview.target.clone()) }
app.querySelector('#walk').onclick = e => {
  walking = !walking; controls.enabled = !walking; e.currentTarget.classList.toggle('active', walking)
  if (walking) {
    const s = stations[selected]
    camera.position.set(s.position[0] - 2, 1.65, s.position[2] + 3)
    walkHeading = -0.4
    travel = null
  }
}
app.querySelector('#day').onclick = () => setNight(!night)
app.querySelector('#quality').onclick = e => {
  highQuality = !highQuality
  e.currentTarget.textContent = `画质：${highQuality ? '高' : '省电'}`
  resize()
}
app.querySelector('#previous').onclick = () => select(selected - 1)
app.querySelector('#next').onclick = () => select(selected + 1)
window.addEventListener('keydown', e => { if (/^(Key[WASDQE]|Arrow)/.test(e.code)) pressed.add(e.code) })
window.addEventListener('keyup', e => pressed.delete(e.code))
function resize() {
  const w = stage.clientWidth, h = stage.clientHeight
  camera.aspect = w / h; camera.updateProjectionMatrix()
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, highQuality ? 1.75 : 1))
  renderer.setSize(w, h)
}
window.addEventListener('resize', resize)
resize()
select(0)
moveTo(overview.position.clone(), overview.target.clone())
function frame() {
  const dt = Math.min(clock.getDelta(), 0.05)
  if (walking) {
    const turn = (pressed.has('ArrowLeft') ? 1 : 0) - (pressed.has('ArrowRight') ? 1 : 0)
    walkHeading += turn * dt * 1.25
    const forward = new THREE.Vector3(Math.sin(walkHeading), 0, -Math.cos(walkHeading))
    const right = new THREE.Vector3(-forward.z, 0, forward.x)
    const step = new THREE.Vector3()
    if (pressed.has('KeyW') || pressed.has('ArrowUp')) step.add(forward)
    if (pressed.has('KeyS') || pressed.has('ArrowDown')) step.sub(forward)
    if (pressed.has('KeyD')) step.add(right)
    if (pressed.has('KeyA')) step.sub(right)
    if (step.lengthSq()) camera.position.addScaledVector(step.normalize(), dt * 3.2)
    camera.position.y += ((pressed.has('KeyE') ? 1 : 0) - (pressed.has('KeyQ') ? 1 : 0)) * dt * 2.6
    camera.position.y = THREE.MathUtils.clamp(camera.position.y, 1.5, 8)
    camera.position.x = THREE.MathUtils.clamp(camera.position.x, -28, 28)
    camera.position.z = THREE.MathUtils.clamp(camera.position.z, -12, 12)
    camera.lookAt(camera.position.clone().add(forward).add(new THREE.Vector3(0, 0.04, 0)))
  } else if (travel) {
    const t = travel.duration ? Math.min(1, (performance.now() - travel.start) / travel.duration) : 1
    const smooth = t * t * (3 - 2 * t)
    camera.position.lerpVectors(travel.fromPosition, travel.toPosition, smooth)
    controls.target.lerpVectors(travel.fromTarget, travel.toTarget, smooth)
    if (t === 1) travel = null
    controls.update()
  } else controls.update()
  renderer.render(scene, camera)
}
renderer.setAnimationLoop(frame)
