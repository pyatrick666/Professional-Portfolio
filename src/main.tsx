import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Menu,
  X,
} from 'lucide-react';

type SocialIconProps = { size?: number };

function GithubIcon({ size = 18 }: SocialIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .7A11.3 11.3 0 0 0 8.43 22.92c.57.1.78-.25.78-.55v-2.16c-3.18.69-3.85-1.34-3.85-1.34-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.54-.29-5.2-1.27-5.2-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.13 1.17A10.9 10.9 0 0 1 12 6.16c.97 0 1.94.13 2.84.38 2.16-1.48 3.12-1.17 3.12-1.17.62 1.57.23 2.73.12 3.02.73.8 1.17 1.82 1.17 3.07 0 4.4-2.67 5.36-5.21 5.65.41.35.78 1.04.78 2.1v3.11c0 .3.2.65.79.54A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: SocialIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: SocialIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 7.9a2.2 2.2 0 0 1 0-4.4ZM3.4 9.2h3.6V21H3.4V9.2Zm5.8 0h3.45v1.61h.05c.48-.9 1.65-1.86 3.4-1.86 3.64 0 4.31 2.4 4.31 5.52V21h-3.6v-5.79c0-1.38-.03-3.15-1.92-3.15-1.92 0-2.22 1.5-2.22 3.05V21H9.2V9.2Z" />
    </svg>
  );
}
import { gsap } from 'gsap';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import './styles.css';
import Career from './Career';
import Contact from "./Contact";

gsap.registerPlugin(ScrollTrigger);

const EMAIL = 'pyatrick666@gmail.com';

const projects = [
  {
    name: 'CarRentalApp',
    num: '01',
    type: 'Desktop Application',
    description: 'A C# and .NET desktop application focused on practical application architecture and user workflows.',
    tools: ['C#', '.NET', 'Desktop Development'],
    href: 'https://github.com/pyatrick666/CarRentalApp',
  },
  {
    name: 'AccountRegistrationSystem',
    num: '02',
    type: 'Console Application',
    description: 'An object-oriented account registration and login system with validation and file-based persistence.',
    tools: ['C#', 'OOP', 'File Handling'],
    href: 'https://github.com/pyatrick666/AccountRegistrationSystem',
  },
  {
    name: 'RaspberryPi-PICO',
    num: '03',
    type: 'Embedded Systems',
    description: 'Hardware and embedded experiments built around the Raspberry Pi Pico.',
    tools: ['Raspberry Pi Pico', 'Embedded Systems', 'Hardware'],
    href: 'https://github.com/pyatrick666/RaspberryPi-PICO',
  },
  {
    name: 'ePortfolio',
    num: '04',
    type: 'Web Development',
    description: 'A multi-page full-stack learning portfolio covering web foundations, interactive UI and responsive design.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    href: 'https://github.com/pyatrick666/ePortfolio',
  },
  {
    name: 'cit-e-cycling-web-portal',
    num: '05',
    type: 'Full Stack Web',
    description: 'A practical web portal project combining interface design, web development and database concepts.',
    tools: ['Web Development', 'Database', 'UI'],
    href: 'https://github.com/pyatrick666/cit-e-cycling-web-portal',
  },
  {
    name: '360-VR-',
    num: '06',
    type: 'VR / Interactive Web',
    description: 'An interactive 360-degree virtual reality experience built for the browser.',
    tools: ['360° VR', 'Web Development', 'Interactive Media'],
    href: 'https://github.com/pyatrick666/360-VR-',
  },
  {
    name: 'ChessMate',
    num: '07',
    type: 'Mobile Game',
    description: 'A Flutter chess application with real-device gameplay and connected services.',
    tools: ['Flutter', 'Dart', 'Firebase', 'AdMob'],
    href: 'https://github.com/pyatrick666/ChessMate',
  },
];

const skillGroups = [
  {
    label: '01',
    title: 'Frontend',
    description: 'Modern interfaces, responsive layouts and interactive web experiences.',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Three.js', 'GSAP', 'Lenis'],
  },
  {
    label: '02',
    title: 'Backend & APIs',
    description: 'Application logic, APIs, services and database-driven systems.',
    skills: ['Node.js', 'Express.js', 'PHP', 'Python', 'Java', 'C#', '.NET'],
  },
  {
    label: '03',
    title: 'Databases & Cloud',
    description: 'Data modelling, storage and cloud-connected applications.',
    skills: ['MySQL', 'MongoDB', 'Firebase', 'SQL', 'AdMob'],
  },
  {
    label: '04',
    title: 'Mobile & Game Development',
    description: 'Cross-platform apps and interactive projects built for real devices.',
    skills: ['Flutter', 'Dart', 'Three.js', 'React Three Fiber', 'Rapier'],
  },
  {
    label: '05',
    title: 'Systems & Networking',
    description: 'Computer systems, Linux and networking foundations.',
    skills: ['Linux', 'CISCO', 'Computer Systems', 'Networking', 'Git', 'GitHub'],
  },
  {
    label: '06',
    title: 'UI/UX & Creative',
    description: 'Design, prototyping and visual communication for digital products.',
    skills: ['Figma', 'UI/UX Design', 'Canva', 'Graphic Design'],
  },
  {
    label: '07',
    title: 'Engineering Foundations',
    description: 'Core concepts that support reliable software development.',
    skills: ['OOP', 'Data Structures', 'Software Engineering', 'Web Development', 'Database Systems'],
  },
];

const stack = [...new Set(skillGroups.flatMap((group) => group.skills))];

const journey = [
  {
    t: 'Web foundations',
    s: '2019–2021 · HTML · CSS · JavaScript · PHP',
    d: 'Built a foundation in web development, from semantic front ends to PHP-backed websites and practical coursework.',
  },
  {
    t: 'Networking',
    s: '2023–Now · Computer Systems · Networking · Linux',
    d: 'Developing deeper systems and networking skills alongside my BSc (Hons) IT studies at ISMT College.',
  },
];

/* =========================================================
   THREE.JS ORIGINAL 3D AVATAR
   ========================================================= */

const SKIN = 0xc98b6b;
const HAIR = 0x14101c;
const HOODIE = 0x2b2733;
const ACCENT = 0xa67cff;
const CAP = 0x09080d;
const CAP_EDGE = 0x20172e;

const pose = {
  x: -0.52,
  y: -1.3,
  s: 1.2,
  ry: 0.55,
  o: 1,
};

function makeMaterial(
  color: number,
  emissiveIntensity = 0
) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: 0.55,
    metalness: 0.05,
    emissive: color,
    emissiveIntensity,
  });
}

function buildAvatar() {
  const group = new THREE.Group();
  const head = new THREE.Group();
  const eyes: THREE.Group[] = [];
  const pupils: THREE.Mesh[] = [];
  const brows: THREE.Mesh[] = [];
  const mouth = new THREE.Mesh(
    new THREE.TorusGeometry(0.22, 0.028, 10, 28, Math.PI),
    makeMaterial(0x3a1a1a)
  );
  const shoulders = new THREE.Group();
  const arms = new THREE.Group();

  group.add(shoulders, arms, head);
  head.position.y = 1.42;

  const add = (
    geometry: THREE.BufferGeometry,
    material: THREE.Material,
    position: [number, number, number],
    parent: THREE.Object3D = head
  ) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...position);
    parent.add(mesh);
    return mesh;
  };

  const face = add(new THREE.SphereGeometry(1, 40, 32), makeMaterial(SKIN), [0, 0, 0]);
  face.scale.set(1, 1.05, 0.95);

  const hair = add(
    new THREE.SphereGeometry(1.04, 40, 28, 0, Math.PI * 2, 0, Math.PI * 0.44),
    makeMaterial(HAIR),
    [0, 0.02, 0]
  );
  hair.scale.set(1, 1.05, 0.95);

  const cap = new THREE.Group();
  cap.position.set(0, 0.66, 0.02);
  head.add(cap);

  const crown = new THREE.Mesh(
    new THREE.SphereGeometry(0.9, 40, 22, 0, Math.PI * 2, 0, Math.PI * 0.54),
    makeMaterial(CAP)
  );
  crown.scale.set(1.02, 0.78, 0.98);
  cap.add(crown);

  const band = new THREE.Mesh(
    new THREE.TorusGeometry(0.79, 0.045, 10, 40),
    makeMaterial(CAP_EDGE, 0.08)
  );
  band.scale.set(1, 1, 0.94);
  cap.add(band);

  const brim = new THREE.Mesh(new THREE.SphereGeometry(0.62, 28, 14), makeMaterial(CAP));
  brim.scale.set(1.35, 0.09, 0.68);
  brim.position.set(0, -0.02, 0.7);
  brim.rotation.x = -0.08;
  cap.add(brim);

  const capMark = new THREE.Mesh(
    new THREE.TorusGeometry(0.12, 0.022, 8, 20),
    makeMaterial(ACCENT, 0.5)
  );
  capMark.position.set(0, 0.48, 0.42);
  capMark.rotation.x = Math.PI * 0.5;
  cap.add(capMark);

  const headphones = new THREE.Group();
  head.add(headphones);
  const headphoneBand = new THREE.Mesh(
    new THREE.TorusGeometry(1.02, 0.055, 10, 48, Math.PI),
    makeMaterial(ACCENT, 0.28)
  );
  headphoneBand.position.set(0, 0.15, -0.03);
  headphoneBand.rotation.x = Math.PI;
  headphones.add(headphoneBand);

  [-1, 1].forEach((side) => {
    const ear = add(new THREE.SphereGeometry(0.22, 20, 20), makeMaterial(SKIN), [side * 1, -0.05, 0]);
    ear.scale.set(0.6, 1, 1);

    const eye = new THREE.Group();
    eye.position.set(side * 0.36, 0.1, 0.86);
    head.add(eye);
    eyes.push(eye);

    add(new THREE.SphereGeometry(0.17, 20, 20), makeMaterial(0xffffff), [0, 0, 0], eye);

    const pupil = add(
      new THREE.SphereGeometry(0.085, 14, 14),
      makeMaterial(0x120c24),
      [0, 0, 0.13],
      eye
    );
    pupils.push(pupil);

    const brow = add(
      new THREE.BoxGeometry(0.4, 0.065, 0.08),
      makeMaterial(HAIR),
      [side * 0.36, 0.4, 0.84]
    );
    brow.rotation.z = -side * 0.15;
    brows.push(brow);

    const earring = add(
      new THREE.CylinderGeometry(0.3, 0.3, 0.18, 24),
      makeMaterial(ACCENT, 0.3),
      [side * 1.12, -0.05, 0]
    );
    earring.rotation.z = Math.PI / 2;

    const headphone = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.24, 0.16, 24),
      makeMaterial(CAP_EDGE, 0.08)
    );
    headphone.position.set(side * 1.02, 0.12, -0.05);
    headphone.rotation.z = Math.PI / 2;
    headphones.add(headphone);

    const headphoneGlow = new THREE.Mesh(
      new THREE.TorusGeometry(0.12, 0.018, 8, 20),
      makeMaterial(ACCENT, 0.7)
    );
    headphoneGlow.position.set(side * 1.11, 0.12, 0.04);
    headphoneGlow.rotation.y = Math.PI / 2;
    headphones.add(headphoneGlow);
  });

  add(new THREE.SphereGeometry(0.11, 14, 14), makeMaterial(SKIN), [0, -0.1, 0.96]);
  mouth.position.set(0, -0.32, 0.84);
  mouth.rotation.z = Math.PI;
  head.add(mouth);

  add(
    new THREE.TorusGeometry(1.12, 0.055, 12, 40, Math.PI),
    makeMaterial(ACCENT, 0.3),
    [0, -0.05, 0]
  );

  add(new THREE.CylinderGeometry(0.3, 0.34, 0.4, 20), makeMaterial(SKIN), [0, 0.6, 0], group);

  const hoodie = add(new THREE.SphereGeometry(1.5, 40, 28), makeMaterial(HOODIE), [0, -0.25, 0], group);
  hoodie.scale.set(1, 0.75, 0.7);

  const shoulder = new THREE.Mesh(
    new THREE.SphereGeometry(0.72, 24, 18),
    makeMaterial(HOODIE)
  );
  shoulder.scale.set(1.55, 0.58, 0.62);
  shoulder.position.set(0, -0.15, 0.02);
  shoulders.add(shoulder);

  [-1, 1].forEach((side) => {
    const arm = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.25, 0.75, 6, 12),
      makeMaterial(HOODIE)
    );
    arm.position.set(side * 1.0, -0.55, 0.02);
    arm.rotation.z = side * -0.22;
    arms.add(arm);

    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 12), makeMaterial(SKIN));
    hand.scale.set(0.9, 0.8, 0.8);
    hand.position.set(side * 1.12, -0.98, 0.04);
    arms.add(hand);
  });

  return { group, head, eyes, pupils, brows, mouth, arms, headphones };
}

function Stage() {
  const box = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;

    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !coarse,
      powerPreference: 'high-performance',
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, coarse ? 1 : 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
    camera.position.z = 6.6;

    const avatar = buildAvatar();
    scene.add(avatar.group);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.55, 0.012, 8, 96),
      makeMaterial(ACCENT, 0.55)
    );
    ring.position.set(0, 0.75, -0.55);
    ring.rotation.x = Math.PI * 0.08;
    scene.add(ring);

    const innerRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.82, 0.006, 6, 96),
      makeMaterial(ACCENT, 0.22)
    );
    innerRing.position.copy(ring.position);
    innerRing.rotation.x = Math.PI * 0.08;
    scene.add(innerRing);

    const particleCount = coarse ? 18 : 30;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particlePositions.length; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 7;
      particlePositions[i + 1] = (Math.random() - 0.5) * 4.5;
      particlePositions[i + 2] = (Math.random() - 0.5) * 2.5 - 1;
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: ACCENT,
        size: coarse ? 0.014 : 0.018,
        transparent: true,
        opacity: 0.45,
        depthWrite: false,
      })
    );
    scene.add(particles);

    scene.add(new THREE.AmbientLight(0x8a70d0, 1.1));

    const key = new THREE.DirectionalLight(0xffffff, 2.4);
    key.position.set(-3, 3, 5);
    scene.add(key);

    const rim = new THREE.DirectionalLight(ACCENT, 5);
    rim.position.set(3, 2, -3);
    scene.add(rim);

    const fill = new THREE.PointLight(ACCENT, 2.2, 8);
    fill.position.set(0, 0.5, 3);
    scene.add(fill);

    const look = { x: 0, y: 0, tx: 0, ty: 0 };
    const reaction = { value: 0, target: 0 };
    const wave = { value: 0, target: 0 };
    let scrollKick = 0;
    let targetScrollKick = 0;
    let lastScrollY = window.scrollY;
    let lastInteraction = performance.now();

    const onPointerMove = (event: PointerEvent) => {
      look.tx = event.clientX / window.innerWidth - 0.5;
      look.ty = event.clientY / window.innerHeight - 0.5;
      lastInteraction = performance.now();
    };

    const onPointerDown = () => {
      reaction.target = 1;
      wave.target = 1;
      lastInteraction = performance.now();
    };

    const onScroll = () => {
      const nextY = window.scrollY;
      const delta = nextY - lastScrollY;
      lastScrollY = nextY;
      targetScrollKick = THREE.MathUtils.clamp(delta * 0.012, -0.16, 0.16);
    };

    const fit = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', fit);
    fit();

    let frame = 0;
    let nextBlink = 2 + Math.random() * 2.5;
    let blinkEnd = 0;
    const clock = new THREE.Clock();

    const loop = () => {
      const time = clock.getElapsedTime();

      look.x += (look.tx - look.x) * (coarse ? 0.045 : 0.07);
      look.y += (look.ty - look.y) * (coarse ? 0.045 : 0.07);
      reaction.value += (reaction.target - reaction.value) * 0.12;
      reaction.target *= 0.91;
      wave.value += (wave.target - wave.value) * 0.1;
      wave.target *= 0.94;
      scrollKick += (targetScrollKick - scrollKick) * 0.12;
      targetScrollKick *= 0.88;

      const halfWidth =
        Math.tan(THREE.MathUtils.degToRad(20)) * camera.position.z * camera.aspect;

      const idle = Math.sin(time * 1.15);
      const attention = Math.min(
        1,
        (performance.now() - lastInteraction) < 1400 ? 1 : 0.25
      );

      avatar.group.position.set(
        pose.x * halfWidth,
        pose.y + idle * 0.035 + reaction.value * 0.035,
        0
      );

      avatar.group.scale.setScalar(pose.s);
      avatar.group.rotation.y = pose.ry + look.x * 0.48 + scrollKick * 0.8;
      avatar.group.rotation.z = look.x * 0.025 + reaction.value * 0.025;

      avatar.head.rotation.y = look.x * 0.5;
      avatar.head.rotation.x = look.y * 0.28 + scrollKick * 0.4;
      avatar.head.rotation.z = look.x * -0.035;

      avatar.pupils.forEach((pupil) => {
        pupil.position.x = THREE.MathUtils.clamp(look.x * 0.055, -0.055, 0.055);
        pupil.position.y = THREE.MathUtils.clamp(-look.y * 0.04, -0.04, 0.04);
      });

      avatar.brows.forEach((brow, index) => {
        const side = index === 0 ? -1 : 1;
        brow.position.y = 0.4 + attention * 0.035 + reaction.value * 0.045;
        brow.rotation.z = -side * (0.15 + reaction.value * 0.05);
      });

      avatar.mouth.scale.set(
        1 + reaction.value * 0.16,
        1 + reaction.value * 0.08,
        1
      );

      avatar.arms.position.y = Math.sin(time * 1.15) * 0.018;
      avatar.arms.rotation.z = Math.sin(time * 1.6) * 0.008 + wave.value * 0.08;
      avatar.headphones.rotation.z = Math.sin(time * 1.2) * 0.008;

      ring.rotation.z = time * 0.08;
      ring.rotation.y = Math.sin(time * 0.35) * 0.16;
      innerRing.rotation.z = -time * 0.055;
      particles.rotation.y = time * 0.018;
      particles.rotation.x = Math.sin(time * 0.25) * 0.04;

      if (time > nextBlink && blinkEnd === 0) blinkEnd = time + 0.12;

      const blinking = blinkEnd > 0;
      avatar.eyes.forEach((eye) => {
        eye.scale.y = blinking ? 0.08 : 1;
      });

      if (blinkEnd > 0 && time >= blinkEnd) {
        blinkEnd = 0;
        nextBlink = time + 2.1 + Math.random() * 3.6;
        if (Math.random() < 0.14) nextBlink += 0.18;
      }

      renderer.domElement.style.opacity = String(pose.o);

      if (glow.current) {
        glow.current.style.left = \`\${50 + pose.x * 50}%\`;
        glow.current.style.opacity = String(pose.o);
      }

      renderer.render(scene, camera);
      frame = requestAnimationFrame(loop);
    };

    if (reducedMotion) {
      reaction.target = 0;
      wave.target = 0;
    }

    loop();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', fit);

      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const material = object.material;
          if (Array.isArray(material)) {
            material.forEach((item) => item.dispose());
          } else {
            material.dispose();
          }
        }
      });

      renderer.dispose();

      if (renderer.domElement.parentNode === el) {
        el.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="stage" ref={box} aria-hidden="true">
      <div className="halo" ref={glow} />
    </div>
  );
}

function TechStackGrid() {
  return (
    <div className="tech-grid" aria-label="Technology stack">
      {stack.map((item) => (
        <span className="tech-chip" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

function PortfolioLoader({ onComplete }: { onComplete: () => void }) {
  const [percent, setPercent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let value = 0;
    let slowTimer = 0;
    let finishTimer = 0;

    const tick = () => {
      if (value < 50) {
        value = Math.min(50, value + Math.max(1, Math.round(Math.random() * 5)));
        setPercent(value);
        slowTimer = window.setTimeout(tick, 90);
      } else if (value < 92) {
        value = Math.min(92, value + 1);
        setPercent(value);
        slowTimer = window.setTimeout(tick, 110);
      }
    };

    tick();

    const finish = () => {
      window.clearTimeout(slowTimer);
      const fast = () => {
        value = Math.min(100, value + 2);
        setPercent(value);
        if (value < 100) {
          finishTimer = window.setTimeout(fast, 12);
        } else {
          setLoaded(true);
        }
      };
      fast();
    };

    const fonts = document.fonts?.ready ?? Promise.resolve();
    Promise.all([fonts, new Promise<void>((resolve) => window.setTimeout(resolve, 650))])
      .then(finish);

    return () => {
      window.clearTimeout(slowTimer);
      window.clearTimeout(finishTimer);
    };
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const timer = window.setTimeout(() => setClicked(true), 600);
    return () => window.clearTimeout(timer);
  }, [loaded]);

  useEffect(() => {
    if (!clicked) return;
    const timer = window.setTimeout(onComplete, 900);
    return () => window.clearTimeout(timer);
  }, [clicked, onComplete]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMouse({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  return (
    <div className={`portfolio-loader ${clicked ? 'is-exiting' : ''}`} role="status" aria-live="polite">
      <div className="loader-header">
        <a href="#home" className="loader-title">patrick.dev</a>
        <div className={`loader-game ${clicked ? 'loader-out' : ''}`}>
          <div className="loader-game-container">
            <div className="loader-game-in">
              {Array.from({ length: 27 }, (_, index) => <div className="loader-game-line" key={index} />)}
            </div>
            <div className="loader-game-ball" />
          </div>
        </div>
      </div>

      <div className="loader-marquee" aria-hidden="true">
        <div className="loader-marquee-track">
          <span>SOFTWARE ENGINEER</span>
          <span>DEVELOPER</span>
          <span>SOFTWARE ENGINEER</span>
          <span>DEVELOPER</span>
          <span>SOFTWARE ENGINEER</span>
          <span>DEVELOPER</span>
        </div>
      </div>

      <div
        className={`loader-wrap ${clicked ? 'loading-clicked' : ''}`}
        style={{ '--mouse-x': `${mouse.x}px`, '--mouse-y': `${mouse.y}px`, '--loader-progress': `${percent}%` } as React.CSSProperties}
        onMouseMove={handleMouseMove}
      >
        <div className="loader-hover" />
        <div className={`loader-button ${loaded ? 'loading-complete' : ''}`}>
          <div className="loader-container">
            <div className="loader-content">
              <div className="loader-content-in">
                Loading <span>{percent}%</span>
              </div>
            </div>
            <div className="loader-box" />
          </div>
          <div className="loader-content2"><span>{loaded ? 'Welcome' : 'Please wait'}</span></div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [open, setOpen] =
    useState(false);

  const [loading, setLoading] =
    useState(true);

  const root =
    useRef<HTMLDivElement>(null);

  const lenis =
    useRef<Lenis | null>(null);

  useEffect(() => {
    const reducedMotion =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

    const isNarrow = () =>
      window.innerWidth < 800;

    let raf:
      | ((time: number) => void)
      | null = null;

    if (!reducedMotion) {
      const instance =
        new Lenis({
          lerp: 0.09,
        });

      lenis.current =
        instance;

      const onScroll =
        () =>
          ScrollTrigger.update();

      instance.on(
        'scroll',
        onScroll
      );

      raf = (time: number) =>
        instance.raf(
          time * 1000
        );

      gsap.ticker.add(
        raf
      );

      gsap.ticker.lagSmoothing(
        0
      );
    }

    const media =
      gsap.matchMedia();

    const context =
      gsap.context(
        () => {
          // Keep the avatar visible and centered in the hero until the next section takes over.
          gsap.set(pose, {
            x: 0,
            y: -1.1,
            s: 1.14,
            ry: 0,
            o: 1,
          });

          const animatePose = (
            trigger: string,
            values: gsap.TweenVars,
            start = 'top bottom',
            end = 'top top'
          ) => {
            gsap.to(pose, {
              ...values,
              ease: 'none',
              immediateRender:
                false,
              scrollTrigger: {
                trigger,
                start,
                end,
                scrub:
                  reducedMotion
                    ? false
                    : 0.8,
                invalidateOnRefresh:
                  true,
              },
            });
          };

          animatePose(
            '#about',
            {
              x: () =>
                isNarrow()
                  ? 0
                  : -0.52,
              y: -1.3,
              s: 1.2,
              ry: 0.55,
              o: () =>
                isNarrow()
                  ? 0.3
                  : 1,
            }
          );

          animatePose(
            '.do',
            {
              x: () =>
                isNarrow()
                  ? 0
                  : 0.1,
              y: -0.9,
              s: 0.95,
              ry: -0.5,
              o: () =>
                isNarrow()
                  ? 0.3
                  : 1,
            }
          );

          animatePose(
            '.career-section',
            {
              x: 0,
              y: -2.4,
              s: 0.9,
              ry: 0,
              o: 0,
            }
          );

          const sectionHeadings =
            gsap.utils.toArray<HTMLElement>(
              '#about .big, .do .big, .career-container h2, .work h2, .tech h2, .contact h2'
            );

          let scrollVelocity = 0;

          ScrollTrigger.create({
            onUpdate: (self) => {
              scrollVelocity = gsap.utils.clamp(
                -1,
                1,
                self.getVelocity() / 2600
              );
            },
          });

          gsap.ticker.add(() => {
            const target = scrollVelocity * 2.4;

            sectionHeadings.forEach((element) => {
              const current = Number(
                gsap.getProperty(element, 'skewY')
              ) || 0;

              gsap.set(element, {
                skewY: current + (target - current) * 0.16,
              });
            });

            scrollVelocity *= 0.88;
          });

          gsap.utils
            .toArray<HTMLElement>('#about, .do, .career-section')
            .forEach((section) => {
              gsap.fromTo(
                section,
                {
                  opacity: 0,
                  y: 45,
                  scale: 0.99,
                },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 1,
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: section,
                    start: 'top 88%',
                    end: 'top 55%',
                    scrub: reducedMotion ? false : 0.8,
                    toggleActions: 'play none none reverse',
                  },
                }
              );
            });

          gsap.utils
            .toArray<HTMLElement>('.rv')
            .forEach((element) => {
              gsap.fromTo(
                element,
                {
                  y: 55,
                  opacity: 0,
                  scale: 0.97,
                  filter: 'blur(8px)',
                },
                {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  filter: 'blur(0px)',
                  duration: 1.35,
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: element,
                    start: 'top 88%',
                    toggleActions: 'play none none reverse',
                  },
                }
              );
            });

          gsap.fromTo(
            '.cards .card',
            {
              y: 90,
              scale: 0.9,
              opacity: 0,
              filter: 'blur(10px)',
            },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              filter: 'blur(0px)',
              duration: 0.9,
              stagger: 0.18,
              ease: 'back.out(1.45)',
              scrollTrigger: {
                trigger: '.cards',
                start: 'top 82%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          const timelineRows =
            gsap.utils.toArray<HTMLElement>('.career-info-box');

          timelineRows.forEach((element) => {
                gsap.fromTo(
                  element,
                  {
                    opacity: 0.2,
                    x: -20,
                  },
                  {
                    opacity: 1,
                    x: 0,
                    scrollTrigger: {
                      trigger:
                        element,
                      start:
                        'top 80%',
                      end:
                        'top 50%',
                      scrub: 1.2,
                    },
                  }
                );
              });

          const rowsWrap =
            document.querySelector<HTMLElement>('.career-info');

          if (rowsWrap) {
            ScrollTrigger.create({
              trigger: '.career-info',
              start: 'top 78%',
              end: 'bottom 38%',
              scrub: 0.7,
              onUpdate: (self) => {
                rowsWrap.style.setProperty(
                  '--fill',
                  `${Math.round(self.progress * 100)}%`
                );
              },
            });
          }

          gsap.fromTo(
            '.hi,.role',
            {
              opacity: 0,
              y: 40,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1.4,
              stagger: 0.15,
              ease: 'power3.out',
              delay: 0.2,
            }
          );

          /* Pinned horizontal Work gallery — re-applied from 09539ff */
          const workSection = document.querySelector<HTMLElement>('.work-section');
          const workFlex = document.querySelector<HTMLElement>('.work-flex');

          if (workSection && workFlex) {
            const workMedia = gsap.matchMedia();

            workMedia.add('(min-width: 801px)', () => {
              const setupWorkScroll = () => {
                // Calculate only from the repository cards. The timeline
                // border pseudo-elements are intentionally huge and can inflate
                // scrollWidth, which makes the pinned section last far too long.
                const cards = Array.from(
                  workFlex.querySelectorAll<HTMLElement>('.work-box')
                );

                const contentWidth = cards.reduce(
                  (total, card) => total + card.getBoundingClientRect().width,
                  0
                );

                const distance = Math.max(
                  0,
                  contentWidth + workFlex.clientLeft + parseFloat(getComputedStyle(workFlex).paddingRight || '0') - window.innerWidth
                );

                if (distance === 0) return;

                // Pin only for the amount of scroll needed to reveal the
                // final repository. Once the last card reaches the viewport,
                // ScrollTrigger releases the section so normal page scrolling
                // can continue directly into Tech Stack.
                gsap.to(workFlex, {
                  x: -distance,
                  ease: 'none',
                  scrollTrigger: {
                    trigger: workSection,
                    start: 'top top',
                    end: () => `+=${distance}`,
                    scrub: 0.8,
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    fastScrollEnd: true,
                    id: 'work-horizontal',
                  },
                });
              };

              setupWorkScroll();

              // The cards use responsive widths, so recalculate the pin distance
              // after the browser has finished laying out the section.
              requestAnimationFrame(() => {
                ScrollTrigger.refresh();
              });
            });
          }

          gsap.to(
            '.hero-copy',
            {
              opacity: 0,
              y: -60,
              ease: 'none',
              scrollTrigger: {
                trigger: '#home',
                start: 'top top',
                end: 'bottom 30%',
                scrub: true,
              },
            }
          );


        },
        root
      );

    const orb =
      document.querySelector<HTMLElement>(
        '.orb'
      );

    let removeOrbMove =
      () => {};

    if (
      orb &&
      !reducedMotion &&
      !window.matchMedia(
        '(pointer: coarse)'
      ).matches
    ) {
      const xTo =
        gsap.quickTo(
          orb,
          'x',
          {
            duration: 0.5,
          }
        );

      const yTo =
        gsap.quickTo(
          orb,
          'y',
          {
            duration: 0.5,
          }
        );

      const onMouseMove =
        (event: MouseEvent) => {
          xTo(
            event.clientX
          );

          yTo(
            event.clientY
          );
        };

      window.addEventListener(
        'mousemove',
        onMouseMove,
        {
          passive: true,
        }
      );

      removeOrbMove =
        () =>
          window.removeEventListener(
            'mousemove',
            onMouseMove
          );
    }

    const onKeyDown =
      (event: KeyboardEvent) => {
        if (
          event.key ===
          'Escape'
        ) {
          setOpen(false);
        }
      };

    window.addEventListener(
      'keydown',
      onKeyDown
    );

    return () => {
      window.removeEventListener(
        'keydown',
        onKeyDown
      );

      removeOrbMove();

      media.revert();
      context.revert();

      if (raf) {
        gsap.ticker.remove(
          raf
        );
      }

      lenis.current?.destroy();
      lenis.current = null;

      pose.x = -0.52;
      pose.y = -1.3;
      pose.s = 1.2;
      pose.ry = 0.55;
      pose.o = 1;
    };
  }, []);

  const go = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();

    setOpen(false);

    const element =
      document.querySelector(
        id
      );

    if (!element) return;

    if (lenis.current) {
      lenis.current.scrollTo(
        element as HTMLElement
      );
    } else {
      element.scrollIntoView({
        behavior:
          window.matchMedia(
            '(prefers-reduced-motion: reduce)'
          ).matches
            ? 'auto'
            : 'smooth',
      });
    }
  };

  return (
    <div
      className="site"
      ref={root}
    >
      {loading && <PortfolioLoader onComplete={() => setLoading(false)} />}

      <div
        className="orb"
        aria-hidden="true"
      />

      <Stage />

      <header className="header">
        <a
          className="logo"
          href="#home"
          onClick={(event) =>
            go(
              event,
              '#home'
            )
          }
        >
          patrick.dev
        </a>

        <a
          className="mid"
          href={
            'mailto:' +
            EMAIL
          }
        >
          {EMAIL}
        </a>

        <nav
          id="primary-navigation"
          className={
            open
              ? 'nav open'
              : 'nav'
          }
          aria-label="Primary"
        >
          <a
            href="#about"
            onClick={(event) =>
              go(
                event,
                '#about'
              )
            }
          >
            About
          </a>

          <a
            href="#work"
            onClick={(event) =>
              go(
                event,
                '#work'
              )
            }
          >
            Work
          </a>

          <a
            href="#contact"
            onClick={(event) =>
              go(
                event,
                '#contact'
              )
            }
          >
            Contact
          </a>
        </nav>

        <button
          className="menu"
          type="button"
          onClick={() =>
            setOpen(
              (value) =>
                !value
            )
          }
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          {open ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>
      </header>

      <aside
        className="rail"
        aria-label="Social links"
      >
        <a
          href="https://github.com/pyatrick666"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon size={14} />
        </a>

        <a
          href="https://www.linkedin.com/in/pratik-poudel-b3264a263/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinIcon size={14} />
        </a>

        <a
          href="https://www.instagram.com/pyatrick666/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon size={14} />
        </a>
      </aside>

      <main>
        <section
          id="home"
          className="hero"
        >
          <div className="hero-copy">
            <div className="hi">
              <small>
                Hello! I'm
              </small>

              <h1>
                PRATIK
                <br />
                POUDEL
              </h1>
            </div>

            <div className="role">
              <small>
                A Creative
              </small>

              <div className="swap">
                <span className="role-changing">
                  <span>
                    SOFTWARE
                    <br />
                    ENGINEER
                  </span>
                  <span>DEVELOPER</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="about"
        >
          <div className="eyebrow rv">
            About me
          </div>

          <p className="rv">
            I'm an IT student at
            ISMT College,
            affiliated with the
            University of
            Sunderland, blending
            full-stack and mobile
            development with
            systems know-how and
            a designer's eye.
            Driven by curiosity,
            I keep exploring new
            tools.
          </p>
        </section>

        <section className="do">
          <div className="do-heading rv">
            <h2 className="big">What<br /><em>I do</em></h2>
          </div>

          <div className="cards">
            <article className="card rv">
              <div className="card-top">
                <span>01</span>
                <span className="card-arrow">↗</span>
              </div>
              <h3>DEVELOPMENT</h3>
              <p>Web applications, mobile experiences and interactive interfaces built with modern tools and a strong focus on usability.</p>
              <div className="card-tags">
                <span>React</span>
                <span>TypeScript</span>
                <span>Flutter</span>
                <span>Three.js</span>
              </div>
            </article>

            <article className="card rv">
              <div className="card-top">
                <span>02</span>
                <span className="card-arrow">↗</span>
              </div>
              <h3>SOFTWARE ENGINEERING</h3>
              <p>Reliable systems shaped around clean architecture, practical problem-solving, maintainable code and solid engineering foundations.</p>
              <div className="card-tags">
                <span>C# / .NET</span>
                <span>APIs</span>
                <span>Databases</span>
                <span>Linux</span>
              </div>
            </article>

            <article className="card rv">
              <div className="card-top">
                <span>03</span>
                <span className="card-arrow">↗</span>
              </div>
              <h3>UI / UX & CREATIVE</h3>
              <p>Interfaces and visual systems designed in Figma and Canva, balancing strong visual direction with practical user experience.</p>
              <div className="card-tags">
                <span>Figma</span>
                <span>UI / UX</span>
                <span>Canva</span>
                <span>Motion</span>
              </div>
            </article>
          </div>
        </section>

        <Career />
        <section
          id="work"
          className="work-section"
        >
          <div className="work-container section-container">
            <div className="work-heading">
              <h2>
                My <span>Work</span>
              </h2>
              <p>Scroll to explore the projects I have built across software, web, mobile and embedded development.</p>
              <a
                className="work-repositories-link"
                href="https://github.com/pyatrick666?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW ALL REPOSITORIES ↗
              </a>
            </div>

            <div className="work-viewport">
              <div className="work-flex">
                {projects.map((project) => (
                  <a
                    className="work-box"
                    key={project.name}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="work-info">
                      <div className="work-title">
                        <h3>{project.num}</h3>
                        <div>
                          <h4>{project.name}</h4>
                          <p>{project.type}</p>
                        </div>
                        <ArrowUpRight className="work-card-arrow" aria-hidden="true" />
                      </div>

                      <h4>Tools and features</h4>
                      <p>{project.tools.join(', ')}</p>

                      <span className="work-open">OPEN REPOSITORY ↗</span>
                    </div>

                    <div className="work-project-visual" aria-hidden="true">
                      <span>{project.num}</span>
                      <strong>{project.name}</strong>
                      <small>{project.type}</small>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="tech">
          <h2>MY TECHSTACK</h2>
          <TechStackGrid />
        </section>

        <section
          id="contact"
          className="contact"
        >
          <h2 className="rv">
            CONTACT
          </h2>

          <div className="grid rv">
            <div>
              <small>
                Email
              </small>

              <a
                href={
                  'mailto:' +
                  EMAIL
                }
              >
                {EMAIL}
              </a>

              <small>
                Location
              </small>

              <span>
                Butwal, Nepal
              </span>
            </div>

            <div>
              <small>
                Social
              </small>

              <div className="social-list">
                <a
                  className="social-link"
                  href="https://github.com/pyatrick666"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-mark">
                    <GithubIcon size={18} />
                  </span>

                  <span>
                    <b>
                      GitHub
                    </b>

                    <small>
                      Projects &amp;
                      source code
                    </small>
                  </span>

                  <ArrowUpRight
                    size={16}
                  />
                </a>

                <a
                  className="social-link"
                  href="https://www.linkedin.com/in/pratik-poudel-b3264a263/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-mark">
                    <LinkedinIcon
                      size={18}
                    />
                  </span>

                  <span>
                    <b>
                      LinkedIn
                    </b>

                    <small>
                      Professional
                      profile
                    </small>
                  </span>

                  <ArrowUpRight
                    size={16}
                  />
                </a>

                <a
                  className="social-link"
                  href="https://www.instagram.com/pyatrick666/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-mark">
                    <InstagramIcon
                      size={18}
                    />
                  </span>

                  <span>
                    <b>
                      Instagram
                    </b>

                    <small>
                      @pyatrick666
                    </small>
                  </span>

                  <ArrowUpRight
                    size={16}
                  />
                </a>
              </div>
            </div>

            <div className="credit">
              Designed and
              developed by{' '}
              <b>
                Pratik Poudel
              </b>
              <br />
              Layout inspired by
              moncy.dev
              <br />
              ©{' '}
              {new Date().getFullYear()}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

createRoot(
  document.getElementById(
    'root'
  )!
).render(<App />);