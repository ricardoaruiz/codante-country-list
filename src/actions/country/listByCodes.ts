'use server';

import { sleep } from '@/helpers/async';

import { BASE_URL } from '../constants';

import {
  ApiCountry,
  CountryListItemInput,
  CountryListItemOutput
} from './types';

const ALPHA_URL = '/alpha';
const CODES = '?codes=';
const FIELDS = `&fields=${['cca3', 'translations', 'flags'].join(',')}`;

export const listCountriesByCodes = async ({
  codes,
  delay
}: CountryListItemInput): Promise<CountryListItemOutput[]> => {
  if (delay) {
    await sleep(delay);
  }

  if (!codes.length) return [];

  const LIST_URL_BY_CODES = `${BASE_URL}${ALPHA_URL}${CODES}${codes}${FIELDS}`;
  const response = await fetch(LIST_URL_BY_CODES);
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
