'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  VscAccount,
  VscSettings,
  VscMail,
  VscGithubAlt,
  VscCode,
  VscFiles,
} from 'react-icons/vsc';

import styles from '@/styles/Sidebar.module.css';

const sidebarTopItems = [
  { Icon: VscFiles, path: '/', label: 'Home' },
  { Icon: VscGithubAlt, path: '/github', label: 'GitHub' },
  { Icon: VscCode, path: '/projects', label: 'Projects' },
  { Icon: VscMail, path: '/contact', label: 'Contact' },
];

const sidebarBottomItems = [
  { Icon: VscAccount, path: '/about', label: 'About' },
  { Icon: VscSettings, path: '/settings', label: 'Settings' },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar} aria-label="Activity bar">
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path, label }) => {
          const isCurrentPage = pathname === path;

          return (
            <Link href={path} key={path} aria-label={label} aria-current={isCurrentPage ? 'page' : undefined}>
              <div className={`${styles.iconContainer} ${isCurrentPage ? styles.active : ''}`}>
                <Icon
                  size={16}
                  fill={isCurrentPage ? 'rgb(225, 228, 232)' : 'rgb(106, 115, 125)'}
                  className={styles.icon}
                  aria-hidden="true"
                />
              </div>
            </Link>
          );
        })}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path, label }) => {
          const isCurrentPage = pathname === path;

          return (
            <div className={styles.iconContainer} key={path}>
              <Link href={path} aria-label={label} aria-current={isCurrentPage ? 'page' : undefined}>
                <Icon
                  fill={isCurrentPage ? 'rgb(225, 228, 232)' : 'rgb(106, 115, 125)'}
                  className={styles.icon}
                  aria-hidden="true"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
