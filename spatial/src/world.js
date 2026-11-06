import * as THREE from 'three'

// Architectural look-development geometry. Every group can be replaced by a surveyed GLB.
export function createWorld(scene, stations) {
  const mat = {
    shell: new THREE.MeshPhysicalMaterial({ color: 0x667b82, metalness: .64, roughness: .28, clearcoat: .35 }),
    wall: new THREE.MeshStandardMaterial({ color: 0x172c38, metalness: .34, roughness: .42 }),
    glass: new THREE.MeshPhysicalMaterial({ color: 0x91d9dc, transmission: .75, opacity: .55, transparent: true, metalness: .06, roughness: .13, depthWrite: false, side: THREE.DoubleSide }),
    cyan: new THREE.MeshStandardMaterial({ color: 0x3eb9ce, emissive: 0x1a9cb8, emissiveIntensity: 1.65, metalness: .3, roughness: .24 }),
    amber: new THREE.MeshStandardMaterial({ color: 0xb99665, emissive: 0x905d2d, emissiveIntensity: .8, metalness: .67, roughness: .3 }),
    basalt: new THREE.MeshStandardMaterial({ color: 0x27353c, metalness: .28, roughness: .58 }),
    screen: new THREE.MeshBasicMaterial({ color: 0x93e5e6, transparent: true, opacity: .25, side: THREE.DoubleSide, depthWrite: false })
  }
  const zones = [], animated = []
  const generated = new THREE.Group()
  let generation = 0
  function box(g, w, h, d, x, y, z, material, bevel = 0) {
    const geo = bevel ? new THREE.BoxGeometry(w, h, d, 2, 2, 2) : new THREE.BoxGeometry(w, h, d)
    if (bevel) { /* Controlled edge lighting from separate trims; no false high-poly claim. */ }
    const mesh = new THREE.Mesh(geo, material); mesh.position.set(x, y, z); mesh.castShadow = true; mesh.receiveShadow = true; g.add(mesh); return mesh
  }
  function line(g, points, radius, material) {
    const path = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)))
    const mesh = new THREE.Mesh(new THREE.TubeGeometry(path, Math.max(24, points.length * 9), radius, 6, false), material)
    g.add(mesh); return mesh
  }
  function ring(g, x, z, r, material) {
    const mesh = new THREE.Mesh(new THREE.TorusGeometry(r, .026, 6, 80), material)
    mesh.rotation.x = Math.PI / 2; mesh.position.set(x, .055, z); g.add(mesh)
  }
  // Continuous open nave: glass edges, directional ceiling ribs, no repeated cubicles.
  const architecture = new THREE.Group(); scene.add(architecture)
  for (const z of [-12.6, 12.6]) {
    box(architecture, 63, .22, .24, 0, 6.3, z, mat.shell)
    box(architecture, 63, 5.7, .09, 0, 3.2, z, mat.glass)
    for (let x = -31; x <= 31; x += 4.8) box(architecture, .09, 5.7, .14, x, 3.2, z, mat.shell)
    line(architecture, [[-31, 6.12, z], [0, 6.12, z], [31, 6.12, z]], .018, mat.cyan)
  }
  for (let x = -30; x <= 30; x += 4.8) {
    line(architecture, [[x, 5.8, -12.4], [x, 7.5, -6], [x, 7.9, 0], [x, 7.5, 6], [x, 5.8, 12.4]], .048, mat.shell)
    if (x % 3 < 1) line(architecture, [[x, 7.56, -5], [x, 7.95, 0], [x, 7.56, 5]], .012, mat.cyan)
  }
  stations.forEach((s, i) => {
    const g = new THREE.Group(); g.position.set(s.position[0], 0, s.position[2]); g.userData.stationIndex = i; scene.add(g); zones.push(g)
    ring(g, 0, 0, Math.min(s.radius * .7, 2.8), i % 3 ? mat.cyan : mat.amber)
    const disk = new THREE.Mesh(new THREE.CylinderGeometry(2.1, 2.3, .14, 64), mat.basalt)
    disk.position.y = .075; disk.receiveShadow = true; g.add(disk)
    const plinth = box(g, 3.1, .14, 1.6, 0, .35, 0, mat.shell)
    box(g, 3.02, .025, 1.52, 0, .43, 0, mat.glass)
    for (let k = 0; k < 7; k++) {
      const a = (k / 6 - .5) * 2.7
      box(g, .14, .03, 1.35, a, .455, 0, k === i % 7 ? mat.amber : mat.cyan)
    }
    // Thin suspended data screens and physical structure vary by station.
    const height = i === 0 || i === 8 ? 4.8 : 3.7
    const stand = box(g, .055, height, .055, -1.7, height / 2, -.95, mat.shell)
    box(g, 2.65, 1.45, .035, -.25, height - .82, -.95, mat.screen)
    for (const dy of [0, .28, .56]) box(g, 1.8 - dy, .018, .048, -.3, height - .45 - dy, -.92, mat.cyan)
    if ([2, 5, 8].includes(i)) {
      const halo = new THREE.Mesh(new THREE.TorusGeometry(1.35, .055, 10, 80), mat.shell)
      halo.position.set(0, 2.7, -.3); g.add(halo)
      const signal = new THREE.Mesh(new THREE.TorusGeometry(1.28, .014, 6, 80), mat.cyan)
      signal.position.copy(halo.position); g.add(signal); animated.push({ mesh: halo, speed: i % 2 ? .11 : -.11 })
    } else if ([3, 7].includes(i)) {
      const table = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.15, .09, 64), mat.glass)
      table.position.set(.35, .86, .25); g.add(table)
      for (let k = 0; k < 5; k++) { const a = k * Math.PI * 2 / 5; const cell = new THREE.Mesh(new THREE.IcosahedronGeometry(.12, 1), mat.cyan); cell.position.set(.35 + Math.cos(a) * .6, .98, .25 + Math.sin(a) * .6); g.add(cell) }
    } else if (i === 4) {
      const shell = new THREE.Mesh(new THREE.SphereGeometry(1.3, 32, 20, 0, Math.PI), mat.glass)
      shell.rotation.y = -Math.PI / 2; shell.position.set(.5, 1.8, .25); g.add(shell)
    } else {
      for (let k = 0; k < 4; k++) box(g, .28, .24 + k * .18, .3, .2 + k * .34, .58 + k * .09, .3, k % 2 ? mat.shell : mat.glass)
    }
    // Section-specific light field rather than blanket emissive fog.
    const lamp = new THREE.PointLight(i % 3 ? 0x79dce2 : 0xe8ad79, 1.4, 7, 2)
    lamp.position.set(0, 3.6, .3); g.add(lamp)
    g.traverse(o => { if (o.isMesh) o.userData.stationIndex = i })
  })
  // A real 3D, seeded prototype at station 03. It varies form and connection,
  // while the architectural route and clinical goal remain in place.
  zones[2].add(generated)
  const names = ['潮汐岸线', '折页群岛', '星轨浅滩', '回声海湾']
  function regenerate(seed = generation + 1) {
    generation = seed
    for (const child of [...generated.children]) {
      generated.remove(child)
      child.geometry?.dispose()
      child.material?.dispose()
    }
    let state = (seed * 1664525 + 1013904223) >>> 0
    const random = () => { state = (Math.imul(state, 1664525) + 1013904223) >>> 0; return state / 4294967296 }
    const colors = [0x70c5c6, 0xb9a4d3, 0x9cbbd5, 0xc5b28f]
    const vertices = []
    for (let k = 0; k < 5; k++) {
      const angle = k * Math.PI * 2 / 5 + (random() - .5) * .35
      const r = .65 + random() * .72
      const x = Math.cos(angle) * r, z = Math.sin(angle) * r
      const height = .18 + random() * .36
      const geo = new THREE.CylinderGeometry(.15 + random() * .2, .22 + random() * .3, height, 7, 2)
      const position = geo.attributes.position
      for (let j = 0; j < position.count; j++) {
        const p = new THREE.Vector3().fromBufferAttribute(position, j)
        p.x += Math.sin(j * 4.71 + seed + k) * .017
        p.z += Math.cos(j * 2.31 + seed) * .012
        position.setXYZ(j, p.x, p.y, p.z)
      }
      geo.computeVertexNormals()
      const mesh = new THREE.Mesh(geo, new THREE.MeshPhysicalMaterial({ color: colors[(seed + k) % colors.length], roughness: .38, metalness: .18, clearcoat: .28 }))
      mesh.position.set(x, .75 + height / 2, z); mesh.castShadow = true; mesh.userData.stationIndex = 2
      generated.add(mesh)
      vertices.push([x, .79 + height, z])
    }
    const order = seed % 2 ? [0, 2, 4, 1, 3] : [0, 1, 3, 2, 4]
    const path = new THREE.CatmullRomCurve3(order.map(k => new THREE.Vector3(...vertices[k])))
    const geo = new THREE.TubeGeometry(path, 72, .012, 6, false)
    const trace = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: colors[seed % colors.length], transparent: true, opacity: .88 }))
    trace.userData.stationIndex = 2
    generated.add(trace)
    return names[(seed - 1) % names.length]
  }
  regenerate(1)
  let t = 0
  return {
    zones,
    regenerate,
    update(dt) { t += dt; animated.forEach(({ mesh, speed }) => { mesh.rotation.y += speed * dt }); mat.cyan.emissiveIntensity = 1.35 + .3 * Math.sin(t * 1.3) },
    setNight(night) { mat.cyan.emissiveIntensity = night ? 2.1 : 1.5; mat.screen.opacity = night ? .48 : .25 }
  }
}
