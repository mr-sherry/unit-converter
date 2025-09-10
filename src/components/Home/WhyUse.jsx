"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Works Instantly",
    desc: "All conversions happen in your browser with no API calls.",
    img: "/Home/WhyUse/work_instant.svg", // replace with your free image
  },
  {
    title: "100% Free Forever",
    desc: "No hidden charges or limits — convert as much as you need.",
    img: "/Home/WhyUse/free.svg",
  },
  {
    title: "Accurate & Reliable",
    desc: "Powered by precise formulas without ads or distractions.",
    img: "/Home/WhyUse/accurate.svg",
  },
  {
    title: "Mobile Friendly",
    desc: "Optimized for both desktop and mobile devices.",
    img: "/Home/WhyUse/mobile_friendly.svg",
  },
];

export default function WhyUse() {
  return (
    <section className="py-20 px-6 bg-light">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-dark text-center mb-12"
        >
          Why Use Our Converter?
        </motion.h2>

        {/* Feature Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-md border border-accent hover:shadow-lg hover:bg-primary hover:text-light transition group flex flex-col items-center text-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 mb-4 object-contain"
              />
              <h3 className="text-lg font-semibold mb-2 group-hover:text-light">
                {item.title}
              </h3>
              <p className="text-dark/70 group-hover:text-light/90 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
