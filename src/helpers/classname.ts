import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges multiple class names into a single string, like `clsx`, but uses
 * `tailwind-merge` under the hood.
 *
 * @param inputs - Class names to merge.
 * @returns A single string of merged class names.
 */
export const cnames = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(...inputs));
};
