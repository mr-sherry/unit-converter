'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: 'Works Instantly',
    desc: 'All conversions happen directly in your browser — fast and secure.',
    img: '/Home/WhyUse/work_instant.svg',
  },
  {
    title: '100% Free Forever',
    desc: 'No hidden fees, no sign-ups, no limits. Just convert instantly.',
    img: '/Home/WhyUse/free.svg',
  },
  {
    title: 'Accurate & Reliable',
    desc: 'Backed by precise mathematical formulas, ensuring every result is correct.',
    img: '/Home/WhyUse/accurate.svg',
  },
  {
    title: 'Mobile Friendly',
    desc: 'Beautifully optimized for both mobile and desktop experiences.',
    img: '/Home/WhyUse/mobile_friendly.svg',
  },
];

export default function WhyUse() {
  return (
    <section className='relative py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden'>
      {/* Floating background blur shapes */}
      <motion.div
        className='absolute -top-24 left-0 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl'
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className='absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-gray-300/20 rounded-full blur-3xl'
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className='relative max-w-7xl mx-auto'>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-20'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Why Choose Our Converter?
          </h2>
          <p className='text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed'>
            Experience effortless, accurate, and fast conversions — built for
            simplicity and precision.
          </p>
        </motion.div>

        {/* Staggered Feature Layout */}
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group bg-white border border-gray-100 rounded-3xl p-8 backdrop-blur-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center 
                ${
                  index === 0
                    ? 'lg:col-span-2 lg:flex-row lg:items-center lg:text-left lg:gap-8'
                    : ''
                } 
                ${index === 3 ? 'lg:col-span-2 lg:justify-center' : ''}
              `}
            >
              {/* Glow overlay */}
              <div className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-gray-200/10 via-gray-300/10 to-gray-400/10 blur-2xl transition-opacity duration-500' />

              {/* Icon */}
              <div className='relative z-10 w-20 h-20 mb-6 lg:mb-0 flex items-center justify-center rounded-2xl bg-gray-100 group-hover:bg-gray-900 transition shrink-0'>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={60}
                  height={60}
                  className='object-contain group-hover:invert transition'
                />
              </div>

              {/* Text */}
              <div className='relative z-10'>
                <h3 className='text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors'>
                  {item.title}
                </h3>
                <p className='text-sm text-gray-500 group-hover:text-gray-700 leading-relaxed'>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
