import { tv } from 'tailwind-variants';

export const styles = tv({
  base: 'relative',
  variants: {
    size: {
      small: 'w-[52px] h-[52px]',
      base: 'w-[104px] h-[104px]',
      large: 'w-[156px] h-[156px]'
    }
  },
  defaultVariants: {
    size: 'base'
  }
});
