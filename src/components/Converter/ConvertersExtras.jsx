'use client';

import RecentConversions from '@/components/Converter/RecentConversions';
import {
  ScaleIcon,
  FireIcon,
  BoltIcon,
  ArrowsRightLeftIcon,
  Squares2X2Icon,
  CubeIcon,
} from '@heroicons/react/20/solid';

export default function ConverterExtras({ config }) {
  const seo = config?.seoContent || {};

  // Related Converters remain static
  const relatedConverters = [
    {
      key: 'weight',
      title: 'Weight Converter',
      icon: ScaleIcon,
      from: 'kg',
      to: 'g',
      value: 1,
    },
    {
      key: 'temperature',
      title: 'Temperature Converter',
      icon: FireIcon,
      from: 'C',
      to: 'F',
      value: 1,
    },
    {
      key: 'power',
      title: 'Power Converter',
      icon: BoltIcon,
      from: 'W',
      to: 'kW',
      value: 1,
    },
    {
      key: 'length',
      title: 'Length Converter',
      icon: ArrowsRightLeftIcon,
      from: 'm',
      to: 'cm',
      value: 1,
    },
    {
      key: 'area',
      title: 'Area Converter',
      icon: Squares2X2Icon,
      from: 'm²',
      to: 'cm²',
      value: 1,
    },
    {
      key: 'volume',
      title: 'Volume Converter',
      icon: CubeIcon,
      from: 'L',
      to: 'mL',
      value: 1,
    },
  ];

  return (
    <div className='w-full'>
      {/* Recent Conversions */}
      <div className='w-full max-w-6xl mx-auto'>
        <RecentConversions />
      </div>

      {/* Main Intro */}
      {seo.mainIntro && (
        <div className='w-full max-w-6xl mx-auto mt-12'>
          <p className='text-lg text-gray-700'>{seo.mainIntro}</p>
        </div>
      )}

      {/* What is Currency Converter */}
      {seo.whatIsCurrencyConverter && (
        <div className='w-full max-w-6xl mx-auto mt-8'>
          <h2 className='text-3xl font-bold mb-3 text-gray-900 border-b-2 border-primary pb-2'>
            What Is a Currency Converter?
          </h2>
          <p className='text-gray-700'>{seo.whatIsCurrencyConverter}</p>
        </div>
      )}

      {/* Units You Can Convert */}
      {seo.unitsYouCanConvert && (
        <div className='w-full max-w-6xl mx-auto mt-8'>
          <h2 className='text-3xl font-bold mb-3 text-gray-900 border-b-2 border-primary pb-2'>
            Currencies You Can Convert
          </h2>
          <p className='text-gray-700 mb-3'>
            {seo.unitsYouCanConvert.description}
          </p>
          <ul className='grid md:grid-cols-2 gap-3 text-gray-700'>
            {seo.unitsYouCanConvert.examples?.map((example, i) => (
              <li
                key={i}
                className='p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition'
              >
                {example}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Who Is This Tool For */}
      {seo.whoIsThisToolFor && (
        <div className='w-full max-w-6xl mx-auto mt-8'>
          <h2 className='text-3xl font-bold mb-3 text-gray-900 border-b-2 border-primary pb-2'>
            Who Is This Tool For?
          </h2>
          <ul className='grid md:grid-cols-2 gap-3 text-gray-700'>
            {seo.whoIsThisToolFor.map((item, i) => (
              <li
                key={i}
                className='p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition'
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Why Quick Access Matters */}
      {seo.whyQuickAccessMatters && (
        <div className='w-full max-w-6xl mx-auto mt-8'>
          <p className='text-gray-700'>{seo.whyQuickAccessMatters}</p>
        </div>
      )}

      {/* How Conversions Determined */}
      {seo.howConversionsDetermined && (
        <div className='w-full max-w-6xl mx-auto mt-8'>
          <p className='text-gray-700'>{seo.howConversionsDetermined}</p>
        </div>
      )}

      {/* Real World Examples */}
      {config.realWorldExamples?.length > 0 && (
        <div className='w-full max-w-6xl mx-auto mt-12'>
          <h2 className='text-3xl font-bold mb-3 text-gray-900 border-b-2 border-primary pb-2'>
            Real World Examples
          </h2>
          <ul className='grid md:grid-cols-2 gap-3 text-gray-700'>
            {config.realWorldExamples.map((example, i) => (
              <li
                key={i}
                className='p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition'
              >
                {example}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Why Use Our Currency Converter */}
      {seo.whyUseOurCurrencyConverter && (
        <div className='w-full max-w-6xl mx-auto mt-12'>
          <h2 className='text-3xl font-bold mb-3 text-gray-900 border-b-2 border-primary pb-2'>
            Why Use Our Currency Converter?
          </h2>
          <p className='text-gray-700 mb-3'>
            {seo.whyUseOurCurrencyConverter.description}
          </p>
          <ul className='grid md:grid-cols-2 gap-3 text-gray-700'>
            {seo.whyUseOurCurrencyConverter.features?.map((feature, i) => (
              <li
                key={i}
                className='flex items-start gap-2 bg-white shadow-sm p-3 rounded-lg hover:shadow-md transition'
              >
                <span className='text-primary font-bold'>✔</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Popular Conversions */}
      {seo.popularConversions && (
        <div className='w-full max-w-6xl mx-auto mt-12'>
          <h2 className='text-3xl font-bold mb-3 text-gray-900 border-b-2 border-primary pb-2'>
            Popular Conversions
          </h2>
          <ul className='grid md:grid-cols-2 gap-3 text-gray-700'>
            {seo.popularConversions.map((ex, i) => (
              <li
                key={i}
                className='p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition'
              >
                {ex}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Helpful Tips */}
      {seo.helpfulTips && (
        <div className='w-full max-w-6xl mx-auto mt-12'>
          <h2 className='text-3xl font-bold mb-3 text-gray-900 border-b-2 border-primary pb-2'>
            Helpful Tips
          </h2>
          <ul className='grid md:grid-cols-2 gap-3 text-gray-700'>
            {seo.helpfulTips.map((tip, i) => (
              <li
                key={i}
                className='p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition'
              >
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* How To Use */}
      {seo.howToUseConverter && (
        <div className='w-full max-w-6xl mx-auto mt-12'>
          <h2 className='text-3xl font-bold mb-3 text-gray-900 border-b-2 border-primary pb-2'>
            How To Use
          </h2>
          <ol className='space-y-3 text-gray-700'>
            {seo.howToUseConverter.map((inst, i) => (
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
      )}

      {/* Ready To Convert */}
      {seo.readyToConvert && (
        <div className='w-full max-w-6xl mx-auto mt-12'>
          <p className='text-gray-700'>{seo.readyToConvert}</p>
        </div>
      )}

      {/* Related Converters */}
      <div className='w-full max-w-6xl mx-auto mt-12'>
        <h2 className='text-3xl font-bold mb-3 text-gray-900 border-b-2 border-primary pb-2'>
          Related Converters
        </h2>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {relatedConverters.map((conv) => {
            const Icon = conv.icon;
            return (
              <a
                key={conv.key}
                href={`/converter/${conv.key}/${conv.value}-${conv.from}-to-${conv.to}`}
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
