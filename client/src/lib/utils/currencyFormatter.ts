// utils/currencyFormatter.ts
export const formatPriceToZAR = (price: number | string): string => {
//   if (typeof price !== 'number' || isNaN(price)) {
  if (typeof price == 'string') {
    price = parseInt(price);

    price = price * 17.63;
    // You might want to throw an error, log a warning, or return a specific string like "N/A"
    // depending on how you want to handle invalid input.
    // For now, returning an empty string as per your original code.
    } else if (isNaN(price)) {
      return '';
    }

  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};