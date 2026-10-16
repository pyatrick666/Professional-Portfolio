import type { Metadata } from 'next';
import Link from 'next/link';
import { VscArrowLeft, VscGithub, VscLinkExternal, VscCode, VscGlobe, VscCheck } from 'react-icons/vsc';
import styles from '@/styles/ChessMateCaseStudy.module.css';

export const metadata: Metadata = {
  title: 'ChessMate Case Study',
  description: 'A Flutter chess application with Stockfish AI, local multiplayer, and real-time online games.',
};

const technologies = ['Flutter', 'Dart', 'Provider', 'Stockfish', 'WebSocket', 'Node.js', 'chess.js'];

export default function ChessMateCaseStudy() {
  return (
    <main className={styles.page}>
      <article className={styles.container}>
        <Link href="/projects" className={styles.back}><VscArrowLeft size={16} /> All projects</Link>
        <p className={styles.eyebrow}>PROJECT CASE STUDY · MOBILE DEVELOPMENT</p>
        <h1 className={styles.title}>ChessMate</h1>
        <p className={styles.lede}>
          A Flutter chess application built around three ways to play: against a Stockfish-powered AI,
          with another person on the same device, or online through real-time multiplayer rooms.
        </p>

        <div className={styles.actions}>
          <a href="https://github.com/pyatrick666/ChessMate" target="_blank" rel="noopener noreferrer" className={styles.primary}>
            <VscGithub size={17} /> Source code <VscLinkExternal size={13} />
          </a>
          <a href="https://pyatrick666.itch.io/chessmate" target="_blank" rel="noopener noreferrer" className={styles.secondary}>
            <VscGlobe size={17} /> Play / download <VscLinkExternal size={13} />
          </a>
        </div>

        <section className={styles.panel}>
          <h2>At a glance</h2>
          <dl className={styles.facts}>
            <div><dt>Type</dt><dd>Mobile chess application</dd></div>
            <div><dt>Client</dt><dd>Flutter and Dart</dd></div>
            <div><dt>AI opponent</dt><dd>Stockfish chess engine</dd></div>
            <div><dt>Online play</dt><dd>Node.js server and WebSockets</dd></div>
          </dl>
        </section>

        <section className={styles.section}>
          <h2><VscCode size={19} /> The challenge</h2>
          <p>
            Chess has strict rules and several game states to handle correctly. ChessMate brings those
            rules into a mobile interface while supporting different play modes, clear game feedback,
            and an online experience that has to keep both players in sync.
          </p>
        </section>

        <section className={styles.section}>
          <h2><VscCheck size={19} /> What I built</h2>
          <div className={styles.featureGrid}>
            <div className={styles.feature}><h3>Play against AI</h3><p>Difficulty options with a Stockfish-powered opponent, legal-move validation, checkmate and draw detection, and game timers.</p></div>
            <div className={styles.feature}><h3>Local multiplayer</h3><p>A two-player mode that lets people play on the same device.</p></div>
            <div className={styles.feature}><h3>Online multiplayer</h3><p>Create or join rooms with room codes, real-time move synchronization, reconnection handling, draw offers, resignations, and rematches.</p></div>
            <div className={styles.feature}><h3>Mobile interface</h3><p>A responsive Flutter UI with dark and light themes, board orientation support, legal-move indicators, and game-status feedback.</p></div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Technical approach</h2>
          <p>
            The Flutter client handles the player-facing game experience and uses Provider for state
            management. AI play uses Stockfish. Online games communicate with a Node.js multiplayer
            server over WebSockets, with server-side chess validation handled by chess.js.
          </p>
          <div className={styles.architecture} aria-label="ChessMate architecture">
            <span>Flutter client</span><b>↔</b><span>WebSocket connection</span><b>↔</b><span>Node.js server · chess.js</span>
          </div>
          <div className={styles.tags}>{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        </section>

        <section className={styles.section}>
          <h2>What this project demonstrates</h2>
          <ul className={styles.learningList}>
            <li>Building a cross-platform mobile interface with Flutter and Dart.</li>
            <li>Integrating a chess engine and handling rule-driven game states.</li>
            <li>Connecting a mobile client to a real-time multiplayer backend.</li>
            <li>Designing for connection states, responsive layouts, and different game modes.</li>
          </ul>
        </section>

        <footer className={styles.footer}>
          <p>Want to explore the implementation?</p>
          <a href="https://github.com/pyatrick666/ChessMate" target="_blank" rel="noopener noreferrer">Explore ChessMate on GitHub <VscLinkExternal size={14} /></a>
          <Link href="/contact">Contact me about my work →</Link>
        </footer>
      </article>
    </main>
  );
}
