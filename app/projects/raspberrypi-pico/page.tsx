import type { Metadata } from 'next';
import Link from 'next/link';
import { VscArrowLeft, VscGithub, VscLinkExternal, VscCode, VscCircuitBoard, VscCheck } from 'react-icons/vsc';
import styles from '@/styles/ChessMateCaseStudy.module.css';

export const metadata: Metadata = {
  title: 'Raspberry Pi Pico Case Study',
  description: 'A MicroPython Raspberry Pi Pico project reading DHT22 temperature and humidity and displaying results on an I2C LCD.',
};

const technologies = ['Raspberry Pi Pico', 'RP2040', 'MicroPython', 'DHT22', 'I²C', '16×2 LCD', 'GPIO'];

export default function RaspberryPiPicoCaseStudy() {
  return (
    <main className={styles.page}>
      <article className={styles.container}>
        <Link href="/projects" className={styles.back}><VscArrowLeft size={16} /> All projects</Link>
        <p className={styles.eyebrow}>PROJECT CASE STUDY · EMBEDDED SYSTEMS</p>
        <h1 className={styles.title}>RaspberryPi-PICO</h1>
        <p className={styles.lede}>
          A MicroPython project using a Raspberry Pi Pico to read temperature and humidity from a
          DHT22 sensor and display the measurements on a 16×2 I²C LCD.
        </p>

        <div className={styles.actions}>
          <a href="https://github.com/pyatrick666/RaspberryPi-PICO" target="_blank" rel="noopener noreferrer" className={styles.primary}>
            <VscGithub size={17} /> Source code <VscLinkExternal size={13} />
          </a>
        </div>

        <section className={styles.panel}>
          <h2>At a glance</h2>
          <dl className={styles.facts}>
            <div><dt>Type</dt><dd>Microcontroller / sensor project</dd></div>
            <div><dt>Board</dt><dd>Raspberry Pi Pico · RP2040</dd></div>
            <div><dt>Language</dt><dd>MicroPython</dd></div>
            <div><dt>Sensor</dt><dd>DHT22 temperature and humidity</dd></div>
            <div><dt>Display</dt><dd>16×2 I²C LCD</dd></div>
            <div><dt>Repository</dt><dd><a href="https://github.com/pyatrick666/RaspberryPi-PICO" target="_blank" rel="noopener noreferrer">View source files</a></dd></div>
          </dl>
        </section>

        <section className={styles.section}>
          <h2><VscCode size={19} /> The challenge</h2>
          <p>
            This project connects a physical sensor to a microcontroller and makes its readings
            understandable without needing a computer display. It combines sensor communication,
            GPIO pin configuration, I²C display output, and a repeating measurement loop.
          </p>
        </section>

        <section className={styles.section}>
          <h2><VscCheck size={19} /> What the code does</h2>
          <div className={styles.featureGrid}>
            <div className={styles.feature}><h3>Reads the DHT22</h3><p>Uses a DHT22 driver to obtain temperature and relative-humidity readings.</p></div>
            <div className={styles.feature}><h3>Initializes the LCD</h3><p>Sets up I²C bus 0 with GPIO 0 for SDA and GPIO 1 for SCL, then detects the LCD address.</p></div>
            <div className={styles.feature}><h3>Connects the sensor</h3><p>Configures the DHT22 data line on GPIO 15 of the Raspberry Pi Pico.</p></div>
            <div className={styles.feature}><h3>Displays live values</h3><p>Refreshes the LCD with temperature and humidity values and also prints readings to the serial console.</p></div>
          </div>
        </section>

        <section className={styles.section}>
          <h2><VscCircuitBoard size={19} /> Hardware and data flow</h2>
          <p>
            The main program initializes the I²C LCD, reads the DHT22 sensor, writes the two
            measurements to separate LCD rows, prints the values, and repeats after a short delay.
          </p>
          <div className={styles.architecture} aria-label="Raspberry Pi Pico sensor data flow">
            <span>DHT22 · GPIO 15</span><b>→</b><span>Raspberry Pi Pico</span><b>→</b><span>16×2 LCD · I²C 0</span>
          </div>
          <div className={styles.tags}>{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        </section>

        <section className={styles.section}>
          <h2>Implementation note</h2>
          <p>
            The repository includes a DHT22 driver file that retains its upstream MIT copyright
            notice. The main program integrates that driver with the Pico pins and LCD output.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Measurement cycle</h2>
          <ol className={styles.learningList}>
            <li>Initialize the I²C bus and LCD, then configure the DHT22 data pin.</li>
            <li>Request a temperature and relative-humidity sample from the sensor driver.</li>
            <li>Format the readings for the two-row character display and print them to serial output.</li>
            <li>Wait briefly and repeat, keeping the display refreshed with the latest sample.</li>
          </ol>
        </section>
        <section className={styles.section}>
          <h2>Hardware integration notes</h2>
          <p>
            The program uses GPIO 15 for the DHT22 data signal and I²C bus 0 on GPIO 0 (SDA)
            and GPIO 1 (SCL) for the LCD. The LCD address is discovered during initialization,
            which avoids assuming a single address across compatible modules. The sensor driver
            is kept as a separate file rather than mixing its low-level protocol with display logic.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Scope and possible extensions</h2>
          <p>
            This is a compact local monitoring demonstration. It does not currently provide
            network telemetry or long-term data logging. Natural next steps include sensor-error
            handling, configurable sampling intervals, min/max tracking, and exporting readings.
          </p>
        </section>
        <section className={styles.section}>
          <h2>What this project demonstrates</h2>
          <ul className={styles.learningList}>
            <li>Using MicroPython to program a Raspberry Pi Pico.</li>
            <li>Reading a digital environmental sensor.</li>
            <li>Configuring GPIO and an I²C peripheral.</li>
            <li>Presenting hardware readings on a character LCD and serial output.</li>
          </ul>
        </section>

        <footer className={styles.footer}>
          <p>Inspect the MicroPython implementation.</p>
          <a href="https://github.com/pyatrick666/RaspberryPi-PICO" target="_blank" rel="noopener noreferrer">Explore RaspberryPi-PICO on GitHub <VscLinkExternal size={14} /></a>
          <Link href="/contact">Contact me about my work →</Link>
        </footer>
      </article>
    </main>
  );
}
