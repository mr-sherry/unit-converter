export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://unit-converters.vercel.app/sitemap.xml",
  };
}
