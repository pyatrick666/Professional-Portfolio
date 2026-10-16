import type { Metadata } from 'next';
import Link from 'next/link';
import { VscArrowLeft, VscGithub, VscLinkExternal, VscCode, VscCircuitBoard, VscCheck } from 'react-icons/vsc';
import styles from '@/styles/ChessMateCaseStudy.module.css';

export const metadata: Metadata = {
  title: 'RaspberryPi-PICO Case Study',
  description: 'A Raspberry Pi Pico RP2040 project exploring temperature and humidity measurement with Python.',
};

const technologies = ['Raspberry Pi Pico', 'RP2040', 'Python', 'GPIO', 'Embedded systems', 'Sensor data'];

export default function RaspberryPiPicoCaseStudy() {
  return (
    <main className={styles.page}>
      <article className={styles.container}>
        <Link href="/projects" className={styles.back}><VscArrowLeft size={16} /> All projects</Link>
        <p className={styles.eyebrow}>PROJECT CASE STUDY · EMBEDDED SYSTEMS</p>
        <h1 className={styles.title}>RaspberryPi-PICO</h1>
        <p className={styles.lede}>
          A hands-on Raspberry Pi Pico (RP2040) project focused on temperature and humidity
          measurement, exploring how a small microcontroller can interact with sensor data and
          translate readings into useful information.
        </p>

        <div className={styles.actions}>
          <a href="https://github.com/pyatrick666/RaspberryPi-PICO" target="_blank" rel="noopener noreferrer" className={styles.primary}>
            <VscGithub size={17} /> Source code <VscLinkExternal size={13} />
          </a>
        </div>

        <section className={styles.panel}>
          <h2>At a glance</h2>
          <dl className={styles.facts}>
            <div><dt>Type</dt><dd>Microcontroller project</dd></div>
            <div><dt>Hardware</dt><dd>Raspberry Pi Pico · RP2040</dd></div>
            <div><dt>Language</dt><dd>Python</dd></div>
            <div><dt>Focus</dt><dd>Temperature and humidity</dd></div>
          </dl>
        </section>

        <section className={styles.section}>
          <h2><VscCode size={19} /> The challenge</h2>
          <p>
            Embedded projects connect software to the physical world. This project explores the
            practical steps involved in working with a microcontroller, obtaining environmental
            readings, and presenting sensor information in a form that is useful to a person.
          </p>
        </section>

        <section className={styles.section}>
          <h2><VscCheck size={19} /> Project focus</h2>
          <div className={styles.featureGrid}>
            <div className={styles.feature}><h3>Microcontroller programming</h3><p>Using Python in a project built for the Raspberry Pi Pico RP2040 platform.</p></div>
            <div className={styles.feature}><h3>Environmental readings</h3><p>Focusing on temperature and humidity as the core measurements of the project.</p></div>
            <div className={styles.feature}><h3>Hardware interaction</h3><p>Exploring the relationship between microcontroller code, connected components, and GPIO-based operations where applicable.</p></div>
            <div className={styles.feature}><h3>Practical output</h3><p>Turning sensor measurements into information that can be interpreted by the user.</p></div>
          </div>
        </section>

        <section className={styles.section}>
          <h2><VscCircuitBoard size={19} /> Technical approach</h2>
          <p>
            The Raspberry Pi Pico provides the microcontroller platform, while Python is used for
            the program logic. The project’s focus on temperature and humidity creates a practical
            starting point for exploring sensor interfaces, reading values, and handling data from
            embedded hardware.
          </p>
          <div className={styles.architecture} aria-label="Raspberry Pi Pico project flow">
            <span>Sensor readings</span><b>→</b><span>Raspberry Pi Pico · RP2040</span><b>→</b><span>Python output</span>
          </div>
          <div className={styles.tags}>{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        </section>

        <section className={styles.section}>
          <h2>What this project demonstrates</h2>
          <ul className={styles.learningList}>
            <li>Applying Python in a microcontroller project.</li>
            <li>Exploring how embedded software works with hardware and sensor data.</li>
            <li>Thinking about measurement, output, and practical use cases.</li>
            <li>Building experience beyond conventional web and mobile applications.</li>
          </ul>
        </section>

        <footer className={styles.footer}>
          <p>Want to inspect the implementation?</p>
          <a href="https://github.com/pyatrick666/RaspberryPi-PICO" target="_blank" rel="noopener noreferrer">Explore RaspberryPi-PICO on GitHub <VscLinkExternal size={14} /></a>
          <Link href="/contact">Contact me about my work →</Link>
        </footer>
      </article>
    </main>
  );
}
