import Link from "next/link";
import { CONVERTERS, CONVERTER_SLUGS } from "@/lib/convertersMap";

export const metadata = {
  title: "All Converters | UnitX",
  description: "Browse all unit converters in one place.",
};

export default function AllConversions() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">All Converters</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {CONVERTER_SLUGS.map((slug) => (
            <Link
              key={slug}
              href={`/converter/${slug}`}
              className="p-5 rounded-xl border bg-white hover:shadow-sm transition"
            >
              <h2 className="font-semibold">{CONVERTERS[slug].title}</h2>
              <p className="text-sm text-gray-600 mt-1">
                {CONVERTERS[slug].description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
