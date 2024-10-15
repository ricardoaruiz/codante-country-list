import React from 'react';

import { Logo } from '../Logo';

export const Navbar = () => {
  return (
    <nav className="container mx-auto flex h-[104px] items-center gap-2 px-4 md:px-0">
      <Logo size="small" />
      <h1 className="text-2xl font-bold">Países do mundo</h1>
    </nav>
  );
};
