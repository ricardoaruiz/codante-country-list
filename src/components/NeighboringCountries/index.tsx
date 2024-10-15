import React, { ComponentProps } from 'react';
import Link from 'next/link';

import { listCountriesByCodes } from '@/actions/country/listByCodes';
import { cnames } from '@/helpers/classname';

import { CountryCard } from '../CountryCard';

type NeighboringCountriesProps = ComponentProps<'div'> & {
  borders: string[];
};

export const NeighboringCountries = async ({
  className,
  borders,
  ...props
}: NeighboringCountriesProps) => {
  const countries = await listCountriesByCodes({ codes: borders, delay: 1500 });

  if (!countries.length) return null;

  return (
    <div className={cnames(className)} {...props}>
      <h2 className="text-bold my-8 text-4xl">Países que fazem fronteira</h2>

      <ul className="grid grid-cols-1 gap-10 px-4 md:grid-cols-2 lg:grid-cols-3 lg:px-0 xl:grid-cols-4">
        {countries.map((country) => (
          <li key={country.code}>
            <Link href={`/country/${country.code}`} key={country.name}>
              <CountryCard name={country.name} flag={country.flag} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
