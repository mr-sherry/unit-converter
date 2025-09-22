/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'converter.miftatech.com',
        pathname: '/**',
      },
    ],
  },

  // 👇 Add correct headers for sitemap and robots.txt
  async headers() {
    return [
      {
        // Main sitemap index
        source: '/sitemap.xml',
        headers: [
          { key: 'Content-Type', value: 'application/xml; charset=utf-8' },
        ],
      },
      {
        // All generated sitemaps like /sitemap-0.xml, /sitemap-1.xml
        source: '/sitemap-:number(.*).xml',
        headers: [
          { key: 'Content-Type', value: 'application/xml; charset=utf-8' },
        ],
      },
      {
        // robots.txt
        source: '/robots.txt',
        headers: [{ key: 'Content-Type', value: 'text/plain; charset=utf-8' }],
      },
    ];
  },
};

export default nextConfig;
