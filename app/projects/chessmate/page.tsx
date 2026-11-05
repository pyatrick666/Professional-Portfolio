import type { Metadata } from 'next';
import Link from 'next/link';
import { VscArrowLeft, VscGithub, VscLinkExternal, VscCode, VscGlobe, VscCheck, VscDownload } from 'react-icons/vsc';
import styles from '@/styles/ChessMateCaseStudy.module.css';

export const metadata: Metadata = {
  title: 'ChessMate Case Study',
  description: 'A Flutter Android chess game with Stockfish AI, local and online multiplayer, and real-time chat.',
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
          An Android chess game built with Flutter. Play against a Stockfish-powered opponent,
          share a device for local games, or create an online room with real-time moves and chat.
        </p>

        <figure className={styles.projectArtwork}>
          <img src="https://raw.githubusercontent.com/pyatrick666/ChessMate/main/ChessMate%20Cover.jpg" alt="ChessMate project cover artwork" loading="lazy" />
          <figcaption>ChessMate · project artwork</figcaption>
        </figure>

        <div className={styles.actions}>
          <a href="https://github.com/pyatrick666/ChessMate" target="_blank" rel="noopener noreferrer" className={styles.primary}>
            <VscGithub size={17} /> Source code <VscLinkExternal size={13} />
          </a>
          <a href="https://github.com/pyatrick666/ChessMate/releases/latest" target="_blank" rel="noopener noreferrer" className={styles.secondary}>
            <VscDownload size={17} /> Latest Android APK <VscLinkExternal size={13} />
          </a>
          <a href="https://pyatrick666.itch.io/chessmate" target="_blank" rel="noopener noreferrer" className={styles.secondary}>
            <VscGlobe size={17} /> itch.io page <VscLinkExternal size={13} />
          </a>
        </div>

        <section className={styles.panel}>
          <h2>At a glance</h2>
          <dl className={styles.facts}>
            <div><dt>Platform</dt><dd>Android</dd></div>
            <div><dt>Client</dt><dd>Flutter and Dart</dd></div>
            <div><dt>AI opponent</dt><dd>Stockfish engine</dd></div>
            <div><dt>Online backend</dt><dd>Node.js and WebSockets</dd></div>
            <div><dt>Latest release</dt><dd><a href="https://github.com/pyatrick666/ChessMate/releases/latest" target="_blank" rel="noopener noreferrer">v1.0.143 · Android APK</a></dd></div>
            <div><dt>Automated build</dt><dd><a href="https://github.com/pyatrick666/ChessMate/actions/workflows/build-apk.yml" target="_blank" rel="noopener noreferrer">GitHub Actions workflow</a></dd></div>
          </dl>
        </section>

        <section className={styles.section}>
          <h2><VscCode size={19} /> The problem</h2>
          <p>
            A mobile chess game has to manage legal moves, game outcomes, clocks, and player
            interactions while keeping the experience understandable on a small screen. Online play
            adds another challenge: both players need a consistent game state even when connections
            are interrupted.
          </p>
        </section>

        <section className={styles.section}>
          <h2><VscCheck size={19} /> Features implemented</h2>
          <div className={styles.featureGrid}>
            <div className={styles.feature}><h3>Play against AI</h3><p>Easy, Medium, and Hard difficulty options with Stockfish engine integration.</p></div>
            <div className={styles.feature}><h3>Local 2-player</h3><p>Two people can play on the same Android device.</p></div>
            <div className={styles.feature}><h3>Online multiplayer</h3><p>Create or join room-code games with server-authoritative move validation, real-time synchronisation, and reconnection support.</p></div>
            <div className={styles.feature}><h3>Live match chat</h3><p>Room-scoped messages, quick replies, timestamps, unread counts, message validation, and rate limiting.</p></div>
            <div className={styles.feature}><h3>Chess rules and match flow</h3><p>Legal move handling, checkmate and draw detection, clocks, resignation, draw offers, and rematches.</p></div>
            <div className={styles.feature}><h3>Android release workflow</h3><p>GitHub Actions runs project checks and builds a downloadable ARM64 Android APK release.</p></div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Technical architecture</h2>
          <p>
            The Flutter app manages the interface and local game experience. Stockfish provides
            computer-opponent play. For online matches, the app communicates with a Node.js server
            over WebSockets; the server uses chess.js to validate moves and maintain each room's
            authoritative game state. Online room and chat state is held in memory by the server.
          </p>
          <div className={styles.architecture} aria-label="ChessMate architecture">
            <span>Flutter Android app</span><b>↔</b><span>WebSocket</span><b>↔</b><span>Node.js · chess.js</span>
          </div>
          <div className={styles.tags}>{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        </section>

        <section className={styles.section}>
          <h2>Testing and delivery</h2>
          <p>
            The repository includes Flutter tests and an automated APK build-and-release workflow.
            The latest published release is v1.0.143, with an ARM64 Android APK attached.
          </p>
          <div className={styles.actions}>
            <a className={styles.secondary} href="https://github.com/pyatrick666/ChessMate/actions/workflows/build-apk.yml" target="_blank" rel="noopener noreferrer">View build workflow <VscLinkExternal size={13} /></a>
            <a className={styles.secondary} href="https://github.com/pyatrick666/ChessMate/releases" target="_blank" rel="noopener noreferrer">Browse releases <VscLinkExternal size={13} /></a>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Player journey and state management</h2>
          <p>
            The game supports three entry paths: choose a Stockfish difficulty for a solo match,
            start a local match for two players on one device, or create/join an online room. During
            play, the interface coordinates board position, turn, legal actions, clocks, and end-of-game
            status. Online play adds room membership, server-confirmed moves, reconnect handling, and
            chat state without treating the client as the authority for chess rules.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Engineering decisions</h2>
          <div className={styles.featureGrid}>
            <div className={styles.feature}><h3>Separate game modes</h3><p>Local play and online play have different synchronization needs, while sharing the chess-focused interface.</p></div>
            <div className={styles.feature}><h3>Server-side validation</h3><p>The online server validates moves with chess.js so clients cannot independently decide the authoritative board state.</p></div>
            <div className={styles.feature}><h3>Room-scoped communication</h3><p>WebSocket rooms isolate match updates and chat to the relevant players.</p></div>
            <div className={styles.feature}><h3>Release automation</h3><p>GitHub Actions checks the project and packages an Android APK for distribution.</p></div>
          </div>
        </section>
        <section className={styles.section}>
          <h2>Scope and limitations</h2>
          <p>
            Online room and chat state is held in server memory, so it is designed as a lightweight
            multiplayer service rather than a persistent tournament platform. A production expansion
            could add durable match history, accounts, and broader device testing.
          </p>
        </section>
        <section className={styles.section}>
          <h2>What this project demonstrates</h2>
          <ul className={styles.learningList}>
            <li>Building an Android application with Flutter and Dart.</li>
            <li>Integrating a native chess engine and managing rule-driven game states.</li>
            <li>Designing a real-time client/server feature using WebSockets.</li>
            <li>Implementing room-scoped messaging and server-side input validation.</li>
            <li>Automating Android builds and release publishing with GitHub Actions.</li>
          </ul>
        </section>

        <footer className={styles.footer}>
          <p>Explore the code or try the Android release.</p>
          <a href="https://github.com/pyatrick666/ChessMate" target="_blank" rel="noopener noreferrer">Explore ChessMate on GitHub <VscLinkExternal size={14} /></a>
          <a href="https://github.com/pyatrick666/ChessMate/releases/latest" target="_blank" rel="noopener noreferrer">Get the latest APK <VscDownload size={14} /></a>
          <Link href="/contact">Contact me about my work →</Link>
        </footer>
      </article>
    </main>
  );
}
