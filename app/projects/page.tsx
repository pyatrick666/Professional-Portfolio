import { Metadata } from 'next';
import Link from 'next/link';
import { VscFolderOpened, VscGithub, VscLinkExternal, VscArrowRight } from 'react-icons/vsc';

import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

import styles from '@/styles/ProjectsPage.module.css';

export const metadata: Metadata = {
  title: 'Projects',
};

const ProjectsPage = () => {
  const totalProjects = projects.length;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.iconWrapper}><VscFolderOpened className={styles.icon} size={24} /></div>
            <div className={styles.meta}><span className={styles.count}>{totalProjects} Projects</span></div>
          </div>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>Featured Work</h1>
            <p className={styles.subtitle}>
              Projects that show how I apply what I learn—from mobile development to embedded systems
              and desktop software. Open a project to explore it, or read the detailed case study.
            </p>
          </div>
        </header>

        <Link href="/projects/chessmate" className={styles.caseStudyLink}>
          <span><strong>Featured case study: ChessMate</strong><small>Explore the problem, architecture, features, and technologies behind my Flutter chess app.</small></span>
          <VscArrowRight size={18} />
        </Link>

        <div className={styles.timeline}>
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index + 1} />
          ))}
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerLine} />
          <a href="https://github.com/pyatrick666?tab=repositories" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
            <VscGithub size={18} /><span>Explore more on GitHub</span><VscLinkExternal size={14} />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default ProjectsPage;