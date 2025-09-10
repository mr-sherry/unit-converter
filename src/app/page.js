import Footer from "@/components/Footer/Footer";
import FAQ from "@/components/Home/FAQ";
import FeaturedConverters from "@/components/Home/FeaturedConverters";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import WhyUse from "@/components/Home/WhyUse";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Hero />
      <FeaturedConverters />
      <WhyUse />
      <HowItWorks />
      <FAQ />
    </main>
  );
}
