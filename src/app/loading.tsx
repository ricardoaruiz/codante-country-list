import { PageContent, Skeleton } from '@/components';

export default async function HomeLoading() {
  return (
    <PageContent className="grid grid-cols-1 gap-10 px-4 md:grid-cols-2 lg:grid-cols-3 lg:px-0 xl:grid-cols-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <Skeleton key={index} className="h-[300px]" />
      ))}
    </PageContent>
  );
}
