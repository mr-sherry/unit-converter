/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://unit-converters.vercel.app", // your live domain
  generateRobotsTxt: true, // (optional) generate robots.txt
  sitemapSize: 5000,
  changefreq: "daily", // tell Google you update often
  priority: 0.7,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  // Optional: If your dynamic routes are not automatically detected:
  transform: async (config, path) => {
    return {
      loc: path, // => https://unit-converters.vercel.app/path
      changefreq: "daily",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
