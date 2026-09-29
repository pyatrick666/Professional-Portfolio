import React,{useEffect,useRef,useState}from"react";
import{createRoot}from"react-dom/client";
import{ArrowDownRight,ArrowUpRight,Mail,Menu,X,ExternalLink}from"lucide-react";
import{gsap}from"gsap";
import{ScrollTrigger}from"gsap/ScrollTrigger";
import*as THREE from"three";
import"./styles.css";
gsap.registerPlugin(ScrollTrigger);

const PHOTO="https://pyatrick666.github.io/ePortfolio/profile.jpg";

const projects=[
 {num:"01",name:"CHESSMATE",type:"MOBILE GAME",desc:"A Flutter chess experience with gameplay, monetisation and connected-play foundations.",tags:["FLUTTER","DART","FIREBASE","ADMOB"],href:"https://pyatrick666.itch.io/chessmate",label:"PLAY PROJECT"},
 {num:"02",name:"EPORTFOLIO",type:"WEB DEVELOPMENT",desc:"A responsive academic ePortfolio documenting practical web technologies through interactive demonstrations.",tags:["HTML","CSS","JAVASCRIPT","BOOTSTRAP"],href:"https://pyatrick666.github.io/ePortfolio/",label:"VIEW SITE"},
 {num:"03",name:"PROFESSIONAL PORTFOLIO",type:"CREATIVE DEVELOPMENT",desc:"An evolving personal portfolio combining React, WebGL, Three.js and motion design.",tags:["REACT","TYPESCRIPT","THREE.JS","GSAP"],href:"https://github.com/pyatrick666/Professional-Portfolio",label:"VIEW CODE"}
];

const skills=["React","TypeScript","JavaScript","Three.js","GSAP","Flutter","Dart","Firebase","C#","Java","Python","C","Node.js","Express","PHP","Django","MySQL","PostgreSQL","Linux","Networking","Cisco","Figma","Canva","Git / GitHub"];

function HeroScene(){
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const host=ref.current;if(!host)return;
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(38,1,.1,100);camera.position.z=6;
  const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setClearColor(0,0);host.appendChild(renderer.domElement);
  const group=new THREE.Group();scene.add(group);
  const rings=new THREE.Group();group.add(rings);
  const ringData=[[1.72,.012,.25,.65],[2.05,.009,-.5,.35],[2.35,.006,.85,.18]];
  ringData.forEach(([radius,t,rx,opacity])=>{
   const mesh=new THREE.Mesh(new THREE.TorusGeometry(radius,t,12,180),new THREE.MeshBasicMaterial({color:0xa99cff,transparent:true,opacity}));
   mesh.rotation.x=rx;mesh.rotation.y=rx*.35;rings.add(mesh);
  });
  const core=new THREE.Mesh(new THREE.IcosahedronGeometry(.9,3),new THREE.MeshBasicMaterial({color:0x9a8cff,wireframe:true,transparent:true,opacity:.2}));
  group.add(core);
  const dotsGeo=new THREE.BufferGeometry(),count=180,positions=new Float32Array(count*3);
  for(let i=0;i<count;i++){const a=Math.random()*Math.PI*2,r=2.1+Math.random()*1.1;positions[i*3]=Math.cos(a)*r;positions[i*3+1]=(Math.random()-.5)*2.5;positions[i*3+2]=Math.sin(a)*r}
  dotsGeo.setAttribute("position",new THREE.BufferAttribute(positions,3));
  const dots=new THREE.Points(dotsGeo,new THREE.PointsMaterial({color:0xc7bfff,size:.018,transparent:true,opacity:.75}));group.add(dots);
  const light=new THREE.PointLight(0xa99cff,16,10);light.position.set(2,2,4);scene.add(light);
  scene.add(new THREE.AmbientLight(0xffffff,.35));
  const pointer={x:0,y:0},target={x:0,y:0};
  const move=(e:PointerEvent)=>{target.x=(e.clientX/innerWidth-.5)*1.2;target.y=(e.clientY/innerHeight-.5)*-.9};
  const resize=()=>{const w=host.clientWidth,h=host.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()};
  addEventListener("pointermove",move,{passive:true});addEventListener("resize",resize);resize();
  let raf=0;
  const tick=()=>{raf=requestAnimationFrame(tick);pointer.x+=(target.x-pointer.x)*.035;pointer.y+=(target.y-pointer.y)*.035;group.rotation.y+=.0018;group.rotation.x=pointer.y*.12;group.position.x=pointer.x*.12;group.position.y=pointer.y*.08;rings.rotation.z+=.0025;dots.rotation.y-=.001;renderer.render(scene,camera)};
  tick();
  return()=>{cancelAnimationFrame(raf);removeEventListener("pointermove",move);removeEventListener("resize",resize);renderer.dispose();dotsGeo.dispose();host.removeChild(renderer.domElement)}
 },[]);
 return <div ref={ref} className="hero-webgl" aria-hidden="true"/>;
}

function SkillMarquee(){
 const rows=[skills.slice(0,8),skills.slice(8,16),skills.slice(16)];
 return <div className="skill-marquee">{rows.map((row,i)=><div className={"skill-track "+(i===1?"reverse":"")} key={i}><div className="skill-row">{[...row,...row].map((s,j)=><span className="skill-pill" key={s+"-"+j}>{s}<b>✦</b></span>)}</div></div>)}</div>
}

function App(){
 const[open,setOpen]=useState(false);
 useEffect(()=>{
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ctx=gsap.context(()=>{
   if(!reduce){
    gsap.from(".hero-kicker",{y:25,opacity:0,duration:.8,delay:.2});
    gsap.from(".hero-name span",{yPercent:120,opacity:0,duration:1.15,stagger:.1,delay:.25,ease:"power4.out"});
    gsap.from(".hero-photo-wrap",{scale:.75,opacity:0,rotate:-4,duration:1.4,delay:.35,ease:"power4.out"});
    gsap.from(".hero-side-note,.hero-bottom-bar",{opacity:0,y:25,duration:.8,delay:1});
    gsap.utils.toArray<HTMLElement>(".reveal").forEach(el=>gsap.from(el,{y:65,opacity:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 84%"}}));
    gsap.utils.toArray<HTMLElement>(".project-card").forEach((el,i)=>gsap.from(el,{y:70,opacity:0,duration:.9,delay:i*.08,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 88%"}}));
    gsap.to(".hero-orbit-ring",{rotate:360,duration:24,repeat:-1,ease:"none"});
   }
  });
  return()=>ctx.revert();
 },[]);
 useEffect(()=>{
  const move=(e:PointerEvent)=>{document.documentElement.style.setProperty("--mx",e.clientX+"px");document.documentElement.style.setProperty("--my",e.clientY+"px")};
  addEventListener("pointermove",move,{passive:true});return()=>removeEventListener("pointermove",move)
 },[]);
 return <div className="site">
  <div className="grain" aria-hidden="true"/><div className="cursor-orb" aria-hidden="true"/>
  <header className="header">
   <a className="brand" href="#home">PRATIK<span>.</span></a>
   <a className="connect-mail" href="mailto:pyatrick666@gmail.com"><Mail size={12}/>pyatrick666@gmail.com</a>
   <nav className={open?"nav open":"nav"} aria-label="Primary navigation">
    <a href="#about" onClick={()=>setOpen(false)}>ABOUT</a><a href="#work" onClick={()=>setOpen(false)}>WORK</a><a href="#contact" onClick={()=>setOpen(false)}>CONTACT</a>
   </nav>
   <button className="menu" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?<X size={20}/>:<Menu size={20}/>}</button>
  </header>

  <main id="smooth-content">
   <section id="home" className="hero">
    <div className="hero-grid" aria-hidden="true"/>
    <div className="hero-orbit-ring" aria-hidden="true"><span/><i/><b/></div>
    <HeroScene/>
    <div className="hero-photo-wrap"><div className="photo-glow"/><div className="photo-frame"><img src={PHOTO} alt="Pratik Poudel" fetchPriority="high"/></div></div>
    <div className="hero-copy">
     <div className="hero-kicker mono"><span>BASED IN NEPAL</span><span>AVAILABLE FOR INTERNSHIPS</span></div>
     <div className="hero-name"><span>PRATIK</span><span><i>POUDEL</i></span></div>
     <div className="hero-description">IT STUDENT <b>×</b> CREATIVE DEVELOPER<br/>BUILDING DIGITAL EXPERIENCES.</div>
    </div>
    <div className="hero-side-note mono"><span>SCROLL</span><ArrowDownRight/></div>
    <div className="hero-bottom-bar"><span>SOFTWARE</span><span>FULL-STACK</span><span>MOBILE</span><span>SYSTEMS</span><span>NETWORKING</span></div>
   </section>

   <section className="ticker"><div className="ticker-track"><span>CREATIVE DEVELOPER</span><b>✦</b><span>COMPUTER SYSTEMS</span><b>✦</b><span>FULL-STACK DEVELOPMENT</span><b>✦</b><span>WEBGL / MOTION</span><b>✦</b><span>CREATIVE DEVELOPER</span><b>✦</b></div></section>

   <section id="about" className="section about">
    <div className="section-no mono">01</div><div className="section-inner">
     <span className="eyebrow mono reveal">ABOUT ME</span>
     <h2 className="display reveal">I BUILD WITH<br/><i>CURIOUSITY.</i></h2>
     <div className="about-layout">
      <p className="about-lead reveal">I’m Pratik Poudel, a BSc (Hons) Information Technology student specialising in Computer Systems Engineering at ISMT College, affiliated with the University of Sunderland.</p>
      <div className="about-copy reveal"><p>I like working where software, systems and visual design overlap — from Flutter apps and full-stack interfaces to Linux, networking and interactive web experiences.</p><a href="https://github.com/pyatrick666" target="_blank" rel="noopener noreferrer" className="text-link">EXPLORE MY GITHUB <ArrowUpRight/></a></div>
     </div>
     <div className="about-stats reveal"><div><strong>2025—28</strong><small>DEGREE</small></div><div><strong>FLUTTER</strong><small>MOBILE</small></div><div><strong>REACT</strong><small>WEB</small></div><div><strong>LINUX</strong><small>SYSTEMS</small></div></div>
    </div>
   </section>

   <section id="work" className="section work">
    <div className="section-no mono">02</div><div className="section-inner">
     <span className="eyebrow mono reveal">SELECTED WORK</span>
     <div className="work-heading"><h2 className="display reveal">SELECTED<br/><i>PROJECTS.</i></h2><p className="work-intro reveal">A selection of things I’ve built while learning, experimenting and turning ideas into working products.</p></div>
     <div className="projects">{projects.map((p,i)=><a className={"project-card project-"+i} href={p.href} target="_blank" rel="noopener noreferrer" key={p.name}>
      <div className="project-visual"><span>{p.num}</span><div className="visual-grid"/><div className="visual-word">{i===0?"CM":i===1?"EP":"PP"}</div><ArrowUpRight className="visual-arrow"/></div>
      <div className="project-meta"><span className="mono">{p.type}</span><span className="mono">{p.num}</span></div>
      <h3>{p.name}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="project-link mono">{p.label}<ExternalLink size={12}/></div>
     </a>)}</div>
    </div>
   </section>

   <section id="skills" className="section skills">
    <div className="section-no mono">03</div><div className="section-inner">
     <span className="eyebrow mono reveal">TECH STACK</span><h2 className="display reveal">TOOLS &<br/><i>TECHNOLOGIES.</i></h2>
     <SkillMarquee/><p className="skills-note mono">A GROWING TOOLKIT — NOT A FINISHED LIST.</p>
    </div>
   </section>

   <section id="contact" className="section contact">
    <div className="section-no mono">04</div><div className="section-inner">
     <span className="eyebrow mono reveal">GET IN TOUCH</span>
     <h2 className="contact-title reveal">LET'S<br/><i>CREATE.</i></h2>
     <div className="contact-bottom reveal"><p>Open to internships, collaborations and opportunities in software development, full-stack engineering and networking.</p><a className="contact-cta" href="mailto:pyatrick666@gmail.com">pyatrick666@gmail.com <ArrowUpRight/></a></div>
     <div className="socials mono"><a href="https://github.com/pyatrick666" target="_blank" rel="noopener noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/pratik-poudel-b3264a263/" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a><a href="https://pyatrick666.github.io/ePortfolio/" target="_blank" rel="noopener noreferrer">EPORTFOLIO ↗</a></div>
    </div>
   </section>
  </main>
  <footer className="mono"><span>© {new Date().getFullYear()} PRATIK POUDEL</span><span>REACT · THREE.JS · GSAP</span><a href="#home">BACK TO TOP ↑</a></footer>
 </div>
}
createRoot(document.getElementById("root")!).render(<App/>);
