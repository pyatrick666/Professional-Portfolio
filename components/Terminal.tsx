'use client';

import { useState, useRef, useEffect } from 'react';
import { VscTerminal, VscClose } from 'react-icons/vsc';

import { THEME_KEYS } from '@/lib/themes';
import styles from '@/styles/Terminal.module.css';

interface TerminalLine {
  type: 'input' | 'output' | 'error';
  content: string;
}

const commands: Record<string, () => string[]> = {
  help: () => [
    'Pratik Poudel (pyatrick666) — Interactive Terminal',
    '',
    'Available commands:',
    '  help      - Show all commands',
    '  about     - About me',
    '  skills    - My technical skills',
    '  projects  - My projects',
    '  experience - Education and career focus',
    '  education - Education details',
    '  contact   - Contact information',
    '  social    - Social profiles',
    '  github    - Open GitHub',
    '  linkedin  - Open LinkedIn',
    '  instagram - Open Instagram',
    '  facebook  - Open Facebook',
    '  youtube   - Open YouTube',
    '  repo      - Open this repository',
    '  themes    - List available themes',
    '  theme <name> - Change theme',
    '  status    - Portfolio status',
    '  tree      - Show portfolio structure',
    '  ls        - List directory contents',
    '  pwd       - Print working directory',
    '  echo <text> - Echo text',
    '  date      - Show current date',
    '  whoami    - Show my identity',
    '  clear     - Clear terminal',
  ],
  about: () => [
    'Pratik Poudel',
    'Information Technology Student',
    'Based in Nepal',
    '',
    'BSc (Hons) Information Technology student focused on',
    'software development, web development, and computer systems.',
    '',
    'Currently interested in internships in full-stack development,',
    'networking, and general software development.',
  ],
  skills: () => [
    'Technical Skills:',
    '  Programming: JavaScript, TypeScript, Java, Dart, SQL',
    '  Web:         HTML, CSS, React, Next.js',
    '  Mobile:      Flutter / Dart',
    '  Database:    SQL, Database Systems',
    '  Systems:     Computer Systems, Linux',
    '  Tools:       Git, GitHub, VS Code, Figma, Canva',
    '  Design:      UI/UX Design, Graphic Design',
  ],
  projects: () => [
    'Projects:',
    '  1. ChessMate',
    '     Flutter chess game — itch.io',
    '  2. Professional Portfolio',
    '     VS Code-inspired portfolio',
    '  3. ePortfolio',
    '     Earlier full-stack development portfolio',
    '',
    'Use "repo" to open the portfolio source on GitHub.',
  ],
  experience: () => [
    'Education & Career Focus:',
    '  2025–Present  BSc (Hons) Information Technology',
    '               Computer Systems Engineering',
    '               ISMT College, Nepal',
    '               Expected graduation: 2028',
    '',
    'Internship interests:',
    '  • Full-stack development',
    '  • Networking',
    '  • Software development',
  ],
  education: () => [
    'Education:',
    '  BSc (Hons) Information Technology — 2025–Present',
    '  Computer Systems Engineering',
    '  ISMT College, Nepal',
    '  Expected graduation: 2028',
    '',
    '  +2 Computer Science — 2021',
    '  New Horizon College, Drive-tole',
    '',
    'Relevant coursework:',
    '  Object-Oriented Programming',
    '  Web Development',
    '  Database Systems',
    '  Software Engineering',
    '  Computer Systems',
    '  Enterprise Project',
  ],
  contact: () => [
    'Contact Information:',
    '  Name:     Pratik Poudel',
    '  Username: pyatrick666',
    '  Email:    pyatrick666@gmail.com',
    '  GitHub:   github.com/pyatrick666',
    '  LinkedIn: linkedin.com/in/pratik-poudel-b3264a263',
  ],
  social: () => [
    'Social Profiles:',
    '  GitHub:    github.com/pyatrick666',
    '  LinkedIn:  linkedin.com/in/pratik-poudel-b3264a263',
    '  Instagram: instagram.com/em_ev0l',
    '  Facebook:  facebook.com/emev0l',
    '  YouTube:   youtube.com/@emevol666',
  ],
  themes: () => [
    'Available themes:',
    ...THEME_KEYS.map((theme, i) => `  ${theme}${i === 0 ? '  (default)' : ''}`),
    '',
    'Use "theme <name>" to change theme.',
  ],
  status: () => [
    'Portfolio status: active',
    'Owner: Pratik Poudel (pyatrick666)',
    'Focus: Information Technology / Software Development',
    'Repository: Professional-Portfolio',
  ],
  tree: () => [
    'portfolio/',
    '├── about/',
    '├── education/',
    '├── projects/',
    '├── skills/',
    '├── contact/',
    '└── README.md',
  ],
  date: () => [new Date().toString()],
  whoami: () => [
    'pyatrick666',
    'Pratik Poudel',
    'Information Technology Student',
  ],
  ls: () => ['about/', 'education/', 'projects/', 'skills/', 'contact/', 'README.md'],
  pwd: () => ['/home/pyatrick666/portfolio'],
};

const processCommand = (input: string): TerminalLine[] => {
  const trimmed = input.trim();
  const lines: TerminalLine[] = [{ type: 'input', content: `$ ${trimmed}` }];

  if (!trimmed) return lines;

  const parts = trimmed.split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);

  if (cmd === 'clear') return [];

  const externalLinks: Record<string, string> = {
    github: 'https://github.com/pyatrick666',
    linkedin: 'https://www.linkedin.com/in/pratik-poudel-b3264a263/',
    instagram: 'https://www.instagram.com/em_ev0l/',
    facebook: 'https://www.facebook.com/emev0l',
    youtube: 'https://www.youtube.com/@emevol666',
    repo: 'https://github.com/pyatrick666/Professional-Portfolio',
  };

  if (externalLinks[cmd]) {
    window.open(externalLinks[cmd], '_blank', 'noopener,noreferrer');
    lines.push({ type: 'output', content: `Opening ${cmd}...` });
    return lines;
  }

  if (cmd === 'theme') {
    if (!args[0]) {
      lines.push({ type: 'error', content: 'Usage: theme <name>. Type "themes" to list them.' });
      return lines;
    }
    if ((THEME_KEYS as string[]).includes(args[0])) {
      document.documentElement.setAttribute('data-theme', args[0]);
      localStorage.setItem('theme', args[0]);
      lines.push({ type: 'output', content: `Theme changed to ${args[0]}` });
    } else {
      lines.push({ type: 'error', content: `Unknown theme: ${args[0]}. Type "themes".` });
    }
    return lines;
  }

  if (cmd === 'echo') {
    lines.push({ type: 'output', content: args.join(' ') });
    return lines;
  }

  if (commands[cmd]) {
    commands[cmd]().forEach(line => lines.push({ type: 'output', content: line }));
  } else {
    lines.push({ type: 'error', content: `Command not found: ${cmd}. Type "help".` });
  }

  return lines;
};

interface TerminalProps {
  onToggle: () => void;
}

const Terminal = ({ onToggle }: TerminalProps) => {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'output', content: "Welcome to Pratik Poudel's interactive terminal!" },
    { type: 'output', content: 'Username: pyatrick666' },
    { type: 'output', content: 'Type "help" for available commands.' },
    { type: 'output', content: '' },
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (terminalRef.current) terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [lines]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === 'clear') {
      setLines([]);
    } else {
      setLines(prev => [...prev, ...processCommand(input)]);
    }

    setCommandHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!commandHistory.length) return;
      const nextIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
      setHistoryIndex(nextIndex);
      setInput(commandHistory[commandHistory.length - 1 - nextIndex] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex] || '');
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className={styles.terminal}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <VscTerminal className={styles.terminalIcon} />
          <span>Terminal</span>
        </div>
        <div className={styles.headerRight}>
          <button onClick={onToggle} className={styles.headerBtn} title="Close">
            <VscClose size={14} />
          </button>
        </div>
      </div>
      <div className={styles.body} ref={terminalRef} onClick={() => inputRef.current?.focus()}>
        {lines.map((line, index) => (
          <div
            key={index}
            className={`${styles.line} ${line.type === 'error' ? styles.error : line.type === 'input' ? styles.input : ''}`}
          >
            {line.content}
          </div>
        ))}
        <form onSubmit={handleSubmit} className={styles.inputLine}>
          <span className={styles.prompt}>$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className={styles.input}
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal command"
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
