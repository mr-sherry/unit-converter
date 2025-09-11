"use client";

import { useState, Fragment, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { converters } from "@/lib/conversions";
import { FAQS } from "@/lib/faqs";
import { CONVERTER_IMAGES } from "@/lib/converterImages";
import { Listbox } from "@headlessui/react";
import {
  ChevronUpDownIcon,
  CheckIcon,
  ScaleIcon,
  FireIcon,
  BoltIcon,
} from "@heroicons/react/20/solid";
import { useConversions } from "@/context/ConversionsContext";
import Image from "next/image";
import RecentConversions from "./RecentConversions";

export default function Converter({ type, config }) {
  const convertFn = converters[type]?.fn;
  const { saveConversion } = useConversions();
  const resultRef = useRef(null);

  const [value, setValue] = useState("");
  const [from, setFrom] = useState(config.units[0]);
  const [to, setTo] = useState(config.units[1]);
  const [result, setResult] = useState(`0.0 ${to}`);

  const handleConvert = () => {
    if (value === "") {
      setResult(`0.0 ${to}`);
      return;
    }
    const res = convertFn(parseFloat(value), from, to);
    setResult(`${res.toFixed(6)} ${to}`);

    saveConversion({
      from,
      to,
      value: parseFloat(value),
      result: parseFloat(res.toFixed(2)),
      type,
    });
    resultRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const faqs = FAQS[type] || [];
  const imageSrc = CONVERTER_IMAGES[type] || "/images/converters/default.png";

  const exampleConversions = [
    `1 ${config.units[0]} = ${convertFn(
      1,
      config.units[0],
      config.units[1]
    ).toFixed(6)} ${config.units[1]}`,
    `10 ${config.units[1]} = ${convertFn(
      10,
      config.units[1],
      config.units[0]
    ).toFixed(6)} ${config.units[0]}`,
    `100 ${config.units[0]} = ${convertFn(
      100,
      config.units[0],
      config.units[1]
    ).toFixed(6)} ${config.units[1]}`,
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `${config.title} | UnitX`,
    applicationCategory: "EducationApplication",
    operatingSystem: "All",
    url: `https://yourdomain.com/converter/${type}`,
    description: config.description,
    potentialAction: {
      "@type": "Action",
      name: "Convert units",
      target: `https://yourdomain.com/converter/${type}?value={value}&from={from}&to={to}`,
      "query-input": "required name=value",
    },
  };

  // Additional content for the page
  const benefits = [
    "Free & Ad-Free",
    "Works Offline",
    "Fast & Accurate",
    "Mobile & Desktop Friendly",
  ];

  const instructions = [
    "Enter the value you want to convert.",
    "Select the unit you are converting from.",
    "Select the unit you want to convert to.",
    "Click 'Convert' to see the result instantly.",
  ];

  const relatedConverters = [
    {
      type: "weight",
      title: "Weight Converter",
      icon: ScaleIcon,
    },
    {
      type: "temperature",
      title: "Temperature Converter",
      icon: FireIcon,
    },
    {
      type: "power",
      title: "Power Converter",
      icon: BoltIcon,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="w-full min-h-screen py-20 mt-6 px-6 bg-gradient-to-b from-white to-gray-50"
    >
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="justify-center items-center flex flex-col gap-16">
        <div className="flex flex-row justify-between items-center w-[100%]">
          <div className="md:w-[50%] w-[100%]">
            <h1 className="text-5xl font-bold text-gray-900">{config.title}</h1>
            <p className="text-gray-700 text-lg">
              {config.description} Convert between {config.units.join(", ")}{" "}
              easily.
            </p>

            {/* Converter Inputs */}
            <div className="flex flex-col gap-4 items-stretch mt-20">
              {/* Value Input */}
              <input
                type="number"
                inputMode="decimal"
                placeholder="Enter value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full px-6 py-4 border-2 border-gray-300 focus:border-primary focus:outline-none text-lg rounded-lg shadow-md"
                aria-label="Input value to convert"
              />

              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex flex-row w-full">
                  {/* From Dropdown */}
                  <Listbox value={from} onChange={setFrom}>
                    <div className="relative w-full">
                      <Listbox.Button className="w-full px-6 py-4 text-left border-2 border-gray-300 rounded-lg bg-white shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary flex justify-between items-center">
                        {from}
                        <ChevronUpDownIcon className="w-5 h-5 text-white ml-2" />
                      </Listbox.Button>
                      <Listbox.Options className="absolute z-20 mt-1 w-full bg-white shadow-lg rounded-lg max-h-64 overflow-auto focus:outline-none ring-1 ring-black ring-opacity-5">
                        {config.units.map((unit) => (
                          <Listbox.Option key={unit} value={unit} as={Fragment}>
                            {({ active, selected }) => (
                              <li
                                className={`cursor-pointer select-none relative px-6 py-3 flex items-center justify-between rounded-md mb-1 transition-colors hover:bg-gray-800 hover:text-white ${
                                  active
                                    ? "bg-primary text-black"
                                    : "text-gray-900"
                                }`}
                              >
                                <span
                                  className={`${
                                    selected ? "font-bold" : "font-medium"
                                  }`}
                                >
                                  {unit}
                                </span>
                                {selected && (
                                  <CheckIcon
                                    className="w-5 h-5 text-primary"
                                    aria-hidden="true"
                                  />
                                )}
                              </li>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </div>
                  </Listbox>

                  {/* To Dropdown */}
                  <Listbox value={to} onChange={setTo}>
                    <div className="relative w-full">
                      <Listbox.Button className="w-full px-6 py-4 text-left border-2 border-gray-300 rounded-lg bg-white shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary flex justify-between items-center">
                        {to}
                        <ChevronUpDownIcon className="w-5 h-5 text-white ml-2" />
                      </Listbox.Button>
                      <Listbox.Options className="absolute z-20 mt-1 w-full bg-white shadow-lg rounded-lg max-h-64 overflow-auto focus:outline-none ring-1 ring-black ring-opacity-5">
                        {config.units.map((unit) => (
                          <Listbox.Option key={unit} value={unit} as={Fragment}>
                            {({ active, selected }) => (
                              <li
                                className={`cursor-pointer select-none relative px-6 py-3 flex items-center justify-between rounded-md mb-1 transition-colors hover:bg-gray-800 ${
                                  active
                                    ? "bg-primary text-black"
                                    : "text-gray-900"
                                }`}
                              >
                                <span
                                  className={`${
                                    selected ? "font-bold" : "font-medium"
                                  }`}
                                >
                                  {unit}
                                </span>
                                {selected && (
                                  <CheckIcon
                                    className="w-5 h-5 text-primary"
                                    aria-hidden="true"
                                  />
                                )}
                              </li>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </div>
                  </Listbox>
                </div>

                {/* Convert Button */}
                <button
                  onClick={handleConvert}
                  className="w-full sm:w-auto bg-primary text-white py-4 px-8 rounded-lg hover:bg-primary/90 transition text-lg font-semibold shadow-md"
                >
                  Convert
                </button>
              </div>
            </div>

            {/* Result */}
            <div ref={resultRef} className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Conversion Result
              </h2>
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg shadow-inner p-6">
                <p className="text-lg text-gray-700 mb-2">
                  You entered:{" "}
                  <span className="font-semibold text-gray-900">
                    {value || "0"}
                  </span>{" "}
                  {from}
                </p>
                <p className="text-lg text-gray-700 mb-2">
                  Converted to:{" "}
                  <span className="font-semibold text-gray-900">{to}</span>
                </p>
                <div className="flex items-center justify-between mt-3">
                  <input
                    type="text"
                    value={result}
                    readOnly
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg bg-white text-lg font-semibold text-gray-900 shadow-sm"
                    aria-label={`Converted value from ${from} to ${to}`}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  This means{" "}
                  <strong className="text-gray-800">
                    {value || "0"} {from}
                  </strong>{" "}
                  is equal to{" "}
                  <strong className="text-gray-800">{result}</strong>. Use this
                  result for quick calculations, studies, or real-world
                  applications.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[50%] none md:block">
            {/* Right Column Image */}
            <div className="hidden md:flex justify-center items-center">
              <Image
                src={imageSrc}
                alt={`${config.title} illustration`}
                className="hidden md:block w-full max-w-md object-contain"
                height={200}
                width={200}
              />
            </div>
          </div>
        </div>

        <div className="w-full  ">
          {/* recent conversions */}
          <div className="w-full max-w-6xl mx-auto">
            <RecentConversions />
          </div>
          {/* Real World Examples */}
          <div className="w-full max-w-6xl mx-auto mt-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">
              Real World Examples
            </h2>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              {config.realWorldExamples?.map((example, i) => (
                <li
                  key={i}
                  className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  {example}
                </li>
              ))}
            </ul>
          </div>
          {/* Why Use This Converter? */}
          <div className="w-full max-w-6xl mx-auto mt-20">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">
              Why Use This Converter?
            </h2>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              {benefits.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 bg-white shadow-sm p-3 rounded-lg hover:shadow-md transition"
                >
                  <span className="text-primary font-bold">✔</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="w-full max-w-6xl mx-auto mt-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">
              How To Use
            </h2>
            <ol className="space-y-3 text-gray-700">
              {instructions.map((inst, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-gray-50 border border-gray-200 p-3 rounded-lg hover:bg-gray-100"
                >
                  <span className="text-primary font-bold">{i + 1}.</span>
                  <span>{inst}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Example Conversions */}
          <div className="w-full max-w-6xl mx-auto mt-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">
              Example Conversions
            </h2>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              {exampleConversions.map((ex, i) => (
                <li
                  key={i}
                  className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition"
                >
                  {ex}
                </li>
              ))}
            </ul>
          </div>

          {/* Related Converters */}
          <div className="w-full max-w-6xl mx-auto mt-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">
              Related Converters
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedConverters.map((conv) => {
                const Icon = conv.icon;
                return (
                  <a
                    key={conv.type}
                    href={`/converter/${conv.type}`}
                    className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md bg-white transition group"
                  >
                    <Icon className="w-14 h-14 mb-3 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-gray-900 font-medium text-center text-lg">
                      {conv.title}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Full-width FAQ */}
      <div className="mt-16 w-full max-w-6xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group border-b border-gray-300 pb-4">
              <summary className="cursor-pointer font-medium text-gray-900 group-open:text-primary">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
