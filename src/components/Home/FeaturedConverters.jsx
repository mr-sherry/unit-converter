'use client';

import { motion } from 'framer-motion';
import LoaderLink from '@/components/LoaderLink';
import { CONVERTERS, CONVERTER_SLUGS } from '@/lib/convertersMap';

export default function FeaturedConverters() {
  return (
    <section
      id='converters'
      className='relative py-28 px-6 bg-gradient-to-b from-white via-neutral-50 to-neutral-100 overflow-hidden'
    >
      {/* Floating Background Accents */}
      <motion.div
        className='absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-neutral-300/20 rounded-full blur-3xl'
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className='absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-neutral-400/20 rounded-full blur-3xl'
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className='relative max-w-7xl mx-auto'>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-24'
        >
          <h2 className='text-4xl md:text-5xl font-extrabold text-neutral-900 mb-4'>
            Popular Converters
          </h2>
          <p className='text-neutral-600 max-w-2xl mx-auto text-lg'>
            Simplify every calculation — explore the most used converters below.
          </p>
        </motion.div>

        {/* Redesigned Grid Layout */}
        <div className='grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {CONVERTER_SLUGS.map((slug, index) => {
            const converter = CONVERTERS[slug];
            const defaultFrom = converter.units?.[0] || 'unit1';
            const defaultTo = converter.units?.[1] || 'unit2';
            const defaultValue = 1;

            return (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`relative ${
                  index % 2 === 0 ? 'translate-y-3' : '-translate-y-3'
                }`}
              >
                <LoaderLink
                  href={`/converter/${slug}/${defaultValue}-${defaultFrom}-to-${defaultTo}`}
                  className='group relative block h-full p-8 rounded-3xl border border-neutral-200 bg-gradient-to-br from-white via-white to-neutral-100 shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300'
                >
                  {/* Glow effect */}
                  <div className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-neutral-200/30 to-neutral-400/20 blur-2xl' />

                  {/* Content */}
                  <div className='relative z-10'>
                    <div className='mb-6'>
                      <div className='w-12 h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-semibold text-lg mb-4 group-hover:bg-black transition'>
                        {converter.icon ? converter.icon : '↔'}
                      </div>
                      <h3 className='text-lg font-semibold text-neutral-900 mb-2'>
                        {converter.title}
                      </h3>
                      <p className='text-sm text-neutral-600 leading-relaxed'>
                        {converter.description}
                      </p>
                    </div>

                    <div className='mt-4'>
                      <span className='inline-flex items-center text-sm font-medium text-neutral-900 group-hover:text-black transition-colors'>
                        Convert Now →
                      </span>
                    </div>
                  </div>
                </LoaderLink>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='text-center mt-28'
        >
          <LoaderLink
            href='/all-conversions'
            className='inline-block px-10 py-4 bg-neutral-900 text-white font-semibold rounded-2xl hover:bg-black shadow-md hover:shadow-xl transition-all duration-300'
          >
            Explore All Converters
          </LoaderLink>
        </motion.div>
      </div>
    </section>
  );
}
