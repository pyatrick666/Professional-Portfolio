'use client';
import { VscGithub, VscMail } from 'react-icons/vsc';
import Link from 'next/link';
import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => (
  <div className={styles.page}>
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <h1 className={styles.name}>Pratik Poudel</h1>
            <p className={styles.role}>BSc (Hons) Information Technology — Computer Systems Engineering</p>
            <div className={styles.location}><span className={styles.dot} />Butwal, Nepal</div>
          </div>
        </div>
        <div className={styles.headerActions}>
          <a href="https://github.com/pyatrick666" target="_blank" rel="noopener noreferrer" className={styles.iconButton} aria-label="GitHub profile"><VscGithub size={20} /></a>
          <Link href="/contact" className={styles.iconButton} aria-label="Contact me"><VscMail size={20} /></Link>
        </div>
      </header>
      <div className={styles.content}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}><span className={styles.sectionNumber}>01</span><h2 className={styles.sectionTitle}>About</h2></div>
          <div className={styles.sectionBody}>
            <p className={styles.paragraph}>I’m Pratik Poudel, an undergraduate Information Technology student focused on Computer Systems Engineering. I enjoy turning what I learn into practical software and technology projects.</p>
            <p className={styles.paragraph}>I build and explore projects across mobile, desktop, web and embedded development, while strengthening my foundations in networking and computer systems. My technical interests also include AI and machine learning with Python. I’m interested in internship and entry-level opportunities where I can contribute to a team, learn from real projects and deliver useful work.</p>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionHeader}><span className={styles.sectionNumber}>02</span><h2 className={styles.sectionTitle}>Education</h2></div>
          <div className={styles.sectionBody}>
            <div className={styles.experienceCard}>
              <div className={styles.expMeta}><span className={styles.expPeriod}>2025 — Present</span></div>
              <h3 className={styles.expRole}>BSc (Hons) Information Technology — Computer Systems Engineering</h3>
              <p className={styles.expCompany}>ISMT College, Butwal, Nepal · University of Sunderland</p>
              <ul className={styles.expList}><li>Expected graduation: 2028</li></ul>
            </div>
            <div className={styles.experienceCard}>
              <div className={styles.expMeta}><span className={styles.expPeriod}>2021</span></div>
              <h3 className={styles.expRole}>+2 Computer Science</h3>
              <p className={styles.expCompany}>New Horizon College, Drivertole, Butwal</p>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionHeader}><span className={styles.sectionNumber}>03</span><h2 className={styles.sectionTitle}>Skills</h2></div>
          <div className={styles.sectionBody}>
            <div className={styles.skillsGrid}>
              <div className={styles.skillCategory}><h4 className={styles.skillTitle}>Languages</h4><div className={styles.skillTags}>{['JavaScript', 'TypeScript', 'Java', 'Dart', 'SQL', 'C#', 'Python', 'PHP', 'Ruby (Learning)'].map(x => <span className={styles.skillTag} key={x}>{x}</span>)}</div></div>
              <div className={styles.skillCategory}><h4 className={styles.skillTitle}>Development &amp; AI</h4><div className={styles.skillTags}>{['React', 'Next.js', 'Flutter', 'Web Development', 'Mobile App Development', 'AI & Machine Learning with Python'].map(x => <span className={styles.skillTag} key={x}>{x}</span>)}</div></div>
              <div className={styles.skillCategory}><h4 className={styles.skillTitle}>Networking &amp; Security</h4><div className={styles.skillTags}>{['Networking Fundamentals', 'Burp Suite'].map(x => <span className={styles.skillTag} key={x}>{x}</span>)}</div></div>
              <div className={styles.skillCategory}><h4 className={styles.skillTitle}>Design</h4><div className={styles.skillTags}>{['Figma', 'Canva', 'UI/UX Design'].map(x => <span className={styles.skillTag} key={x}>{x}</span>)}</div></div>
              <div className={styles.skillCategory}><h4 className={styles.skillTitle}>Tools</h4><div className={styles.skillTags}>{['Git', 'GitHub', 'Linux'].map(x => <span className={styles.skillTag} key={x}>{x}</span>)}</div></div>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionHeader}><span className={styles.sectionNumber}>04</span><h2 className={styles.sectionTitle}>Current Focus</h2></div>
          <div className={styles.sectionBody}>
            <p className={styles.paragraph}>I’m open to internship and entry-level opportunities in networking, full-stack development and general software development. I’m looking to contribute to real projects, collaborate with a team and keep improving through practical experience.</p>
          </div>
        </section>
      </div>
      <footer className={styles.footer}><Link href="/projects" className={styles.footerLink}>View my projects →</Link></footer>
    </div>
  </div>
);

export default AboutPage;
