/**
 * scripts/update-sitemap.js
 *
 * ✅ Fetches new conversions from Firebase RTDB (last 24 hours)
 * ✅ Appends them to /public/sitemaps/sitemap-*.xml files
 * ✅ Keeps sitemap chunks under 50k URLs
 * ✅ Automatically includes all static pages
 * ✅ Does NOT write sitemap-index.xml
 */

import 'dotenv/config';
import { initializeApp, deleteApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  query,
  orderByChild,
  startAt,
  get,
} from 'firebase/database';
import fs from 'fs';
import path from 'path';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  databaseURL: process.env.FIREBASE_DB_URL,
};

const baseUrl = 'https://unit-converters.vercel.app';
const MAX_URLS_PER_FILE = 50000;
const SITEMAP_DIR = path.join(process.cwd(), 'public', 'sitemaps');

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function buildUrl({ type, from, to, value }) {
  return `${baseUrl}/converter/${encodeURIComponent(type)}/${encodeURIComponent(
    value
  )}-${encodeURIComponent(from)}-to-${encodeURIComponent(to)}`;
}

function createSitemapXml(urls) {
  const header = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  const body = urls
    .map(
      (u) => `  <url>
    <loc>${u.url}</loc>
    <lastmod>${u.lastModified}</lastmod>
    <changefreq>${u.changeFrequency}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join('\n');
  return `${header}${body}\n</urlset>`;
}

// --- Static pages ---
const staticPages = [
  {
    url: `${baseUrl}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 1.0,
  },
  {
    url: `${baseUrl}/about`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/all-conversions`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: 0.9,
  },
  {
    url: `${baseUrl}/blogs`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: 0.9,
  },
  {
    url: `${baseUrl}/contact`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${baseUrl}/privacy-policy`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${baseUrl}/terms`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
];

async function fetchNewConversions() {
  const since = Date.now() - 24 * 60 * 60 * 1000;
  const snapshot = await get(
    query(ref(db, 'conversions'), orderByChild('createdAt'), startAt(since))
  );

  if (!snapshot.exists()) return [];

  return Object.values(snapshot.val()).map((val) => ({
    url: buildUrl(val),
    lastModified: new Date(val.createdAt).toISOString(),
    changeFrequency: 'daily',
    priority: 0.8,
  }));
}

function loadExistingSitemaps() {
  if (!fs.existsSync(SITEMAP_DIR))
    fs.mkdirSync(SITEMAP_DIR, { recursive: true });

  const sitemapFiles = fs
    .readdirSync(SITEMAP_DIR)
    .filter((f) => f.startsWith('sitemap-') && f.endsWith('.xml'))
    .sort(
      (a, b) =>
        parseInt(a.match(/sitemap-(\d+)/)?.[1] || '0') -
        parseInt(b.match(/sitemap-(\d+)/)?.[1] || '0')
    );

  let urls = [];
  for (const file of sitemapFiles) {
    const xml = fs.readFileSync(path.join(SITEMAP_DIR, file), 'utf8');
    const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];
    urls = urls.concat(matches.map((m) => m[1]));
  }

  return { sitemapFiles, urls };
}

function writeSitemaps(allUrls) {
  const chunks = [];
  for (let i = 0; i < allUrls.length; i += MAX_URLS_PER_FILE) {
    chunks.push(allUrls.slice(i, i + MAX_URLS_PER_FILE));
  }

  chunks.forEach((chunk, i) => {
    const xml = createSitemapXml(chunk);
    const filename = `sitemap-${i + 1}.xml`;
    fs.writeFileSync(path.join(SITEMAP_DIR, filename), xml, 'utf8');
  });

  console.log(
    `✅ Generated ${chunks.length} sitemap(s), total URLs: ${allUrls.length}`
  );
}

// --- Run ---
(async () => {
  try {
    console.log('🚀 Updating sitemap...');

    const newUrls = await fetchNewConversions();
    const { urls: existingUrls } = loadExistingSitemaps();

    const combinedUrls = [
      ...staticPages,
      ...existingUrls.map((u) => ({
        url: u,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily',
        priority: 0.8,
      })),
      ...newUrls,
    ].filter((u, i, arr) => arr.findIndex((x) => x.url === u.url) === i);

    writeSitemaps(combinedUrls);

    console.log('🎉 Sitemap update complete!');
  } catch (err) {
    console.error('❌ Error during sitemap update:', err);
  } finally {
    try {
      await deleteApp(app);
    } catch {}
    process.exit(0);
  }
})();
