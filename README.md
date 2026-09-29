# Pratik Poudel — Professional Portfolio

> An interactive cinematic portfolio built around a dirt-bike trail, created to present my technical capabilities, development interests, and professional direction.

**Portfolio:** https://pyatrick666.github.io/Professional-Portfolio/  
**GitHub:** https://github.com/pyatrick666  
**LinkedIn:** https://www.linkedin.com/in/pratik-poudel-b3264a263/  
**Email:** pyatrick666@gmail.com

## About

This repository contains my professional portfolio, separate from my academic ePortfolio.

I am Pratik Poudel, a BSc (Hons) Information Technology — Computer Systems Engineering student with interests across software development, full-stack web development, mobile applications, networking, Linux, and computer systems.

The portfolio presents my professional profile through an interactive digital trail rather than a conventional static portfolio.

## Experience & Interaction

The portfolio combines a professional information interface with a real-time 3D environment featuring:

- Three.js-powered 3D rendering
- Procedurally generated dirt-bike model
- Dynamic terrain and ramps
- Rain, fog, and atmospheric lighting
- Interactive riding
- WASD and arrow-key controls
- Touch-oriented mobile interaction
- Jump and landing physics
- Suspension movement
- Tire tracks and puddle splash effects
- Dirt particles and skid effects
- Interactive trail checkpoints
- Cinematic ride introduction
- Responsive layouts
- Graceful WebGL fallback

The bike and environment are generated using Three.js primitives and custom JavaScript rather than relying on a proprietary third-party 3D asset.

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure and content |
| CSS3 | Responsive layout, animation, and visual design |
| JavaScript | Interaction and application logic |
| Three.js | Real-time 3D graphics |
| WebGL | Browser rendering |
| Google Fonts | Typography |
| GitHub Pages | Deployment |

## Project Structure

```
Professional-Portfolio/
├── index.html
├── cinematic.css
├── cinematic.js
└── README.md
```

## Run Locally

The project uses JavaScript modules, so serve it through a local web server rather than opening `index.html` directly with `file://`.

### Python

```bash
python3 -m http.server 8000
```

Then visit:

```
http://localhost:8000
```

### VS Code

You can alternatively use a local development server such as Live Server.

## Controls

### Desktop

- **W / Up Arrow:** Move forward
- **S / Down Arrow:** Move backward
- **A / Left Arrow:** Turn left
- **D / Right Arrow:** Turn right
- **Mouse drag:** Look around
- **Enter:** Start the ride
- **Trail markers:** Open portfolio sections

### Mobile

The portfolio includes touch-oriented interaction and responsive layouts for smaller screens.

## Performance & Compatibility

The experience is designed for modern browsers with WebGL support.

Rendering performance is managed with a capped device pixel ratio and a high-performance WebGL preference. If WebGL cannot be initialized, the portfolio provides a content-first fallback so visitors can still access the main information.

## Design Direction

The visual identity combines:

- Dark cinematic environments
- Rain and fog
- Minimal HUD elements
- Motocross-inspired visual language
- High-contrast typography
- Neon-accented interaction
- Motion-driven storytelling

The interactive environment is intended to be part of the portfolio's identity rather than simply a decorative 3D background.

## Professional Links

- **Portfolio:** https://pyatrick666.github.io/Professional-Portfolio/
- **GitHub:** https://github.com/pyatrick666
- **LinkedIn:** https://www.linkedin.com/in/pratik-poudel-b3264a263/
- **Email:** pyatrick666@gmail.com

## Development Notes

The project is intentionally lightweight and asset-independent. The environment and bike are generated with Three.js primitives and custom JavaScript logic, which keeps the experience maintainable and avoids dependence on proprietary 3D assets.

Professional portfolio content is kept inside the website itself so the repository README remains focused on the project, its implementation, and how to run it.

## License

This repository contains personal portfolio code and original portfolio content by Pratik Poudel.

Unless otherwise stated, the code and original portfolio content are not licensed for redistribution or commercial reuse. Third-party libraries and services remain subject to their respective licenses and terms.

---

**Pratik Poudel**  
BSc (Hons) Information Technology — Computer Systems Engineering  
Software • Full Stack • Mobile • Systems
