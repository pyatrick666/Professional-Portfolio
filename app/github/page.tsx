'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import { VscRepo, VscPerson, VscStarEmpty, VscRepoForked, VscLinkExternal, VscGithub } from 'react-icons/vsc';

import RepoCard from '@/components/RepoCard';
import { Repo, User } from '@/types';

import styles from '@/styles/GithubPage.module.css';

const GITHUB_USERNAME = 'pyatrick666';
const REFRESH_INTERVAL = 10 * 60 * 1000;

export default function GithubPage() {
  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refreshGithubData = useCallback(async (isInitial = false) => {
    if (isInitial) setLoading(true);

    try {
      const [userRes, repoRes] = await Promise.all([
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
          cache: 'no-store',
          headers: { Accept: 'application/vnd.github+json' },
        }),
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=100`, {
          cache: 'no-store',
          headers: { Accept: 'application/vnd.github+json' },
        }),
      ]);

      if (!userRes.ok || !repoRes.ok) {
        throw new Error('GitHub is temporarily unavailable. Showing the latest data we could load.');
      }

      const nextUser: User = await userRes.json();
      const allRepos: Repo[] = await repoRes.json();

      // Keep the existing Popular Repositories exclusions.
      const excludedRepos = new Set([
        'Professional-Portfolio',
        'ePortfolio',
        'RaspberryPi-PICO',
        'CarRentalApp',
      ]);

      const nextRepos = allRepos
        .filter((repo) => !excludedRepos.has(repo.name))
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6);

      setUser(nextUser);
      setRepos(nextRepos);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to refresh GitHub data right now.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    document.title = 'GitHub | Pratik Poudel';
    void refreshGithubData(true);

    const interval = window.setInterval(() => {
      void refreshGithubData();
    }, REFRESH_INTERVAL);

    const refreshWhenVisible = () => {
      if (document.visibilityState === 'visible') {
        void refreshGithubData();
      }
    };

    document.addEventListener('visibilitychange', refreshWhenVisible);

    return () => {
      window.clearInterval(interval);
      document.removeEventListener('visibilitychange', refreshWhenVisible);
    };
  }, [refreshGithubData]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.profile}>
            {user ? (
              <Image
                src={user.avatar_url}
                className={styles.avatar}
                alt={user.login}
                width={80}
                height={80}
                priority
                unoptimized
              />
            ) : (
              <div className={styles.avatar} aria-label="Loading GitHub avatar" />
            )}
            <div className={styles.profileInfo}>
              <h1 className={styles.name}>{user?.login ?? GITHUB_USERNAME}</h1>
              <span className={styles.handle}>@{user?.login ?? GITHUB_USERNAME}</span>
            </div>
          </div>

          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.profileLink}
          >
            <VscGithub size={18} />
            <span>View Profile</span>
            <VscLinkExternal size={14} />
          </a>
        </header>

        {error && (
          <p role="status" aria-live="polite">
            {error}
          </p>
        )}

        {/* Stats */}
        <div className={styles.statsGrid} aria-busy={loading}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}><VscRepo size={20} /></div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>{user?.public_repos ?? '—'}</span>
              <span className={styles.statLabel}>Repositories</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}><VscPerson size={20} /></div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>{user?.followers ?? '—'}</span>
              <span className={styles.statLabel}>Followers</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}><VscStarEmpty size={20} /></div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>
                {user ? repos.reduce((acc, repo) => acc + repo.stargazers_count, 0) : '—'}
              </span>
              <span className={styles.statLabel}>Total Stars</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}><VscRepoForked size={20} /></div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>
                {user ? repos.reduce((acc, repo) => acc + repo.forks, 0) : '—'}
              </span>
              <span className={styles.statLabel}>Total Forks</span>
            </div>
          </div>
        </div>

        {/* Contribution Graph */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contribution Activity</h2>
          <div className={styles.contributions}>
            <GitHubCalendar
              username={GITHUB_USERNAME}
              hideColorLegend
              hideMonthLabels
              colorScheme="dark"
              theme={{
                dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                light: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
              style={{ width: '100%' }}
            />
          </div>
        </section>

        {/* Repositories */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Popular Repositories</h2>
            <a
              href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.viewAll}
            >
              View All
              <VscLinkExternal size={14} />
            </a>
          </div>

          <div className={styles.reposGrid} aria-busy={loading}>
            {repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
            {!repos.length && loading && <p>Loading your GitHub repositories…</p>}
            {!repos.length && !loading && !error && <p>No repositories to display yet.</p>}
          </div>
        </section>
      </div>
    </div>
  );
}
