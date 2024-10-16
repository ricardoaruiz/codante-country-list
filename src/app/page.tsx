import { listCountries } from '@/actions/country/list';
import { PageContent } from '@/components';
import { CountryList } from '@/components/CountryList';

export default async function Home() {
  const countries = await listCountries(2000);

  return (
    <PageContent>
      <CountryList data={countries} />
    </PageContent>
  );
}
