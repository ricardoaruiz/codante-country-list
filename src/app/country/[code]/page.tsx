import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { detailCountry } from '@/actions/country/detail';
import { NeighboringCountries, PageContent } from '@/components';
import { NeighboringCountriesSkeleton } from '@/components/NeighboringCountries/NeighboringCountriesSkeleton';
import { formatNumber } from '@/helpers/math';

type CountryProps = {
  params: {
    code: string;
  };
};

export default async function Country({ params }: CountryProps) {
  const country = await detailCountry({ code: params.code, delay: 1500 });

  return (
    <PageContent className="px-10 xl:px-0">
      <h1 className="mb-16 text-center text-6xl font-bold">{country.name}</h1>

      <Link
        href="/"
        className="mb-4 inline-flex items-center gap-2 hover:text-slate-500"
      >
        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.14395 0.673555C5.38301 0.90793 5.38301 1.29699 5.14863 1.53606L2.30332 4.39074H13.1455C13.4783 4.39074 13.7502 4.66262 13.7502 5.00012C13.7502 5.33762 13.4783 5.60949 13.1455 5.60949H2.30332L5.15332 8.46418C5.3877 8.70324 5.38301 9.08762 5.14863 9.32668C4.90957 9.56106 4.52988 9.56106 4.29082 9.32199L0.428321 5.43137C0.376758 5.37512 0.33457 5.31418 0.301758 5.23918C0.268945 5.16418 0.254883 5.08449 0.254883 5.00481C0.254883 4.84543 0.315821 4.69543 0.428321 4.57824L4.29082 0.687618C4.52051 0.443868 4.90488 0.43918 5.14395 0.673555Z"
            fill="currentColor"
          />
        </svg>
        Voltar
      </Link>
      <article className="flex flex-col items-center gap-4 rounded-xl bg-white p-6 md:flex-row md:justify-between">
        <ul className="flex flex-col gap-3 text-lg">
          <li>🏙️ Capital: {country.capital}</li>
          <li>🗺️ Continente: {country.continent}</li>
          <li>‍👩‍👧‍👦 População: {formatNumber(country.population)}</li>
          <li>
            <div>🗣️ Línguas faladas:</div>
            <ul className="mt-4 flex w-1/2 flex-wrap gap-2">
              {country.languages.map((language) => (
                <li
                  key={language}
                  className="flex w-fit justify-center rounded-xl bg-indigo-700 px-3 text-white"
                >
                  {language}
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <div className="relative h-[270px] w-full max-w-[400px]">
          <Image
            src={country.flag}
            alt={country.name}
            className="rounded-xl border border-slate-300 object-cover"
            fill
          />
        </div>
      </article>

      <Suspense fallback={<NeighboringCountriesSkeleton />}>
        <NeighboringCountries borders={country.borders} />
      </Suspense>
    </PageContent>
  );
}
