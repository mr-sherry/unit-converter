'use client';

import { useState, Fragment, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { converters } from '@/lib/conversions';
import { FAQS } from '@/lib/faqs';
import { CONVERTER_IMAGES } from '@/lib/converterImages';
import { Listbox } from '@headlessui/react';
import {
  ChevronUpDownIcon,
  CheckIcon,
  ScaleIcon,
  FireIcon,
  BoltIcon,
  ArrowsRightLeftIcon,
  Squares2X2Icon,
  CubeIcon,
} from '@heroicons/react/20/solid';
import { useConversions } from '@/context/ConversionsContext';
import Image from 'next/image';
import RecentConversions from './RecentConversions';
import ConverterExtras from './ConvertersExtras';

export default function Converter({
  type,
  config,
  from: initialFrom,
  to: initialTo,
  value: initialValue,
}) {
  const convertFn = converters[type]?.fn; // type should match converters map
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${config.title} | UnitX`,
    applicationCategory: 'EducationApplication',
    operatingSystem: 'All',
    url: `https://unit-converters.vercel.app/converter/${type}`,
    description: config.description,
    potentialAction: {
      '@type': 'Action',
      name: 'Convert units',
      target: `https://unit-converters.vercel.app/converter/${type}/{from}-to-{to}/{value}`,
      'query-input': 'required name=value',
    },
  };

  const benefits = [
    'Free & Ad-Free',
    'Works Offline',
    'Fast & Accurate',
    'Mobile & Desktop Friendly',
  ];

  const instructions = [
    'Enter the value you want to convert.',
    'Select the unit you are converting from.',
    'Select the unit you want to convert to.',
    "Click 'Convert' to see the result instantly.",
  ];

  const relatedConverters = [
    { key: 'weight', title: 'Weight Converter', icon: ScaleIcon },
    { key: 'temperature', title: 'Temperature Converter', icon: FireIcon },
    { key: 'power', title: 'Power Converter', icon: BoltIcon },
    { key: 'length', title: 'Length Converter', icon: ArrowsRightLeftIcon },
    { key: 'area', title: 'Area Converter', icon: Squares2X2Icon },
    { key: 'volume', title: 'Volume Converter', icon: CubeIcon },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className='w-full min-h-screen py-20 mt-6 px-6 bg-gradient-to-b from-white to-gray-50'
    >
      {/* JSON-LD Schema */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className='justify-center items-center flex flex-col gap-16'>
        <div className='flex flex-row justify-between items-center w-[100%]'>
          <div className='md:w-[50%] w-[100%]'>
            <h1 className='text-5xl font-bold text-gray-900'>{config.title}</h1>
            <p className='text-gray-700 text-lg'>
              {config.description} Convert between {config.units.join(', ')}{' '}
              easily.
            </p>

            {/* Converter Inputs */}
            <div className='flex flex-col gap-4 items-stretch mt-20'>
              {/* Value Input */}
              <input
                type='number'
                inputMode='decimal'
                placeholder='Enter value'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className='w-full px-6 py-4 border-2 border-gray-300 focus:border-primary focus:outline-none text-lg rounded-lg shadow-md'
                aria-label='Input value to convert'
              />

              <div className='flex flex-col md:flex-row gap-3'>
                <div className='flex flex-row w-full'>
                  {/* From Dropdown */}
                  <Listbox value={from} onChange={setFrom}>
                    <div className='relative w-full'>
                      <Listbox.Button className='w-full px-6 py-4 text-left border-2 border-gray-300 rounded-lg bg-white shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary flex justify-between items-center'>
                        {from}
                        <ChevronUpDownIcon className='w-5 h-5 text-white ml-2' />
                      </Listbox.Button>
                      <Listbox.Options className='absolute z-20 mt-1 w-full bg-white shadow-lg rounded-lg max-h-64 overflow-auto focus:outline-none ring-1 ring-black ring-opacity-5'>
                        {config.units.map((unit) => (
                          <Listbox.Option key={unit} value={unit} as={Fragment}>
                            {({ active, selected }) => (
                              <li
                                className={`cursor-pointer select-none relative px-6 py-3 flex items-center justify-between rounded-md mb-1 transition-colors hover:bg-gray-800 hover:text-white ${
                                  active
                                    ? 'bg-primary text-black'
                                    : 'text-gray-900'
                                }`}
                              >
                                <span
                                  className={
                                    selected ? 'font-bold' : 'font-medium'
                                  }
                                >
                                  {unit}
                                </span>
                                {selected && (
                                  <CheckIcon
                                    className='w-5 h-5 text-primary'
                                    aria-hidden='true'
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
                    <div className='relative w-full'>
                      <Listbox.Button className='w-full px-6 py-4 text-left border-2 border-gray-300 rounded-lg bg-white shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary flex justify-between items-center'>
                        {to}
                        <ChevronUpDownIcon className='w-5 h-5 text-white ml-2' />
                      </Listbox.Button>
                      <Listbox.Options className='absolute z-20 mt-1 w-full bg-white shadow-lg rounded-lg max-h-64 overflow-auto focus:outline-none ring-1 ring-black ring-opacity-5'>
                        {config.units.map((unit) => (
                          <Listbox.Option key={unit} value={unit} as={Fragment}>
                            {({ active, selected }) => (
                              <li
                                className={`cursor-pointer select-none relative px-6 py-3 flex items-center justify-between rounded-md mb-1 transition-colors hover:bg-gray-800 ${
                                  active
                                    ? 'bg-primary text-black'
                                    : 'text-gray-900'
                                }`}
                              >
                                <span
                                  className={
                                    selected ? 'font-bold' : 'font-medium'
                                  }
                                >
                                  {unit}
                                </span>
                                {selected && (
                                  <CheckIcon
                                    className='w-5 h-5 text-primary'
                                    aria-hidden='true'
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
                  onClick={() => convertButton()}
                  className='w-full sm:w-auto bg-primary text-white py-4 px-8 rounded-lg hover:bg-primary/90 transition text-lg font-semibold shadow-md'
                >
                  Convert
                </button>
              </div>
            </div>

            {/* Result */}
            <div ref={resultRef} className='mt-6'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-3'>
                Conversion Result
              </h2>
              <div className='bg-gray-50 border-2 border-gray-200 rounded-lg shadow-inner p-6'>
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
                <div className='flex items-center justify-between mt-3'>
                  <input
                    type='text'
                    value={result}
                    readOnly
                    className='w-full px-6 py-4 border-2 border-gray-300 rounded-lg bg-white text-lg font-semibold text-gray-900 shadow-sm'
                    aria-label={`Converted value from ${from} to ${to}`}
                  />
                </div>
                <p className='text-sm text-gray-500 mt-2'>
                  This means{' '}
                  <strong className='text-gray-800'>
                    {value || '0'} {from}
                  </strong>{' '}
                  is equal to{' '}
                  <strong className='text-gray-800'>{result}</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className='md:w-[50%] none md:block'>
            <div className='hidden md:flex justify-center items-center'>
              <Image
                src={imageSrc}
                alt={`${config.title} illustration`}
                className='hidden md:block w-full max-w-md object-contain'
                height={200}
                width={200}
              />
            </div>
          </div>
        </div>

        <ConverterExtras
          config={config}
          benefits={benefits}
          instructions={instructions}
          exampleConversions={exampleConversions}
          relatedConverters={relatedConverters}
        />
      </div>

      {/* FAQ */}
      <div className='mt-16 w-full max-w-6xl mx-auto space-y-6'>
        <h2 className='text-3xl font-bold mb-6 text-center'>
          Frequently Asked Questions
        </h2>
        <div className='space-y-4'>
          {faqs.map((faq, i) => (
            <details key={i} className='group border-b border-gray-300 pb-4'>
              <summary className='cursor-pointer font-medium text-gray-900 group-open:text-primary'>
                {faq.question}
              </summary>
              <p className='mt-2 text-gray-700'>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
