import { readFile } from 'node:fs/promises'
import assert from 'node:assert/strict'
import test from 'node:test'
let source = await readFile(new URL('../src/experience/controller.js', import.meta.url), 'utf8')
source = source.replace(/^import .*$/gm, '')
const stationsSource = await readFile(new URL('../src/experience/stations.ts', import.meta.url), 'utf8')
const {stations} = await import('data:text/javascript;base64,' + Buffer.from(stationsSource).toString('base64'))
source = `const {startAtmosphere, createEffects, createStationMedia, stations, sitePath} = globalThis.tourDependencies;\n` + source
class Element extends EventTarget {
  style = {}; dataset = {}; hidden = false; textContent = ''; attributes = {}; scrollTop = 0
  classList = {values:new Set(), add(...v){v.forEach(x=>this.values.add(x))}, remove(...v){v.forEach(x=>this.values.delete(x))}, contains(v){return this.values.has(v)}, toggle(v,on){on ??= !this.values.has(v); on?this.values.add(v):this.values.delete(v)}}
  setAttribute(k,v){this.attributes[k]=v}
  replaceChildren(){} append(){} focus(){}
}
test('automatic tour visits all twelve nodes, waits for films, opens 3D, and respects pause/navigation', async () => {
  const realNow = Date.now
  let now = 100000
  Date.now = () => now
  const old = Object.fromEntries(['document','matchMedia','requestAnimationFrame','cancelAnimationFrame','setTimeout','clearTimeout'].map(k=>[k,globalThis[k]]))
  let id=0; const timers=new Map(); const elements=new Map(); let onFinish; let pending=false; let opened=0
  const find=k=>{if(!elements.has(k)) elements.set(k,new Element());return elements.get(k)}
  const stops=stations.map((_,i)=>Object.assign(new Element(),{dataset:{stop:String(i)}}))
  const branches=[6,7].map(i=>Object.assign(new Element(),{dataset:{branch:String(i)}}))
  const host={querySelector:find,querySelectorAll:s=>s==='[data-stop]'?stops:branches}
  globalThis.document = Object.assign(new Element(), {hidden:false, createElement:()=>new Element()})
  globalThis.matchMedia=()=>Object.assign(new Element(),{matches:false})
  globalThis.requestAnimationFrame=()=>0; globalThis.cancelAnimationFrame=()=>{}
  globalThis.setTimeout=(fn,ms)=>{timers.set(++id,{fn,ms});return id}; globalThis.clearTimeout=i=>timers.delete(i)
  globalThis.tourDependencies={stations,sitePath:p=>p,startAtmosphere:()=>{}, createEffects:()=>({setChapter(){},regenerate(){},dispose(){}}),createStationMedia:(_,finish)=>{
    onFinish=finish; return {show:s=>(pending=Boolean(s.film)),clear:()=>pending=false,pause(){},resume:()=>pending,isPending:()=>pending,openModel:()=>opened++,toggleSound(){}}
  }}
  const click=e=>e.dispatchEvent(new Event('click'))
  const tick=ms=>{const entry=[...timers].find(([,t])=>t.ms===ms);assert.ok(entry,`expected ${ms}ms timer`);timers.delete(entry[0]);entry[1].fn()}
  const finish=()=>{pending=false;onFinish()}
  const {mountExperience}=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'))
  let cleanup
  try {
    cleanup=mountExperience(host)
    tick(5000)
    click(find('#detailToggle'));assert.equal(find('#play').attributes['aria-pressed'],'true','reading details must not turn automatic playback off')
    click(find('#detailToggle'))
    for(let i=0;i<stations.length;i++){
      assert.equal(find('#world').dataset.chapter,String(i))
      assert.equal(find('#facts').classList.contains('expanded'),true)
      if(stations[i].film){assert.equal(timers.size,0,'must wait for full film');finish()}
      tick(stations[i].film ? 0 : stations[i].dwellMs ?? 12000)
      if(i===5){assert.equal(find('#branchChoice').classList.contains('open'),false,'automatic tour must not stop at branch selection');assert.equal(find('#world').dataset.chapter,'6')}
    }
    assert.equal(opened,1)
    assert.equal(find('#play').attributes['aria-pressed'],'false')
    click(stops[2]);assert.equal(find('#play').attributes['aria-pressed'],'true')
    click(find('#play'));finish();assert.equal(timers.size,0)
    click(stops[7]);assert.equal(find('#play').attributes['aria-pressed'],'false');assert.equal(timers.size,0)
    click(find('#play'));tick(5000);assert.equal(find('#world').dataset.chapter,'8')
    click(stops[5]);click(find('#play'));click(find('#next'));assert.equal(find('#branchChoice').classList.contains('open'),true);click(branches[0]);click(find('#play'));tick(5000);assert.equal(find('#world').dataset.chapter,'8','explicit branch choice remains respected')
    click(stops[6]);now += 2000;document.hidden=true;document.dispatchEvent(new Event('visibilitychange'));assert.equal(timers.size,0)
    now += 60000;document.hidden=false;document.dispatchEvent(new Event('visibilitychange'));tick(3000);assert.equal(find('#world').dataset.chapter,'7','hidden time must not consume or reset five-second dwell')
    click(stops[9]);document.hidden=true;document.dispatchEvent(new Event('visibilitychange'));assert.equal(timers.size,0)
    document.hidden=false;document.dispatchEvent(new Event('visibilitychange'));tick(12000);assert.equal(find('#world').dataset.chapter,'10')
    click(find('#overview'));assert.equal(timers.size,0)
  } finally {Date.now = realNow;cleanup?.();Object.assign(globalThis,old);delete globalThis.tourDependencies}
})

test('only the two branch reading stops use five seconds; transition mask is 650ms', async () => {
  assert.deepEqual(stations.filter(s => s.dwellMs).map(s => [s.name, s.dwellMs]), [
    ['隐秘个人岛', 5000], ['共创空间', 5000],
  ])
  assert.ok(stations.filter(s => s.dwellMs).every(s => !s.film), 'never truncate a film')
  const css = await readFile(new URL('../public/style.css', import.meta.url), 'utf8')
  assert.match(css, /portalReveal \.65s/)
  assert.match(css, /opacity \.55s ease/)
})
