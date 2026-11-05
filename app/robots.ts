import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const siteUrl = 'https://pyatrick666.github.io';
const basePath = '/Professional-Portfolio';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: `${basePath}/`,
    },
    sitemap: `${siteUrl}${basePath}/sitemap.xml`,
    host: `${siteUrl}${basePath}/`,
  };
}
