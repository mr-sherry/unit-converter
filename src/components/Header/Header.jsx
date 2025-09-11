"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import LoaderLink from "../LoaderLink";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F9F7F7]/80 backdrop-blur-md border-b border-[#DBE2EF]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side: Logo + Nav */}
        <div className="flex items-center gap-15">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-[#112D4E]"
          >
            <LoaderLink href="/" className="!text-black">
              Unit<span className="text-black">X</span>
            </LoaderLink>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-[#112D4E] font-medium">
            <LoaderLink href="/" className="hover:text-[#3F72AF] transition">
              Home
            </LoaderLink>
            <LoaderLink
              href="/all-conversions"
              className="hover:text-[#3F72AF] transition"
            >
              Conversions
            </LoaderLink>
            <LoaderLink
              href="/blogs"
              className="hover:text-[#3F72AF] transition"
            >
              Blog
            </LoaderLink>
            <LoaderLink
              href="/about"
              className="hover:text-[#3F72AF] transition"
            >
              About
            </LoaderLink>
            <LoaderLink
              href="/privacy-policy"
              className="hover:text-[#3F72AF] transition"
            >
              Privacy
            </LoaderLink>
            <LoaderLink
              href="/terms"
              className="hover:text-[#3F72AF] transition"
            >
              Terms
            </LoaderLink>
          </nav>
        </div>

        {/* Right side: Request Conversion Button */}
        <div className="flex items-center gap-4">
          <LoaderLink
            href="/contact"
            className="hidden md:inline-block !bg-[#3F72AF] !text-white px-4 py-2 rounded-xl shadow hover:!bg-[#112D4E] transition"
          >
            Request Conversion
          </LoaderLink>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#112D4E] text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#F9F7F7] border-t border-[#DBE2EF] shadow-lg"
        >
          <div className="flex flex-col px-6 py-4 space-y-4 text-[#112D4E] font-medium">
            <LoaderLink href="/" onClick={() => setIsOpen(false)}>
              Home
            </LoaderLink>
            <LoaderLink
              href="/all-conversions"
              onClick={() => setIsOpen(false)}
            >
              Conversions
            </LoaderLink>
            <LoaderLink href="/blogs" onClick={() => setIsOpen(false)}>
              Blog
            </LoaderLink>
            <LoaderLink href="/about" onClick={() => setIsOpen(false)}>
              About
            </LoaderLink>
            <LoaderLink href="/privacy-policy" onClick={() => setIsOpen(false)}>
              Privacy
            </LoaderLink>
            <LoaderLink href="/terms" onClick={() => setIsOpen(false)}>
              Terms
            </LoaderLink>

            <LoaderLink
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#3F72AF] !text-white px-4 py-2 rounded-xl shadow hover:!bg-[#112D4E] hover:!text-white transition"
            >
              Request Conversion
            </LoaderLink>
          </div>
        </motion.nav>
      )}
    </header>
  );
}
