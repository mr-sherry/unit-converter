import AllArticlesCarousel from "@/components/BlogPage/AllArticlesCarousel";
import Hero from "@/components/BlogPage/Hero";
import LatestArticles from "@/components/BlogPage/LatestArticles";
import PopularArticles from "@/components/BlogPage/PopularArticles";

export default function BlogPage() {
  return (
    <main className="space-y-12">
      <Hero />
      <PopularArticles />
      <LatestArticles />
      <AllArticlesCarousel />
    </main>
  );
}
