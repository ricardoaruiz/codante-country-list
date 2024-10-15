const numberFormatter = new Intl.NumberFormat('pt-BR', {
  notation: 'compact',
  compactDisplay: 'short',
  maximumFractionDigits: 1
});

export const formatNumber = (value: number) => {
  return numberFormatter.format(value);
};
