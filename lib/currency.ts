export const SOURCE_CURRENCY = "SAR";
export const SOURCE_COUNTRY = "SA";

export interface SupportedCountry {
  code: string;
  name: string;
  currency: string;
}

const COUNTRY_TO_CURRENCY: Record<string, string> = {
  AE: "AED",
  AR: "ARS",
  AT: "EUR",
  AU: "AUD",
  BE: "EUR",
  BH: "BHD",
  BR: "BRL",
  CA: "CAD",
  CH: "CHF",
  CN: "CNY",
  DE: "EUR",
  DK: "DKK",
  EG: "EGP",
  ES: "EUR",
  FI: "EUR",
  FR: "EUR",
  GB: "GBP",
  GR: "EUR",
  HK: "HKD",
  ID: "IDR",
  IE: "EUR",
  IN: "INR",
  IT: "EUR",
  JO: "JOD",
  JP: "JPY",
  KW: "KWD",
  LB: "LBP",
  MA: "MAD",
  MX: "MXN",
  MY: "MYR",
  NL: "EUR",
  NO: "NOK",
  NZ: "NZD",
  OM: "OMR",
  PH: "PHP",
  QA: "QAR",
  SA: SOURCE_CURRENCY,
  SE: "SEK",
  SG: "SGD",
  TH: "THB",
  TR: "TRY",
  US: "USD",
  ZA: "ZAR",
};

export const SUPPORTED_COUNTRIES: SupportedCountry[] = [
  { code: "AE", name: "United Arab Emirates", currency: "AED" },
  { code: "AR", name: "Argentina", currency: "ARS" },
  { code: "AT", name: "Austria", currency: "EUR" },
  { code: "AU", name: "Australia", currency: "AUD" },
  { code: "BE", name: "Belgium", currency: "EUR" },
  { code: "BH", name: "Bahrain", currency: "BHD" },
  { code: "BR", name: "Brazil", currency: "BRL" },
  { code: "CA", name: "Canada", currency: "CAD" },
  { code: "CH", name: "Switzerland", currency: "CHF" },
  { code: "CN", name: "China", currency: "CNY" },
  { code: "DE", name: "Germany", currency: "EUR" },
  { code: "DK", name: "Denmark", currency: "DKK" },
  { code: "EG", name: "Egypt", currency: "EGP" },
  { code: "ES", name: "Spain", currency: "EUR" },
  { code: "FI", name: "Finland", currency: "EUR" },
  { code: "FR", name: "France", currency: "EUR" },
  { code: "GB", name: "United Kingdom", currency: "GBP" },
  { code: "GR", name: "Greece", currency: "EUR" },
  { code: "HK", name: "Hong Kong", currency: "HKD" },
  { code: "ID", name: "Indonesia", currency: "IDR" },
  { code: "IE", name: "Ireland", currency: "EUR" },
  { code: "IN", name: "India", currency: "INR" },
  { code: "IT", name: "Italy", currency: "EUR" },
  { code: "JO", name: "Jordan", currency: "JOD" },
  { code: "JP", name: "Japan", currency: "JPY" },
  { code: "KW", name: "Kuwait", currency: "KWD" },
  { code: "LB", name: "Lebanon", currency: "LBP" },
  { code: "MA", name: "Morocco", currency: "MAD" },
  { code: "MX", name: "Mexico", currency: "MXN" },
  { code: "MY", name: "Malaysia", currency: "MYR" },
  { code: "NL", name: "Netherlands", currency: "EUR" },
  { code: "NO", name: "Norway", currency: "NOK" },
  { code: "NZ", name: "New Zealand", currency: "NZD" },
  { code: "OM", name: "Oman", currency: "OMR" },
  { code: "PH", name: "Philippines", currency: "PHP" },
  { code: "QA", name: "Qatar", currency: "QAR" },
  { code: SOURCE_COUNTRY, name: "Saudi Arabia", currency: SOURCE_CURRENCY },
  { code: "SE", name: "Sweden", currency: "SEK" },
  { code: "SG", name: "Singapore", currency: "SGD" },
  { code: "TH", name: "Thailand", currency: "THB" },
  { code: "TR", name: "Turkey", currency: "TRY" },
  { code: "US", name: "United States", currency: "USD" },
  { code: "ZA", name: "South Africa", currency: "ZAR" },
];

function getRegionFromLocale(locale: string): string | null {
  try {
    const region = new Intl.Locale(locale).region;
    return region ? region.toUpperCase() : null;
  } catch {
    return null;
  }
}

export function isSupportedCountryCode(countryCode?: string | null) {
  return !!countryCode && countryCode.toUpperCase() in COUNTRY_TO_CURRENCY;
}

export function getCurrencyFromCountryCode(countryCode?: string | null) {
  if (!countryCode) return SOURCE_CURRENCY;
  return COUNTRY_TO_CURRENCY[countryCode.toUpperCase()] ?? SOURCE_CURRENCY;
}

export function getCountryFromLocales(locales?: readonly string[] | null) {
  if (!locales?.length) return SOURCE_COUNTRY;

  for (const locale of locales) {
    const region = getRegionFromLocale(locale);
    if (region && COUNTRY_TO_CURRENCY[region]) {
      return region;
    }
  }

  return SOURCE_COUNTRY;
}

export function getCurrencyFromLocales(locales?: readonly string[] | null) {
  return getCurrencyFromCountryCode(getCountryFromLocales(locales));
}

export function formatCurrencyAmount(
  amount: number | null | undefined,
  locale: string,
  currency: string,
) {
  if (typeof amount !== "number" || !Number.isFinite(amount)) return "";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatCurrencyRange(
  minAmount: number | null | undefined,
  maxAmount: number | null | undefined,
  locale: string,
  currency: string,
  rate: number,
) {
  const safeRate = Number.isFinite(rate) && rate > 0 ? rate : 1;
  const min = formatCurrencyAmount(
    typeof minAmount === "number" ? minAmount * safeRate : minAmount,
    locale,
    currency,
  );
  const max = formatCurrencyAmount(
    typeof maxAmount === "number" ? maxAmount * safeRate : maxAmount,
    locale,
    currency,
  );

  if (min && max) return `${min} - ${max}`;
  return min || max || "";
}
