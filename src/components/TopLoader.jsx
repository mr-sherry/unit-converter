// components/TopLoader.js
"use client";

import { useState, useEffect } from "react";

let triggerLoader = null;

export function startLoader() {
  if (triggerLoader) triggerLoader();
}

export default function TopLoader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    triggerLoader = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 600); // show for 600ms
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 h-[3px] bg-blue-500 transition-all duration-500 ease-out z-50 ${
        loading ? "w-full opacity-100" : "w-0 opacity-0"
      }`}
    />
  );
}
