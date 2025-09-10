"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-gray-900"
        >
          <Link href="/">
            Unit<span className="text-blue-600">X</span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link
            href="/all-conversions"
            className="hover:text-blue-600 transition"
          >
            Conversions
          </Link>
          <Link href="/blogs" className="hover:text-blue-600 transition">
            Blog
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link
            href="/privacy-policy"
            className="hover:text-blue-600 transition"
          >
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-blue-600 transition">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-200 shadow-lg"
        >
          <div className="flex flex-col px-6 py-4 space-y-4 text-gray-700 font-medium">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/all-conversions" onClick={() => setIsOpen(false)}>
              Conversions
            </Link>
            <Link href="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/privacy" onClick={() => setIsOpen(false)}>
              Privacy
            </Link>
            <Link href="/terms" onClick={() => setIsOpen(false)}>
              Terms
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
}
