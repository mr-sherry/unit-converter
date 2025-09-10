"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    title: "Select a Converter Tool",
    desc: "Choose from Length, Weight, Temperature, and many more converter options available on our site.",
  },
  {
    title: "Enter Your Value",
    desc: "Type in the number you want to convert, then pick the unit you want to convert from and to.",
  },
  {
    title: "Get Instant Results",
    desc: "See accurate results instantly, right in your browser, without any downloads or API calls.",
  },
];

export default function HowItWorks() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 px-6 bg-accent">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Accordion */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-dark mb-10"
          >
            How It Works
          </motion.h2>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                layout
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white rounded-xl shadow-md  overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-primary hover:bg-primary/10 transition"
                >
                  <span>{`${index + 1}. ${step.title}`}</span>
                  <motion.span
                    key={openIndex === index ? "minus" : "plus"}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    className="text-xl font-bold"
                  >
                    {openIndex === index ? "−" : "+"}
                  </motion.span>
                </button>

                {/* Content */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4 text-dark/80"
                    >
                      {step.desc}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="/Home/accordian.svg"
            alt="How it works illustration"
            className="max-w-md w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
