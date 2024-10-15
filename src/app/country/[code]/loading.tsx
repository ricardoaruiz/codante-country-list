import { PageContent } from '@/components';
import { Skeleton } from '@/components/Skeleton';

export default async function Country() {
  return (
    <PageContent className="grid grid-cols-1 gap-10 px-10 xl:px-0">
      <div className="flex justify-center">
        <Skeleton className="h-20 w-1/2" />
      </div>

      <Skeleton className="w-1/3" />

      <Skeleton className="h-[300px]" />
    </PageContent>
  );
}
