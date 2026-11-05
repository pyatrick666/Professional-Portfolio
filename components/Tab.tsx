'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { assetPath } from '@/lib/assets';
import styles from '@/styles/Tab.module.css';

interface TabProps {
  icon: string;
  filename: string;
  path: string;
}

const Tab = ({ icon, filename, path }: TabProps) => {
  const pathname = usePathname();
  const isCurrentPage = pathname === path;

  return (
    <Link href={path} aria-current={isCurrentPage ? 'page' : undefined}>
      <div className={styles.tab + (isCurrentPage ? ' ' + styles.active : '')}>
        <img src={assetPath(icon)} alt="" aria-hidden="true" width="18" height="18" />
        <p>{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;
