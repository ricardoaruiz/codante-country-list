'use server';

import { BASE_URL } from '../constants';

import { ApiCountry, CountryListItem } from './types';

const ALPHA_URL = '/alpha';
const CODES = '?codes=';
const FIELDS = `&fields=${['cca3', 'translations', 'flags'].join(',')}`;

export const listCountriesByCodes = async (
  ...codes: string[]
): Promise<CountryListItem[]> => {
  if (!codes.length) return [];

  const LIST_URL_BY_CODES = `${BASE_URL}${ALPHA_URL}${CODES}${codes}${FIELDS}`;
  const response = await fetch(LIST_URL_BY_CODES);
  const data = (await response.json()) as ApiCountry[];

  const countries: CountryListItem[] = data.map((country: ApiCountry) => ({
    code: country.cca3,
    name: country.translations.por.common,
    flag: country.flags.svg
  }));

  return countries;
};
