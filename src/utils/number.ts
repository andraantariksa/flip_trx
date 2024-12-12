const currencyIdFormatter = new Intl.NumberFormat("id-ID");

export const formatNumber = (number: number): string =>
    currencyIdFormatter.format(number);
