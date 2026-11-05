import type { Metadata } from 'next';
import Link from 'next/link';
import { VscArrowLeft, VscLinkExternal, VscCode, VscCheck } from 'react-icons/vsc';
import styles from '@/styles/ChessMateCaseStudy.module.css';

export const metadata: Metadata = {
  title: 'Hotel Information & Table Booking Case Study',
  description: 'A hotel information and table booking web project built with TanStack Start, TypeScript, React, and Tailwind CSS.',
};

const technologies = ['TanStack Start', 'TypeScript', 'React', 'Tailwind CSS'];

export default function HotelBookingCaseStudy() {
  return (
    <main className={styles.page}>
      <article className={styles.container}>
        <Link href="/projects" className={styles.back}><VscArrowLeft size={16} /> All projects</Link>
        <p className={styles.eyebrow}>PROJECT CASE STUDY · WEB DEVELOPMENT</p>
        <h1 className={styles.title}>Hotel Information &amp; Table Booking System</h1>
        <p className={styles.lede}>
          A hotel-focused web project designed to bring property information and table-booking
          functionality together in one responsive guest-facing experience.
        </p>
        <div className={styles.actions}>
          <span className={styles.secondary}>Private source repository · available on request</span>
        </div>
        <section className={styles.panel}>
          <h2>At a glance</h2>
          <dl className={styles.facts}>
            <div><dt>Application</dt><dd>Hotel information and table booking</dd></div>
            <div><dt>Framework</dt><dd>TanStack Start</dd></div>
            <div><dt>Language</dt><dd>TypeScript</dd></div>
            <div><dt>UI</dt><dd>React and Tailwind CSS</dd></div>
          </dl>
        </section>
        <section className={styles.section}>
          <h2><VscCode size={19} /> Project objective</h2>
          <p>Provide visitors with a clear place to explore hotel information and access a table-booking flow, while keeping the interface responsive and the codebase organized around a modern React stack.</p>
        </section>
        <section className={styles.section}>
          <h2><VscCheck size={19} /> Project focus</h2>
          <div className={styles.featureGrid}>
            <div className={styles.feature}><h3>Hotel information</h3><p>A guest-facing presentation layer for hotel details and relevant visitor information.</p></div>
            <div className={styles.feature}><h3>Table booking</h3><p>A booking-oriented interface intended to make table reservations accessible from the hotel website.</p></div>
            <div className={styles.feature}><h3>Responsive UI</h3><p>React components styled with Tailwind CSS for a consistent interface across screen sizes.</p></div>
            <div className={styles.feature}><h3>Modern routing</h3><p>Built with TanStack Start and TypeScript.</p></div>
          </div>
        </section>
        <section className={styles.section}>
          <h2>Technology stack</h2>
          <p>The repository uses TanStack Start with React and TypeScript, with Tailwind CSS for styling. The source is private, so implementation details and a live demo are not linked publicly here.</p>
          <div className={styles.tags}>{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        </section>
        <section className={styles.section}>
          <h2>What this project demonstrates</h2>
          <ul className={styles.learningList}>
            <li>Structuring a modern TypeScript and React web application.</li>
            <li>Designing a hospitality-oriented information experience.</li>
            <li>Connecting a public-facing website to a table-booking workflow.</li>
            <li>Using utility-first styling to build responsive layouts.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
