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

  // --- Dynamic routes from Firebase ---
  let dynamicRoutes = [];
  try {
    const conversionsRef = ref(db, 'conversions');
    const snapshot = await get(conversionsRef);

    if (snapshot.exists()) {
      const data = snapshot.val();

      // Map conversions to encoded URLs
      dynamicRoutes = Object.values(data).map((val) => ({
        url: `${baseUrl}/converter/${encodeURIComponent(
          val.type
        )}/${encodeURIComponent(val.from)}-to-${encodeURIComponent(val.to)}/${
          val.value
        }`,
        lastModified: new Date(val.createdAt).toISOString(),
        changeFrequency: 'daily',
        priority: 0.8,
      }));

      // Remove duplicate URLs
      const seen = new Set();
      dynamicRoutes = dynamicRoutes.filter((item) => {
        if (seen.has(item.url)) return false;
        seen.add(item.url);
        return true;
      });
    }
  } catch (err) {
    console.error('Error fetching conversions for sitemap:', err);
  }

  return [...staticRoutes, ...dynamicRoutes];
}
