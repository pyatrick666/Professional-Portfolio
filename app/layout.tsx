import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

const siteUrl = 'https://pratikpoudel.info.np';
const socialImage = `${siteUrl}/social-preview.png`;
const portraitImage = `${siteUrl}/profile.jpg`;

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': siteUrl + '/#person',
  name: 'Pratik Poudel',
  url: siteUrl,
  image: portraitImage,
  email: 'pyatrick666@gmail.com',
  jobTitle: 'Information Technology Student and Software Developer',
  description: 'Pratik Poudel is an Information Technology student and software developer based in Siddharthanagar, Bhairahawa, Nepal, focused on software engineering, full-stack development, networking, and mobile applications.',
  address: { '@type': 'PostalAddress', addressLocality: 'Siddharthanagar (Bhairahawa)', addressRegion: 'Lumbini Province', addressCountry: 'NP' },
  alumniOf: { '@type': 'EducationalOrganization', name: 'ISMT College, Butwal' },
  sameAs: [
    'https://github.com/pyatrick666',
    'https://www.linkedin.com/in/pratik-poudel-dev',
    'https://www.youtube.com/@emevol666',
    'https://www.facebook.com/emev0l',
    'https://dev.to/pyatrick666'
  ],
  knowsAbout: ['Software Engineering', 'Full-Stack Development', 'Web Development', 'Mobile Application Development', 'Flutter', 'Networking', 'Computer Systems Engineering', 'Python', 'Artificial Intelligence and Machine Learning']
};

const profilePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': siteUrl + '/#profile',
  url: siteUrl,
  name: 'Pratik Poudel — Professional Profile',
  mainEntity: { '@id': siteUrl + '/#person' },
  image: portraitImage,
  primaryImageOfPage: {
    '@type': 'ImageObject',
    contentUrl: portraitImage,
    caption: 'Pratik Poudel — professional profile photo',
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': siteUrl + '/#website',
  name: 'Pratik Poudel',
  alternateName: 'Pratik Poudel Portfolio',
  url: siteUrl,
  inLanguage: 'en',
  about: { '@id': siteUrl + '/#person' }
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Pratik Poudel – Official Portfolio | Software Developer in Nepal',
    template: '%s | Pratik Poudel – Nepal',
  },
  description:
    'Official portfolio of Pratik Poudel, an Information Technology student and software developer based in Siddharthanagar, Bhairahawa, Nepal. Explore software, web, mobile app, and networking projects.',
  applicationName: 'Pratik Poudel Portfolio',
  authors: [{ name: 'Pratik Poudel', url: 'https://github.com/pyatrick666' }],
  creator: 'Pratik Poudel',
  publisher: 'Pratik Poudel',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Pratik Poudel',
    'Pratik Poudel Nepal',
    'Pratik Poudel Siddharthanagar Bhairahawa',
    'Pratik Poudel software developer',
    'Pratik Poudel official website',
    'Pratik Poudel developer portfolio Nepal',
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
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NP',
    siteName: 'Pratik Poudel Portfolio',
    title: 'Pratik Poudel – Official Portfolio | Software Developer in Nepal',
    description:
      'Official portfolio of Pratik Poudel, an Information Technology student and software developer based in Siddharthanagar, Bhairahawa, Nepal. Explore projects and professional experience.',
    url: siteUrl,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: 'Pratik Poudel — Software Engineering, Full-Stack Development, Networking and Mobile Development',
      },
    ],
  },
  other: {
    'geo.region': 'NP-P5',
    'geo.placename': 'Siddharthanagar, Bhairahawa, Lumbini Province, Nepal',
  },
  twitter: {
    card: 'summary_large_image',
    images: [socialImage],
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
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([personJsonLd, websiteJsonLd, profilePageJsonLd]) }} />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
