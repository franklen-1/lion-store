export const currencyFormatter = (value: number) => {
  return value.toLocaleString('es-PEN', {
    style: 'currency',
    currency: 'PEN',
    minimumFractionDigits: 2,
  });
};
