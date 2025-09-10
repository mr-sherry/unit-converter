"use client";
import { motion } from "framer-motion";

const converters = [
  {
    type: "length",
    name: "Length Converter",
    desc: "Convert meters, feet, inches, and more.",
  },
  {
    type: "weight",
    name: "Weight Converter",
    desc: "Convert kilograms, pounds, ounces, and more.",
  },
  {
    type: "temperature",
    name: "Temperature Converter",
    desc: "Convert Celsius, Fahrenheit, and Kelvin.",
  },
  {
    type: "area",
    name: "Area Converter",
    desc: "Convert square meters, acres, hectares, etc.",
  },
  {
    type: "volume",
    name: "Volume Converter",
    desc: "Convert liters, gallons, milliliters, etc.",
  },
  {
    type: "speed",
    name: "Speed Converter",
    desc: "Convert km/h, mph, m/s, and more.",
  },
  {
    type: "time",
    name: "Time Converter",
    desc: "Convert hours, minutes, seconds, days.",
  },
  {
    type: "storage",
    name: "Storage Converter",
    desc: "Convert MB, GB, TB, KB, and more.",
  },
];

export default function FeaturedConverters() {
  return (
    <section id="converters" className="py-20 px-6 bg-accent">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-dark mb-12 text-center"
        >
          Popular Converters
        </motion.h2>

        {/* Grid of Cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {converters.map((tool, index) => (
            <motion.a
              key={tool.type}
              href={`/converter/${tool.type}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-6 rounded-xl bg-white border border-[#DBE2EF] shadow-sm hover:shadow-lg transition transform hover:-translate-y-2"
            >
              <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-light transition">
                {tool.name}
              </h3>
              <p className="text-sm text-dark/70 group-hover:text-light transition">
                {tool.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
