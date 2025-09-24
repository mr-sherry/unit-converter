import { db } from '@/lib/firebase';
import { ref, get } from 'firebase/database';

const baseUrl = 'https://unit-converters.vercel.app';

export const revalidate = 3600; // Regenerate every hour

export default async function sitemap() {
  // --- Static routes ---
  const staticRoutes = [
    '',
    '/blogs',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/all-conversions',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: route === '' ? 1.0 : 0.7,
  }));


  // --- Dynamic routes from all conversions in Firebase ---
  let dynamicRoutes = [];
  try {
    const conversionsRef = ref(db, 'conversions');
    const snapshot = await get(conversionsRef);

    if (snapshot.exists()) {
      const data = snapshot.val();

      dynamicRoutes = Object.values(data).map((val) => {
        // Encode each dynamic segment to handle spaces/special chars
        const type = encodeURIComponent(val.type);
        const from = encodeURIComponent(val.from);
        const to = encodeURIComponent(val.to);
        const value = encodeURIComponent(val.value);

        const url = `${baseUrl}/converter/${type}/${from}-to-${to}/${value}`;

        return {
          url,
          lastModified: new Date(val.createdAt).toISOString(),
          changeFrequency: 'daily',
          priority: 0.8,
        };
      });

      // Remove duplicates
      const seen = new Set();
      dynamicRoutes = dynamicRoutes.filter((item) => {
        if (seen.has(item.url)) {
          return false;
        }
        seen.add(item.url);
        return true;
      });

    } else {
      console.log('No conversions found in Firebase.');
    }
  } catch (err) {
    console.error('Error fetching conversions for sitemap:', err);
  }

  const sitemapUrls = [...staticRoutes, ...dynamicRoutes];
  return sitemapUrls;
}
