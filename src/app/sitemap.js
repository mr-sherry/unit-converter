import { CONVERTER_SLUGS } from "@/lib/convertersMap";

export default function sitemap() {
  const base = "https://unit-converters.vercel.app";
  const staticUrls = [
    "",
    "/all-conversions",
    "/about",
    "/privacy",
    "/terms",
    "/contact",
  ].map((p) => ({
    url: `${base}${p || "/"}`,
    lastModified: new Date(),
  }));

  const converterUrls = CONVERTER_SLUGS.map((type) => ({
    url: `${base}/converter/${type}`,
    lastModified: new Date(),
  }));

  return [...staticUrls, ...converterUrls];
}
