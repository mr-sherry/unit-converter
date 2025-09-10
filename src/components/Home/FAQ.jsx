"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Is this converter free?",
    a: "Yes, all tools are completely free to use. You can convert unlimited values without any cost, registration, or hidden fees.",
  },
  {
    q: "Do I need to download anything?",
    a: "No, everything works instantly in your browser. Our converters run entirely on the frontend so no installation is required.",
  },
  {
    q: "Does it work offline?",
    a: "Yes. Once the page is loaded, you can continue to use the converters without an internet connection, since calculations are handled locally.",
  },
  {
    q: "What types of converters are available?",
    a: "We provide a wide range of converters including length, weight, temperature, area, speed, volume, and more. Each is optimized for accuracy and simplicity.",
  },
  {
    q: "Can I use it on my phone?",
    a: "Absolutely! The website is fully responsive and works seamlessly on mobile, tablet, and desktop devices.",
  },
  {
    q: "Is my data private?",
    a: "Yes. All conversions happen locally in your browser. We don’t track, store, or send any values to external servers.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full py-20 px-6 bg-gradient-to-b from-white to-accent/20"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-dark text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 * index }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Header */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-base font-medium text-dark/80 hover:text-primary transition"
              >
                <span>{faq.q}</span>
                <span className="text-xl text-primary font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Content */}
              {openIndex === index && (
                <div className="px-6 pb-4 text-dark/70 text-sm leading-relaxed border-t border-gray-100">
                  {faq.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
