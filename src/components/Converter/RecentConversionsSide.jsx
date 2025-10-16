'use client';

import { useConversions } from '@/context/ConversionsContext';
import { motion, AnimatePresence } from 'framer-motion';
import LoaderLink from '../LoaderLink';
import { UNIT_NAMES } from '@/lib/allUnitNames';

export default function RecentConversionsSide() {
  const { conversions } = useConversions();

  if (conversions.length === 0) {
    return (
      <div className='mt-0'>
        <h2 className='text-2xl font-bold text-black mb-4 border-b border-neutral-300 pb-2'>
          Recent Conversions
        </h2>
        <div className='flex flex-col gap-3 text-neutral-600'>
          No Recent Conversions Yet.
        </div>
      </div>
    );
  }

  return (
    <div className='mt-0'>
      <h2 className='text-2xl font-bold mb-4 text-black border-b border-neutral-300 pb-2'>
        Recent Conversions
      </h2>

      <div className='flex flex-col gap-3'>
        <AnimatePresence>
          {conversions.map((c) => {
            const link = `/converter/${c.type}/${c.value}-${c.from}-to-${c.to}`;
            const fromFull = UNIT_NAMES[c.from] || c.from;
            const toFull = UNIT_NAMES[c.to] || c.to;

            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                layout
                className='group p-4 border border-neutral-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1'
              >
                <LoaderLink
                  href={link}
                  className='flex flex-col h-full justify-between'
                >
                  <span className='text-black font-semibold text-lg group-hover:text-neutral-900 transition'>
                    {c.value} {fromFull} → {c.result} {toFull}
                  </span>
                  <span className='text-neutral-500 text-sm capitalize mt-1 group-hover:text-black transition'>
                    {c.type} converter
                  </span>
                </LoaderLink>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
