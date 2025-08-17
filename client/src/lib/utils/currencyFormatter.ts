export const formatPriceToZAR = (price: number | string, conversionRate: number = 17.63): string => {
  if (price === null || price === undefined || price === '') {
    return '';
  }

  let numericPrice: number;
  
  if (typeof price === 'string') {
    numericPrice = parseFloat(price);
    if (isNaN(numericPrice)) {
      return '';
    }
  } else {
    numericPrice = price;
    if (isNaN(numericPrice)) {
      return '';
    }
  }

  const convertedPrice = numericPrice * conversionRate;

  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(convertedPrice);
};