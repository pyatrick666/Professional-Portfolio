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

  return (
    <Link href={path}>
      <div className={styles.tab + (pathname === path ? ' ' + styles.active : '')}>
        <img src={assetPath(icon)} alt={filename} width="18" height="18" />
        <p>{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;
