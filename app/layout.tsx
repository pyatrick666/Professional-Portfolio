import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
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
      { url: '/Professional-Portfolio/favicon.svg?v=3', type: 'image/svg+xml' },
      { url: '/Professional-Portfolio/icon.svg?v=3', type: 'image/svg+xml' },
    ],
    shortcut: '/Professional-Portfolio/favicon.svg?v=3',
  },
  openGraph: {
    title: "Pratik Poudel's Portfolio",
    description:
      "Software Engineering • Full-Stack Development • Networking • Mobile Development",
    url: 'https://pyatrick666.github.io/Professional-Portfolio/',
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
        <link rel="apple-touch-icon" sizes="180x180" href="/Professional-Portfolio/apple-touch-icon.png?v=3" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
