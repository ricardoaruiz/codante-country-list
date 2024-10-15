// API model
export type ApiCountry = {
  cca3: string;
  translations: {
    por: {
      common: string;
    };
  };
  capital: string[];
  population: number;
  flags: {
    svg: string;
  };
  continents: string[];
  region: string;
  languages: {
    [key: string]: string;
  };
  borders: string[];
};

// Actions model
export type Country = {
  code: string;
  name: string;
  capital: string;
  flag: string;
  population: number;
  continent: string;
  region: string;
  languages: string[];
  borders: string[];
};

export type CountryListItemInput = { codes: string[]; delay?: number };
export type CountryListItemOutput = Pick<Country, 'code' | 'name' | 'flag'>;

export type CountryDetailInput = { code: string; delay?: number };
export type CountryDetailOutput = Country;
