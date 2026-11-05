export const assetPath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/Professional-Portfolio' : '';
  return `${basePath}${path}`;
};
