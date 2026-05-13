"use client";

import { useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";
import { SUPPORTED_COUNTRIES } from "@/lib/currency";
import {
  getPreferredCountryCode,
  getServerCountrySnapshot,
  setStoredCountryCode,
  subscribeToCountryPreference,
} from "@/lib/country-preference";

interface CountryCurrencySelectorProps {
  className?: string;
}

export default function CountryCurrencySelector({
  className = "",
}: CountryCurrencySelectorProps) {
  const t = useTranslations();
  const selectedCountry = useSyncExternalStore(
    subscribeToCountryPreference,
    getPreferredCountryCode,
    getServerCountrySnapshot,
  );

  return (
    <label
      className={`flex items-center gap-2 text-xs text-gray-700 ${className}`}
    >
      <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
      <span className="sr-only">{t("global.country")}</span>
      <select
        value={selectedCountry}
        onChange={(event) => setStoredCountryCode(event.target.value)}
        aria-label={t("global.select_country")}
        className="h-9 max-w-44 rounded-full border border-gray-200 bg-muted px-3 text-xs text-gray-800 outline-none transition-colors hover:border-primary focus:border-primary"
      >
        {SUPPORTED_COUNTRIES.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name} ({country.currency})
          </option>
        ))}
      </select>
    </label>
  );
}
