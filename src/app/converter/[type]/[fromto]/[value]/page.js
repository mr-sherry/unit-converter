import Converter from '@/components/Converter/Converter';
import { CONVERTERS, CONVERTER_SLUGS } from '@/lib/convertersMap';

export const dynamicParams = true;

/**
 * Generate static pages for:
 * - Every converter type
 * - Every (from → to) unit combination
 * - Default values (1, 10, 100)
 */
export async function generateStaticParams() {
  const paths = [];

  CONVERTER_SLUGS.forEach((type) => {
    const config = CONVERTERS[type];
    const units = config.units || [];

    for (let i = 0; i < units.length; i++) {
      for (let j = 0; j < units.length; j++) {
        if (i === j) continue; // skip same unit

        const from = units[i];
        const to = units[j];

        ['1', '10', '100'].forEach((value) => {
          paths.push({
            type,
            fromto: `${from}-to-${to}`,
            value,
          });
        });
      }
    }
  });

  return paths;
}

// --- Await params for App Router ---
export async function generateMetadata({ params }) {
  params = await params;

  const meta = CONVERTERS[params.type];
  const base = 'https://unit-converters.vercel.app';

  if (!meta) {
    return { title: 'UnitX Converter', description: 'Free unit converter.' };
  }

  return {
    title: `${meta.title} | UnitX`,
    description: meta.description,
    alternates: {
      canonical: `${base}/converter/${params.type}/${params.fromto}/${params.value}`,
    },
    openGraph: {
      title: `${meta.title} | UnitX`,
      description: meta.description,
      url: `${base}/converter/${params.type}/${params.fromto}/${params.value}`,
      siteName: 'UnitX',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${meta.title} | UnitX`,
      description: meta.description,
    },
  };
}


const restoreUnit = (unit) => decodeURIComponent(unit).replace(/-/g, '/');

export default async function ConverterPage({ params }) {
  params = await params;
  const { type, fromto, value } = params;

  const config = CONVERTERS[type];

  if (!config) {
    return (
      <section className='min-h-screen flex items-center justify-center'>
        <h1 className='text-2xl font-bold'>Converter not found.</h1>
      </section>
    );
  }

  // Split fromto and restore original units
  const [fromParam, toParam] = (fromto || '').split('-to-');
  const from = restoreUnit(fromParam || config.units[0]);
  const to = restoreUnit(toParam || config.units[1]);

  return (
    <Converter type={type} from={from} to={to} value={value} config={config} />
  );
}
