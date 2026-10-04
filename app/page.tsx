'use client';
import Link from 'next/link';
import { VscArrowRight, VscGithub, VscMail, VscCode } from 'react-icons/vsc';
import styles from '@/styles/HomePage.module.css';
export default function HomePage(){return <div className={styles.page}><div className={styles.container}><div className={styles.content}>
<div className={styles.header}><div className={styles.icon}><VscCode size={32}/></div></div>
<div className={styles.intro}><p className={styles.greeting}>Hello, I&apos;m</p><h1 className={styles.name}>Pratik Poudel</h1><p className={styles.role}>Software Engineering • Full-Stack Development • Networking • Mobile Development</p><div className={styles.divider}/>
<p className={styles.description}>I&apos;m a bachelor&apos;s student focused on software development, computer systems, web development and practical technology projects. I enjoy building clean, useful applications and continuously improving my skills.</p></div>
<div className={styles.actions}><Link href="/projects" className={styles.primaryAction}><span>View Projects</span><VscArrowRight size={18}/></Link><Link href="/about" className={styles.secondaryAction}><span>Learn More</span></Link><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.secondaryAction}><span>View Resume</span></a></div>
<div className={styles.links}><a href="https://github.com/pyatrick666" target="_blank" rel="noopener noreferrer" className={styles.link}><VscGithub size={16}/><span>GitHub</span></a><span className={styles.linkSeparator}>/</span><Link href="/contact" className={styles.link}><VscMail size={16}/><span>Contact</span></Link></div>
</div></div></div>}