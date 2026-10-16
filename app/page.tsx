'use client';
import Link from 'next/link';
import { VscArrowRight, VscGithub, VscMail, VscCode } from 'react-icons/vsc';
import styles from '@/styles/HomePage.module.css';
import { assetPath } from '@/lib/assets';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.icon}><VscCode size={32} /></div>
          </div>
          <div className={styles.intro}>
            <h1 className={styles.name}>Pratik Poudel</h1>
            <p className={styles.role}>Software Engineering • Full-Stack Development • Networking • Mobile Development</p>
            <div className={styles.divider} />
            <p className={styles.description}>
              I’m a BSc (Hons) Information Technology student focused on Computer Systems Engineering.
              I turn what I learn into practical projects—from Flutter mobile apps and full-stack
              experiments to networking and embedded systems—and I’m looking for opportunities to
              contribute, learn from a team, and ship useful software.
            </p>
          </div>
          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryAction}><span>Explore Projects</span><VscArrowRight size={18} /></Link>
            <Link href="/about" className={styles.secondaryAction}><span>About Me</span></Link>
            <a href={assetPath('/resume.pdf')} target="_blank" rel="noopener noreferrer" className={styles.secondaryAction}><span>View Resume</span></a>
          </div>
          <div className={styles.links}>
            <a href="https://github.com/pyatrick666" target="_blank" rel="noopener noreferrer" className={styles.link}><VscGithub size={16} /><span>GitHub</span></a>
            <span className={styles.linkSeparator}>/</span>
            <Link href="/contact" className={styles.link}><VscMail size={16} /><span>Contact</span></Link>
            <span className={styles.linkSeparator}>/</span>
            <a href="mailto:pyatrick666@gmail.com?subject=Portfolio%20Enquiry" className={styles.link}><VscMail size={16} /><span>Email Me</span></a>
          </div>
        </div>
      </div>
    </div>
  );
}