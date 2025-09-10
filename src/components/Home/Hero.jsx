"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <p className="mb-2 text-sm uppercase tracking-wide">
            Save time and effort
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Free Online <br />
            <span>Unit Converter</span>
          </h1>
          <p className="text-lg opacity-80 mb-8 max-w-md">
            Convert length, weight, temperature, and more instantly with our
            fast, accurate converter tools — all in your browser.
          </p>
          <a href="#converters" className="btn">
            Start Converting
          </a>
        </div>

        {/* Right Image */}
        <div className="relative">
          <Image
            src="/Home/hero.svg"
            alt="Unit Converter Illustration"
            width={500}
            height={500}
            className="mx-auto drop-shadow-lg rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
