import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

const siteUrl = 'https://iampratikpoudel.com.np';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Pratik Poudel | Portfolio',
    template: 'Pratik Poudel | %s',
  },
  description:
    'Pratik Poudel is an Information Technology student focused on software engineering, full-stack development, networking, mobile apps, and practical projects.',
  keywords: [
    'pratik poudel',
    'pratik',
    'poudel',
    'software engineering portfolio',
    'full-stack development',
    'mobile application development',
    'networking',
    'computer systems engineering',
    'pratik poudel portfolio',
  ],
  icons: {
    icon: [
      { url: '/favicon.svg?v=3', type: 'image/svg+xml' },
      { url: '/icon.svg?v=3', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg?v=3',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Pratik Poudel's Portfolio",
    description:
      "Software Engineering • Full-Stack Development • Networking • Mobile Development",
    url: siteUrl,
    siteName: "Pratik Poudel's Portfolio",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
