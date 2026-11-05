import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const siteUrl = 'https://pyatrick666.github.io';
const basePath = '/Professional-Portfolio';

const routes = [
  '',
  '/about',
  '/projects',
  '/projects/chessmate',
  '/projects/raspberrypi-pico',
  '/projects/carrentalapp',
  '/projects/360-vr',
  '/projects/demo-hotelsinfowithtablebookingsystem',
  '/github',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${basePath}${route}/`,
  }));
}
