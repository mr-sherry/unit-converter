import fs from 'fs';
import path from 'path';

const baseUrl = 'https://unit-converters.vercel.app';

export const runtime = 'nodejs'; // optional, faster

export async function GET() {
  const sitemapDir = path.join(process.cwd(), 'public', 'sitemaps');
  let files = [];
  try {
    files = fs
      .readdirSync(sitemapDir)
      .filter((f) => f.startsWith('sitemap-') && f.endsWith('.xml'))
      .sort((a, b) => {
        const na = parseInt(a.match(/sitemap-(\d+)/)?.[1] || '0', 10);
        const nb = parseInt(b.match(/sitemap-(\d+)/)?.[1] || '0', 10);
        return na - nb;
      });
  } catch (err) {
    console.error('Error reading sitemaps:', err);
  }

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${files
  .map(
    (f) => `
  <sitemap>
    <loc>${baseUrl}/sitemaps/${f}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`
  )
  .join('\n')}
</sitemapindex>`;

  return new Response(sitemapIndex, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
