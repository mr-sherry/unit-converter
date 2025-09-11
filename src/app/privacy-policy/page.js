"use client";
import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <section className="w-full py-30 px-6 bg-gradient-to-b from-accent/10 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-dark mb-8"
        >
          Privacy Policy
        </motion.h1>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-6 text-lg text-dark/80"
        >
          <p>
            Welcome to our website. Your privacy matters to us, and we are
            committed to keeping it safe. This Privacy Policy explains how we
            handle your information when you use our{" "}
            <span className="font-semibold">online converters</span> like
            Length, Weight, Temperature, and more.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-10">
            1. What We Don’t Collect
          </h2>
          <p>
            We <span className="font-semibold">do not collect</span> personal
            details such as your name, email, or phone number. We do not track
            your browsing activity on other websites. Your conversion inputs
            stay on your device —{" "}
            <span className="font-semibold">no data is ever stored</span>.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-10">
            2. Information We May Collect
          </h2>
          <p>
            We may use anonymous analytics (like Google Analytics) to understand
            how visitors use our site. This includes:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Browser type and version</li>
            <li>Device type (desktop, tablet, or mobile)</li>
            <li>Pages visited and time spent</li>
            <li>General location (city/country, not exact address)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-dark mt-10">
            3. How We Use Information
          </h2>
          <p>Any anonymous data we collect is only used for:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Improving our converters and website performance</li>
            <li>Ensuring calculations are fast and accurate</li>
            <li>Fixing bugs and improving user experience</li>
          </ul>

          <h2 className="text-2xl font-semibold text-dark mt-10">4. Cookies</h2>
          <p>
            Our site may use cookies for analytics and basic functionality.
            These cookies do{" "}
            <span className="font-semibold">not store personal data</span>. You
            can disable cookies in your browser at any time.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-10">
            5. Third-Party Services
          </h2>
          <p>
            We may rely on third-party providers such as hosting services or
            Google Analytics. These services only process anonymous data and are
            bound by strict privacy standards.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-10">
            6. Your Rights
          </h2>
          <p>
            Since we do not store personal data, there’s nothing to delete or
            export. However, you are free to block cookies or analytics tracking
            if you choose.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-10">
            7. Updates to This Policy
          </h2>
          <p>
            We may update this Privacy Policy to reflect improvements or legal
            requirements. Updates will always be posted here with the revised
            date.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-10">
            8. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, feel free to
            reach out:
          </p>
          <p className="font-semibold">
            📧 support@example.com 🌐 www.example.com
          </p>
        </motion.div>
      </div>
    </section>
  );
}
