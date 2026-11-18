import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const siteUrl = 'https://pratikpoudel.info.np';

const routes = [
  '',
  '/about',
  '/projects',
  '/projects/chessmate',
  '/projects/raspberrypi-pico',
  '/projects/carrentalapp',
  '/projects/360-vr',
  '/github',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}/`,
  }));
}
