import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Github, Gamepad2, Instagram, Linkedin, Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const EMAIL = 'pyatrick666@gmail.com';

const projects = [
  { name: 'ChessMate', num: '01', type: 'Mobile / Game', tools: 'Flutter, Dart, Firebase, AdMob', href: 'https://pyatrick666.itch.io/chessmate' },
  { name: 'ePortfolio', num: '02', type: 'Web / Coursework', tools: 'HTML, CSS, JavaScript, Bootstrap', href: 'https://pyatrick666.github.io/ePortfolio/' },
  { name: 'GitHub Projects', num: '03', type: 'More Projects', tools: 'Explore my remaining public repositories and builds', href: 'https://github.com/pyatrick666?tab=repositories' }
];

const stack = ['React', 'TypeScript', 'JavaScript', 'Flutter', 'Dart', 'Firebase', 'Node', 'Express', 'PHP', 'MySQL', 'Python', 'Java', 'C#', 'Linux', 'Cisco', 'Figma', 'Git'];

const journey = [
  { t: 'Web foundations', s: '2019–2021 · HTML · CSS · JavaScript · PHP', d: 'Built a foundation in web development, from semantic front ends to PHP-backed websites and practical coursework.' },
  { t: 'Modern stack', s: '2021–2023 · React · TypeScript · Flutter', d: 'Moved into component-driven applications, mobile development, APIs and interactive front-end experiences.' },
  { t: 'Networking', s: '2023–Now · Computer Systems · Networking · Linux', d: 'Developing deeper systems and networking skills alongside my BSc (Hons) IT studies at ISMT College.' }
];

/* ---------- Web-sourced professional avatar ---------- */
const ACCENT = 0x7dff00;
const AVATAR_URL = 'https://pyatrick666.github.io/ePortfolio/profile.jpg';

const pose = { x: 0, y: -1.1, s: 1.25, ry: 0, o: 1 };

function Stage() {
  const box = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const avatar = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
    camera.position.z = 6;

    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(90);
    for (let i = 0; i < particlePositions.length; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 8;
      particlePositions[i + 1] = (Math.random() - 0.5) * 5;
      particlePositions[i + 2] = (Math.random() - 0.5) * 3 - 1;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: ACCENT,
      size: 0.018,
      transparent: true,
      opacity: 0.5,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    scene.add(new THREE.AmbientLight(0xffffff, 1.1));

    const key = new THREE.DirectionalLight(0xffffff, 2.4);
    key.position.set(-3, 3, 5);
    scene.add(key);

    const rim = new THREE.DirectionalLight(ACCENT, 4);
    rim.position.set(3, 2, -3);
    scene.add(rim);

    const look = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMouseMove = (event: MouseEvent) => {
      look.tx = event.clientX / window.innerWidth - 0.5;
      look.ty = event.clientY / window.innerHeight - 0.5;
    };

    const fit = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('resize', fit);
    fit();

    let frame = 0;
    const clock = new THREE.Clock();

    const loop = () => {
      const time = clock.getElapsedTime();
      const halfWidth = Math.tan(THREE.MathUtils.degToRad(20)) * camera.position.z * camera.aspect;

      look.x += (look.tx - look.x) * 0.06;
      look.y += (look.ty - look.y) * 0.06;
      particles.rotation.y = time * 0.018;
      particles.rotation.x = Math.sin(time * 0.25) * 0.04;

      if (avatar.current) {
        avatar.current.style.transform =
          `translate3d(${pose.x * halfWidth}px, ${pose.y * 34}px, 0) scale(${pose.s}) rotateY(${pose.ry + look.x * 8}deg) rotateX(${look.y * -3}deg)`;
        avatar.current.style.opacity = String(pose.o);
      }

      if (glow.current) {
        glow.current.style.left = (50 + pose.x * 50) + '%';
        glow.current.style.opacity = String(pose.o);
      }

      renderer.render(scene, camera);
      frame = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', fit);
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="stage" ref={box} aria-hidden="true">
      <div className="halo" ref={glow} />
      <div className="avatar-shell">
        <img
          ref={avatar}
          className="web-avatar"
          src={AVATAR_URL}
          alt=""
          loading="eager"
          referrerPolicy="no-referrer"
        />
        <span className="avatar-ring" />
      </div>
    </div>
  );
}

function Bubbles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let hovered = false;
    const pointer = { x: 0, y: 0 };

    const colors = ['#7dff00', '#c6ff8a', '#b7ff66', '#9cff33', '#e8ffd1', '#66cc00'];
    const center = { x: 0, y: 0 };

    const bubbles = stack.map((label, index) => ({
      label,
      radius: 30 + Math.random() * 24,
      x: 0,
      y: 0,
      tx: 0,
      ty: 0,
      vx: 0,
      vy: 0,
      color: colors[index % colors.length],
      angle: (index / stack.length) * Math.PI * 2,
      orbit: 95 + (index % 3) * 34
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      center.x = width / 2;
      center.y = height / 2 + 70;

      bubbles.forEach((bubble) => {
        bubble.x = center.x;
        bubble.y = center.y;
        bubble.tx = center.x;
        bubble.ty = center.y;
      });
    };

    const onPointerEnter = () => {
      hovered = true;
    };

    const onPointerLeave = () => {
      hovered = false;
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      hovered = true;
    };

    const loop = () => {
      context.clearRect(0, 0, width, height);

      for (const bubble of bubbles) {
        if (hovered) {
          const dx = bubble.x - pointer.x;
          const dy = bubble.y - pointer.y;
          const distance = Math.max(1, Math.hypot(dx, dy));
          const influence = Math.max(0, 1 - distance / 260);
          const spread = bubble.orbit * influence;

          bubble.tx = center.x + Math.cos(bubble.angle) * spread;
          bubble.ty = center.y + Math.sin(bubble.angle) * spread;
        } else {
          bubble.tx = center.x;
          bubble.ty = center.y;
        }

        bubble.vx += (bubble.tx - bubble.x) * 0.018;
        bubble.vy += (bubble.ty - bubble.y) * 0.018;
        bubble.vx *= 0.84;
        bubble.vy *= 0.84;
        bubble.x += bubble.vx;
        bubble.y += bubble.vy;

        const gradient = context.createRadialGradient(
          bubble.x - bubble.radius * 0.35,
          bubble.y - bubble.radius * 0.35,
          bubble.radius * 0.1,
          bubble.x,
          bubble.y,
          bubble.radius
        );
        gradient.addColorStop(0, '#fff');
        gradient.addColorStop(0.7, '#eff7e8');
        gradient.addColorStop(1, bubble.color);

        context.fillStyle = gradient;
        context.beginPath();
        context.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        context.fill();

        context.fillStyle = '#17210f';
        context.font = '500 ' + Math.max(10, bubble.radius * 0.32) + 'px Space Grotesk, sans-serif';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(bubble.label, bubble.x, bubble.y);
      }

      frame = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('pointerenter', onPointerEnter, { passive: true });
    canvas.addEventListener('pointerleave', onPointerLeave, { passive: true });
    canvas.addEventListener('pointermove', onPointerMove, { passive: true });
    loop();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointerenter', onPointerEnter);
      canvas.removeEventListener('pointerleave', onPointerLeave);
      canvas.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="bubbles" aria-label="Technology stack" />;
}

function App() {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isNarrow = () => window.innerWidth < 800;

    let raf: ((time: number) => void) | null = null;

    if (!reducedMotion) {
      const instance = new Lenis({ lerp: 0.09 });
      lenis.current = instance;

      const onScroll = () => ScrollTrigger.update();
      instance.on('scroll', onScroll);

      raf = (time: number) => instance.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
    }

    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      const animatePose = (
        trigger: string,
        values: gsap.TweenVars,
        start = 'top bottom',
        end = 'top top'
      ) => {
        gsap.to(pose, {
          ...values,
          ease: 'none',
          immediateRender: false,
          scrollTrigger: {
            trigger,
            start,
            end,
            scrub: reducedMotion ? false : 0.8,
            invalidateOnRefresh: true
          }
        });
      };

      animatePose('#about', {
        x: () => (isNarrow() ? 0 : -0.52),
        y: -1.3,
        s: 1.3,
        ry: 0.55,
        o: () => (isNarrow() ? 0.3 : 1)
      });

      animatePose('.do', {
        x: () => (isNarrow() ? 0 : 0.1),
        y: -0.9,
        s: 0.95,
        ry: -0.5,
        o: () => (isNarrow() ? 0.3 : 1)
      });

      animatePose('.tl', {
        x: 0,
        y: -2.4,
        s: 0.9,
        ry: 0,
        o: 0
      });

      gsap.utils.toArray<HTMLElement>('.rv').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: element, start: 'top 88%' }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('.row').forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0.2, x: -20 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'top 50%',
              scrub: true
            }
          }
        );
      });

      gsap.fromTo(
        '.rows',
        { '--fill': '0%' },
        {
          '--fill': '100%',
          ease: 'none',
          scrollTrigger: { trigger: '.rows', start: 'top 70%', end: 'bottom 60%', scrub: true }
        }
      );

      gsap.fromTo(
        '.hi,.role',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.4, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );

      gsap.to('.hero-copy', {
        opacity: 0,
        y: -60,
        ease: 'none',
        scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom 30%', scrub: true }
      });

      media.add('(min-width: 801px)', () => {
        const track = document.querySelector<HTMLElement>('.track');
        if (!track) return;

        gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: '.work',
            start: 'top top',
            end: () => '+=' + Math.max(0, track.scrollWidth - window.innerWidth),
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true
          }
        });

        gsap.utils.toArray<HTMLElement>('.pj .shot').forEach((element) => {
          gsap.to(element, {
            yPercent: -12,
            ease: 'none',
            scrollTrigger: {
              trigger: '.work',
              start: 'top top',
              end: '+=2000',
              scrub: true
            }
          });
        });
      });
    }, root);

    const orb = document.querySelector<HTMLElement>('.orb');
    let removeOrbMove = () => {};

    if (orb && !reducedMotion && !window.matchMedia('(pointer: coarse)').matches) {
      const xTo = gsap.quickTo(orb, 'x', { duration: 0.5 });
      const yTo = gsap.quickTo(orb, 'y', { duration: 0.5 });
      const onMouseMove = (event: MouseEvent) => {
        xTo(event.clientX);
        yTo(event.clientY);
      };

      window.addEventListener('mousemove', onMouseMove, { passive: true });
      removeOrbMove = () => window.removeEventListener('mousemove', onMouseMove);
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      removeOrbMove();
      media.revert();
      context.revert();

      if (raf) gsap.ticker.remove(raf);
      lenis.current?.destroy();
      lenis.current = null;

      pose.x = 0;
      pose.y = -1.1;
      pose.s = 1.25;
      pose.ry = 0;
      pose.o = 1;
    };
  }, []);

  const go = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    setOpen(false);

    const element = document.querySelector(id);
    if (!element) return;

    if (lenis.current) {
      lenis.current.scrollTo(element as HTMLElement);
    } else {
      element.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
    }
  };

  return (
    <div className="site" ref={root}>
      <div className="orb" aria-hidden="true" />
      <Stage />

      <header className="header">
        <a className="logo" href="#home" onClick={(event) => go(event, '#home')}>patrick</a>
        <a className="mid" href={'mailto:' + EMAIL}>{EMAIL}</a>

        <nav id="primary-navigation" className={open ? 'nav open' : 'nav'} aria-label="Primary">
          <a href="#about" onClick={(event) => go(event, '#about')}>About</a>
          <a href="#work" onClick={(event) => go(event, '#work')}>Work</a>
          <a href="#contact" onClick={(event) => go(event, '#contact')}>Contact</a>
        </nav>

        <button
          className="menu"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <aside className="rail" aria-label="Social links">
        <a href="https://github.com/pyatrick666" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={14} /></a>
        <a href="https://www.linkedin.com/in/pratik-poudel-b3264a263/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={14} /></a>
        <a href="https://pyatrick666.itch.io/chessmate" target="_blank" rel="noopener noreferrer" aria-label="itch.io"><Gamepad2 size={14} /></a>
        <a href="https://www.instagram.com/pyatrick666/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={14} /></a>
      </aside>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <div className="hi">
              <small>Hello! I'm</small>
              <h1>PRATIK<br />POUDEL</h1>
            </div>

            <div className="role">
              <small>A Software Engineer</small>
              <div className="swap" aria-label="Software Engineer and Developer">
                <span>SOFTWARE ENGINEER<br />DEVELOPER</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="eyebrow rv">About me</div>
          <p className="rv">I'm an IT student at ISMT College Butwal, affiliated with the University of Sunderland, blending full-stack and mobile development with systems know-how and a designer's eye. Driven by curiosity, I keep exploring new tools.</p>
        </section>

        <section className="do">
          <h2 className="big rv">What<br />I <em>do</em></h2>
          <div className="cards rv">
            <div className="card">
              <h3>DEVELOP</h3>
              <p>Web with React, TypeScript and PHP, mobile apps with Flutter and Dart, backed by computer systems and networking fundamentals.</p>
            </div>
            <div className="card">
              <h3>SOFTWARE ENGINEER</h3>
              <p>Build reliable software across web, mobile and backend systems, with a focus on clean architecture, practical problem-solving and maintainable code.</p>
            </div>
          </div>
        </section>

        <section className="tl">
          <h2 className="rv">My learning &amp;<br />experience</h2>
          <div className="rows">
            {journey.map((item) => (
              <div className="row" key={item.t}>
                <div>
                  <h3>{item.t}</h3>
                  <span>{item.s}</span>
                </div>
                <p>{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="work">
          <h2>My <em>Work</em></h2>
          <div className="track">
            {projects.map((project) => (
              <a className="pj" key={project.name} href={project.href} target="_blank" rel="noopener noreferrer">
                <div className="n">{project.num}</div>
                <div>
                  <h3>{project.name}</h3>
                  <span>{project.type}</span>
                </div>
                <span>Tools and features<br />{project.tools}</span>
                <div className="shot" aria-hidden="true" />
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section className="tech">
          <h2>MY TECHSTACK</h2>
          <Bubbles />
        </section>

        <section id="contact" className="contact">
          <h2 className="rv">CONTACT</h2>
          <div className="grid rv">
            <div>
              <small>Email</small>
              <a href={'mailto:' + EMAIL}>{EMAIL}</a>
              <small>Location</small>
              <span>Butwal, Nepal</span>
            </div>
            <div className="socials">
              <small>Find me online</small>
              <div className="social-list">
                <a className="social-link" href="https://github.com/pyatrick666" target="_blank" rel="noopener noreferrer">
                  <span className="social-mark"><Github size={18} aria-hidden="true" /></span>
                  <span><b>GitHub</b><small>@pyatrick666</small></span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
                <a className="social-link" href="https://www.linkedin.com/in/pratik-poudel-b3264a263/" target="_blank" rel="noopener noreferrer">
                  <span className="social-mark"><Linkedin size={18} aria-hidden="true" /></span>
                  <span><b>LinkedIn</b><small>Pratik Poudel</small></span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
                <a className="social-link" href="https://pyatrick666.itch.io/chessmate" target="_blank" rel="noopener noreferrer">
                  <span className="social-mark"><Gamepad2 size={15} /></span>
                  <span><b>itch.io</b><small>ChessMate</small></span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
                <a className="social-link" href="https://www.instagram.com/pyatrick666/" target="_blank" rel="noopener noreferrer">
                  <span className="social-mark"><Instagram size={18} aria-hidden="true" /></span>
                  <span><b>Instagram</b><small>@pyatrick666</small></span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="credit">
              Designed and developed by <b>Pratik Poudel</b><br />
              Portrait: ePortfolio profile photo<br />
              Layout inspired by moncy.dev<br />
              © {new Date().getFullYear()}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
