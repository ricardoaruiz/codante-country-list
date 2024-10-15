import { ComponentProps } from 'react';

import { cnames } from '@/helpers/classname';

type SkeletonProps = ComponentProps<'div'>;

export const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return (
    <div
      className={cnames(
        'h-10 animate-pulse rounded-md bg-slate-500/10',
        className
      )}
      {...props}
    />
  );
};
