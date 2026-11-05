'use client';
import Link from 'next/link';
import { VscArrowRight, VscGithub, VscMail, VscCode, VscCircleFilled } from 'react-icons/vsc';
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
              I build practical software—from Flutter mobile apps and desktop tools to web projects
              and embedded systems—and I’m ready to contribute, learn from a team, and ship useful work.
            </p>
          </div>
          <div className={styles.availability}>
            <VscCircleFilled size={10} />
            <span>Open to internships and entry-level opportunities</span>
          </div>
          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryAction}><span>Explore Projects</span><VscArrowRight size={18} /></Link>
            <Link href="/contact" className={styles.secondaryAction}><span>Contact Me</span></Link>
            <a href={assetPath('/resume.pdf')} target="_blank" rel="noopener noreferrer" className={styles.secondaryAction}><span>View Resume</span></a>
          </div>
          <div className={styles.links}>
            <a href="https://github.com/pyatrick666" target="_blank" rel="noopener noreferrer" className={styles.link}><VscGithub size={16} /><span>GitHub</span></a>
            <span className={styles.linkSeparator}>/</span>
            <a href="https://www.linkedin.com/in/pratik-poudel-b3264a263/" target="_blank" rel="noopener noreferrer" className={styles.link}><span>LinkedIn</span></a>
            <span className={styles.linkSeparator}>/</span>
            <a href="mailto:pyatrick666@gmail.com?subject=Portfolio%20Enquiry" className={styles.link}><VscMail size={16} /><span>Email Me</span></a>
          </div>
        </div>
      </div>
    </div>
  );
}
