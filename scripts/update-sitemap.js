/**
 * scripts/update-sitemap.js
 *
 * ✅ Fetches new conversions from Firebase RTDB (last 24 hours)
 * ✅ Appends them to /public/sitemaps/sitemap-*.xml files
 * ✅ Keeps sitemap chunks under 50k URLs
 * ✅ Updates /public/sitemaps/sitemap-index.xml
 */
import 'dotenv/config';

import { initializeApp } from 'firebase/app';
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

// --- Firebase Config ---
// (You can pass these as GitHub Action secrets or hardcode locally for testing)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  databaseURL: process.env.FIREBASE_DB_URL,
};

// --- Constants ---
const baseUrl = 'https://unit-converters.vercel.app';
const MAX_URLS_PER_FILE = 50000;
const SITEMAP_DIR = path.join(process.cwd(), 'public', 'sitemaps');

// --- Initialize Firebase ---
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// --- Helpers ---
function toISOString(ms) {
  return new Date(ms).toISOString();
}

function buildUrl({ type, from, to, value }) {
  return `${baseUrl}/converter/${encodeURIComponent(type)}/${encodeURIComponent(
    value
  )}-${encodeURIComponent(from)}-to-${encodeURIComponent(to)}`;
}

function createSitemapXml(urls) {
  const header = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  const body = urls
    .map(
      (u) => `
  <url>
    <loc>${u.url}</loc>
    <lastmod>${u.lastModified}</lastmod>
    <changefreq>${u.changeFrequency}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join('\n');
  return `${header}${body}\n</urlset>`;
}

function createIndexXml(files) {
  const header = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  const body = files
    .map(
      (f) => `
  <sitemap>
    <loc>${baseUrl}/sitemaps/${f}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`
    )
    .join('\n');
  return `${header}${body}\n</sitemapindex>`;
}

// --- Step 1: Fetch recent conversions ---
async function fetchNewConversions() {
  const since = Date.now() - 24 * 60 * 60 * 1000;
  const conversionsQuery = query(
    ref(db, 'conversions'),
    orderByChild('createdAt'),
    startAt(since)
  );
  const snapshot = await get(conversionsQuery);

  const results = [];
  if (!snapshot.exists()) return results;

  for (const val of Object.values(snapshot.val())) {
    results.push({
      url: buildUrl(val),
      lastModified: new Date(val.createdAt).toISOString(),
      changeFrequency: 'daily',
      priority: 0.8,
    });
  }

  return results;
}

// --- Step 2: Load existing sitemaps ---
function loadExistingSitemaps() {
  if (!fs.existsSync(SITEMAP_DIR))
    fs.mkdirSync(SITEMAP_DIR, { recursive: true });

  const sitemapFiles = fs
    .readdirSync(SITEMAP_DIR)
    .filter((f) => f.startsWith('sitemap-') && f.endsWith('.xml'));
  sitemapFiles.sort((a, b) => {
    const na = parseInt(a.match(/sitemap-(\d+)/)?.[1] || '0', 10);
    const nb = parseInt(b.match(/sitemap-(\d+)/)?.[1] || '0', 10);
    return na - nb;
  });

  let urls = [];
  for (const file of sitemapFiles) {
    const xml = fs.readFileSync(path.join(SITEMAP_DIR, file), 'utf8');
    const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];
    const locs = matches.map((m) => m[1]);
    urls = urls.concat(locs);
  }

  return { sitemapFiles, urls };
}

// --- Step 3: Write sitemaps incrementally ---
function writeSitemaps(allUrls) {
  // Split into chunks
  const chunks = [];
  for (let i = 0; i < allUrls.length; i += MAX_URLS_PER_FILE) {
    chunks.push(allUrls.slice(i, i + MAX_URLS_PER_FILE));
  }

  const files = [];
  chunks.forEach((chunk, i) => {
    const xml = createSitemapXml(chunk);
    const filename = `sitemap-${i + 1}.xml`;
    fs.writeFileSync(path.join(SITEMAP_DIR, filename), xml, 'utf8');
    files.push(filename);
  });

  // Write sitemap index
  const indexXml = createIndexXml(files);
  fs.writeFileSync(
    path.join(SITEMAP_DIR, 'sitemap-index.xml'),
    indexXml,
    'utf8'
  );
  console.log(
    `✅ Generated ${files.length} sitemap(s), total URLs: ${allUrls.length}`
  );
}

// --- Run ---
(async () => {
  console.log('🚀 Updating sitemap...');

  const newUrls = await fetchNewConversions();
  console.log(`📦 Found ${newUrls.length} new URLs in the last 24h`);

  const { urls: existingUrls } = loadExistingSitemaps();
  const existingSet = new Set(existingUrls);

  // Only add truly new URLs
  const combinedUrls = [
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
})();
