// src/components/Converter/ConverterExtraSections.jsx
'use client';

import RecentConversions from '@/components/Converter/RecentConversions';

export default function ConverterExtras({
  config,
  benefits,
  instructions,
  exampleConversions,
  relatedConverters,
}) {
  return (
    <div className='w-full'>
      {/* Recent Conversions */}
      <div className='w-full max-w-6xl mx-auto'>
        <RecentConversions />
      </div>

      {/* Real World Examples */}
      <div className='w-full max-w-6xl mx-auto mt-12'>
        <h2 className='text-3xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2'>
          Real World Examples
        </h2>
        <ul className='grid md:grid-cols-2 gap-3 text-gray-700'>
          {config.realWorldExamples?.map((example, i) => (
            <li
              key={i}
              className='p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition'
            >
              {example}
            </li>
          ))}
        </ul>
      </div>

      {/* Why Use This Converter? */}
      <div className='w-full max-w-6xl mx-auto mt-20'>
        <h2 className='text-3xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2'>
          Why Use This Converter?
        </h2>
        <ul className='grid md:grid-cols-2 gap-3 text-gray-700'>
          {benefits.map((b, i) => (
            <li
              key={i}
              className='flex items-start gap-2 bg-white shadow-sm p-3 rounded-lg hover:shadow-md transition'
            >
              <span className='text-primary font-bold'>✔</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className='w-full max-w-6xl mx-auto mt-12'>
        <h2 className='text-3xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2'>
          How To Use
        </h2>
        <ol className='space-y-3 text-gray-700'>
          {instructions.map((inst, i) => (
            <li
              key={i}
              className='flex items-start gap-3 bg-gray-50 border border-gray-200 p-3 rounded-lg hover:bg-gray-100'
            >
              <span className='text-primary font-bold'>{i + 1}.</span>
              <span>{inst}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Example Conversions */}
      <div className='w-full max-w-6xl mx-auto mt-12'>
        <h2 className='text-3xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2'>
          Example Conversions
        </h2>
        <ul className='grid md:grid-cols-2 gap-3 text-gray-700'>
          {exampleConversions.map((ex, i) => (
            <li
              key={i}
              className='p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition'
            >
              {ex}
            </li>
          ))}
        </ul>
      </div>

      {/* Related Converters */}
      <div className='w-full max-w-6xl mx-auto mt-12'>
        <h2 className='text-3xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2'>
          Related Converters
        </h2>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {relatedConverters.map((conv) => {
            const Icon = conv.icon;
            return (
              <a
                key={conv.key}
                href={`/converter/${conv.key}`}
                className='flex flex-col items-center justify-center p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md bg-white transition group'
              >
                <Icon className='w-14 h-14 mb-3 text-primary group-hover:scale-110 transition-transform' />
                <span className='text-gray-900 font-medium text-center text-lg'>
                  {conv.title}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
