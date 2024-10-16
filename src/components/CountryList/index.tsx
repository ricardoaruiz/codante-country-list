'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { CountryListItemOutput } from '@/actions/country/types';
import useDebounce from '@/hooks/useDebounce';

import { CountryCard } from '../CountryCard';

type CountryListProps = {
  data: CountryListItemOutput[];
};

export const CountryList = ({ data }: CountryListProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const searcInputRef = useRef<HTMLInputElement>(null);

  const urlSearchTerm = searchParams.get('name');
  const [search, setSearch] = useState<string>(urlSearchTerm ?? '');
  const debouncedSearchTerm = useDebounce(search, 100);

  const countries = useMemo(
    () =>
      !urlSearchTerm
        ? data
        : data.filter((item) =>
            item.name.toLowerCase().includes(urlSearchTerm.toLowerCase())
          ),
    [data, urlSearchTerm]
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set('name', String(debouncedSearchTerm));
    router.push(`${pathName}?${params.toString()}`);
  }, [debouncedSearchTerm, pathName, router, searchParams]);

  useEffect(() => {
    if (searcInputRef.current) {
      searcInputRef.current.focus();
    }
  }, [countries]);

  return (
    <section className="grid gap-10">
      <div className="flex items-center justify-center">
        <input
          ref={searcInputRef}
          type="text"
          placeholder="Busque o país. Pode ser maíscula ou minúscula."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/3 rounded-md border-none p-4 text-lg font-bold outline-none ring-2 ring-transparent transition-all duration-300 hover:ring-indigo-400 focus:ring-indigo-600"
        />
      </div>

      {!countries.length && (
        <div className="mt-20 flex flex-col items-center justify-center gap-4">
          <p className="text-3xl">Nenhum país encontrado para a sua busca.</p>
          <p>Se atente para pontuação e acentuação ao fazer a busca!</p>
          <p>{'Exemplo: "itália" é diferente de "italia"'}</p>
        </div>
      )}

      {!!countries.length && (
        <div className="grid grid-cols-1 gap-10 px-4 md:grid-cols-2 lg:grid-cols-3 lg:px-0 xl:grid-cols-4">
          {countries.map((country, i) => {
            return (
              <Link href={`/country/${country.code}`} key={i}>
                <CountryCard name={country.name} flag={country.flag} />
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
};
