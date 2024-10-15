import Image from 'next/image';

import { cnames } from '@/helpers/classname';

import { styles } from './styles';
import { LogoProps } from './types';

export const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <div className={cnames(styles(props), className)}>
      <Image src="/assets/images/logo.svg" alt="Logo" fill />
    </div>
  );
};
