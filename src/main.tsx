import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react';
import './styles.css';
import SupportSection from './SupportSection';

const profileImage = 'https://pyatrick666.github.io/ePortfolio/profile.jpg';

const projects = [
  {
    number: '01',
    title: 'ChessMate',
    type: 'DEPLOYED · FLUTTER',
    description: 'A polished chess game built around responsive interaction, clear game flow and a player-friendly mobile experience.',
    tags: ['Flutter', 'Dart', 'Game UI'],
    href: 'https://pyatrick666.itch.io/chessmate',
  },
  {
    number: '02',
    title: 'Professional Portfolio',
    type: 'CURRENT BUILD · REACT',
    description: 'My recruiter-facing portfolio for software development, UI/UX work, education and practical projects.',
    tags: ['React', 'TypeScript', 'Vite'],
    href: 'https://github.com/pyatrick666/Professional-Portfolio',
  },
  {
    number: '03',
    title: 'ePortfolio',
    type: 'COURSEWORK · WEB',
    description: 'My earlier learning portfolio covering HTML, CSS, Bootstrap, JavaScript and responsive web development.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/pyatrick666/ePortfolio',
  },
];

const skills = [
  ['HTML5', 'Frontend'], ['CSS3', 'Frontend'], ['JavaScript', 'Frontend'],
  ['TypeScript', 'Frontend'], ['React', 'Frontend'], ['Flutter', 'Mobile'],
  ['Dart', 'Mobile'], ['Java', 'Programming'], ['SQL', 'Database'],
  ['Figma', 'UI/UX'], ['Canva', 'Design'], ['Git & GitHub', 'Tools'],
];

const coursework = [
  'Object-Oriented Programming',
  'Web Development',
  'Database Systems',
  'Software Engineering',
  'Computer Systems',
  'Enterprise Project',
];

const navItems = ['home', 'about', 'work', 'skills', 'support', 'contact'];

function App() {
  const [light, setLight] = useState(() => localStorage.getItem('theme') === 'light');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('light-mode', light);
    localStorage.setItem('theme', light ? 'light' : 'dark');
  }, [light]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>PP<span>.</span></a>

        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={'#' + item} onClick={closeMenu}>{item}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={() => setLight(value => !value)} aria-label="Toggle theme">
            {light ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen(value => !value)} aria-label="Toggle navigation">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <span className="eyebrow">PRATIK POUDEL · PROFESSIONAL PORTFOLIO</span>
            <h1>Clean work.<br /><span>Real progress.</span></h1>
            <p className="hero-lead">
              I'm a bachelor's running Information Technology student building practical
              software, web experiences and interfaces while preparing for the industry.
            </p>
            <div className="hero-actions">
              <a className="primary-cta" href="#work">Explore my work <ArrowUpRight size={17} /></a>
              <a className="secondary-cta" href="https://pyatrick666.github.io/ePortfolio/resume.pdf" target="_blank" rel="noreferrer">
                <Download size={16} /> Resume
              </a>
            </div>
            <div className="hero-meta">
              <a href="https://github.com/pyatrick666" target="_blank" rel="noreferrer"><Github size={16} /> @pyatrick666</a>
              <span>·</span><span>Butwal, Nepal</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-ring"><img src={profileImage} alt="Pratik Poudel" /></div>
            <div className="floating-card"><strong>Learning · Building · Improving</strong><span>Information Technology · UI/UX · Software</span></div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-intro">
            <span className="eyebrow">01 · ABOUT</span>
            <h2>Building my way into the industry.</h2>
            <p>
              I'm Pratik Poudel, studying BSc (Hons) Information Technology — Computer Systems Engineering
              at ISMT College, affiliated with the University of Sunderland. I like turning ideas into
              usable interfaces and practical software, then improving them through real project work.
            </p>
          </div>

          <div className="info-grid">
            <article className="info-card">
              <GraduationCap />
              <span className="card-label">EDUCATION</span>
              <h3>BSc (Hons) Information Technology</h3>
              <p>Computer Systems Engineering · ISMT College · 2025–Present</p>
              <small>Expected graduation: 2028</small>
            </article>
            <article className="info-card">
              <Code2 />
              <span className="card-label">CURRENT FOCUS</span>
              <h3>Software & Full Stack</h3>
              <p>Frontend engineering, software projects, mobile development, UI/UX and practical systems work.</p>
            </article>
            <article className="info-card">
              <BriefcaseBusiness />
              <span className="card-label">OPEN TO</span>
              <h3>Internship Opportunities</h3>
              <p>Networking, full-stack development and general software-development opportunities.</p>
            </article>
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-intro">
            <span className="eyebrow">02 · SELECTED WORK</span>
            <h2>Projects worth exploring.</h2>
            <p>A mix of independent builds, coursework and practical software projects.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className={index === 0 ? 'project-card project-featured' : 'project-card'} key={project.title}>
                <span className="project-number">{project.number}</span>
                <span className="project-kicker">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                  View project <ExternalLink size={15} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-intro">
            <span className="eyebrow">03 · TOOLKIT</span>
            <h2>Technologies I'm building with.</h2>
            <p>Technical and creative tools I use across coursework and personal projects.</p>
          </div>

          <div className="skills-grid">
            {skills.map(([name, category]) => (
              <div className="skill-card" key={name}>
                <Code2 size={18} />
                <div><strong>{name}</strong><span>{category}</span></div>
              </div>
            ))}
          </div>

          <div className="coursework">
            <div>
              <span className="eyebrow">RELEVANT COURSEWORK</span>
              <h3>What I'm studying</h3>
            </div>
            <div className="coursework-list">
              {coursework.map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}
            </div>
          </div>
        </section>

        <SupportSection />

        <section id="contact" className="section contact">
          <div className="section-intro">
            <span className="eyebrow">05 · CONTACT</span>
            <h2>Let's build something useful.</h2>
            <p>I'm open to internships, collaborations and opportunities where I can learn and contribute.</p>
          </div>

          <div className="contact-grid">
            <a href="mailto:pyatrick666@gmail.com" className="contact-card"><Mail /><span>Email</span><strong>pyatrick666@gmail.com</strong></a>
            <a href="https://github.com/pyatrick666" target="_blank" rel="noreferrer" className="contact-card"><Github /><span>GitHub</span><strong>@pyatrick666</strong></a>
            <a href="https://www.linkedin.com/in/pratik-poudel-b3264a263/" target="_blank" rel="noreferrer" className="contact-card"><Linkedin /><span>LinkedIn</span><strong>Pratik Poudel</strong></a>
          </div>

          <div className="social-row">
            <a href="https://www.instagram.com/em_ev0l/" target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram</a>
            <a href="https://www.facebook.com/emev0l" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.youtube.com/@emevol666" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Pratik Poudel · BSc (Hons) Information Technology</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
