"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full py-30 px-6 bg-gradient-to-b from-accent/10 to-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src="/contact.svg"
            alt="Contact Illustration"
            width={400}
            height={400}
            className="w-full max-w-md h-auto"
          />
        </motion.div>

        {/* Right Side - Form */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold text-dark mb-8"
          >
            Contact Us
          </motion.h1>

          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-dark/80 mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
              <div>
                <label className="block text-dark/80 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
              <div>
                <label className="block text-dark/80 mb-2">Message</label>
                <textarea
                  required
                  rows="5"
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-dark transition"
              >
                Send Message
              </button>
            </motion.form>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg text-primary font-medium"
            >
              ✅ Thank you! Your message has been sent.
            </motion.p>
          )}

          <div className="mt-6 text-dark/70">
            Or reach out directly at{" "}
            <a
              href="mailto:hello@example.com"
              className="text-primary font-semibold hover:underline"
            >
              hello@example.com
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-dark mb-8 text-center"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-6">
          {[
            {
              q: "How soon will I get a reply?",
              a: "We usually respond within 24–48 hours.",
            },
            {
              q: "Do I need an account to contact you?",
              a: "No, you can simply use the contact form or email us directly.",
            },
            {
              q: "Is my data safe?",
              a: "Yes! Your message is only used to respond to your inquiry and never shared.",
            },
            {
              q: "Can I suggest a new converter?",
              a: "Absolutely! We welcome feedback and feature requests from users.",
            },
          ].map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">
                {faq.q}
              </h3>
              <p className="text-dark/70">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
