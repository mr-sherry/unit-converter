'use client';

import { motion } from 'framer-motion';
import LoaderLink from '@/components/LoaderLink';
import { CONVERTERS, CONVERTER_SLUGS } from '@/lib/convertersMap'; // dynamic import

export default function FeaturedConverters() {
  return (
    <section id='converters' className='py-20 px-6 bg-accent'>
      <div className='max-w-7xl mx-auto'>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className='text-3xl font-bold text-dark mb-12 text-center'
        >
          Popular Converters
        </motion.h2>

        {/* Grid of Cards */}
        <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {CONVERTER_SLUGS.map((slug, index) => {
            const converter = CONVERTERS[slug];

            // pick first two units from config to form default URL
            const defaultFrom = converter.units?.[0] || 'unit1';
            const defaultTo = converter.units?.[1] || 'unit2';
            const defaultValue = 1;

            return (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className='h-full' // make the motion wrapper full height
              >
                <LoaderLink
                  href={`/converter/${slug}/${defaultValue}-${defaultFrom}-to-${defaultTo}`}
                  className='h-full flex flex-col justify-between group p-6 rounded-xl bg-white border border-[#DBE2EF] shadow-sm hover:shadow-lg transition-transform hover:-translate-y-2'
                >
                  <div className='flex-grow'>
                    <h3 className='text-lg font-semibold text-primary mb-2 group-hover:text-light transition'>
                      {converter.title}
                    </h3>
                    <p className='text-sm text-dark/70 group-hover:text-light transition'>
                      {converter.description}
                    </p>
                  </div>
                </LoaderLink>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
