import Footer from '@/components/Footer/Footer';
import FAQ from '@/components/Home/FAQ';
import FeaturedConverters from '@/components/Home/FeaturedConverters';
import Hero from '@/components/Home/Hero';
import HowItWorks from '@/components/Home/HowItWorks';
import WhyUse from '@/components/Home/WhyUse';

export default function Home() {
  return (
    <main className='min-h-screen mt-10 bg-gray-50 text-gray-900'>
      <Hero />
      <FeaturedConverters />
      <WhyUse />

      {/* 🧩 Side-by-side layout for HowItWorks & FAQ */}
      <section className='max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
        <div className='bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden'>
          <HowItWorks />
        </div>
        <div className='bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden'>
          <FAQ />
        </div>
      </section>
    </main>
  );
}
