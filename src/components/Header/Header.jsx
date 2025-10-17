'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import LoaderLink from '../LoaderLink';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-neutral-200 shadow-sm transition-all'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        {/* Logo + Navigation */}
        <div className='flex items-center gap-10'>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-2xl font-extrabold tracking-tight text-black'
          >
            <LoaderLink href='/' className='hover:opacity-80 transition'>
              Unit<span className='text-neutral-600'>X</span>
            </LoaderLink>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex gap-8 text-neutral-700 font-medium'>
            <LoaderLink href='/' className='hover:text-black transition-colors'>
              Home
            </LoaderLink>
            <LoaderLink
              href='/all-conversions'
              className='hover:text-black transition-colors'
            >
              Conversions
            </LoaderLink>
            <LoaderLink
              href='/blogs'
              className='hover:text-black transition-colors'
            >
              Blog
            </LoaderLink>
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
          </nav>
        </div>

        {/* CTA + Mobile Menu Button */}
        <div className='flex items-center gap-4'>
          <LoaderLink
            href='/contact'
            className='hidden md:inline-block bg-black text-white px-5 py-2 rounded-lg font-medium hover:bg-neutral-800 shadow transition'
          >
            Request Conversion
          </LoaderLink>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-black text-2xl focus:outline-none'
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className='md:hidden bg-white/90 backdrop-blur-md border-t border-neutral-200 shadow-lg'>
          <div className='flex flex-col px-6 py-5 space-y-4 text-neutral-800 font-medium'>
            <LoaderLink href='/' onClick={() => setIsOpen(false)}>
              Home
            </LoaderLink>
            <LoaderLink
              href='/all-conversions'
              onClick={() => setIsOpen(false)}
            >
              Conversions
            </LoaderLink>
            <LoaderLink href='/blogs' onClick={() => setIsOpen(false)}>
              Blog
            </LoaderLink>
            <LoaderLink href='/about' onClick={() => setIsOpen(false)}>
              About
            </LoaderLink>
            <LoaderLink href='/privacy-policy' onClick={() => setIsOpen(false)}>
              Privacy
            </LoaderLink>
            <LoaderLink href='/terms' onClick={() => setIsOpen(false)}>
              Terms
            </LoaderLink>

            <LoaderLink
              href='/contact'
              onClick={() => setIsOpen(false)}
              className='bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-neutral-800 transition'
            >
              Request Conversion
            </LoaderLink>
          </div>
        </nav>
      )}
    </header>
  );
}
