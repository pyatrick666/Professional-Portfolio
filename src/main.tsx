import React,{useEffect,useRef}from'react';
import{createRoot}from'react-dom/client';
import{ArrowUpRight,Mail,Menu,X,ExternalLink}from'lucide-react';
import{gsap}from'gsap';
import{ScrollTrigger}from'gsap/ScrollTrigger';
import'./styles.css';
gsap.registerPlugin(ScrollTrigger);

const projects=[
{name:'CHESSMATE',num:'01',type:'MOBILE / GAME',desc:'Flutter chess experience with polished gameplay, monetisation and a foundation for connected play.',tags:['FLUTTER','DART','FIREBASE','ADMOB'],href:'https://pyatrick666.itch.io/chessmate'},
{name:'EPORTFOLIO',num:'02',type:'WEB / COURSEWORK',desc:'Responsive full-stack developer ePortfolio documenting practical web technologies and interactive demonstrations.',tags:['HTML','CSS','JAVASCRIPT','BOOTSTRAP'],href:'https://pyatrick666.github.io/ePortfolio/'},
{name:'PORTFOLIO',num:'03',type:'WEB / PERSONAL',desc:'This site — an experimental developer portfolio focused on motion, typography, systems and visual storytelling.',tags:['REACT','TYPESCRIPT','GSAP','CSS'],href:'https://github.com/pyatrick666/Professional-Portfolio'}];

const skills=['React','TypeScript','JavaScript','Flutter','Dart','Firebase','C#','Java','Python','C','Node.js','Express','PHP','Django','MySQL','PostgreSQL','Linux','Networking','Cisco','Figma','Canva','Git / GitHub'];

function App(){
 const[open,setOpen]=React.useState(false);const nav=useRef<HTMLElement>(null);
 useEffect(()=>{const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(reduce)return;
 gsap.fromTo('.hero-word',{yPercent:110,opacity:0},{yPercent:0,opacity:1,duration:1.25,stagger:.1,ease:'power4.out'});
 gsap.fromTo('.hero-meta',{opacity:0,y:20},{opacity:1,y:0,duration:.8,delay:.65,ease:'power3.out'});
 gsap.to('.float-ring',{rotation:360,duration:28,repeat:-1,ease:'none'});
 gsap.utils.toArray<HTMLElement>('.section-title').forEach(el=>gsap.fromTo(el,{y:70,opacity:0},{y:0,opacity:1,duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 85%'}}));
 gsap.utils.toArray<HTMLElement>('.project').forEach((el,i)=>gsap.fromTo(el,{y:60,opacity:0},{y:0,opacity:1,duration:.9,delay:i*.08,scrollTrigger:{trigger:el,start:'top 88%'}}));
 const move=(e:MouseEvent)=>{document.documentElement.style.setProperty('--mx',e.clientX+'px');document.documentElement.style.setProperty('--my',e.clientY+'px')};
 addEventListener('mousemove',move);return()=>removeEventListener('mousemove',move)},[]);
 useEffect(()=>{const close=(e:MouseEvent)=>{if(open&&nav.current&&!nav.current.contains(e.target as Node))setOpen(false)};document.addEventListener('click',close);return()=>document.removeEventListener('click',close)},[open]);
 return <div className="site">
  <div className="noise" aria-hidden="true"/><div className="cursor-light" aria-hidden="true"/>
  <header className="header">
   <a className="wordmark" href="#home">PRATIK<span>.</span></a>
   <a className="mail-link" href="mailto:pyatrick666@gmail.com">pyatrick666@gmail.com</a>
   <nav ref={nav} className={open?'nav open':'nav'} aria-label="Primary"><a href="#about" onClick={()=>setOpen(false)}>ABOUT</a><a href="#work" onClick={()=>setOpen(false)}>WORK</a><a href="#skills" onClick={()=>setOpen(false)}>SKILLS</a><a href="#contact" onClick={()=>setOpen(false)}>CONTACT</a></nav>
   <button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
  </header>
  <main>
   <section id="home" className="landing">
    <div className="landing-shape" aria-hidden="true"><div className="float-ring"/><div className="core">PP</div></div>
    <div className="landing-copy">
      <p className="hero-meta">IT STUDENT / DEVELOPER / NEPAL · 2026</p>
      <h1><span className="hero-word">PRATIK</span><span className="hero-word italic">POUDEL</span></h1>
      <div className="landing-bottom"><p>Building digital products across <strong>software</strong>, <strong>systems</strong> and <strong>interfaces</strong>.</p><a className="round-arrow" href="#work" aria-label="Explore work"><ArrowUpRight/></a></div>
    </div>
    <div className="side-label">SCROLL<br/>TO EXPLORE</div>
   </section>
   <section id="about" className="about section"><div className="section-number">01</div><div className="section-content"><p className="kicker">ABOUT ME</p><h2 className="section-title">CURIOUS BY<br/><em>DEFAULT.</em></h2><div className="about-columns"><p>I’m Pratik Poudel, a BSc (Hons) Information Technology student specialising in Computer Systems Engineering at ISMT College, affiliated with the University of Sunderland.</p><p>I like working where software meets systems: building applications, exploring networking and turning rough ideas into interfaces that feel intentional.</p></div><div className="facts"><span>2025—2028 <small>DEGREE</small></span><span>FLUTTER <small>MOBILE</small></span><span>REACT <small>WEB</small></span><span>LINUX <small>SYSTEMS</small></span></div></div></section>
   <section id="work" className="work section"><div className="section-number">02</div><div className="section-content"><p className="kicker">SELECTED WORK</p><h2 className="section-title">THINGS I'VE<br/><em>BUILT.</em></h2><div className="projects">{projects.map(p=><a className="project" href={p.href} target="_blank" rel="noreferrer" key={p.name}><span className="project-num">{p.num}</span><div className="project-main"><span className="project-type">{p.type}</span><h3>{p.name}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div><ArrowUpRight className="project-arrow"/></a>)}</div></div></section>
   <section id="skills" className="skills section"><div className="section-number">03</div><div className="section-content"><p className="kicker">TOOLKIT</p><h2 className="section-title">I SPEAK<br/><em>TECH.</em></h2><div className="skill-cloud">{skills.map((s,i)=><span key={s} style={{'--i':i}as React.CSSProperties}>{s}</span>)}</div></div></section>
   <section id="contact" className="contact section"><div className="section-number">04</div><div className="section-content"><p className="kicker">LET'S TALK</p><h2 className="section-title">MAKE<br/><em>SOMETHING.</em></h2><div className="contact-row"><p>Open to internships, collaborations and opportunities in software development, full-stack engineering and networking.</p><a className="contact-button" href="mailto:pyatrick666@gmail.com">GET IN TOUCH <ArrowUpRight/></a></div><div className="links"><a href="https://github.com/pyatrick666" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/pratik-poudel-b3264a263/" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="mailto:pyatrick666@gmail.com">EMAIL ↗</a></div></div></section>
  </main>
  <footer><span>© {new Date().getFullYear()} PRATIK POUDEL</span><span>REACT · GSAP · CSS</span><a href="#home">BACK TO TOP ↑</a></footer>
 </div>
}
createRoot(document.getElementById('root')!).render(<App/>);