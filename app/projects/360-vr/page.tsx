import type { Metadata } from 'next';
import Link from 'next/link';
import { VscArrowLeft, VscGlobe, VscLinkExternal, VscCode, VscCheck } from 'react-icons/vsc';
import styles from '@/styles/ChessMateCaseStudy.module.css';

export const metadata: Metadata = {
  title: '360-VR- Case Study',
  description: 'A single-page 360° warehouse cybersecurity awareness training prototype with interactive scenarios and audio feedback.',
};

const technologies = ['HTML', 'CSS', 'JavaScript', 'A-Frame', '360° panorama'];

export default function Warehouse360CaseStudy() {
  return (
    <main className={styles.page}>
      <article className={styles.container}>
        <Link href="/projects" className={styles.back}><VscArrowLeft size={16} /> All projects</Link>
        <p className={styles.eyebrow}>PROJECT CASE STUDY · CYBERSECURITY AWARENESS</p>
        <h1 className={styles.title}>360-VR-</h1>
        <p className={styles.lede}>
          An interactive warehouse training prototype that places learners in a 360° environment
          and teaches practical cyber-awareness through risk hotspots and short scenarios.
        </p>
        <div className={styles.actions}>
          <a href="https://pyatrick666/360-VR-" target="_blank" rel="noopener noreferrer" className={styles.secondary}>Source repository <VscLinkExternal size={13} /></a>
          <a href="https://pyatrick666.github.io/360-VR-/" target="_blank" rel="noopener noreferrer" className={styles.primary}><VscGlobe size={17} /> Launch experience <VscLinkExternal size={13} /></a>
        </div>
        <section className={styles.panel}>
          <h2>At a glance</h2>
          <dl className={styles.facts}>
            <div><dt>Format</dt><dd>Single-page web application</dd></div>
            <div><dt>Environment</dt><dd>Interactive 360° warehouse scene</dd></div>
            <div><dt>Learning flow</dt><dd>Explore, answer, review</dd></div>
            <div><dt>Audio</dt><dd>Six short audio cues</dd></div>
          </dl>
        </section>
        <section className={styles.section}>
          <h2><VscCode size={19} /> The challenge</h2>
          <p>Cyber-awareness training can feel abstract when it is delivered only as text. This prototype makes common workplace risks discoverable inside a simulated warehouse, then checks understanding with scenario-based questions.</p>
        </section>
        <section className={styles.section}>
          <h2><VscCheck size={19} /> Experience and features</h2>
          <div className={styles.featureGrid}>
            <div className={styles.feature}><h3>360° exploration</h3><p>A-Frame presents a warehouse panorama with six interactive cybersecurity risk hotspots.</p></div>
            <div className={styles.feature}><h3>Scenario quiz</h3><p>Multiple-choice questions provide immediate feedback and track progress.</p></div>
            <div className={styles.feature}><h3>Results review</h3><p>A final score and scenario-by-scenario review help learners identify gaps.</p></div>
            <div className={styles.feature}><h3>Audio feedback</h3><p>Sound controls and six short cues reinforce answers, progress, and results.</p></div>
          </div>
        </section>
        <section className={styles.section}>
          <h2>Implementation</h2>
          <p>The application is organized as a single HTML file containing markup, styles, scene setup, quiz logic, demo sign-in, sound controls, and results. A-Frame is loaded from its CDN and the warehouse panorama from Poly Haven, so the experience requires an internet connection.</p>
          <div className={styles.tags}>{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        </section>
        <section className={styles.section}>
          <h2>What this project demonstrates</h2>
          <ul className={styles.learningList}>
            <li>Building an interactive single-page learning experience.</li>
            <li>Integrating a 360° scene with clickable learning interactions.</li>
            <li>Designing a quiz flow with progress, feedback, and review.</li>
            <li>Coordinating UI state and audio feedback in a browser application.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
