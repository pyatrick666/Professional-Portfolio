import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { VscChevronRight } from 'react-icons/vsc';

import styles from '@/styles/Explorer.module.css';

const explorerItems = [
  { name: 'home.tsx', path: '/', icon: '/logos/react_icon.svg' },
  { name: 'about.html', path: '/about', icon: '/logos/html_icon.svg' },
  { name: 'contact.css', path: '/contact', icon: '/logos/css_icon.svg' },
  { name: 'projects.js', path: '/projects', icon: '/logos/js_icon.svg' },
  { name: 'github.md', path: '/github', icon: '/logos/markdown_icon.svg' },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <VscChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
          />
          Portfolio
        </label>

        {portfolioOpen && (
          <div className={styles.files} aria-label="Portfolio files">
            {explorerItems.map(item => (
              <Link href={item.path} key={item.name} title={item.name} aria-label={item.name}>
                <div className={styles.file}>
                  <Image src={item.icon} alt="" height={18} width={18} />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explorer;
