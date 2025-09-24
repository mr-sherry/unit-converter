import { CONVERTERS, CONVERTER_SLUGS } from '@/lib/convertersMap';
import RecentConversionsSide from '@/components/Converter/RecentConversionsSide';
import LoaderLink from '@/components/LoaderLink';

export const metadata = {
  title: 'All Converters | UnitX',
  description: 'Browse all unit converters in one place.',
};

export default function AllConversions() {
  return (
    <section className='w-full md:my-20 my-25 px-6 flex md:flex-row flex-col'>
      <div className='md:w-[75%] w-full mx-auto'>
        <h1 className='text-3xl font-bold mb-8'>All Converters</h1>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {CONVERTER_SLUGS.map((slug) => {
            const converter = CONVERTERS[slug];

            // Build a **default URL** for each converter type
            // using the first two units from its config
            const cleanUnit = (unit) => unit.replace('/', '-');
            const defaultFrom = cleanUnit(converter.units[0]); // "m-s"
            const defaultTo = cleanUnit(converter.units[1]); // "km-h"
            const defaultValue = 1;

            return (
              <LoaderLink
                key={slug}
                href={`/converter/${slug}/${defaultFrom}-to-${defaultTo}/${defaultValue}`}
                className='p-5 rounded-xl border bg-white hover:shadow-sm transition'
              >
                <h2 className='font-semibold'>{converter.title}</h2>
                <p className='text-sm text-gray-600 mt-1'>
                  {converter.description}
                </p>
              </LoaderLink>
            );
          })}
        </div>
      </div>

      <div className='md:w-[20%] w-full mt-5'>
        <RecentConversionsSide />
      </div>
    </section>
  );
}
