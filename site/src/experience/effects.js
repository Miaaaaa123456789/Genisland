// Original responsive light sculpture for each chapter. No image is used as the particle geometry.
export function createEffects(canvas){
 const c=canvas.getContext('2d',{alpha:true}),N=1250,particles=Array.from({length:N},(_,i)=>({seed:i*2.399963,rad:Math.sqrt((i+.5)/N),phase:Math.random()*7,x:0,y:0,vx:0,vy:0}));
 let w=0,h=0,dpr=1,chapter=-1,target=-1,variation=0,start=performance.now(),px=-1000,py=-1000,shock=0,impulseX=0,impulseY=0,frame=0,animationId;
 function resize(){dpr=Math.min(devicePixelRatio||1,1.5);w=innerWidth;h=innerHeight;canvas.width=Math.floor(w*dpr);canvas.height=Math.floor(h*dpr);canvas.style.width=w+'px';canvas.style.height=h+'px';c.setTransform(dpr,0,0,dpr,0,0)}
 resize();addEventListener('resize',resize);
 function setChapter(i){chapter=i;target=i;start=performance.now();shock=.8;variation=0}
 function interact(x,y){px=x;py=y;impulseX=x;impulseY=y;shock=1}
 function move(x,y){px=x;py=y}
 const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
 function point(i,t,s,cx,cy,R){
  const a=s.seed+variation*Math.sin(i*.07)*.16, q=i/N, r=s.rad, turn=t*.00017+variation*.11;
  let x=0,y=0,z=0;
  switch(chapter){
   case 0:{ // exhibition: hospital map levels and orbital hologram
    const row=i%18,col=Math.floor(i/18)%70;
    x=(col/69-.5)*R*1.7+Math.sin(row*2.2+t*.0009)*3;
    y=(row/17-.5)*R*.49+Math.sin(col*.3+t*.001)*3;
    if(col>18&&col<48&&row>5&&row<13)y-=21;break}
   case 1:{ // avatar appears as light, head, torso and arms
    if(q<.22){let aa=a*3;x=Math.cos(aa)*R*.14*r;y=-R*.30+Math.sin(aa)*R*.14*r}
    else if(q<.72){x=(q-.47)*R*.38+Math.sin(a)*7;y=(q-.22)*R*.85-R*.10}
    else {x=Math.cos(a+turn)*R*.32*r;y=Math.sin(a+turn)*R*.53*r+R*.14}break}
   case 2:{ // island is formed from orbital shorelines
    const ring=Math.floor(q*5);const rr=(.29+ring*.14)*R;
    x=Math.cos(a+turn)*rr*(1+.1*Math.sin(a*5+t*.0007));
    y=Math.sin(a+turn)*rr*.42+Math.sin(a*7+t*.001)*5-ring*3;break}
   case 3:{ // corridor: multiple receding luminous portals
    const depth=Math.floor(q*12),along=(q*12)%1,side=i%4;
    const ww=R*(.08+depth*.038),hh=R*(.09+depth*.055);
    x=side===0?-ww:side===1?ww:(along*2-1)*ww;
    y=side===2?-hh:side===3?hh:(along*2-1)*hh;
    x+=Math.sin(t*.0004+depth)*4;break}
   case 4:{ // cylindrical particle sculpture beside the roundtable
    const aa=a*5+turn*2,rad=R*(.16+.25*Math.sin(q*Math.PI));
    x=Math.cos(aa)*rad;y=(q-.5)*R*1.05+Math.sin(aa)*11;break}
   case 5:{ // bifurcating currents
    const u=q,branch=i%2?1:-1;
    x=(u-.5)*R*1.5;y=branch*(u*u)*R*.53+Math.sin(u*20-t*.002)*6;break}
   case 6:{ // breathing cocoon
    const aa=a*5,breath=1+.07*Math.sin(t*.0013);
    x=Math.cos(aa)*R*.32*r*breath;y=Math.sin(aa)*R*.68*r*breath;break}
   case 7:{ // co-created islands, independently reactive clusters
    const cluster=i%7,aa=a*4;
    const ix=Math.cos(cluster*2.4)*R*.36,iy=Math.sin(cluster*2.4)*R*.27;
    x=ix+Math.cos(aa)*R*.12*r;y=iy+Math.sin(aa)*R*.1*r;break}
   case 8:{ // mirrored figure, same light in two adjacent panes
    const side=i%2?1:-1,aa=a*3;
    x=side*R*.22+Math.cos(aa)*R*.13*r;y=Math.sin(aa)*R*.45*r;
    if(side<0)x+=Math.sin(t*.0008+q*5)*5;break}
   case 9:{ // return to daylight: a slow, sheltered current
    const u=q,aa=a+turn*.35;
    x=(u-.5)*R*1.45;y=Math.sin(u*8+aa+t*.00028)*R*.075+Math.sin(aa*3)*R*.05;break}
   case 10:{ // report wall: time series and luminous data strata
    const layer=i%5,u=Math.floor(i/5)/(N/5);
    x=(u-.5)*R*1.55;y=(layer-2)*R*.15+Math.sin(u*14+layer*1.4+t*.0005)*R*.075;break}
   case 11:{ // departure, point of light becomes a sail and horizon
    if(q<.68){let u=q/.68;x=(u-.5)*R*1.55;y=Math.sin(u*5+t*.0007)*R*.055+R*.24}
    else{let u=(q-.68)/.32;x=(u-.5)*R*.55;y=R*.2-u*R*.75+Math.sin(u*9)*6}break}
   default:{ // overview: sparse galaxy hovering across the map
    x=Math.cos(a+turn)*R*(.35+r*.52);y=Math.sin(a+turn)*R*.4*(.35+r*.52);break}
  }
  return [cx+x,cy+y]
 }
 function animate(t){
  animationId=requestAnimationFrame(animate);if(t-frame<25)return;frame=t;
  c.clearRect(0,0,w,h);let R=Math.min(w*.35,h*.63),cx=w*(w<800?.49:.37),cy=h*.50;
  // A soft light volume expands at the precise point of interaction.
  if(shock>.01){let radius=(1-shock)*Math.min(w,h)*.5+15,gr=c.createRadialGradient(impulseX,impulseY,0,impulseX,impulseY,radius);
   gr.addColorStop(0,'rgba(174,249,242,0)');gr.addColorStop(.92,'rgba(125,225,222,0)');gr.addColorStop(.98,'rgba(155,243,232,'+(shock*.24)+')');gr.addColorStop(1,'rgba(155,243,232,0)');c.fillStyle=gr;c.fillRect(0,0,w,h);shock*=.947}
  c.globalCompositeOperation='lighter';
  for(let i=0;i<N;i++){const s=particles[i],p=point(i,t,s,cx,cy,R);
   let dx=p[0]-px,dy=p[1]-py,dist=Math.hypot(dx,dy),repel=dist<135?(1-dist/135)*18:0;
   p[0]+=dist?dx/dist*repel:0;p[1]+=dist?dy/dist*repel:0;
   if(!s.x){s.x=p[0]+(Math.random()-.5)*R;s.y=p[1]+(Math.random()-.5)*R}
   const ease=.042+((i%11)/11)*.015;s.x+=(p[0]-s.x)*ease;s.y+=(p[1]-s.y)*ease;
   const twinkle=.32+.68*Math.sin(t*.0018+s.phase+i*.013)**2,alpha=clamp(twinkle*(chapter<0?.32:.78),.08,.9);
   const warm=i%13===0;const size=(warm?1.55:.75)*(1+.7*twinkle);
   c.fillStyle=warm?'rgba(250,202,142,'+alpha+')':'rgba(150,245,240,'+alpha+')';
   c.fillRect(s.x,s.y,size,size);
  }
  c.globalCompositeOperation='source-over';
 }
 animationId=requestAnimationFrame(animate);
 function regenerate(){variation++;for(const p of particles){p.phase=Math.random()*7;p.x+=Math.sin(p.seed*variation)*70;p.y+=Math.cos(p.seed*variation)*50}interact(w*.38,h*.5)}
 return {
  setChapter, interact, move, regenerate,
  dispose() {
   cancelAnimationFrame(animationId);
   removeEventListener('resize', resize);
  }
 };
}
