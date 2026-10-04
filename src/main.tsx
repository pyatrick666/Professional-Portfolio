import { useEffect, useMemo, useState } from 'react';
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
  Moon,
  Sun,
  Trophy,
  UserRound,
} from 'lucide-react';
import './styles.css';
import SupportSection from './SupportSection';

const profileImage = 'https://pyatrick666.github.io/ePortfolio/profile.jpg';

const projects = [
  {
    title: 'ChessMate',
    kicker: 'GAME PROJECT · DEPLOYED',
    description:
      'A polished Flutter chess game focused on interaction, game flow, responsive UI and a player-friendly experience.',
    tags: ['Flutter', 'Dart', 'Game UI', 'Interactive'],
    href: 'https://pyatrick666.itch.io/chessmate',
  },
  {
    title: 'Professional Portfolio',
    kicker: 'CURRENT PORTFOLIO',
    description:
      'A recruiter-facing portfolio bringing together development work, design skills, education, practical projects and a personal creative direction.',
    tags: ['React', 'TypeScript', 'Vite', 'UI/UX'],
    href: 'https://github.com/pyatrick666/Professional-Portfolio',
  },
  {
    title: 'ePortfolio',
    kicker: 'COURSEWORK · WEB DEVELOPMENT',
    description:
      'A full-stack learning portfolio containing practical HTML, CSS, Bootstrap, JavaScript and responsive web-development work.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    href: 'https://github.com/pyatrick666/ePortfolio',
  },
];

const skills = [
  ['HTML5', 'Frontend'],
  ['CSS3', 'Frontend'],
  ['JavaScript', 'Frontend'],
  ['TypeScript', 'Frontend'],
  ['React', 'Frontend'],
  ['Flutter', 'App Development'],
  ['Dart', 'App Development'],
  ['Figma', 'UI/UX'],
  ['Canva', 'Graphic Design'],
  ['Git & GitHub', 'Tools'],
  ['SQL', 'Database'],
  ['Java', 'Programming'],
];

const coursework = [
  'Object-Oriented Programming',
  'Web Development',
  'Database Systems',
  'Software Engineering',
  'Computer Systems',
  'Enterprise Project',
];

function App() {
  const [light, setLight] = useState(() => localStorage.getItem('theme') === 'light');
  const [active, setActive] = useState('home');

  useEffect(() => {
    document.body.classList.toggle('light-mode', light);
    localStorage.setItem('theme', light ? 'light' : 'dark');
  }, [light]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    const onScroll = () => {
      const current = sections.reduce((best, section) => {
        const top = Math.abs(section.getBoundingClientRect().top - 120);
        return top < best.distance ? { id: section.id, distance: top } : best;
      }, { id: 'home', distance: Number.POSITIVE_INFINITY });
      setActive(current.id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const years = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="site">
      <div className="bg-orb orb-one" />
      <div className="bg-orb orb-two" />

      <nav className="navbar">
        <a className="brand" href="#home">PP<span>.</span></a>
        <div className="nav-links">
          {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
            <a className={active === item ? 'active' : ''} href={'#' + item} key={item}>
              {item}
            </a>
          ))}
        </div>
        <button className="theme-toggle" onClick={() => setLight(!light)} aria-label="Toggle theme">
          {light ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </nav>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <span className="eyebrow">PROFESSIONAL PORTFOLIO</span>
            <h1>Hi, I'm <span>Pratik Poudel</span>.</h1>
            <p className="hero-lead">
              A bachelor's running Information Technology student building clean,
              practical digital experiences across web, software and UI/UX.
            </p>
            <div className="hero-actions">
              <a className="primary-cta" href="#work">Explore My Work <ArrowUpRight size={17} /></a>
              <a className="secondary-cta" href="https://pyatrick666.github.io/ePortfolio/resume.pdf" target="_blank" rel="noreferrer">
                <Download size={16} /> Resume
              </a>
            </div>
            <div className="hero-meta">
              <a href="https://github.com/pyatrick666" target="_blank" rel="noreferrer"><Github size={16} /> github.com/pyatrick666</a>
              <span>·</span>
              <span>Butwal, Nepal</span>
            </div>
          </div>

          <div className="hero-portrait reveal">
            <div className="portrait-ring">
              <img src={profileImage} alt="Pratik Poudel" />
            </div>
            <div className="floating-card">
              <strong>Clean work.</strong>
              <span>Learning · Building · Improving</span>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-intro">
            <span className="eyebrow">ABOUT ME</span>
            <h2>Building my way into the industry.</h2>
            <p>
              I'm Pratik Poudel, an Information Technology student at ISMT College,
              affiliated with the University of Sunderland. I enjoy turning ideas
              into usable interfaces and practical software while continuously
              improving my development and design skills.
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
              <UserRound />
              <span className="card-label">CURRENT FOCUS</span>
              <h3>Full Stack Development</h3>
              <p>Frontend engineering, software projects, UI/UX design and practical systems work.</p>
            </article>
            <article className="info-card">
              <BriefcaseBusiness />
              <span className="card-label">LOOKING FOR</span>
              <h3>Internship Opportunities</h3>
              <p>Networking, full-stack development and general software-development opportunities.</p>
            </article>
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-intro">
            <span className="eyebrow">SELECTED WORK</span>
            <h2>Projects worth exploring.</h2>
            <p>A mix of independent builds, practical coursework and software projects.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className={'project-card ' + (index === 0 ? 'project-main' : '')} key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <span className="project-kicker">{project.kicker}</span>
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
            <span className="eyebrow">MY TOOLKIT</span>
            <h2>Technologies I'm building with.</h2>
            <p>Technical skills and creative tools I use across coursework and personal projects.</p>
          </div>

          <div className="skills-grid">
            {skills.map(([name, category]) => (
              <div className="skill-card" key={name}>
                <Code2 size={19} />
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
              {coursework.map((item, i) => <span key={item}><b>0{i + 1}</b>{item}</span>)}
            </div>
          </div>
        </section>

        <SupportSection />

        <section id="contact" className="section contact">
          <div className="section-intro">
            <span className="eyebrow">GET IN TOUCH</span>
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
        <div>© {years} Pratik Poudel · BSc (Hons) Information Technology · ISMT College</div>
        <div className="footer-links">
          <a href="https://github.com/pyatrick666" target="_blank" rel="noreferrer"><Github size={16} /></a>
          <a href="mailto:pyatrick666@gmail.com"><Mail size={16} /></a>
          <a href="https://www.linkedin.com/in/pratik-poudel-b3264a263/" target="_blank" rel="noreferrer"><Linkedin size={16} /></a>
          <a href="#home"><Trophy size={16} /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
