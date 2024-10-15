import Link from 'next/link';

import { listCountries } from '@/actions/country/list';
import { CountryCard, PageContent } from '@/components';

export default async function Home() {
  const countries = await listCountries();

  return (
    <PageContent className="grid grid-cols-1 gap-10 px-4 md:grid-cols-2 lg:grid-cols-3 lg:px-0 xl:grid-cols-4">
      {countries.map((country) => (
        <Link href={`/country/${country.code}`} key={country.name}>
          <CountryCard name={country.name} flag={country.flag} />
        </Link>
      ))}
    </PageContent>
  );
}
