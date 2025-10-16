'use client';
import { motion } from 'framer-motion';
import LoaderLink from '../LoaderLink';

export default function Footer() {
  return (
    <footer className='bg-white/70 backdrop-blur-lg border-t border-neutral-200 shadow-sm'>
      <div className='max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left'>
        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-neutral-600 text-sm'
        >
          © {new Date().getFullYear()}{' '}
          <span className='font-semibold text-black'>UnitX Converter</span>. All
          rights reserved.
        </motion.p>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className='flex flex-wrap justify-center md:justify-end gap-6 text-sm font-medium text-neutral-700'
        >
          <LoaderLink
            href='/about'
            className='hover:text-black transition-colors'
          >
            About
          </LoaderLink>
          <LoaderLink
            href='/privacy-policy'
            className='hover:text-black transition-colors'
          >
            Privacy
          </LoaderLink>
          <LoaderLink
            href='/terms'
            className='hover:text-black transition-colors'
          >
            Terms
          </LoaderLink>
        </motion.div>
      </div>
    </footer>
  );
}
