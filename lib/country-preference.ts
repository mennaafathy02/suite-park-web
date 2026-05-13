"use client";

import {
  SOURCE_COUNTRY,
  getCountryFromLocales,
  getCurrencyFromCountryCode,
  isSupportedCountryCode,
} from "@/lib/currency";

export const COUNTRY_PREFERENCE_STORAGE_KEY = "suitepark-country";
const COUNTRY_PREFERENCE_CHANGE_EVENT = "suitepark-country-change";

function getBrowserLocales() {
  if (typeof navigator === "undefined") return [];
  return navigator.languages?.length ? navigator.languages : [navigator.language];
}

export function getStoredCountryCode() {
  if (typeof window === "undefined") return null;

  const countryCode = window.localStorage.getItem(
    COUNTRY_PREFERENCE_STORAGE_KEY,
  );

  return isSupportedCountryCode(countryCode) ? countryCode?.toUpperCase() : null;
}

export function getPreferredCountryCode() {
  return getStoredCountryCode() ?? getCountryFromLocales(getBrowserLocales());
}

export function getPreferredCurrency() {
  return getCurrencyFromCountryCode(getPreferredCountryCode());
}

export function getServerCountrySnapshot() {
  return SOURCE_COUNTRY;
}

export function setStoredCountryCode(countryCode: string) {
  if (typeof window === "undefined") return;
  if (!isSupportedCountryCode(countryCode)) return;

  window.localStorage.setItem(
    COUNTRY_PREFERENCE_STORAGE_KEY,
    countryCode.toUpperCase(),
  );
  window.dispatchEvent(new Event(COUNTRY_PREFERENCE_CHANGE_EVENT));
}

export function subscribeToCountryPreference(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const handleStorage = (event: StorageEvent) => {
    if (event.key === COUNTRY_PREFERENCE_STORAGE_KEY) {
      callback();
    }
  };

  window.addEventListener(COUNTRY_PREFERENCE_CHANGE_EVENT, callback);
  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener(COUNTRY_PREFERENCE_CHANGE_EVENT, callback);
    window.removeEventListener("storage", handleStorage);
  };
}
