"use client";
import { motion } from "framer-motion";

export default function Terms() {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-white to-accent/20">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-dark mb-8"
        >
          Terms of Service
        </motion.h1>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-8 text-lg text-dark/80"
        >
          <p>
            Welcome to our website. By accessing or using our{" "}
            <span className="font-semibold">online converters</span>, you agree
            to the following Terms of Service. Please read them carefully before
            using the site.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-dark mb-3">
              1. Use of Service
            </h2>
            <p>
              Our converters are provided for personal, educational, and
              informational purposes only. You agree to use them responsibly and
              not for unlawful or harmful activities.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark mb-3">
              2. Accuracy of Results
            </h2>
            <p>
              While we strive to ensure accuracy, conversions are provided{" "}
              <span className="font-semibold">“as is”</span> without warranties.
              The results may not always be suitable for professional,
              scientific, medical, or financial use. Always double-check results
              when precision is critical.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark mb-3">
              3. Limitation of Liability
            </h2>
            <p>
              We are not responsible for any direct, indirect, incidental, or
              consequential damages that may arise from using our converters.
              Use of this service is entirely at your own risk.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark mb-3">
              4. Intellectual Property
            </h2>
            <p>
              All content, design, and code on this website are protected by
              copyright and intellectual property laws. You may not copy,
              redistribute, or resell our tools without permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark mb-3">
              5. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party sites. We are not
              responsible for the content, privacy, or practices of those
              external websites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark mb-3">
              6. Changes to Terms
            </h2>
            <p>
              We may update these Terms of Service from time to time. Continued
              use of the site after updates means you accept the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark mb-3">
              7. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, you can reach us at:
            </p>
            <p className="font-semibold">
              📧 support@example.com 🌐 www.example.com
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
