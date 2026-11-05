import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

const siteUrl = 'https://pyatrick666.github.io';
const siteBasePath = '/Professional-Portfolio';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Pratik Poudel | Software Engineering Portfolio',
    template: 'Pratik Poudel | %s',
  },
  description:
    'Explore the portfolio of Pratik Poudel, an Information Technology student focused on software engineering, full-stack development, networking, and mobile development.',
  applicationName: 'Pratik Poudel Portfolio',
  authors: [{ name: 'Pratik Poudel', url: 'https://github.com/pyatrick666' }],
  creator: 'Pratik Poudel',
  publisher: 'Pratik Poudel',
  category: 'technology',
  alternates: {
    canonical: `${siteBasePath}/`,
  },
  keywords: [
    'Pratik Poudel',
    'Pratik Poudel portfolio',
    'software engineering portfolio',
    'full-stack development',
    'mobile application development',
    'networking',
    'computer systems engineering',
    'Flutter developer',
    'C# developer',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: `${siteBasePath}/favicon.svg?v=3`, type: 'image/svg+xml' },
      { url: `${siteBasePath}/icon.svg?v=3`, type: 'image/svg+xml' },
    ],
    shortcut: `${siteBasePath}/favicon.svg?v=3`,
  },
  openGraph: {
    images: [{ url: `${siteBasePath}/social-preview.png`, width: 1200, height: 630, alt: 'Pratik Poudel — Software Engineering Portfolio' }],
    type: 'website',
    locale: 'en_US',
    siteName: 'Pratik Poudel Portfolio',
    title: "Pratik Poudel | Software Engineering Portfolio",
    description:
      'Software Engineering • Full-Stack Development • Networking • Mobile Development',
    url: `${siteUrl}${siteBasePath}/`,
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${siteBasePath}/social-preview.svg`],
    title: 'Pratik Poudel | Software Engineering Portfolio',
    description:
      'Software Engineering • Full-Stack Development • Networking • Mobile Development',
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
