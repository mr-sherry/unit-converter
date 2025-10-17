'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Trigger fade-in once video starts loading
    const timer = setTimeout(() => setVideoLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='relative flex items-center justify-center overflow-hidden py-32 px-6 text-center h-[100vh]'>
      {/* 🎥 Background Video (lazy-loaded) */}
      {videoLoaded && (
        <motion.video
          key='hero-video'
          autoPlay
          loop
          muted
          playsInline
          poster='/Home/poster.webp'
          preload='none'
          className='absolute inset-0 w-full h-full object-cover object-center opacity-0'
          onLoadedData={(e) => e.target.classList.add('opacity-100')}
          transition={{ duration: 1 }}
        >
          <source src='/Home/bg1.mp4' type='video/mp4' />
        </motion.video>
      )}

      {/* 🌙 Overlay for text readability */}

      {/* 🧱 Hero Content */}
      <div className='relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center text-center px-4'>
        <div className='flex flex-col items-center'>
          {/* Badge */}
          <div className='inline-block px-4 py-2 mb-5 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium text-white border border-white/30'>
            ⚡ Fast • Accurate • Free
          </div>

          {/* Heading */}
          <h1 className='text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6 drop-shadow-md'>
            Convert Anything Instantly
          </h1>

          {/* Description */}
          <p className='text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed'>
            All-in-one converter for length, weight, temperature, currency, and
            more. Simple. Elegant. Lightning-fast.
          </p>

          {/* Buttons */}
          <div className='flex flex-wrap gap-4 justify-center'>
            <a
              href='#converters'
              className='px-8 py-4 rounded-xl font-semibold text-black bg-white hover:bg-gray-100 shadow-lg hover:-translate-y-1 transition-all duration-200'
            >
              Start Converting
            </a>
            <a
              href='#features'
              className='px-8 py-4 rounded-xl font-semibold border border-white/60 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-200'
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
