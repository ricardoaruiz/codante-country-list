import { ComponentProps } from 'react';
import { VariantProps } from 'tailwind-variants';

import { styles } from './styles';

export type LogoProps = ComponentProps<'div'> & VariantProps<typeof styles>;
