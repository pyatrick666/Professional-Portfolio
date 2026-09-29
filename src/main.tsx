import React,{useEffect,useRef,useState}from"react";
import{createRoot}from"react-dom/client";
import{ArrowUpRight,Mail,Menu,X}from"lucide-react";
import{gsap}from"gsap";
import{ScrollTrigger}from"gsap/ScrollTrigger";
import*as THREE from"three";
import"./styles.css";
gsap.registerPlugin(ScrollTrigger);

const projects=[
{name:"CHESSMATE",num:"01",type:"MOBILE / GAME",desc:"A Flutter chess experience with gameplay, monetisation and a foundation for connected play.",tags:["FLUTTER","DART","FIREBASE","ADMOB"],href:"https://pyatrick666.itch.io/chessmate"},
{name:"EPORTFOLIO",num:"02",type:"WEB / COURSEWORK",desc:"A responsive developer ePortfolio documenting practical web technologies and interactive demonstrations.",tags:["HTML","CSS","JAVASCRIPT","BOOTSTRAP"],href:"https://pyatrick666.github.io/ePortfolio/"},
{name:"PROFESSIONAL PORTFOLIO",num:"03",type:"WEB / PERSONAL",desc:"A creative developer portfolio built around WebGL, motion, typography and interaction.",tags:["REACT","TYPESCRIPT","THREE.JS","GSAP"],href:"https://github.com/pyatrick666/Professional-Portfolio"}];

const skills=["React","TypeScript","JavaScript","Three.js","GSAP","Flutter","Dart","Firebase","C#","Java","Python","C","Node.js","Express","PHP","Django","MySQL","PostgreSQL","Linux","Networking","Cisco","Figma","Canva","Git / GitHub"];

function HeroScene(){
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  if(!ref.current)return;
  const host=ref.current;
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(42,1,.1,100);
  camera.position.z=4.8;
  const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  renderer.setClearColor(0,0);
  host.appendChild(renderer.domElement);
  const group=new THREE.Group();scene.add(group);
  const geo=new THREE.IcosahedronGeometry(1.18,5);
  const mat=new THREE.MeshStandardMaterial({color:0x9c8cff,roughness:.2,metalness:.35,emissive:0x281d55,emissiveIntensity:1.6});
  const orb=new THREE.Mesh(geo,mat);group.add(orb);
  const wire=new THREE.Mesh(new THREE.IcosahedronGeometry(1.28,2),new THREE.MeshBasicMaterial({color:0xb8aeff,wireframe:true,transparent:true,opacity:.18}));group.add(wire);
  const ring=new THREE.Mesh(new THREE.TorusGeometry(1.72,.012,16,180),new THREE.MeshBasicMaterial({color:0x9c8cff,transparent:true,opacity:.65}));ring.rotation.x=.75;group.add(ring);
  const glow=new THREE.Mesh(new THREE.SphereGeometry(1.55,32,32),new THREE.MeshBasicMaterial({color:0x6e5cff,transparent:true,opacity:.045,blending:THREE.AdditiveBlending}));group.add(glow);
  const light=new THREE.PointLight(0xb6aaff,18,8);light.position.set(2,2,3);scene.add(light);
  scene.add(new THREE.AmbientLight(0xffffff,.35));
  const pointer={x:0,y:0},target={x:0,y:0};
  const move=(e:PointerEvent)=>{target.x=(e.clientX/innerWidth-.5)*1.2;target.y=(e.clientY/innerHeight-.5)*-.9};
  addEventListener("pointermove",move,{passive:true});
  const resize=()=>{const w=host.clientWidth,h=host.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()};
  addEventListener("resize",resize);resize();
  let frame=0;
  const tick=()=>{frame=requestAnimationFrame(tick);pointer.x+=(target.x-pointer.x)*.035;pointer.y+=(target.y-pointer.y)*.035;group.rotation.y+=.0025;group.rotation.x=pointer.y*.25;group.position.x=pointer.x*.18;group.position.y=pointer.y*.12;wire.rotation.y-=.003;ring.rotation.z+=.004;renderer.render(scene,camera)};
  tick();
  return()=>{cancelAnimationFrame(frame);removeEventListener("pointermove",move);removeEventListener("resize",resize);renderer.dispose();geo.dispose();mat.dispose();host.removeChild(renderer.domElement)}
 },[]);
 return <div ref={ref} className="hero-webgl" aria-hidden="true"/>;
}

function SkillBubbles(){
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const host=ref.current;if(!host)return;
  const els=[...host.querySelectorAll<HTMLElement>(".bubble")];
  const state=els.map((el,i)=>({el,x:30+(i*67)%90,y:35+(i*43)%85,vx:(i%3-.9)*.18,vy:((i*7)%5-2)*.12,r:el.offsetWidth/2}));
  let raf=0;
  const pointer={x:-9999,y:-9999};
  const move=(e:PointerEvent)=>{const r=host.getBoundingClientRect();pointer.x=e.clientX-r.left;pointer.y=e.clientY-r.top};
  const leave=()=>{pointer.x=-9999;pointer.y=-9999};
  host.addEventListener("pointermove",move);host.addEventListener("pointerleave",leave);
  const tick=()=>{raf=requestAnimationFrame(tick);const w=host.clientWidth,h=host.clientHeight;
   state.forEach((s,i)=>{s.x+=s.vx;s.y+=s.vy;if(s.x<4||s.x>w-4)s.vx*=-1;if(s.y<4||s.y>h-4)s.vy*=-1;
    const dx=s.x-pointer.x,dy=s.y-pointer.y,d=Math.hypot(dx,dy);
    if(d<120){const f=(120-d)/120*.9;s.vx+=(dx/(d||1))*f*.025;s.vy+=(dy/(d||1))*f*.025}
    s.vx*=.997;s.vy*=.997;
    els[i].style.transform=`translate3d(${s.x}px,${s.y}px,0)`;
   });
  };tick();
  return()=>{cancelAnimationFrame(raf);host.removeEventListener("pointermove",move);host.removeEventListener("pointerleave",leave)}
 },[]);
 return <div ref={ref} className="bubble-field">{skills.map((s,i)=><span className="bubble" key={s} style={{"--size":`${Math.min(142,70+s.length*5)}px`,"--i":i}as React.CSSProperties}>{s}</span>)}</div>
}

function App(){
 const[open,setOpen]=useState(false);
 useEffect(()=>{
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(reduce)return;
  const ctx=gsap.context(()=>{
   gsap.from(".hero-line",{yPercent:115,opacity:0,duration:1.15,stagger:.12,ease:"power4.out"});
   gsap.from(".hero-info",{y:25,opacity:0,duration:.8,delay:.65,ease:"power3.out"});
   gsap.utils.toArray<HTMLElement>(".reveal").forEach(el=>gsap.from(el,{y:70,opacity:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 82%"}}));
   gsap.utils.toArray<HTMLElement>(".project").forEach((el,i)=>gsap.from(el,{x:60,opacity:0,duration:.9,delay:i*.08,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 88%"}}));
   gsap.to(".orbit",{rotation:360,duration:30,repeat:-1,ease:"none"});
  });
  return()=>ctx.revert()
 },[]);
 useEffect(()=>{const move=(e:PointerEvent)=>{document.documentElement.style.setProperty("--mx",e.clientX+"px");document.documentElement.style.setProperty("--my",e.clientY+"px")};addEventListener("pointermove",move,{passive:true});return()=>removeEventListener("pointermove",move)},[]);
 return <div className="site">
  <div className="grain" aria-hidden="true"/><div className="cursor-orb" aria-hidden="true"/>
  <header className="header">
   <a className="brand" href="#home">PRATIK<span>.</span></a>
   <a className="connect-mail" href="mailto:pyatrick666@gmail.com"><Mail size={12}/>pyatrick666@gmail.com</a>
   <nav className={open?"nav open":"nav"} aria-label="Primary navigation">
    <a href="#about" onClick={()=>setOpen(false)}>ABOUT</a><a href="#work" onClick={()=>setOpen(false)}>WORK</a><a href="#skills" onClick={()=>setOpen(false)}>SKILLS</a><a href="#contact" onClick={()=>setOpen(false)}>CONTACT</a>
   </nav>
   <button className="menu" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?<X size={20}/>:<Menu size={20}/>}</button>
  </header>

  <main id="smooth-content">
   <section id="home" className="hero">
    <div className="hero-orbit" aria-hidden="true"><div className="orbit"/><div className="orbit-dot"/></div>
    <HeroScene/>
    <div className="hero-content">
     <div className="hero-info"><span>IT STUDENT / DEVELOPER</span><span>NEPAL · 2026</span></div>
     <h1><span className="hero-line">PRATIK</span><span className="hero-line hero-last">POUDEL</span></h1>
     <div className="hero-bottom"><p>Building digital experiences across <b>software</b>, <b>systems</b> and <b>interfaces</b>.</p><a href="#about" className="circle-link" aria-label="Explore portfolio"><ArrowUpRight/></a></div>
    </div>
    <div className="scroll-mark">SCROLL<br/>TO EXPLORE</div>
   </section>

   <section id="about" className="section about">
    <div className="section-no">01</div><div className="section-inner">
     <span className="eyebrow reveal">ABOUT ME</span><h2 className="display reveal">CURIOUS<br/><i>BY DEFAULT.</i></h2>
     <div className="about-grid reveal"><p>I’m Pratik Poudel, a BSc (Hons) Information Technology student specialising in Computer Systems Engineering at ISMT College, affiliated with the University of Sunderland.</p><p>I enjoy the space between software and systems — building applications, exploring networking and turning ideas into interfaces that feel considered.</p></div>
     <div className="about-stats reveal"><div><strong>2025—28</strong><small>DEGREE</small></div><div><strong>FLUTTER</strong><small>MOBILE</small></div><div><strong>REACT</strong><small>WEB</small></div><div><strong>LINUX</strong><small>SYSTEMS</small></div></div>
    </div>
   </section>

   <section id="work" className="section work">
    <div className="section-no">02</div><div className="section-inner"><span className="eyebrow reveal">SELECTED WORK</span><h2 className="display reveal">THINGS I'VE<br/><i>BUILT.</i></h2>
     <div className="projects">{projects.map(p=><a className="project" href={p.href} target="_blank" rel="noopener noreferrer" key={p.name}><span className="project-index">{p.num}</span><div><small>{p.type}</small><h3>{p.name}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div><ArrowUpRight className="project-arrow"/></a>)}</div>
    </div>
   </section>

   <section id="skills" className="section skills">
    <div className="section-no">03</div><div className="section-inner"><span className="eyebrow reveal">TECH STACK</span><h2 className="display reveal">TOOLS I<br/><i>USE.</i></h2><SkillBubbles/><p className="bubble-note">MOVE YOUR CURSOR THROUGH THE FIELD</p></div>
   </section>

   <section id="contact" className="section contact">
    <div className="section-no">04</div><div className="section-inner"><span className="eyebrow reveal">GET IN TOUCH</span><h2 className="display reveal">LET'S MAKE<br/><i>AN IMPACT.</i></h2>
     <div className="contact-grid reveal"><p>Open to internships, collaborations and opportunities in software development, full-stack engineering and networking.</p><a className="contact-cta" href="mailto:pyatrick666@gmail.com">START A CONVERSATION <ArrowUpRight/></a></div>
     <div className="socials"><a href="https://github.com/pyatrick666" target="_blank" rel="noopener noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/pratik-poudel-b3264a263/" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a><a href="mailto:pyatrick666@gmail.com">EMAIL ↗</a></div>
    </div>
   </section>
  </main>
  <footer><span>© {new Date().getFullYear()} PRATIK POUDEL</span><span>REACT · THREE.JS · GSAP</span><a href="#home">BACK TO TOP ↑</a></footer>
 </div>
}
createRoot(document.getElementById("root")!).render(<App/>);