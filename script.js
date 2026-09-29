const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#mainNav');
if(toggle&&nav){toggle.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('.nav a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));

const sections=document.querySelectorAll('main section[id]');
const navLinks=document.querySelectorAll('.nav a');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navLinks.forEach(link=>link.classList.remove('active'));
      const current=document.querySelector(`.nav a[href="#${entry.target.id}"]`);
      if(current) current.classList.add('active');
    }
  });
},{rootMargin:'-30% 0px -60% 0px'});
sections.forEach(section=>observer.observe(section));

/* AI network particle animation */
const canvas=document.getElementById('particleCanvas');
if(canvas){
  const ctx=canvas.getContext('2d');
  let particles=[];
  const mouse={x:null,y:null,radius:150};

  function resizeCanvas(){
    const hero=canvas.parentElement;
    const dpr=Math.min(window.devicePixelRatio||1,2);
    canvas.width=hero.clientWidth*dpr;
    canvas.height=hero.clientHeight*dpr;
    canvas.style.width=hero.clientWidth+'px';
    canvas.style.height=hero.clientHeight+'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
    createParticles();
  }

  function createParticles(){
    const hero=canvas.parentElement;
    const width=hero.clientWidth,height=hero.clientHeight;
    particles=[];
    const count=width<600?28:width<900?45:70;
    for(let i=0;i<count;i++){
      particles.push({
        x:width*(0.48+Math.random()*0.52),
        y:Math.random()*height,
        vx:(Math.random()-.5)*.25,
        vy:(Math.random()-.5)*.25,
        radius:Math.random()*1.7+.7,
        opacity:Math.random()*.5+.25,
        pulse:Math.random()*Math.PI*2
      });
    }
  }

  function drawParticles(){
    const hero=canvas.parentElement;
    const width=hero.clientWidth,height=hero.clientHeight;
    ctx.clearRect(0,0,width,height);

    particles.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;p.pulse+=.025;

      if(mouse.x!==null&&mouse.y!==null){
        const dx=mouse.x-p.x,dy=mouse.y-p.y;
        const distance=Math.sqrt(dx*dx+dy*dy);
        if(distance<mouse.radius&&distance>0){
          const force=(mouse.radius-distance)/mouse.radius;
          p.x-=(dx/distance)*force*.35;
          p.y-=(dy/distance)*force*.35;
        }
      }

      if(p.x<width*.42){p.x=width*.42;p.vx=Math.abs(p.vx);}
      if(p.x>width){p.x=width;p.vx=-Math.abs(p.vx);}
      if(p.y<0)p.y=height;
      if(p.y>height)p.y=0;

      const opacity=p.opacity+Math.sin(p.pulse)*.12;
      const glow=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,10);
      glow.addColorStop(0,`rgba(255,220,228,${Math.max(0,opacity)})`);
      glow.addColorStop(1,'rgba(255,220,228,0)');
      ctx.fillStyle=glow;
      ctx.beginPath();ctx.arc(p.x,p.y,10,0,Math.PI*2);ctx.fill();

      ctx.beginPath();
      ctx.fillStyle=`rgba(255,235,240,${Math.max(0,opacity)})`;
      ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);ctx.fill();
    });

    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const a=particles[i],b=particles[j];
        const dx=a.x-b.x,dy=a.y-b.y;
        const distance=Math.sqrt(dx*dx+dy*dy);
        const maxDistance=125;
        if(distance<maxDistance){
          const opacity=(1-distance/maxDistance)*.18;
          ctx.beginPath();
          ctx.strokeStyle=`rgba(255,220,228,${opacity})`;
          ctx.lineWidth=.7;
          ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
        }
      }
    }
    requestAnimationFrame(drawParticles);
  }

  const hero=canvas.parentElement;
  hero.addEventListener('mousemove',e=>{
    const rect=hero.getBoundingClientRect();
    mouse.x=e.clientX-rect.left;mouse.y=e.clientY-rect.top;
  });
  hero.addEventListener('mouseleave',()=>{mouse.x=null;mouse.y=null;});
  hero.addEventListener('touchmove',e=>{
    if(!e.touches.length)return;
    const rect=hero.getBoundingClientRect();
    mouse.x=e.touches[0].clientX-rect.left;
    mouse.y=e.touches[0].clientY-rect.top;
  },{passive:true});
  hero.addEventListener('touchend',()=>{mouse.x=null;mouse.y=null;});
  window.addEventListener('resize',resizeCanvas);
  resizeCanvas();
  drawParticles();
}

function demoAlert(message){alert(message);}
