'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className='relative flex items-center justify-center overflow-hidden py-32 px-6 text-center h-[100vh]'>
      {/* 🎥 Background Video */}
      <div className='absolute inset-0 overflow-hidden'>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster='/Home/poster.png'
          className='w-full h-full object-cover object-center'
        >
          <source src='/Home/bg1.mp4' type='video/mp4' />
        </video>
        {/* Dark overlay for readability */}
      </div>

      {/* 🧱 Content */}
      <div className='relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center text-center'>
        <div className='flex flex-col items-center'>
          {/* Subtext Badge */}
          <div className='inline-block px-4 py-2 mb-5 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium text-white border border-white/30'>
            ⚡ Fast • Accurate • Free
          </div>

          {/* Heading */}
          <h1 className='text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6'>
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
