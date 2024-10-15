import React from 'react';

import { Skeleton } from '../Skeleton';

export const NeighboringCountriesSkeleton = () => {
  return (
    <div className="mt-4 grid gap-4">
      <Skeleton className="w-1/3" />

      <ul className="grid grid-cols-1 gap-10 px-4 md:grid-cols-2 lg:grid-cols-3 lg:px-0 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className="h-[300px]" />
        ))}
      </ul>
    </div>
  );
};
