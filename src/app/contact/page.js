'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className='w-full py-32 px-6 bg-gradient-to-b from-white via-neutral-50 to-neutral-100'>
      <div className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center'>
        {/* 🖼️ Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='flex justify-center'
        >
          <Image
            src='/contact.svg'
            alt='Contact Illustration'
            width={420}
            height={420}
            className='w-full max-w-md h-auto drop-shadow-md'
          />
        </motion.div>

        {/* 🧱 Right Side - Form */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className='text-4xl md:text-5xl font-extrabold text-neutral-900 mb-8'
          >
            Let’s Connect
          </motion.h1>

          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className='space-y-6'
            >
              <div>
                <label className='block text-neutral-700 mb-2 font-medium'>
                  Name
                </label>
                <input
                  type='text'
                  required
                  className='w-full p-3 rounded-xl border border-neutral-300 bg-white/70 backdrop-blur-sm shadow-sm focus:ring-2 focus:ring-neutral-800 outline-none transition'
                />
              </div>
              <div>
                <label className='block text-neutral-700 mb-2 font-medium'>
                  Email
                </label>
                <input
                  type='email'
                  required
                  className='w-full p-3 rounded-xl border border-neutral-300 bg-white/70 backdrop-blur-sm shadow-sm focus:ring-2 focus:ring-neutral-800 outline-none transition'
                />
              </div>
              <div>
                <label className='block text-neutral-700 mb-2 font-medium'>
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  className='w-full p-3 rounded-xl border border-neutral-300 bg-white/70 backdrop-blur-sm shadow-sm focus:ring-2 focus:ring-neutral-800 outline-none transition'
                ></textarea>
              </div>
              <button
                type='submit'
                className='px-8 py-3 bg-black text-white font-semibold rounded-xl hover:bg-neutral-800 transition-all duration-200 shadow-lg hover:shadow-xl'
              >
                Send Message
              </button>
            </motion.form>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='text-lg text-neutral-800 font-medium bg-white/60 p-4 rounded-xl border border-neutral-200 shadow-sm'
            >
              ✅ Thank you! Your message has been sent successfully.
            </motion.p>
          )}

          <div className='mt-6 text-neutral-600'>
            Or reach out directly at{' '}
            <a
              href='mailto:hello@example.com'
              className='text-neutral-900 font-semibold hover:underline'
            >
              hello@example.com
            </a>
          </div>
        </div>
      </div>

      {/* 💬 FAQ Section */}
      <div className='max-w-4xl mx-auto mt-24'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-10'
        >
          Frequently Asked Questions
        </motion.h2>

        <div className='space-y-6'>
          {[
            {
              q: 'How soon will I get a reply?',
              a: 'We typically respond within 24–48 hours.',
            },
            {
              q: 'Do I need an account to contact you?',
              a: 'No, just fill out the form or send an email directly.',
            },
            {
              q: 'Is my data safe?',
              a: 'Absolutely. Your message stays private and is never shared.',
            },
            {
              q: 'Can I suggest a new converter?',
              a: 'Yes! We love user feedback and feature requests.',
            },
          ].map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className='p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition'
            >
              <h3 className='text-lg font-semibold text-neutral-900 mb-2'>
                {faq.q}
              </h3>
              <p className='text-neutral-600'>{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
