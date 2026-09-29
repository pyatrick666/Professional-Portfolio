(async () => {
  let THREE;
  try {
    THREE = await import('./three.module.js');
  } catch (error) {
    console.error('Three.js failed to load:', error);
    document.body.classList.add('no-webgl');
    const fallback = document.querySelector('#webgl-fallback p');
    if (fallback) fallback.textContent = 'The 3D engine could not load. The portfolio content is still available.';
    document.querySelector('#loader')?.classList.add('loaded');
    clearTimeout(window.__portfolioBootTimer);
    return;
  }

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const sceneEl = $('#scene');

const state = {
  started: false,
  speed: 0,
  heading: 0,
  steer: 0,
  throttle: false,
  brake: false,
  handbrake: false,
  airborne: false,
  verticalVelocity: 0,
  activeLocation: -1,
  lastLocation: -1,
  cameraShake: 0
};

let renderer = null;
let raf = 0;

function showFatal(message) {
  document.body.classList.add('no-webgl');
  const fallback = $('#webgl-fallback');
  if (fallback) {
    const p = fallback.querySelector('p');
    if (p) p.textContent = message;
  }
}

if (!sceneEl) {
  showFatal('The interactive scene could not start. Portfolio content remains available.');
  throw new Error('Missing #scene');
}

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x070a0d);
scene.fog = new THREE.Fog(0x070a0d, 18, 105);

const camera = new THREE.PerspectiveCamera(58, innerWidth / innerHeight, 0.05, 220);
camera.position.set(0, 3.2, 7);

// Keep renderer creation absolutely minimal. Advanced renderer options,
// shadows and high pixel ratios are enabled later only if the base renderer works.
try {
  renderer = new THREE.WebGLRenderer({ antialias: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, innerWidth <= 700 ? 1 : 1.25));
  renderer.setSize(innerWidth, innerHeight, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  sceneEl.appendChild(renderer.domElement);
} catch (error) {
  console.error('Base WebGL renderer failed:', error);
  renderer = null;
  showFatal('WebGL could not be started on this device. The portfolio content is still available.');
}

if (!renderer) {
  showFatal('WebGL could not be started. The portfolio content is still available.');
  $('#loader')?.classList.add('loaded');
} else {
  // Start the experience in safe stages. A failure in an optional layer
  // must never trap the visitor behind the loading screen.
  // Boot a tiny scene first. This proves WebGL is alive before any
  // optional portfolio geometry, rain, labels or controls are initialized.
  try {
    const testLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(testLight);
    const testGeometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);
    const testMaterial = new THREE.MeshBasicMaterial({ color: 0x7df9ff, wireframe: true });
    const testCube = new THREE.Mesh(testGeometry, testMaterial);
    testCube.position.set(0, 1, 0);
    scene.add(testCube);
    renderer.render(scene, camera);
    scene.remove(testCube, testLight);
    testGeometry.dispose();
    testMaterial.dispose();
  } catch (error) {
    console.error('Minimal 3D boot failed:', error);
    showFatal('The 3D renderer could not start on this device. The portfolio content is still available.');
    $('#loader')?.classList.add('loaded');
    return;
  }

  const startupSteps = [
    ['world', initWorld],
    ['interface', initInterface],
    ['input', initInput]
  ];

  let startupFailed = false;

  for (const [name, step] of startupSteps) {
    try {
      step();
    } catch (error) {
      startupFailed = true;
      console.error('Portfolio startup failed in ' + name + ':', error);
      break;
    }
  }

  if (startupFailed) {
    showFatal('The 3D experience could not finish starting. The portfolio content is still available.');
    $('#loader')?.classList.add('loaded');
  } else {
    // The basic scene is ready before we remove the fallback watchdog.
    document.body.classList.remove('no-webgl');
    clearTimeout(window.__portfolioBootTimer);
    requestAnimationFrame(animate);
    requestAnimationFrame(() => document.body.classList.add('loaded'));
  }
}

function initWorld() {
  scene.add(new THREE.HemisphereLight(0x9eb4c9, 0x050607, 1.35));

  const moon = new THREE.DirectionalLight(0xb9d0e8, 2.2);
  moon.position.set(-18, 24, 12);
  moon.castShadow = true;
  const shadowSize = innerWidth <= 700 ? 512 : 1024;
  moon.shadow.mapSize.set(shadowSize, shadowSize);
  moon.shadow.camera.left = -35;
  moon.shadow.camera.right = 35;
  moon.shadow.camera.top = 35;
  moon.shadow.camera.bottom = -35;
  scene.add(moon);

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(180, 180),
    new THREE.MeshStandardMaterial({ color: 0x101416, roughness: 0.92 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.08;
  ground.receiveShadow = true;
  scene.add(ground);

  createTrack();
  createWorldProps();
  createLocations();
  createLocationStructures();
  createBike();
  createAtmosphere();
}

function terrainY(x, z) {
  return 0.08 * Math.sin(z * 0.13) + 0.045 * Math.sin(x * 0.8 + z * 0.09);
}

function trackX(z) {
  return Math.sin(z * 0.075) * 5.2 + Math.sin(z * 0.19) * 1.05;
}

function trackHeading(z) {
  const dz = 0.08;
  const dx = trackX(z + dz) - trackX(z - dz);
  // Forward travel is toward decreasing Z, so the heading follows the
  // downhill travel direction rather than the opposite tangent.
  return Math.atan2(-dx, 2 * dz);
}

function createTrack() {
  const points = [];
  const width = 5.8;
  for (let i = 0; i <= 220; i++) {
    const z = 9 - i * 0.52;
    points.push(new THREE.Vector3(trackX(z), terrainY(trackX(z), z) + 0.01, z));
  }

  const vertices = [];
  const uvs = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    const next = points[Math.min(i + 1, points.length - 1)];
    const tangent = new THREE.Vector3().subVectors(next, p).normalize();
    const side = new THREE.Vector3(-tangent.z, 0, tangent.x).normalize();
    vertices.push(
      p.x - side.x * width * 0.5, p.y, p.z - side.z * width * 0.5,
      p.x + side.x * width * 0.5, p.y, p.z + side.z * width * 0.5
    );
    uvs.push(0, i / 12, 1, i / 12);
  }

  const indices = [];
  for (let i = 0; i < points.length - 1; i++) {
    const a = i * 2;
    indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();

  const road = new THREE.Mesh(
    geo,
    new THREE.MeshStandardMaterial({ color: 0x20272a, roughness: 0.96, metalness: 0.02 })
  );
  road.receiveShadow = true;
  scene.add(road);

  const edgeMat = new THREE.MeshStandardMaterial({
    color: 0x344039,
    roughness: 1
  });

  for (let i = 0; i < 220; i++) {
    const z = 8.5 - i * 0.52;
    const x = trackX(z);
    for (const side of [-1, 1]) {
      const marker = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.035, 0.48), edgeMat);
      marker.position.set(x + side * 2.72, terrainY(x, z) + 0.04, z);
      marker.rotation.y = trackHeading(z);
      scene.add(marker);
    }
  }
}

function createWorldProps() {
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x201712, roughness: 1 });
  const leafMat = new THREE.MeshStandardMaterial({ color: 0x17231c, roughness: 1 });
  const rockMat = new THREE.MeshStandardMaterial({ color: 0x30383a, roughness: 0.88 });

  function tree(x, z, scale = 1) {
    const g = new THREE.Group();
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.12 * scale, 0.2 * scale, 2 * scale, 7), trunkMat);
    trunk.position.y = scale;
    g.add(trunk);
    for (let i = 0; i < 3; i++) {
      const crown = new THREE.Mesh(new THREE.ConeGeometry((0.9 - i * 0.15) * scale, (1.55 - i * 0.12) * scale, 8), leafMat);
      crown.position.y = (1.65 + i * 0.48) * scale;
      g.add(crown);
    }
    g.position.set(x, terrainY(x, z), z);
    g.castShadow = true;
    scene.add(g);
  }

  function rock(x, z, scale = 1) {
    const r = new THREE.Mesh(new THREE.DodecahedronGeometry(0.7 * scale, 1), rockMat);
    r.scale.y = 0.6;
    r.position.set(x, terrainY(x, z) + 0.38 * scale, z);
    r.rotation.set(Math.random(), Math.random(), Math.random());
    r.castShadow = true;
    scene.add(r);
  }

  for (let i = 0; i < 42; i++) {
    const z = 7 - i * 1.55;
    const center = trackX(z);
    const side = i % 2 ? -1 : 1;
    tree(center + side * (7 + Math.random() * 4), z + (Math.random() - 0.5) * 2, 0.8 + Math.random() * 0.65);
    if (i % 2 === 0) rock(center - side * (5.5 + Math.random() * 3), z + 0.5, 0.5 + Math.random() * 0.7);
  }

  for (let i = 0; i < 14; i++) {
    const z = 4 - i * 3.7;
    const x = trackX(z) + (i % 2 ? 3.6 : -3.6);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 3.4, 8), rockMat);
    pole.position.set(x, terrainY(x, z) + 1.7, z);
    scene.add(pole);

    const lamp = new THREE.PointLight(0xd7ff3f, 2.2, 8);
    lamp.position.set(x, terrainY(x, z) + 3.45, z);
    scene.add(lamp);

    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 10, 10),
      new THREE.MeshStandardMaterial({ color: 0xd7ff3f, emissive: 0xd7ff3f, emissiveIntensity: 5 })
    );
    glow.position.copy(lamp.position);
    scene.add(glow);
  }

  createRamp(-21);
  createRamp(-55);
}

function createRamp(z) {
  const x = trackX(z);
  const ramp = new THREE.Mesh(
    new THREE.BoxGeometry(3.4, 0.9, 2.8),
    new THREE.MeshStandardMaterial({ color: 0x343c3f, roughness: 0.78 })
  );
  ramp.position.set(x, terrainY(x, z) + 0.43, z);
  ramp.rotation.y = trackHeading(z);
  ramp.rotation.x = -0.2;
  ramp.castShadow = true;
  scene.add(ramp);
}

const locations = [
  { id: 'about', number: '01', title: 'THE RIDER', z: -12, side: -1, subtitle: 'ABOUT PRATIK' },
  { id: 'work', number: '02', title: 'THE GARAGE', z: -31, side: 1, subtitle: 'SELECTED WORK' },
  { id: 'skills', number: '03', title: 'THE WORKSHOP', z: -49, side: -1, subtitle: 'CAPABILITIES' },
  { id: 'contact', number: '04', title: 'THE EXIT', z: -68, side: 1, subtitle: 'CONTACT' }
];


function createLocationStructures() {
  const wallMat = new THREE.MeshStandardMaterial({color:0x151b1e,roughness:0.82,metalness:0.18});
  const roofMat = new THREE.MeshStandardMaterial({color:0x252d31,roughness:0.68,metalness:0.3});
  const trimMat = new THREE.MeshStandardMaterial({color:0xd7ff3f,emissive:0xd7ff3f,emissiveIntensity:2.2});
  const glassMat = new THREE.MeshStandardMaterial({color:0x29414a,roughness:0.22,metalness:0.45,transparent:true,opacity:0.72});
  const crateMat = new THREE.MeshStandardMaterial({color:0x5b4631,roughness:0.9});

  function building(location, width, depth) {
    const g = new THREE.Group();
    const x = location.x + location.side * 2.0;
    const z = location.z;
    const y = terrainY(x,z);
    g.position.set(x,y,z);
    const body = new THREE.Mesh(new THREE.BoxGeometry(width,3.2,depth),wallMat);
    body.position.y=1.6; body.castShadow=true; body.receiveShadow=true; g.add(body);
    const roof = new THREE.Mesh(new THREE.BoxGeometry(width+0.45,0.22,depth+0.45),roofMat);
    roof.position.y=3.25; roof.castShadow=true; g.add(roof);
    const strip = new THREE.Mesh(new THREE.BoxGeometry(width*0.82,0.08,0.08),trimMat);
    strip.position.set(0,2.72,-depth/2-0.045); g.add(strip);
    const door = new THREE.Mesh(new THREE.BoxGeometry(1.15,2.25,0.08),glassMat);
    door.position.set(0,1.12,-depth/2-0.06); g.add(door);
    for(let i=0;i<3;i++){
      const crate=new THREE.Mesh(new THREE.BoxGeometry(.55,.5,.55),crateMat);
      crate.position.set(-width*.35+i*.62,.25,-depth/2-.32); crate.rotation.y=(i-1)*.15; crate.castShadow=true; g.add(crate);
    }
    scene.add(g);
    location.structure=g;
  }

  building(locations[0],4.8,4.2);

  const garage=locations[1], gx=garage.x+garage.side*2.1, gz=garage.z, gy=terrainY(gx,gz);
  const gg=new THREE.Group(); gg.position.set(gx,gy,gz);
  const shell=new THREE.Mesh(new THREE.BoxGeometry(6.8,3.8,5.2),wallMat); shell.position.y=1.9; shell.castShadow=true; gg.add(shell);
  const bay=new THREE.Mesh(new THREE.BoxGeometry(4.5,2.8,.12),glassMat); bay.position.set(0,1.42,-2.66); gg.add(bay);
  const beam=new THREE.Mesh(new THREE.BoxGeometry(6.95,.18,.18),trimMat); beam.position.set(0,3.35,-2.72); gg.add(beam);
  for(let i=0;i<2;i++){const post=new THREE.Mesh(new THREE.BoxGeometry(.16,3.5,.2),roofMat); post.position.set(-3.05+i*6.1,1.75,-2.7); gg.add(post);}
  const sign=makeLabel('02','GARAGE');
  sign.scale.set(3.8,1.15,1); sign.position.set(0,4.15,-2.75); gg.add(sign);
  scene.add(gg); garage.structure=gg;

  const workshop=locations[2], wx=workshop.x+workshop.side*2.0, wz=workshop.z, wy=terrainY(wx,wz);
  const wg=new THREE.Group(); wg.position.set(wx,wy,wz);
  const bench=new THREE.Mesh(new THREE.BoxGeometry(5.8,1.1,2.7),wallMat); bench.position.y=.55; bench.castShadow=true; wg.add(bench);
  const roof=new THREE.Mesh(new THREE.BoxGeometry(6.4,.2,3.2),roofMat); roof.position.y=3.3; wg.add(roof);
  for(let i=0;i<4;i++){const p=new THREE.Mesh(new THREE.CylinderGeometry(.1,.1,3.2,8),roofMat);p.position.set(-2.7+i*1.8,1.6,0);wg.add(p);}
  const screen=new THREE.Mesh(new THREE.BoxGeometry(2.2,1.25,.08),glassMat); screen.position.set(0,2.2,-1.45);wg.add(screen);
  const ws=makeLabel('03','WORKSHOP'); ws.scale.set(3.8,1.15,1); ws.position.set(0,3.9,-1.7);wg.add(ws);
  scene.add(wg); workshop.structure=wg;

  const exit=locations[3], ex=exit.x+exit.side*1.7, ez=exit.z, ey=terrainY(ex,ez);
  const gate=new THREE.Group(); gate.position.set(ex,ey,ez);
  for(const sx of [-2.5,2.5]){const p=new THREE.Mesh(new THREE.BoxGeometry(.25,4,.25),roofMat);p.position.set(sx,2,0);gate.add(p);}
  const top=new THREE.Mesh(new THREE.BoxGeometry(5.25,.3,.3),trimMat);top.position.y=3.65;gate.add(top);
  const exitSign=makeLabel('04','EXIT'); exitSign.scale.set(3.5,1.05,1);exitSign.position.set(0,3.25,0);gate.add(exitSign);
  scene.add(gate); exit.structure=gate;
}

function createLocations() {
  const signMat = new THREE.MeshStandardMaterial({
    color: 0x11171a,
    roughness: 0.55,
    metalness: 0.25
  });
  const glowMat = new THREE.MeshStandardMaterial({
    color: 0xd7ff3f,
    emissive: 0xd7ff3f,
    emissiveIntensity: 4
  });

  for (const location of locations) {
    const x = trackX(location.z) + location.side * 4.5;
    const y = terrainY(x, location.z);

    const platform = new THREE.Mesh(new THREE.CylinderGeometry(1.55, 1.7, 0.18, 24), signMat);
    platform.position.set(x, y + 0.09, location.z);
    platform.receiveShadow = true;
    scene.add(platform);

    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.06, 2.6, 8), signMat);
    post.position.set(x, y + 1.35, location.z);
    scene.add(post);

    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.055, 10, 32), glowMat);
    ring.position.set(x, y + 2.1, location.z);
    ring.rotation.y = Math.PI / 2;
    scene.add(ring);

    const label = makeLabel(location.number, location.title);
    label.position.set(x, y + 2.1, location.z);
    label.rotation.y = location.side < 0 ? Math.PI * 0.5 : -Math.PI * 0.5;
    scene.add(label);

    location.x = x;
    location.y = y;
    location.ring = ring;
    location.label = label;
  }
}

function makeLabel(number, title) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 160;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#d7ff3f';
  ctx.font = '700 28px Arial';
  ctx.fillText(number, 24, 42);
  ctx.fillStyle = '#ffffff';
  ctx.font = '700 34px Arial';
  ctx.fillText(title, 24, 88);
  ctx.fillStyle = '#9aa4ae';
  ctx.font = '500 18px Arial';
  ctx.fillText('TAP / PRESS E', 24, 125);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true }));
  sprite.scale.set(3.2, 1, 1);
  return sprite;
}

let bike, rearWheel, frontWheel, headLight, bikeVisual, suspensionL, suspensionR;

function createBike() {
  bike = new THREE.Group();
  bikeVisual = new THREE.Group();
  bike.add(bikeVisual);
  scene.add(bike);

  const frameMat = new THREE.MeshStandardMaterial({ color: 0x9fbd2c, metalness: 0.5, roughness: 0.3 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x101416, roughness: 0.55 });
  const metalMat = new THREE.MeshStandardMaterial({ color: 0x858f95, metalness: 0.85, roughness: 0.24 });
  const rubberMat = new THREE.MeshStandardMaterial({ color: 0x050607, roughness: 0.98 });

  function wheel(z) {
    const g = new THREE.Group();
    const tire = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.17, 14, 28), rubberMat);
    tire.rotation.y = Math.PI / 2;
    tire.castShadow = true;
    g.add(tire);

    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.22, 14), metalMat);
    hub.rotation.z = Math.PI / 2;
    g.add(hub);

    for (let i = 0; i < 8; i++) {
      const spoke = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.52, 6), metalMat);
      spoke.rotation.z = Math.PI / 2;
      spoke.rotation.y = i * Math.PI / 4;
      g.add(spoke);
    }
    g.position.set(0, 0.63, z);
    return g;
  }

  rearWheel = wheel(0.82);
  frontWheel = wheel(-0.82);
  bikeVisual.add(rearWheel, frontWheel);

  const frame = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.15, 1.28), frameMat);
  frame.position.set(0, 1.18, 0.02);
  frame.rotation.x = -0.08;
  bikeVisual.add(frame);

  const engine = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.5, 0.5), metalMat);
  engine.position.set(0, 0.98, 0.02);
  bikeVisual.add(engine);

  const tank = new THREE.Mesh(new THREE.SphereGeometry(0.38, 18, 12), frameMat);
  tank.scale.set(0.9, 0.62, 1.25);
  tank.position.set(0, 1.46, -0.1);
  bikeVisual.add(tank);

  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.12, 0.92), darkMat);
  seat.position.set(0.08, 1.48, 0.28);
  seat.rotation.x = -0.08;
  bikeVisual.add(seat);

  const sidePanel = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.35, 0.44), frameMat);
  sidePanel.position.set(0, 1.27, 0.46);
  sidePanel.rotation.x = 0.18;
  bikeVisual.add(sidePanel);

  const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, 0.9, 12), metalMat);
  exhaust.rotation.x = Math.PI / 2;
  exhaust.position.set(0.25, 1.27, 0.35);
  bikeVisual.add(exhaust);

  const forkL = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.055, 1.05, 10), metalMat);
  const forkR = forkL.clone();
  forkL.position.set(-0.13, 1.16, -0.73);
  forkR.position.set(0.13, 1.16, -0.73);
  forkL.rotation.x = forkR.rotation.x = -0.16;
  suspensionL=forkL; suspensionR=forkR;
  bikeVisual.add(forkL, forkR);

  const handlebar = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.82, 12), darkMat);
  handlebar.rotation.z = Math.PI / 2;
  handlebar.position.set(0, 1.76, -0.83);
  bikeVisual.add(handlebar);

  const fender = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.08, 0.72), frameMat);
  fender.position.set(0, 1.42, -0.74);
  fender.rotation.x = -0.18;
  bikeVisual.add(fender);

  headLight = new THREE.SpotLight(0xe7ffff, 48, 28, 0.32, 0.45, 1.3);
  headLight.position.set(0, 1.62, -0.9);
  headLight.target.position.set(0, 1.1, -8);
  bikeVisual.add(headLight, headLight.target);

  const lamp = new THREE.Mesh(
    new THREE.SphereGeometry(0.18, 16, 12),
    new THREE.MeshStandardMaterial({ color: 0xeaffff, emissive: 0xdfffff, emissiveIntensity: 5 })
  );
  lamp.position.set(0, 1.62, -0.9);
  bikeVisual.add(lamp);

  bikeVisual.scale.setScalar(1.08);
  const startZ = 5.5;
  state.heading = trackHeading(startZ);
  bike.position.set(trackX(startZ), terrainY(trackX(startZ), startZ) + 0.03, startZ);
  bike.rotation.y = state.heading;
}

function createAtmosphere() {
  const rainCount = innerWidth <= 700 ? 360 : 700;
  const positions = new Float32Array(rainCount * 3);
  for (let i = 0; i < rainCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 70;
    positions[i * 3 + 1] = Math.random() * 28;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 70;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const rain = new THREE.Points(
    geo,
    new THREE.PointsMaterial({ color: 0x9db7d4, size: 0.035, transparent: true, opacity: 0.48 })
  );
  rain.name = 'rain';
  scene.add(rain);

  const wet = new THREE.Mesh(new THREE.PlaneGeometry(180,180), new THREE.MeshStandardMaterial({color:0x0a0f11,roughness:0.18,metalness:0.25,transparent:true,opacity:0.32}));
  wet.rotation.x=-Math.PI/2; wet.position.y=0.015; scene.add(wet);
}

function initInterface() {
  $('#start-ride')?.addEventListener('click', startRide);
  addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !state.started) startRide();
  });

  $$('[data-target]').forEach((button) => {
    button.addEventListener('click', () => openPanel(button.dataset.target));
  });

  $$('.close-panel').forEach((button) => {
    button.addEventListener('click', () => button.parentElement?.classList.add('hidden-panel'));
  });

  $('#sound')?.addEventListener('click', (e) => {
    e.currentTarget.textContent = e.currentTarget.textContent === 'SOUND OFF' ? 'SOUND ON' : 'SOUND OFF';
  });

  $('#ride-hud')?.setAttribute('aria-live', 'polite');
  $('#location-card')?.addEventListener('click', () => { if (state.activeLocation >= 0) openLocation(state.activeLocation); });
  $('#location-card')?.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && state.activeLocation >= 0) {
      e.preventDefault();
      openLocation(state.activeLocation);
    }
  });
  addEventListener('keydown', (e) => { if (e.key.toLowerCase() === 'e' && state.started && state.activeLocation >= 0) openLocation(state.activeLocation); });
}

function openPanel(id) {
  $$('.content-panel').forEach((panel) => panel.classList.add('hidden-panel'));
  $('#' + id)?.classList.remove('hidden-panel');
}

function startRide() {
  if (state.started) return;
  state.started = true;
  document.body.classList.add('ride-started');
}

function initInput() {
  const keyMap = {
    w: 'throttle', ArrowUp: 'throttle',
    s: 'brake', ArrowDown: 'brake',
    a: 'left', ArrowLeft: 'left',
    d: 'right', ArrowRight: 'right',
    ' ': 'handbrake'
  };

  addEventListener('keydown', (e) => {
    const action = keyMap[e.key];
    if (action) {
      state[action] = true;
      e.preventDefault();
    }
    if (e.key.toLowerCase() === 'e' && state.activeLocation >= 0) {
      openPanel(locations[state.activeLocation].id);
    }
  });

  addEventListener('keyup', (e) => {
    const action = keyMap[e.key];
    if (action) state[action] = false;
  });

  const canvas = renderer.domElement;
  let lookDragging = false;
  let lastX = 0;

  canvas.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'touch') {
      lookDragging = true;
      lastX = e.clientX;
      canvas.setPointerCapture?.(e.pointerId);
    }
  });

  canvas.addEventListener('pointermove', (e) => {
    if (!lookDragging || e.pointerType === 'touch') return;
    state.heading -= (e.clientX - lastX) * 0.002;
    lastX = e.clientX;
  });

  canvas.addEventListener('pointerup', () => { lookDragging = false; });
  canvas.addEventListener('pointercancel', () => { lookDragging = false; });

  createMobileControls();
}

function createMobileControls() {
  const wrap = document.createElement('div');
  wrap.className = 'mobile-drive';
  wrap.innerHTML = `
    <div class="mobile-steering">
      <button data-drive="left" aria-label="Steer left">‹</button>
      <button data-drive="right" aria-label="Steer right">›</button>
    </div>
    <div class="mobile-pedals">
      <button data-drive="brake">BRAKE</button>
      <button data-drive="throttle">GO</button>
    </div>
    <div class="mobile-drive-hint">STEER • GO • BRAKE</div>
  `;
  document.body.appendChild(wrap);

  wrap.querySelectorAll('[data-drive]').forEach((button) => {
    const action = button.dataset.drive;
    const press = (e) => {
      e.preventDefault();
      state[action] = true;
      button.classList.add('pressed');
    };
    const release = (e) => {
      e.preventDefault();
      state[action] = false;
      button.classList.remove('pressed');
    };
    button.addEventListener('pointerdown', (e) => {
      button.setPointerCapture?.(e.pointerId);
      press(e);
    });
    button.addEventListener('pointerup', release);
    button.addEventListener('pointercancel', release);
    button.addEventListener('lostpointercapture', release);
  });
}

function updateBike(dt) {
  const throttle = state.started && state.throttle;
  const brake = state.started && state.brake;

  if (throttle) state.speed = THREE.MathUtils.clamp(state.speed + dt * 5.5, -1.5, 8.5);
  else if (brake) state.speed = THREE.MathUtils.lerp(state.speed, 0, Math.min(1, dt * 7));
  else state.speed = THREE.MathUtils.lerp(state.speed, 0, Math.min(1, dt * 1.5));

  const steering = (state.left ? 1 : 0) + (state.right ? -1 : 0);
  state.steer = THREE.MathUtils.lerp(state.steer, steering, Math.min(1, dt * 9));

  if (state.started) {
    state.heading += state.steer * dt * (0.55 + Math.abs(state.speed) * 0.14);
    if (state.handbrake) state.speed = THREE.MathUtils.lerp(state.speed, 0, dt * 2.2);
  }

  const forward = new THREE.Vector3(Math.sin(state.heading), 0, -Math.cos(state.heading));
  bike.position.addScaledVector(forward, state.speed * dt);

  const centerX = trackX(bike.position.z);
  const lateral = bike.position.x - centerX;
  if (Math.abs(lateral) > 8) {
    bike.position.x = THREE.MathUtils.lerp(bike.position.x, centerX + THREE.MathUtils.clamp(lateral, -7.5, 7.5), dt * 2.5);
  }

  const ground = terrainY(bike.position.x, bike.position.z) + 0.03;
  const slope = trackHeading(bike.position.z);
  const jump = Math.abs(bike.position.z + 21) < 2.0 || Math.abs(bike.position.z + 55) < 2.0;
  const jumpImpulse = Math.abs(bike.position.z + 21) < 2.0 ? 5.0 : 4.6;

  if (state.started && jump && Math.abs(state.speed) > 4.2 && !state.airborne) {
    state.verticalVelocity = jumpImpulse;
    state.airborne = true;
  }

  if (state.airborne) {
    state.verticalVelocity -= 10 * dt;
    bike.position.y += state.verticalVelocity * dt;
    if (bike.position.y <= ground) {
      bike.position.y = ground;
      state.airborne = false;
      state.verticalVelocity = 0;
      state.cameraShake = Math.min(0.24, 0.07 + Math.abs(state.speed) * 0.02);
      spawnLandingDust(bike.position.x, bike.position.z);
    }
  } else {
    bike.position.y = THREE.MathUtils.lerp(bike.position.y, ground, Math.min(1, dt * 12));
  }

  bike.rotation.y = state.heading;
  const leanTarget = -state.steer * THREE.MathUtils.clamp(Math.abs(state.speed) * 0.035, 0, 0.22);
  bikeVisual.rotation.z = THREE.MathUtils.lerp(bikeVisual.rotation.z, leanTarget, Math.min(1, dt * 7));
  bikeVisual.rotation.x = THREE.MathUtils.lerp(bikeVisual.rotation.x, state.airborne ? -0.13 : -slope * 0.45, Math.min(1, dt * 6));
  const compression = state.airborne ? 0 : THREE.MathUtils.clamp(Math.abs(state.speed) * 0.012, 0, 0.12);
  bikeVisual.position.y = THREE.MathUtils.lerp(bikeVisual.position.y, -compression, Math.min(1, dt * 10));
  if(suspensionL && suspensionR){ suspensionL.scale.y=1-compression*1.8; suspensionR.scale.y=1-compression*1.8; }
  bike.rotation.z = THREE.MathUtils.lerp(bike.rotation.z, state.airborne ? 0 : -state.steer * 0.035, Math.min(1, dt * 6));

  const wheelSpin = state.speed * dt * 1.6;
  frontWheel.rotation.x -= wheelSpin;
  rearWheel.rotation.x -= wheelSpin;
}


function spawnLandingDust(x, z) {
  const group = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({color:0x9a8064,transparent:true,opacity:0.5,depthWrite:false});
  for (let i=0; i<12; i++) {
    const p = new THREE.Mesh(new THREE.SphereGeometry(0.035 + Math.random()*0.045, 6, 6), mat);
    p.position.set(x + (Math.random()-0.5)*1.1, 0.08 + Math.random()*0.12, z + (Math.random()-0.5)*1.0);
    p.userData.v = new THREE.Vector3((Math.random()-0.5)*1.8, 0.5+Math.random()*1.4, (Math.random()-0.5)*1.8);
    group.add(p);
  }
  group.userData.life = 0.55;
  scene.add(group);
  const tick = () => {
    if (!group.parent) return;
    group.userData.life -= 0.016;
    group.children.forEach(p => {
      p.position.addScaledVector(p.userData.v, 0.016);
      p.userData.v.y -= 2 * 0.016;
      p.scale.multiplyScalar(0.985);
    });
    if (group.userData.life <= 0) scene.remove(group);
    else requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function updateCamera(dt, time) {
  const mobile = innerWidth <= 700;
  const back = mobile ? 5.4 : 7.2;
  const height = mobile ? 2.5 : 3.1;
  const forward = new THREE.Vector3(Math.sin(state.heading), 0, -Math.cos(state.heading));
  const behind = new THREE.Vector3(-forward.x, 0, -forward.z);

  const target = bike.position.clone()
    .addScaledVector(behind, back)
    .add(new THREE.Vector3(0, height, 0));

  state.cameraShake = Math.max(0, state.cameraShake - dt * 0.9);
  target.x += (Math.random() - 0.5) * state.cameraShake;
  target.y += (Math.random() - 0.5) * state.cameraShake;

  camera.position.lerp(target, Math.min(1, dt * (state.started ? 5.5 : 2.5)));

  const look = bike.position.clone().addScaledVector(forward, mobile ? 3.8 : 5.2);
  look.y += mobile ? 0.72 : 0.92;
  camera.lookAt(look);

  // Headlight lives inside the bike visual group, so its target stays local.
  // The bike group itself handles movement and rotation.
  if (headLight) {
    headLight.position.set(0, 1.62, -0.9);
    headLight.target.position.set(0, 1.1, -8);
  }

  const speedLabel = $('#ride-speed');
  if (speedLabel) speedLabel.textContent = Math.round(Math.abs(state.speed) * 18) + ' KM/H';

  if (time > 0) {
    const rain = scene.getObjectByName('rain');
    if (rain) {
      rain.position.x = bike.position.x;
      rain.position.z = bike.position.z;
      const p = rain.geometry.attributes.position.array;
      for (let i = 1; i < p.length; i += 3) {
        p[i] -= dt * 16;
        if (p[i] < 0) p[i] = 28;
      }
      rain.geometry.attributes.position.needsUpdate = true;
    }
  }
}

function openLocation(index) {
  const location = locations[index];
  if (!location) return;
  state.cameraShake = Math.max(state.cameraShake, 0.08);
  document.body.classList.add('location-transition');
  setTimeout(() => {
    openPanel(location.id);
    document.body.classList.remove('location-transition');
  }, 260);
}

function updateLocations(time) {
  let closest = -1;
  let distance = Infinity;

  locations.forEach((location, index) => {
    const d = Math.hypot(bike.position.x - location.x, bike.position.z - location.z);
    if (d < distance) {
      distance = d;
      closest = index;
    }
    const pulse = 1 + Math.sin(time * 0.003 + index) * 0.06;
    location.ring.scale.setScalar((index === state.activeLocation ? 1.18 : 1) * pulse);
  });

  state.activeLocation = distance < 5.2 ? closest : -1;

  const title = $('#location-title');
  const sub = $('#location-sub');
  if (state.activeLocation >= 0) {
    const location = locations[state.activeLocation];
    title.textContent = location.title;
    sub.textContent = location.subtitle + ' • PRESS E / TAP';
    if (state.lastLocation !== state.activeLocation) state.cameraShake = Math.max(state.cameraShake, 0.03);
  } else {
    title.textContent = 'THE TRAIL';
    sub.textContent = 'RIDE TO A LOCATION';
  }

  state.lastLocation = state.activeLocation;
}

function animate(time = 0) {
  raf = requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.04);

  updateBike(dt);
  updateCamera(dt, time);
  updateLocations(time);
  const rain = scene.getObjectByName('rain');
  if (rain) rain.rotation.y = Math.sin(time * 0.00008) * 0.02;

  if (renderer) renderer.render(scene, camera);
}

const clock = new THREE.Clock();

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  if (renderer) {
    renderer.setSize(innerWidth, innerHeight);
    const pixelRatio = innerWidth <= 700 ? 1.25 : 1.5;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, pixelRatio));
  }
});

addEventListener('error', (event) => {
  if (!renderer) return;
  const panel = $('#runtime-error');
  if (panel) {
    panel.textContent = 'Interactive mode encountered a recoverable error. Refresh to restart the ride.';
    panel.hidden = false;
  }
  console.error(event.error || event.message);
});

addEventListener('unhandledrejection', (event) => {
  const panel = $('#runtime-error');
  if (panel) {
    panel.textContent = 'Interactive mode encountered a recoverable error. Refresh to restart the ride.';
    panel.hidden = false;
  }
  console.error(event.reason);
});

})();
