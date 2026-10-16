'use client';

import { useState, useRef, useEffect } from 'react';
import { VscTerminal, VscClose } from 'react-icons/vsc';

import styles from '@/styles/Terminal.module.css';

interface TerminalLine {
  type: 'input' | 'output' | 'error';
  content: string;
}

const commands: Record<string, () => string[]> = {
  help: () => [
    'Pratik Poudel — Interactive Terminal',
    '',
    'Available commands:',
    '  help      - Show all commands',
    '  about     - About me',
    '  skills    - My technical skills',
    '  projects  - My projects',
    '  experience - Education and career focus',
    '  education - Education details',
    '  contact   - Contact information',
    '  repo      - Show repository details',
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
    'Software Engineering • Full-Stack Development • Networking • Mobile Development',
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
    '  Programming: JavaScript, TypeScript, Java, Dart, SQL, C#, Python, PHP',
    '  Web:         HTML, CSS, React, Next.js',
    '  Mobile:      Flutter / Dart',
    '  Database:    SQL, Database Systems',
    '  Systems:     Computer Systems, Linux',
    '  Tools:       Git, GitHub, VS Code, Figma, Canva',
    '  Design:      UI/UX Design, Graphic Design',
  ],
  projects: () => [
    'Featured Work:',
    '  1. ChessMate',
    '     Flutter chess game — itch.io',
    '  2. RaspberryPi-PICO Projects',
    '     Raspberry Pi Pico embedded-system projects',
    '  3. CarRentalApp',
    '     Windows desktop car-rental application',
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
    '  Email:    See the Contact page',
  ],
  repo: () => [
    'Repository: pyatrick666/Professional-Portfolio',
    'Source: github.com/pyatrick666/Professional-Portfolio',
  ],
  status: () => [
    'Portfolio status: active',
    'Owner: Pratik Poudel',
    'Focus: Information Technology / Software Development',
    'Repository: Professional-Portfolio',
  ],
  tree: () => [
    'Professional-Portfolio/',
    '├── app/          Pages and routes',
    '├── components/   Reusable UI components',
    '├── data/         Project data',
    '├── lib/          Shared utilities and themes',
    '├── public/       Icons and static assets',
    '├── styles/       CSS modules and global styles',
    '├── types/        TypeScript types',
    '└── README.md',
  ],
  date: () => [new Date().toString()],
  whoami: () => [
    'Pratik Poudel',
    'Software Engineering • Full-Stack Development • Networking • Mobile Development',
  ],
  ls: () => ['app/', 'components/', 'data/', 'lib/', 'public/', 'styles/', 'types/', 'README.md'],
  pwd: () => ['/Professional-Portfolio'], 
};

const processCommand = (input: string): TerminalLine[] => {
  const trimmed = input.trim();
  const lines: TerminalLine[] = [{ type: 'input', content: `$ ${trimmed}` }];

  if (!trimmed) return lines;

  const parts = trimmed.split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);

  if (cmd === 'clear') return [];

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
