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
test('manual navigation never schedules opening, station advance, or 3D', async () => {
  const old = Object.fromEntries(['document','requestAnimationFrame','cancelAnimationFrame','setTimeout','clearTimeout'].map(k=>[k,globalThis[k]]))
  const elements=new Map(); let onFinish; let shown=[]; let cleared=0; let opened=0
  const find=k=>{if(!elements.has(k)) elements.set(k,new Element());return elements.get(k)}
  const stops=stations.map((_,i)=>Object.assign(new Element(),{dataset:{stop:String(i)}}))
  const branches=[6,7].map(i=>Object.assign(new Element(),{dataset:{branch:String(i)}}))
  const host={querySelector:find,querySelectorAll:s=>s==='[data-stop]'?stops:branches}
  globalThis.document = Object.assign(new Element(), {hidden:false, createElement:()=>new Element()})
  globalThis.requestAnimationFrame=()=>0; globalThis.cancelAnimationFrame=()=>{}
  globalThis.setTimeout=()=>{throw new Error('Manual tour must not schedule navigation')}; globalThis.clearTimeout=()=>{}
  globalThis.tourDependencies={stations,sitePath:p=>p,startAtmosphere:()=>{}, createEffects:()=>({setChapter(){},regenerate(){},dispose(){}}),createStationMedia:(_,finish)=>{
    onFinish=finish; return {show:(s,play)=>shown.push([s,play]),clear:()=>cleared++,openModel:()=>opened++,toggleSound(){}}
  }}
  const click=e=>e.dispatchEvent(new Event('click'))
  const {mountExperience}=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'))
  let cleanup
  try {
    cleanup=mountExperience(host)
    assert.equal(shown.length,0,'landing must not load or play a video')
    assert.match(find('#openingStatus').textContent,/不会自动翻页/)
    click(find('#enter'))
    for(let i=0;i<stations.length;i++){
      assert.equal(find('#world').dataset.chapter,String(i))
      assert.equal(shown.at(-1)[0],stations[i])
      assert.equal(shown.at(-1)[1],true,'explicit navigation plays the selected film')
      onFinish();assert.equal(find('#world').dataset.chapter,String(i),'film completion must stay put')
      document.hidden=true;document.dispatchEvent(new Event('visibilitychange'))
      document.hidden=false;document.dispatchEvent(new Event('visibilitychange'))
      assert.equal(find('#world').dataset.chapter,String(i))
      click(find('#detailToggle'));click(find('#detailToggle'))
      if(i===5){click(find('#next'));assert.equal(find('#branchChoice').classList.contains('open'),true)}
      if(i<stations.length-1)click(find('#next'))
    }
    assert.equal(opened,0,'3D requires its own click')
    assert.equal(find('#next').attributes['aria-label'],'返回全景')
    click(find('#openModel'));assert.equal(opened,1)
    click(find('#next'));assert.ok(cleared>0)
    click(stops[5]);click(find('#next'));click(branches[0]);click(find('#next'))
    assert.equal(find('#world').dataset.chapter,'8','chosen branch rejoins at mirror')
    click(find('#previous'));assert.equal(find('#world').dataset.chapter,'6')
    click(find('#previous'));assert.equal(find('#world').dataset.chapter,'5')
    click(find('#play'));assert.equal(find('#world').dataset.chapter,'0')
    click(find('#overview'));const n=shown.length
    onFinish();assert.equal(shown.length,n,'stale film completion must do nothing')
  } finally {cleanup?.();Object.assign(globalThis,old);delete globalThis.tourDependencies}
})
