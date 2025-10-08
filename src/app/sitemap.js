const baseUrl = 'https://unit-converters.vercel.app';

export default async function sitemap() {
  // Point crawlers to your static sitemap index
  return [
    {
      url: `${baseUrl}/sitemaps/sitemap-index.xml`,
      lastModified: new Date().toISOString(),
    },
  ];
}
