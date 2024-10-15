'use server';

import { sleep } from '@/helpers/async';

import { BASE_URL } from '../constants';

import { ApiCountry, CountryDetailInput, CountryDetailOutput } from './types';

const LIST_REQUEST_FIELDS = [
  'name',
  'translations',
  'capital',
  'flags',
  'population',
  'continents',
  'region',
  'languages',
  'borders'
];

const ALPHA_URL = '/alpha';
const FIELDS = `?fields=${LIST_REQUEST_FIELDS.join(',')}`;

export const detailCountry = async ({
  code,
  delay
}: CountryDetailInput): Promise<CountryDetailOutput> => {
  if (delay) {
    await sleep(delay);
  }

  const DETAIL_URL = `${BASE_URL}${ALPHA_URL}/${code}${FIELDS}`;
  const response = await fetch(DETAIL_URL);

  const country = (await response.json()) as ApiCountry;

  const data: CountryDetailOutput = {
    code: country.cca3,
    name: country.translations.por.common,
    capital: country.capital[0],
    population: country.population,
    flag: country.flags.svg,
    continent: country.continents[0],
    region: country.region,
    languages: country.languages
      ? Object.values(country.languages).map((language: string) => language)
      : [],
    borders: country.borders
  };

  return data;
};
