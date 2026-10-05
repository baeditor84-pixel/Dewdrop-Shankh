export default async function sitemap() {
  const baseUrl = 'https://dewdrophotels.co.in';

  const routes = [
    '',
    '/rooms',
    '/gallery',
    '/amenities',
    '/certificates',
    '/about',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
