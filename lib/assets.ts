/**
 * Public assets are served from the domain root on both GitHub Pages custom
 * domains and local development. Do not prepend the old project-page path.
 */
export const assetPath = (path: string) => path.startsWith('/') ? path : `/${path}`;
