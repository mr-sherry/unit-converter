// app/sitemap.ts
import { CONVERTER_SLUGS } from "@/lib/convertersMap";

export default function sitemap() {
  const base = "https://yourdomain.com";
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
