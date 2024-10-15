import React from 'react';
import Image from 'next/image';

type CountryCardProps = {
  name: string;
  flag: string;
};

export const CountryCard = ({ name, flag }: CountryCardProps) => {
  return (
    <article className="mx-auto w-full max-w-[360px] cursor-pointer rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-[1.025] hover:shadow-lg">
      <div className="relative h-[200px]">
        <Image src={flag} alt={name} className="rounded-xl object-cover" fill />
      </div>
      <h2 className="mt-8 text-center text-2xl font-bold">{name}</h2>
    </article>
  );
};
