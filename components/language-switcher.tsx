"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="flex items-center gap-3">
      <Globe size={20} className="text-primary shrink-0" />
      <div className="flex gap-2">
        <button
          onClick={() => handleLanguageChange("en")}
          className={`px-3 py-1 text-sm rounded transition-colors ${
            locale === "en"
              ? "bg-primary text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          } ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={isPending || locale === "en"}
        >
          EN
        </button>
        <button
          onClick={() => handleLanguageChange("ar")}
          className={`px-3 py-1 text-sm rounded transition-colors ${
            locale === "ar"
              ? "bg-primary text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          } ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={isPending || locale === "ar"}
        >
          AR
        </button>
      </div>
    </div>
  );
}

