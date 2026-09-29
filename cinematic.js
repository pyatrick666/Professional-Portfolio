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

const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100);
camera.position.set(0, 1.4, 5);

try {
  renderer = new THREE.WebGLRenderer({ antialias: false });
  renderer.setPixelRatio(1);
  renderer.setSize(innerWidth, innerHeight, false);
  sceneEl.appendChild(renderer.domElement);

  const light = new THREE.HemisphereLight(0xffffff, 0x111111, 1.5);
  scene.add(light);

  const geometry = new THREE.BoxGeometry(1.4, 1.4, 1.4);
  const material = new THREE.MeshBasicMaterial({ color: 0x7df9ff, wireframe: true });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  document.body.classList.remove('no-webgl');
  clearTimeout(window.__portfolioBootTimer);
  $('#loader')?.classList.add('loaded');

  function render() {
    raf = requestAnimationFrame(render);
    cube.rotation.x += 0.006;
    cube.rotation.y += 0.009;
    renderer.render(scene, camera);
  }
  render();
  requestAnimationFrame(() => document.body.classList.add('loaded'));

  addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight, false);
  });
} catch (error) {
  console.error('Minimal WebGL scene failed:', error);
  renderer = null;
  showFatal('WebGL could not be started. The portfolio content is still available.');
  $('#loader')?.classList.add('loaded');
}

})();
