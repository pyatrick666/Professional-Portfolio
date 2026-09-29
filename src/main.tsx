import React, { useEffect, useRef, useState } from 'react';
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
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { EffectComposer, N8AO } from '@react-three/postprocessing';
import { BallCollider, Physics, RigidBody, RapierRigidBody } from '@react-three/rapier';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const EMAIL = 'pyatrick666@gmail.com';

const projects = [
  {
    name: 'CarRentalApp',
    num: '01',
    type: 'Desktop / Application',
    tools: 'C#, .NET, Desktop Development',
    href: 'https://github.com/pyatrick666/CarRentalApp',
  },
  {
    name: 'AccountRegistrationSystem',
    num: '02',
    type: 'Console / C#',
    tools: 'C#, OOP, File Handling',
    href: 'https://github.com/pyatrick666/AccountRegistrationSystem',
  },
  {
    name: 'RaspberryPi-PICO',
    num: '03',
    type: 'Embedded / Hardware',
    tools: 'Raspberry Pi Pico, Embedded Systems',
    href: 'https://github.com/pyatrick666/RaspberryPi-PICO',
  },
  {
    name: 'ePortfolio',
    num: '04',
    type: 'Web / Coursework',
    tools: 'HTML, CSS, JavaScript, Bootstrap',
    href: 'https://github.com/pyatrick666/ePortfolio',
  },
  {
    name: 'cit-e-cycling-web-portal',
    num: '05',
    type: 'Web / Full Stack',
    tools: 'Web Development, Database, UI',
    href: 'https://github.com/pyatrick666/cit-e-cycling-web-portal',
  },
  {
    name: '360-VR-',
    num: '06',
    type: 'VR / Interactive',
    tools: '360° VR, Web Development',
    href: 'https://github.com/pyatrick666/360-VR-',
  },
  {
    name: 'ChessMate',
    num: '07',
    type: 'Mobile / Game',
    tools: 'Flutter, Dart, Firebase, AdMob',
    href: 'https://github.com/pyatrick666/ChessMate',
  },
  {
    name: 'pyatrick666',
    num: '08',
    type: 'GitHub Profile',
    tools: 'Profile, Projects and Open Source Work',
    href: 'https://github.com/pyatrick666/pyatrick666',
  },
];

const skillGroups = [
  { label: '01', title: 'Frontend', description: 'Interfaces that feel fast, deliberate and alive.', skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'] },
  { label: '02', title: 'Mobile & Apps', description: 'Cross-platform applications built for real use.', skills: ['Flutter', 'Dart', 'Firebase', 'C#', '.NET'] },
  { label: '03', title: 'Backend & Data', description: 'APIs, services and data layers behind the interface.', skills: ['Node.js', 'Express', 'PHP', 'MySQL', 'Python', 'Java'] },
  { label: '04', title: 'Systems & Design', description: 'The systems thinking and design tools behind my builds.', skills: ['Linux', 'Cisco', 'Git', 'Figma', 'UI/UX'] },
];

const stack = skillGroups.flatMap((group) => group.skills);

const journey = [
  {
    t: 'Web foundations',
    s: '2019–2021 · HTML · CSS · JavaScript · PHP',
    d: 'Built a foundation in web development, from semantic front ends to PHP-backed websites and practical coursework.',
  },
  {
    t: 'Modern stack',
    s: '2021–2023 · React · TypeScript · Flutter',
    d: 'Moved into component-driven applications, mobile development, APIs and interactive front-end experiences.',
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
  x: 0,
  y: -1.1,
  s: 1.14,
  ry: 0,
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

  group.add(head);
  head.position.y = 1.4;

  const add = (
    geometry: THREE.BufferGeometry,
    material: THREE.Material,
    position: [number, number, number],
    parent: THREE.Object3D = head
  ) => {
    const mesh = new THREE.Mesh(
      geometry,
      material
    );

    mesh.position.set(...position);
    parent.add(mesh);

    return mesh;
  };

  const face = add(
    new THREE.SphereGeometry(1, 48, 48),
    makeMaterial(SKIN),
    [0, 0, 0]
  );

  face.scale.set(1, 1.05, 0.95);

  const hair = add(
    new THREE.SphereGeometry(
      1.04,
      48,
      32,
      0,
      Math.PI * 2,
      0,
      Math.PI * 0.42
    ),
    makeMaterial(HAIR),
    [0, 0.02, 0]
  );

  hair.scale.set(1, 1.05, 0.95);

  const cap = new THREE.Group();

  cap.position.set(0, 0.66, 0.02);
  head.add(cap);

  const crown = new THREE.Mesh(
    new THREE.SphereGeometry(
      0.9,
      48,
      24,
      0,
      Math.PI * 2,
      0,
      Math.PI * 0.54
    ),
    makeMaterial(CAP)
  );

  crown.scale.set(1.02, 0.78, 0.98);
  cap.add(crown);

  const band = new THREE.Mesh(
    new THREE.TorusGeometry(
      0.79,
      0.045,
      10,
      48
    ),
    makeMaterial(CAP_EDGE, 0.08)
  );

  band.scale.set(1, 1, 0.94);
  cap.add(band);

  const brim = new THREE.Mesh(
    new THREE.SphereGeometry(
      0.62,
      32,
      16
    ),
    makeMaterial(CAP)
  );

  brim.scale.set(1.35, 0.09, 0.68);
  brim.position.set(0, -0.02, 0.7);
  brim.rotation.x = -0.08;
  cap.add(brim);

  const capMark = new THREE.Mesh(
    new THREE.TorusGeometry(
      0.12,
      0.022,
      8,
      24
    ),
    makeMaterial(ACCENT, 0.45)
  );

  capMark.position.set(
    0,
    0.48,
    0.42
  );

  capMark.rotation.x =
    Math.PI * 0.5;

  cap.add(capMark);

  [-1, 1].forEach((side) => {
    add(
      new THREE.SphereGeometry(
        0.22,
        24,
        24
      ),
      makeMaterial(SKIN),
      [side * 1, -0.05, 0]
    ).scale.set(
      0.6,
      1,
      1
    );

    const eye =
      new THREE.Group();

    eye.position.set(
      side * 0.36,
      0.1,
      0.86
    );

    head.add(eye);
    eyes.push(eye);

    add(
      new THREE.SphereGeometry(
        0.17,
        24,
        24
      ),
      makeMaterial(0xffffff),
      [0, 0, 0],
      eye
    );

    add(
      new THREE.SphereGeometry(
        0.09,
        16,
        16
      ),
      makeMaterial(0x120c24),
      [0, 0, 0.13],
      eye
    );

    const brow = add(
      new THREE.BoxGeometry(
        0.4,
        0.07,
        0.08
      ),
      makeMaterial(HAIR),
      [
        side * 0.36,
        0.4,
        0.84,
      ]
    );

    brow.rotation.z =
      -side * 0.15;

    const earring = add(
      new THREE.CylinderGeometry(
        0.3,
        0.3,
        0.18,
        32
      ),
      makeMaterial(
        ACCENT,
        0.25
      ),
      [
        side * 1.12,
        -0.05,
        0,
      ]
    );

    earring.rotation.z =
      Math.PI / 2;
  });

  add(
    new THREE.SphereGeometry(
      0.11,
      16,
      16
    ),
    makeMaterial(SKIN),
    [0, -0.1, 0.96]
  );

  const mouth = add(
    new THREE.TorusGeometry(
      0.3,
      0.035,
      12,
      32,
      Math.PI
    ),
    makeMaterial(0x3a1a1a),
    [0, -0.32, 0.84]
  );

  mouth.rotation.z =
    Math.PI;

  add(
    new THREE.TorusGeometry(
      1.12,
      0.06,
      16,
      48,
      Math.PI
    ),
    makeMaterial(
      ACCENT,
      0.25
    ),
    [0, -0.05, 0]
  );

  add(
    new THREE.CylinderGeometry(
      0.3,
      0.34,
      0.4,
      24
    ),
    makeMaterial(SKIN),
    [0, 0.6, 0],
    group
  );

  const hoodie = add(
    new THREE.SphereGeometry(
      1.5,
      48,
      32
    ),
    makeMaterial(HOODIE),
    [0, -0.25, 0],
    group
  );

  hoodie.scale.set(
    1,
    0.75,
    0.7
  );

  return {
    group,
    head,
    eyes,
  };
}

function Stage() {
  const box =
    useRef<HTMLDivElement>(null);

  const glow =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;

    if (!el) return;

    const renderer =
      new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });

    renderer.setPixelRatio(
      Math.min(
        window.devicePixelRatio || 1,
        2
      )
    );

    renderer.outputColorSpace =
      THREE.SRGBColorSpace;

    el.appendChild(
      renderer.domElement
    );

    const scene =
      new THREE.Scene();

    const camera =
      new THREE.PerspectiveCamera(
        40,
        1,
        0.1,
        50
      );

    camera.position.z = 6.6;

    const {
      group,
      head,
      eyes,
    } = buildAvatar();

    scene.add(group);

    /* Floating particles */

    const particleGeometry =
      new THREE.BufferGeometry();

    const particlePositions =
      new Float32Array(90);

    for (
      let i = 0;
      i < particlePositions.length;
      i += 3
    ) {
      particlePositions[i] =
        (Math.random() - 0.5) *
        8;

      particlePositions[i + 1] =
        (Math.random() - 0.5) *
        5;

      particlePositions[i + 2] =
        (Math.random() - 0.5) *
          3 -
        1;
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(
        particlePositions,
        3
      )
    );

    const particleMaterial =
      new THREE.PointsMaterial({
        color: ACCENT,
        size: 0.018,
        transparent: true,
        opacity: 0.5,
        depthWrite: false,
      });

    const particles =
      new THREE.Points(
        particleGeometry,
        particleMaterial
      );

    scene.add(particles);

    scene.add(
      new THREE.AmbientLight(
        0x8a70d0,
        1.1
      )
    );

    const key =
      new THREE.DirectionalLight(
        0xffffff,
        2.4
      );

    key.position.set(
      -3,
      3,
      5
    );

    scene.add(key);

    const rim =
      new THREE.DirectionalLight(
        ACCENT,
        5
      );

    rim.position.set(
      3,
      2,
      -3
    );

    scene.add(rim);

    const look = {
      x: 0,
      y: 0,
      tx: 0,
      ty: 0,
    };

    let scrollKick = 0;
    let targetScrollKick = 0;
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const nextY = window.scrollY;
      const delta = nextY - lastScrollY;
      lastScrollY = nextY;
      targetScrollKick = THREE.MathUtils.clamp(
        delta * 0.012,
        -0.16,
        0.16
      );
    };

    const onMouseMove =
      (event: MouseEvent) => {
        look.tx =
          event.clientX /
            window.innerWidth -
          0.5;

        look.ty =
          event.clientY /
            window.innerHeight -
          0.5;
      };

    const fit = () => {
      const width =
        window.innerWidth;

      const height =
        window.innerHeight;

      renderer.setSize(
        width,
        height,
        false
      );

      camera.aspect =
        width /
        Math.max(
          height,
          1
        );

      camera.updateProjectionMatrix();
    };

    window.addEventListener(
      'mousemove',
      onMouseMove,
      {
        passive: true,
      }
    );

    window.addEventListener(
      'scroll',
      onScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      'resize',
      fit
    );

    fit();

    let frame = 0;

    let nextBlink =
      2 +
      Math.random() * 2;

    const clock =
      new THREE.Clock();

    const loop = () => {
      const time =
        clock.getElapsedTime();

      const halfWidth =
        Math.tan(
          THREE.MathUtils.degToRad(
            20
          )
        ) *
        camera.position.z *
        camera.aspect;

      look.x +=
        (look.tx -
          look.x) *
        0.06;

      look.y +=
        (look.ty -
          look.y) *
        0.06;

      scrollKick +=
        (targetScrollKick - scrollKick) *
        0.12;

      targetScrollKick *= 0.88;

      group.position.set(
        pose.x *
          halfWidth,
        pose.y +
          Math.sin(
            time * 1.2
          ) *
            0.04,
        0
      );

      group.scale.setScalar(
        pose.s
      );

      group.rotation.y =
        pose.ry +
        look.x * 0.5 +
        scrollKick * 0.8;

      head.rotation.y =
        look.x * 0.5;

      head.rotation.x =
        look.y * 0.3 +
        scrollKick * 0.45;

      particles.rotation.y =
        time * 0.018;

      particles.rotation.x =
        Math.sin(
          time * 0.25
        ) *
        0.04;

      const blinking =
        time > nextBlink &&
        time <
          nextBlink + 0.14;

      if (
        time >
        nextBlink + 0.14
      ) {
        nextBlink =
          time +
          2 +
          Math.random() * 3;
      }

      eyes.forEach(
        (eye) => {
          eye.scale.y =
            blinking
              ? 0.1
              : 1;
        }
      );

      renderer.domElement.style.opacity =
        String(pose.o);

      if (glow.current) {
        glow.current.style.left =
          50 +
          pose.x * 50 +
          '%';

        glow.current.style.opacity =
          String(pose.o);
      }

      renderer.render(
        scene,
        camera
      );

      frame =
        requestAnimationFrame(
          loop
        );
    };

    loop();

    return () => {
      cancelAnimationFrame(
        frame
      );

      window.removeEventListener(
        'mousemove',
        onMouseMove
      );

      window.removeEventListener(
        'scroll',
        onScroll
      );

      window.removeEventListener(
        'resize',
        fit
      );

      scene.traverse(
        (object) => {
          if (
            object instanceof
            THREE.Mesh
          ) {
            object.geometry.dispose();

            const material =
              object.material;

            if (
              Array.isArray(
                material
              )
            ) {
              material.forEach(
                (item) =>
                  item.dispose()
              );
            } else {
              material.dispose();
            }
          }
        }
      );

      renderer.dispose();

      if (
        renderer
          .domElement
          .parentNode ===
        el
      ) {
        el.removeChild(
          renderer.domElement
        );
      }
    };
  }, []);

  return (
    <div
      className="stage"
      ref={box}
      aria-hidden="true"
    >
      <div
        className="halo"
        ref={glow}
      />
    </div>
  );
}

/* =========================================================
   TECH STACK BUBBLES
   ========================================================= */

function TechSphere({ position, scale, material, isActive }: { position: [number, number, number]; scale: number; material: THREE.MeshPhysicalMaterial; isActive: boolean }) {
  const body = useRef<RapierRigidBody | null>(null);
  const vec = useMemo(() => new THREE.Vector3(), []);
  useFrame((_state, delta) => {
    if (!isActive || !body.current) return;
    const impulse = vec.copy(body.current.translation()).normalize().multiplyScalar(-42 * Math.min(delta, 0.1) * scale);
    body.current.applyImpulse(impulse, true);
  });
  return <RigidBody ref={body} position={position} linearDamping={0.72} angularDamping={0.18} friction={0.2} colliders={false}>
    <BallCollider args={[scale]} />
    <mesh castShadow receiveShadow geometry={techSphereGeometry} material={material} scale={scale} rotation={[0.3, 1, 1]} />
  </RigidBody>;
}

function TechPointer({ isActive }: { isActive: boolean }) {
  const ref = useRef<RapierRigidBody | null>(null);
  const target = useMemo(() => new THREE.Vector3(), []);
  useFrame(({ pointer, viewport }) => {
    if (!isActive || !ref.current) return;
    target.lerp(new THREE.Vector3((pointer.x * viewport.width) / 2, (pointer.y * viewport.height) / 2, 0), 0.18);
    ref.current.setNextKinematicTranslation(target);
  });
  return <RigidBody ref={ref} type="kinematicPosition" position={[100, 100, 100]} colliders={false}><BallCollider args={[2]} /></RigidBody>;
}

const techSphereGeometry = new THREE.SphereGeometry(1, 28, 28);
const techTexturePaths = ['react2.svg', 'next2.svg', 'node2.svg', 'express.svg', 'mongo.svg', 'mysql.svg', 'typescript.svg', 'javascript.svg'];

function Bubbles() {
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const spheres = useMemo(() => Array.from({ length: 30 }, (_, index) => ({
    scale: [0.7, 1, 0.8, 1, 1][index % 5],
    position: [THREE.MathUtils.randFloatSpread(9), THREE.MathUtils.randFloatSpread(7) - 0.5, THREE.MathUtils.randFloatSpread(5) - 1] as [number, number, number],
    textureIndex: index % techTexturePaths.length,
  })), []);
  const textures = useMemo(() => {
    const loader = new THREE.TextureLoader();
    return techTexturePaths.map((path) => {
      const texture = loader.load('./images/' + path);
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    });
  }, []);
  const materials = useMemo(() => textures.map((texture) => new THREE.MeshPhysicalMaterial({
    map: texture, emissive: new THREE.Color('#ffffff'), emissiveMap: texture, emissiveIntensity: 0.3, metalness: 0.5, roughness: 0.72, clearcoat: 0.18,
  })), [textures]);
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setIsActive(entry.isIntersecting), { threshold: 0.08 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={sectionRef} className="skills-physics" aria-label="Interactive technology stack">
    <div className="skills-physics__copy"><span>INTERACTIVE STACK</span><p>Move through the toolkit. Hover the field and watch the technologies react.</p></div>
    <Canvas shadows dpr={[1, 1.5]} gl={{ alpha: true, stencil: false, depth: true, antialias: false }} camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }} onCreated={({ gl }) => { gl.toneMappingExposure = 1.5; }} className="tech-canvas">
      <ambientLight intensity={1} />
      <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color="white" intensity={2} castShadow shadow-mapSize={[512, 512]} />
      <directionalLight position={[0, 5, -4]} intensity={2} />
      <Physics gravity={[0, 0, 0]}>
        <TechPointer isActive={isActive} />
        {spheres.map((sphere, index) => <TechSphere key={index} {...sphere} material={materials[sphere.textureIndex]} isActive={isActive} />)}
      </Physics>
      <Environment preset="city" environmentIntensity={0.5} />
      <EffectComposer enableNormalPass={false}><N8AO color="#0f002c" aoRadius={2} intensity={1.15} /></EffectComposer>
    </Canvas>
  </div>;
}
/* =========================================================
   APP
   ========================================================= */

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
    let mounted = true;

    const minimumDisplay = new Promise<void>((resolve) => {
      window.setTimeout(resolve, 1400);
    });

    const fontsReady = document.fonts?.ready ?? Promise.resolve();

    Promise.all([minimumDisplay, fontsReady]).then(() => {
      if (mounted) setLoading(false);
    });

    return () => {
      mounted = false;
    };
  }, []);

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
            '.tl',
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
              '#about .big, .do .big, .tl h2, .work h2, .tech h2, .contact h2'
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
            .toArray<HTMLElement>('#about, .do, .tl')
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
            gsap.utils.toArray<HTMLElement>('.row');

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
            document.querySelector<HTMLElement>('.rows');

          if (rowsWrap) {
            ScrollTrigger.create({
              trigger: '.rows',
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

          media.add(
            '(min-width: 801px)',
            () => {
              const track =
                document.querySelector<HTMLElement>(
                  '.track'
                );

              if (!track) return;

              gsap.to(track, {
                x: () =>
                  -(
                    track.scrollWidth -
                    window.innerWidth
                  ),
                ease: 'none',
                scrollTrigger: {
                  trigger:
                    '.work',
                  start:
                    'top top',
                  end: () =>
                    '+=' +
                    Math.max(
                      0,
                      track.scrollWidth -
                        window.innerWidth
                    ),
                  pin: true,
                  scrub: 1,
                  snap: {
                    snapTo: 1 / Math.max(projects.length - 1, 1),
                    duration: {
                      min: 0.25,
                      max: 0.7,
                    },
                    ease: 'power2.out',
                  },
                  anticipatePin: 1,
                  fastScrollEnd: true,
                  invalidateOnRefresh:
                    true,
                },
              });
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

      pose.x = 0;
      pose.y = -1.1;
      pose.s = 1.14;
      pose.ry = 0;
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
      <div
        className={`loader ${loading ? '' : 'loader--hidden'}`}
        aria-hidden={!loading}
      >
        <div className="loader__content">
          <div className="loader__mark">P</div>
          <div className="loader__line">
            <span />
          </div>
          <p>INITIALIZING PORTFOLIO</p>
        </div>
      </div>

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
          patrick
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
                A Software Engineer
              </small>

              <div className="swap">
                <span>
                  SOFTWARE
                  ENGINEER
                  <br />
                  DEVELOPER
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
          <h2 className="big rv">
            What
            <br />
            I <em>do</em>
          </h2>

          <div className="cards rv">
            <div className="card">
              <h3>
                DEVELOP
              </h3>

              <p>
                Web with React,
                TypeScript and PHP,
                mobile apps with
                Flutter and Dart,
                backed by computer
                systems and
                networking
                fundamentals.
              </p>
            </div>

            <div className="card">
              <h3>
                SOFTWARE
                ENGINEER
              </h3>

              <p>
                Build reliable
                software across web,
                mobile and backend
                systems, with a focus
                on clean architecture,
                practical
                problem-solving and
                maintainable code.
              </p>
            </div>
          </div>
        </section>

        <section className="tl">
          <h2 className="rv">
            My learning &amp;
            <br />
            experience
          </h2>

          <div className="rows">
            {journey.map(
              (item) => (
                <div
                  className="row"
                  key={item.t}
                >
                  <div>
                    <h3>
                      {item.t}
                    </h3>
                  </div>

                  <div className="period">
                    {item.s}
                  </div>

                  <p>
                    {item.d}
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        <section
          id="work"
          className="work"
        >
          <h2>
            My <em>Work</em>
          </h2>

          <div className="track">
            {projects.map(
              (project) => (
                <a
                  className="pj"
                  key={
                    project.name
                  }
                  href={
                    project.href
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="n">
                    {project.num}
                  </div>

                  <div>
                    <h3>
                      {project.name}
                    </h3>

                    <span>
                      {project.type}
                    </span>
                  </div>

                  <span>
                    Tools and
                    features
                    <br />
                    {project.tools}
                  </span>

                  <div
                    className="shot"
                    aria-hidden="true"
                  />

                  <ArrowUpRight
                    aria-hidden="true"
                  />
                </a>
              )
            )}
          </div>
        </section>

        <section className="tech">
          <h2>
            MY TECHSTACK
          </h2>

          <Bubbles />
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
