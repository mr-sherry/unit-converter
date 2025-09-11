"use client";

import { useConversions } from "@/context/ConversionsContext";
import { motion, AnimatePresence } from "framer-motion";
import LoaderLink from "../LoaderLink";

export default function RecentConversions() {
  const { conversions } = useConversions();
  console.log(conversions);

  if (conversions.length === 0) {
    return (
      <div className="mt-0">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Recent Conversions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
          No Recenet Conversions Yet.
        </div>
      </div>
    );
  }

  return (
    <div className="mt-0">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">
        Recent Conversions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <AnimatePresence>
          {conversions.map((c) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              layout
              className="p-4 border rounded-lg bg-white shadow-sm flex flex-col cursor-pointer hover:shadow-md transition"
            >
              <LoaderLink
                href={`/converter/${c.type}`}
                className="flex flex-col h-full justify-between"
              >
                <span className="text-gray-900 font-semibold text-lg">
                  {c.value} {c.from} → {c.result} {c.to}
                </span>
                <span className="text-[#3F72AF] font-medium capitalize mt-2">
                  {c.type}
                </span>
              </LoaderLink>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
