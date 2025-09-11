"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import LoaderLink from "../LoaderLink";

export default function Footer() {
  return (
    <footer className=" bg-white/80 backdrop-blur-md border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-sm"
        >
          © {new Date().getFullYear()} UnitX Converter.
        </motion.p>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-6 text-gray-700 text-sm font-medium"
        >
          <LoaderLink href="/about" className="hover:text-blue-600 transition">
            About
          </LoaderLink>
          <LoaderLink
            href="/privacy-policy"
            className="hover:text-blue-600 transition"
          >
            Privacy
          </LoaderLink>
          <LoaderLink href="/terms" className="hover:text-blue-600 transition">
            Terms
          </LoaderLink>
        </motion.div>
      </div>
    </footer>
  );
}
