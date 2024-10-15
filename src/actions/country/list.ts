'use server';

import { sleep } from '@/helpers/async';

import { BASE_URL } from '../constants';

import { ApiCountry, CountryListItemOutput } from './types';

const ALL_URL = '/all';
const FIELDS = `?fields=${['cca3', 'translations', 'flags'].join(',')}`;
const LIST_URL = `${BASE_URL}${ALL_URL}${FIELDS}`;

export const listCountries = async (
  delay?: number
): Promise<CountryListItemOutput[]> => {
  if (delay) {
    await sleep(delay);
  }

  const response = await fetch(LIST_URL);
  const data = (await response.json()) as ApiCountry[];

  const countries: CountryListItemOutput[] = data.map(
    (country: ApiCountry) => ({
      code: country.cca3,
      name: country.translations.por.common,
      flag: country.flags.svg
    })
  );

  return countries;
};
