import Converter from "@/components/Converter/Converter";
import { CONVERTERS, CONVERTER_SLUGS } from "@/lib/convertersMap";

export const dynamicParams = false;

export async function generateStaticParams() {
  return CONVERTER_SLUGS.map((type) => ({ type }));
}

export async function generateMetadata({ params }) {
  const meta = CONVERTERS[params.type];
  const base = "https://yourdomain.com";

  if (!meta) {
    return { title: "UnitX Converter", description: "Free unit converter." };
  }

  return {
    title: `${meta.title} | UnitX`,
    description: meta.description,
    alternates: { canonical: `${base}/converter/${params.type}` },
    openGraph: {
      title: `${meta.title} | UnitX`,
      description: meta.description,
      url: `${base}/converter/${params.type}`,
      siteName: "UnitX",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta.title} | UnitX`,
      description: meta.description,
    },
  };
}

export default function ConverterPage({ params }) {
  const config = CONVERTERS[params.type];

  if (!config) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Converter not found.</h1>
      </section>
    );
  }

  return <Converter type={params.type} config={config} />;
}
