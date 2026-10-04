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
    "Pratik Poudel is an avid full stack web developer building websites and applications you'd love to use",
  keywords: [
    'pratik poudel',
    'pratik',
    'poudel',
    'web developer portfolio',
    'pratik web developer',
    'pratik developer',
    'mern stack',
    'pratik poudel portfolio',
    'pratik poudel portfolio',
  ],
  openGraph: {
    title: "Pratik Poudel's Portfolio",
    description:
      "Software Engineering • Full-Stack Development • Networking • Mobile Development",
    images: ['https://pyatrick666.github.io/ePortfolio/profile.jpg'],
    url: 'https://github.com/pyatrick666/Professional-Portfolio',
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
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
