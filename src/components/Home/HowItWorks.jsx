'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Select a Converter Tool',
    desc: 'Choose from Length, Weight, Temperature, and many more converter options available on our site.',
  },
  {
    title: 'Enter Your Value',
    desc: 'Type in the number you want to convert, then pick the unit you want to convert from and to.',
  },
  {
    title: 'Get Instant Results',
    desc: 'See accurate results instantly, right in your browser, without any downloads or API calls.',
  },
];

export default function HowItWorks() {
  const [openIndex, setOpenIndex] = useState();

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='relative py-28 px-6 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden'>
      {/* 🖼️ Background Illustration */}
      <motion.div
        className="absolute inset-0 bg-[url('/Home/accordian.svg')] bg-center bg-no-repeat bg-contain opacity-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
      />

      <div className='relative max-w-4xl mx-auto'>
        {/* ✨ Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-14'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            How It Works
          </h2>
          <p className='text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed'>
            Follow these simple steps to convert any unit effortlessly — fast,
            precise, and smooth.
          </p>
        </motion.div>

        {/* 🧩 Accordion */}
        <div className='space-y-4'>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden border ${
                openIndex === index
                  ? 'border-gray-300 bg-white shadow-md'
                  : 'border-gray-100 bg-white/70 shadow-sm'
              } backdrop-blur-sm transition-all duration-300`}
            >
              {/* Header */}
              <button
                onClick={() => toggle(index)}
                className='w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-gray-800 hover:text-black transition'
              >
                <span className='text-base md:text-lg flex items-center gap-2'>
                  <span className='text-gray-400 text-sm'>{index + 1}.</span>{' '}
                  {step.title}
                </span>

                <span
                  className={`text-2xl text-gray-500 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  ▾
                </span>
              </button>

              {/* Content */}
              {openIndex === index && (
                <div className='px-6 pb-5 text-gray-600 text-base leading-relaxed'>
                  {step.desc}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
