import { createClientOnlyFn } from '@tanstack/react-start'

// A WebGL light layer behind the original interactive 2D chapter effects.
export const startAtmosphere = createClientOnlyFn(async (canvas, signal) => {
  const context = canvas.getContext('webgl2', { alpha: true, antialias: false, powerPreference: 'low-power' })
  if (!context) return

  let THREE, renderer
  try {
    THREE = await import('./vendor/three-bundle.js')
    if (signal.aborted) return
    renderer = new THREE.WebGLRenderer({ canvas, context, alpha: true })
  } catch {
    // The chapter canvas still works when WebGL is unavailable.
    return
  }

  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5))
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.1, 100)
  camera.position.z = 17
  function resize() {
    camera.aspect = innerWidth / innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(innerWidth, innerHeight)
  }
  resize()
  addEventListener('resize', resize, { signal })

  const count = 850
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const base = new Float32Array(count * 3)
  const cool = new THREE.Color(0x6ccfca)
  const warm = new THREE.Color(0xe5b886)
  const color = new THREE.Color()
  for (let index = 0; index < count; index++) {
    base.set([
      (Math.random() - 0.5) * 38,
      (Math.random() - 0.5) * 19,
      (Math.random() - 0.5) * 13,
    ], index * 3)
    color.lerpColors(cool, warm, Math.random() * 0.65).toArray(colors, index * 3)
  }
  positions.set(base)

  const geometry = new THREE.BufferGeometry()
  const position = new THREE.BufferAttribute(positions, 3)
  geometry.setAttribute('position', position)
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  const material = new THREE.PointsMaterial({
    size: 0.045, vertexColors: true, transparent: true, opacity: 0.67,
    blending: THREE.AdditiveBlending, depthWrite: false,
  })
  const motes = new THREE.Points(geometry, material)
  scene.add(motes)

  let last = 0
  let frame
  function render(time) {
    frame = requestAnimationFrame(render)
    if (time - last < 25) return
    last = time
    for (let index = 0; index < count; index++) {
      const offset = index * 3
      positions[offset] = base[offset] + Math.sin(time * 0.00022 + index * 0.14) * 0.13
      positions[offset + 1] = base[offset + 1] + Math.sin(time * 0.00036 + index * 0.17) * 0.16
    }
    position.needsUpdate = true
    motes.rotation.y = Math.sin(time * 0.00013) * 0.03
    renderer.render(scene, camera)
  }
  frame = requestAnimationFrame(render)
  signal.addEventListener('abort', () => {
    cancelAnimationFrame(frame)
    geometry.dispose()
    material.dispose()
    renderer.dispose()
  }, { once: true })
})
