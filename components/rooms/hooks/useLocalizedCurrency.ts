"use client";

import { useSyncExternalStore } from "react";
import { useQuery } from "@tanstack/react-query";
import { SOURCE_CURRENCY, formatCurrencyRange } from "@/lib/currency";
import {
  getPreferredCurrency,
  subscribeToCountryPreference,
} from "@/lib/country-preference";

const FRANKFURTER_API_URL = "https://api.frankfurter.dev/v2";
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

interface RateResponse {
  rate?: number;
}

function getBrowserCurrencySnapshot() {
  return getPreferredCurrency();
}

function getServerCurrencySnapshot() {
  return SOURCE_CURRENCY;
}

async function fetchSarRate(currency: string) {
  const response = await fetch(
    `${FRANKFURTER_API_URL}/rate/${SOURCE_CURRENCY}/${currency}`,
  );

  if (!response.ok) {
    throw new Error("Unable to load exchange rate");
  }

  const data = (await response.json()) as RateResponse;
  if (typeof data.rate !== "number" || !Number.isFinite(data.rate)) {
    throw new Error("Exchange rate response is invalid");
  }

  return data.rate;
}

export function useLocalizedCurrency(locale: string) {
  const targetCurrency = useSyncExternalStore(
    subscribeToCountryPreference,
    getBrowserCurrencySnapshot,
    getServerCurrencySnapshot,
  );

  const rateQuery = useQuery({
    queryKey: ["currency-rate", SOURCE_CURRENCY, targetCurrency],
    queryFn: () => fetchSarRate(targetCurrency),
    enabled: targetCurrency !== SOURCE_CURRENCY,
    staleTime: ONE_DAY_MS,
    gcTime: ONE_DAY_MS,
    retry: 1,
  });

  const shouldUseConvertedCurrency =
    targetCurrency !== SOURCE_CURRENCY &&
    rateQuery.isSuccess &&
    typeof rateQuery.data === "number";

  const currency = shouldUseConvertedCurrency
    ? targetCurrency
    : SOURCE_CURRENCY;
  const rate = shouldUseConvertedCurrency ? rateQuery.data : 1;

  return {
    currency,
    rate,
    formatPriceRange(minPrice?: number | null, maxPrice?: number | null) {
      return formatCurrencyRange(minPrice, maxPrice, locale, currency, rate);
    },
  };
}
