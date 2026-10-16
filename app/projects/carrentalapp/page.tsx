import type { Metadata } from 'next';
import Link from 'next/link';
import { VscArrowLeft, VscGithub, VscLinkExternal, VscCode, VscDatabase, VscCheck } from 'react-icons/vsc';
import styles from '@/styles/ChessMateCaseStudy.module.css';

export const metadata: Metadata = {
  title: 'CarRentalApp Case Study',
  description: 'A C# Windows desktop car rental application using a MySQL database.',
};

const technologies = ['C#', 'Windows desktop development', 'MySQL', 'Database integration'];

export default function CarRentalAppCaseStudy() {
  return (
    <main className={styles.page}>
      <article className={styles.container}>
        <Link href="/projects" className={styles.back}><VscArrowLeft size={16} /> All projects</Link>
        <p className={styles.eyebrow}>PROJECT CASE STUDY · DESKTOP DEVELOPMENT</p>
        <h1 className={styles.title}>CarRentalApp</h1>
        <p className={styles.lede}>
          A C# Windows desktop application designed to organize a car-rental workflow through a
          sequence of dedicated screens and a built-in MySQL database.
        </p>

        <div className={styles.actions}>
          <a href="https://github.com/pyatrick666/CarRentalApp" target="_blank" rel="noopener noreferrer" className={styles.primary}>
            <VscGithub size={17} /> Source code <VscLinkExternal size={13} />
          </a>
        </div>

        <section className={styles.panel}>
          <h2>At a glance</h2>
          <dl className={styles.facts}>
            <div><dt>Type</dt><dd>Windows desktop application</dd></div>
            <div><dt>Language</dt><dd>C#</dd></div>
            <div><dt>Data storage</dt><dd>MySQL database</dd></div>
            <div><dt>Workflow</dt><dd>Login, dashboard, and booking screens</dd></div>
          </dl>
        </section>

        <section className={styles.section}>
          <h2><VscCode size={19} /> The challenge</h2>
          <p>
            A rental workflow involves moving between application screens while keeping information
            about vehicles, customers, and bookings organized. This project explores how a desktop
            application can structure that journey and connect its interface to persistent data.
          </p>
        </section>

        <section className={styles.section}>
          <h2><VscCheck size={19} /> Application workflow</h2>
          <div className={styles.featureGrid}>
            <div className={styles.feature}><h3>Startup and welcome</h3><p>Entry screens that introduce the application and lead users into the main workflow.</p></div>
            <div className={styles.feature}><h3>Login</h3><p>A dedicated login screen as part of the application’s access flow.</p></div>
            <div className={styles.feature}><h3>Dashboard</h3><p>A central screen for navigating the main desktop application experience.</p></div>
            <div className={styles.feature}><h3>Booking</h3><p>A dedicated booking window to support the car-rental process.</p></div>
          </div>
        </section>

        <section className={styles.section}>
          <h2><VscDatabase size={19} /> Technical approach</h2>
          <p>
            The project uses C# for the Windows application and MySQL for its database. Separating
            the user-facing workflow into dedicated windows helps organize the interface, while
            database integration provides a foundation for working with application records.
          </p>
          <div className={styles.architecture} aria-label="CarRentalApp architecture">
            <span>Windows UI · C#</span><b>↔</b><span>Database integration</span><b>↔</b><span>MySQL</span>
          </div>
          <div className={styles.tags}>{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        </section>

        <section className={styles.section}>
          <h2>What this project demonstrates</h2>
          <ul className={styles.learningList}>
            <li>Developing a Windows desktop application in C#.</li>
            <li>Organizing an application around multiple connected screens.</li>
            <li>Working with a MySQL database in an application project.</li>
            <li>Thinking through how a real-world booking workflow maps to software.</li>
          </ul>
        </section>

        <footer className={styles.footer}>
          <p>Want to inspect the implementation?</p>
          <a href="https://github.com/pyatrick666/CarRentalApp" target="_blank" rel="noopener noreferrer">Explore CarRentalApp on GitHub <VscLinkExternal size={14} /></a>
          <Link href="/contact">Contact me about my work →</Link>
        </footer>
      </article>
    </main>
  );
}
