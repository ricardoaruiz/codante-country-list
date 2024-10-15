import React, { ComponentProps } from 'react';

import { cnames } from '@/helpers/classname';

type PageContent = ComponentProps<'section'>;

export function PageContent({ className, ...props }: PageContent) {
  return (
    <section
      className={cnames('container mx-auto pb-20', className)}
      {...props}
    />
  );
}
