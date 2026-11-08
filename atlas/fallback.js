const {data}=await import('./route-data.js'+location.search);

const root=document.querySelector('#stillWorld');
const hero=root.querySelector('img');
const nav=document.querySelector('#stations');
const detail=document.querySelector('#detail');
const branch=document.querySelector('#branch');
const overviewPanel=document.querySelector('#routeOverview');
const q=location.search;
const resource=src=>src+(q?(src.includes('?')?'&':'?')+q.slice(1):'');
let current=-1,playing=false,timer=null,route=null;

data.forEach((d,i)=>{
  const button=document.createElement('button');
  button.type='button';button.textContent=d.id;button.title=d.name;
  button.setAttribute('aria-label',`${d.id} ${d.name}`);
  button.addEventListener('click',()=>go(i));nav.append(button);
  const tile=document.createElement('button');tile.type='button';tile.className='overview-tile';
  const image=document.createElement('img');image.src=resource(d.img);image.alt='';image.loading=i<4?'eager':'lazy';
  const title=document.createElement('span');title.textContent=`${d.id} · ${d.name}`;
  tile.append(image,title);tile.addEventListener('click',()=>go(i));overviewPanel.append(tile);
});

function stop(){playing=false;clearTimeout(timer);document.querySelector('#play').textContent='继续导览'}
function showDetail(d){
  document.querySelector('#detailTag').textContent=d.tag;
  document.querySelector('#detailTitle').textContent=d.name;
  document.querySelector('#detailIntent').textContent=d.intent;
  const pictures=document.querySelector('#detailImage');pictures.replaceChildren();
  (d.images||[d.img]).forEach((src,j)=>{
    const image=document.createElement('img');image.src=resource(src);image.alt=`${d.name}${d.images?(j?'的专业复核视角':'的整面数字墙'):''}概念图`;
    pictures.append(image);
  });
  const facts=document.querySelector('#detailFacts');facts.replaceChildren();
  d.facts.forEach(([heading,copy])=>{
    const block=document.createElement('div');block.className='fact';
    const label=document.createElement('b');label.textContent=heading;
    const body=document.createElement('p');body.textContent=copy;
    block.append(label,body);facts.append(block);
  });
  document.querySelector('#detailFoot').textContent='概念设计示意；医疗实施与效果需专业评估和验证。';
  detail.scrollTop=0;detail.classList.add('open');
}
function go(i,keepPlaying=false){
  clearTimeout(timer);current=i;playing=keepPlaying;route=i===5?null:route;
  const d=data[i];hero.classList.add('changing');
  const next=new Image();next.src=resource(d.img);next.onload=()=>{hero.src=next.src;hero.alt=`${d.name}概念图`;hero.classList.remove('changing')};
  document.querySelector('#opening').classList.add('hidden');overviewPanel.classList.remove('open');
  document.querySelector('#stageIndex').textContent=`${d.id} / ${data.at(-1).id}`;
  document.querySelector('#stageTitle').textContent=d.name;
  document.querySelector('#stageLabel').classList.add('show');
  [...nav.children].forEach((button,j)=>button.classList.toggle('selected',j===i));
  branch.classList.toggle('show',i===5);
  showDetail(d);
  document.querySelector('#play').textContent=playing?'暂停导览':'继续导览';
  if(playing){
    if(i===5){stop();branch.classList.add('show')}
    else timer=setTimeout(()=>{if(i>=data.length-1){stop();return}go((i===6||i===7)?8:i+1,true)},i===0?11500:10000);
  }
}
function overview(){stop();current=-1;detail.classList.remove('open');branch.classList.remove('show');overviewPanel.classList.add('open');document.querySelector('#stageLabel').classList.remove('show')}
function next(){if(current===5){branch.classList.add('show');return}go(current<0?0:Math.min(data.length-1,current===6||current===7?8:current+1))}

document.querySelector('#start').addEventListener('click',()=>go(0,true));
document.querySelector('#overview').addEventListener('click',overview);
document.querySelector('#play').addEventListener('click',()=>{
  if(current<0){go(0,true);return}
  if(playing){stop();return}
  go(current,true);
});
document.querySelector('#prev').addEventListener('click',()=>go(Math.max(0,current-1)));
document.querySelector('#next').addEventListener('click',next);
document.querySelector('#closeDetail').addEventListener('click',()=>detail.classList.remove('open'));
document.querySelectorAll('[data-branch]').forEach(button=>button.addEventListener('click',()=>{
  route=Number(button.dataset.branch);go(route);
}));
document.addEventListener('keydown',event=>{
  if(event.key==='Escape')detail.classList.remove('open');
  if(event.key==='ArrowRight')next();
  if(event.key==='ArrowLeft')go(Math.max(0,current-1));
});
root.addEventListener('click',()=>{if(current>=0)detail.classList.add('open')});
