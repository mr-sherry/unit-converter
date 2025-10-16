'use client';

import { useState, Fragment, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { converters } from '@/lib/conversions';
import { FAQS } from '@/lib/faqs';
import { CONVERTER_IMAGES } from '@/lib/converterImages';
import { Listbox } from '@headlessui/react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';
import { useConversions } from '@/context/ConversionsContext';
import Image from 'next/image';
import ConverterExtras from './ConvertersExtras';

export default function Converter({
  type,
  config,
  from: initialFrom,
  to: initialTo,
  value: initialValue,
}) {
  const convertFn = converters[type]?.fn;
  const { saveConversion } = useConversions();
  const resultRef = useRef(null);

  const [value, setValue] = useState(initialValue || '');
  const [from, setFrom] = useState(initialFrom || config.units[0]);
  const [to, setTo] = useState(initialTo || config.units[1]);
  const [result, setResult] = useState('');

  useEffect(() => {
    if (initialValue && initialFrom && initialTo) {
      handleConvert(initialValue, initialFrom, initialTo);
    }
  }, [initialValue, initialFrom, initialTo]);

  const handleConvert = (val = value, f = from, t = to) => {
    if (!val || val === '') {
      setResult(`0.0 ${t}`);
      return;
    }
    const res = convertFn(parseFloat(val), f, t);
    setResult(`${res.toFixed(6)} ${t}`);
  };

  const convertButton = (val = value, f = from, t = to) => {
    handleConvert(val, f, t);
    const res = convertFn(parseFloat(val), f, t);
    setResult(`${res.toFixed(6)} ${t}`);
    saveConversion({
      from: f,
      to: t,
      value: parseFloat(val),
      result: parseFloat(res.toFixed(2)),
      type: type,
    });
    resultRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = FAQS[type] || [];
  const imageSrc = CONVERTER_IMAGES[type] || '/images/converters/default.png';

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

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className='w-full min-h-screen py-20 mt-6 px-6 bg-gradient-to-b from-gray-50 to-white'
    >
      {/* JSON-LD Schema */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: `${config.title} | UnitX`,
            applicationCategory: 'EducationApplication',
            operatingSystem: 'All',
            url: `https://unit-converters.vercel.app/converter/${type}`,
            description: config.description,
          }),
        }}
      />

      <div className='justify-center items-center flex flex-col gap-16'>
        {/* Top Section */}
        <div className='flex flex-row justify-between items-center w-full flex-wrap md:flex-nowrap'>
          {/* Left: Converter */}
          <div className='md:w-[50%] w-full'>
            <h1 className='text-5xl font-bold text-gray-900 mb-3'>
              {config.title}
            </h1>
            <p className='text-gray-600 text-lg leading-relaxed'>
              {config.description} Convert between {config.units.join(', ')}{' '}
              easily.
            </p>

            {/* Converter Inputs */}
            <div className='flex flex-col gap-5 items-stretch mt-12'>
              {/* Value Input */}
              <input
                type='number'
                inputMode='decimal'
                placeholder='Enter value'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className='w-full px-6 py-4 border border-gray-300 rounded-xl text-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white transition'
                aria-label='Input value to convert'
              />

              <div className='flex flex-col md:flex-row gap-4'>
                {/* From Dropdown */}
                <Listbox value={from} onChange={setFrom}>
                  <div className='relative w-full'>
                    <Listbox.Button className='w-full px-6 py-4 text-left border border-gray-300 rounded-xl bg-white shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 flex justify-between items-center transition'>
                      {from}
                      <ChevronUpDownIcon className='w-5 h-5 text-gray-500 ml-2' />
                    </Listbox.Button>
                    <Listbox.Options className='absolute z-20 mt-2 w-full bg-white shadow-xl rounded-xl max-h-64 overflow-auto focus:outline-none'>
                      {config.units.map((unit) => (
                        <Listbox.Option key={unit} value={unit} as={Fragment}>
                          {({ active, selected }) => (
                            <li
                              className={`px-5 py-3 cursor-pointer rounded-lg transition-colors ${
                                active
                                  ? 'bg-indigo-100 text-indigo-700'
                                  : 'text-gray-800'
                              }`}
                            >
                              {unit}
                              {selected && (
                                <CheckIcon className='w-4 h-4 text-indigo-500 inline ml-2' />
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
                  <div className='relative w-full'>
                    <Listbox.Button className='w-full px-6 py-4 text-left border border-gray-300 rounded-xl bg-white shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 flex justify-between items-center transition'>
                      {to}
                      <ChevronUpDownIcon className='w-5 h-5 text-gray-500 ml-2' />
                    </Listbox.Button>
                    <Listbox.Options className='absolute z-20 mt-2 w-full bg-white shadow-xl rounded-xl max-h-64 overflow-auto focus:outline-none'>
                      {config.units.map((unit) => (
                        <Listbox.Option key={unit} value={unit} as={Fragment}>
                          {({ active, selected }) => (
                            <li
                              className={`px-5 py-3 cursor-pointer rounded-lg transition-colors ${
                                active
                                  ? 'bg-indigo-100 text-indigo-700'
                                  : 'text-gray-800'
                              }`}
                            >
                              {unit}
                              {selected && (
                                <CheckIcon className='w-4 h-4 text-indigo-500 inline ml-2' />
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
                onClick={() => convertButton()}
                className='w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-4 rounded-xl hover:shadow-lg transition-all text-lg font-semibold'
              >
                Convert
              </button>
            </div>

            {/* Result */}
            <div ref={resultRef} className='mt-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-3'>
                Conversion Result
              </h2>
              <div className='bg-gray-50 border border-gray-200 rounded-xl shadow-inner p-6'>
                <p className='text-lg text-gray-700 mb-2'>
                  You entered:{' '}
                  <span className='font-semibold text-gray-900'>
                    {value || '0'}
                  </span>{' '}
                  {from}
                </p>
                <p className='text-lg text-gray-700 mb-2'>
                  Converted to:{' '}
                  <span className='font-semibold text-gray-900'>{to}</span>
                </p>
                <div className='mt-3'>
                  <input
                    type='text'
                    value={result}
                    readOnly
                    className='w-full px-6 py-4 border border-gray-300 rounded-xl bg-white text-lg font-semibold text-gray-900 shadow-sm focus:outline-none'
                  />
                </div>
                <p className='text-sm text-gray-500 mt-2'>
                  <strong className='text-gray-800'>
                    {value || '0'} {from}
                  </strong>{' '}
                  equals{' '}
                  <strong className='text-indigo-600 font-semibold'>
                    {result}
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className='md:w-[50%] hidden md:flex justify-center items-center'>
            <Image
              src={imageSrc}
              alt={`${config.title} illustration`}
              className='rounded-xl shadow-lg w-full max-w-md object-contain'
              height={300}
              width={300}
            />
          </div>
        </div>

        {/* Extras Section */}
        <ConverterExtras
          config={config}
          exampleConversions={exampleConversions}
        />

        {/* FAQ Section */}
        <div className='mt-16 w-full max-w-6xl mx-auto space-y-6'>
          <h2 className='text-3xl font-bold mb-6 text-center text-gray-900'>
            Frequently Asked Questions
          </h2>
          <div className='space-y-4'>
            {faqs.map((faq, i) => (
              <details key={i} className='group border-b border-gray-200 pb-4'>
                <summary className='cursor-pointer font-medium text-gray-900 group-open:text-indigo-600'>
                  {faq.question}
                </summary>
                <p className='mt-2 text-gray-700 leading-relaxed'>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
