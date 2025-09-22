/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://unit-converters.vercel.app', // your live domain
  generateRobotsTxt: true, // generate /robots.txt automatically
  outDir: './public', // output static files into /public
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'daily',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
