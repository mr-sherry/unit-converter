'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className='w-full py-32 px-6 bg-gradient-to-b from-white to-neutral-100 text-center md:text-left'>
      <div className='max-w-4xl mx-auto'>
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl md:text-5xl font-extrabold text-black mb-8'
        >
          About Us
        </motion.h1>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className='space-y-6 text-lg text-neutral-700 leading-relaxed'
        >
          <p>
            This project was created with a simple idea:{' '}
            <span className='font-semibold text-black'>
              make unit conversions effortless
            </span>
            . No clutter, no popups, no hidden costs — just fast and accurate
            results when you need them.
          </p>

          <p>
            Our mission is clear: keep the tools{' '}
            <span className='font-semibold text-black'>
              free, simple, and privacy-first
            </span>
            . Everything runs directly in your browser, so{' '}
            <span className='italic'>your data never leaves your device</span>.
          </p>

          <p>
            Whether you’re a student, engineer, traveler, or just curious — our
            converters are designed to save you time and make everyday tasks
            easier.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className='mt-12 space-y-6 text-lg text-neutral-700 leading-relaxed'
        >
          <h2 className='text-2xl font-semibold text-black'>
            Our Vision & Values
          </h2>
          <ul className='list-disc list-inside space-y-2 text-left'>
            <li>
              <span className='font-semibold text-black'>Simplicity:</span>{' '}
              Tools that are easy to use and free from distractions.
            </li>
            <li>
              <span className='font-semibold text-black'>Accuracy:</span>{' '}
              Reliable conversions you can trust for daily tasks.
            </li>
            <li>
              <span className='font-semibold text-black'>Privacy:</span> 100%
              client-side processing — nothing stored, nothing shared.
            </li>
            <li>
              <span className='font-semibold text-black'>Accessibility:</span>{' '}
              Works on any device — desktop, tablet, or mobile.
            </li>
          </ul>
        </motion.div>

        {/* Closing */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className='mt-12 text-lg text-neutral-700 leading-relaxed'
        >
          Thank you for choosing our converters. We’re constantly improving and
          adding new tools to make your experience even better.
        </motion.p>
      </div>
    </section>
  );
}
