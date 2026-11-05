import type { MetadataRoute } from 'next';

const siteUrl = 'https://pyatrick666.github.io';
const basePath = '/Professional-Portfolio';

const routes = [
  '',
  '/about',
  '/projects',
  '/projects/chessmate',
  '/projects/raspberrypi-pico',
  '/projects/carrentalapp',
  '/github',
  '/contact',
  '/settings',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${basePath}${route}/`,
  }));
}
