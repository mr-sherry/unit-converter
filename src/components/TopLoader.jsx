// components/TopLoader.js
"use client";

import { useState, useEffect } from "react";

let triggerStart = null;
let triggerDone = null;

export function startLoader() {
  if (triggerStart) triggerStart();
}

export function finishLoader() {
  if (triggerDone) triggerDone();
}

export default function TopLoader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    triggerStart = () => {
      setVisible(true);
      setProgress(5);
      const step = setInterval(() => {
        setProgress((old) => (old < 90 ? old + 10 : old));
      }, 200);
      setProgressIntervals((prev) => [...prev, step]);
    };

    triggerDone = () => {
      setProgress(100);
      setTimeout(() => {
        setVisible(false);
        setProgress(0);
        progressIntervals.forEach((id) => clearInterval(id));
        setProgressIntervals([]);
      }, 400);
    };
  }, []);

  const [progressIntervals, setProgressIntervals] = useState([]);

  return (
    <div
      className={`fixed top-0 left-0 h-[3px] bg-blue-500 z-50 transition-all duration-300 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ width: `${progress}%` }}
    />
  );
}
