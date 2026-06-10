"use client";

import {
  Facebook,
  Instagram,
  // Linkedin,
  // Mail,
  Menu,
  Phone,
  Search,
  // Twitter,
  // Youtube,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Input } from "./ui/input";
import { Link } from "@/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useRouter } from "@/i18n/routing";
import { FormEvent, useState } from "react";
import CountryCurrencySelector from "./country-currency-selector";
import LanguageSwitcher from "./language-switcher";

export default function Header() {
  const t = useTranslations();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const locale = useLocale();
  const isRTL = ["ar"].includes(locale);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="fixed z-50 w-full bg-white">
      <div className="bg-primary-foreground">
        <div className="text-xs py-3 container mx-auto flex items-center justify-between gap-4">
          <div className="flex gap-8">
            <a href="tel:+966551962005" className="ml-3 hover:underline">
              <div className="flex gap-2 items-center">
                <Phone className="text-primary size-4" />
                <span className="hidden sm:block">+966551962005</span>
              </div>
            </a>
            {/* <div className="flex gap-2 items-center">
              <Mail className="text-primary size-4" />
              <span className="hidden sm:block">yourinfo@yourmail.com </span>
            </div> */}
          </div>
          <ul className="flex lg:gap-6 gap-2 items-center">
            <li>
              <Link
                href={
                  "https://www.tiktok.com/@user1735614357213?_r=1&_t=ZS-95vHDrbuMfB"
                }
                className="text-primary"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path
                    fill="currentColor"
                    d="M16.708.027C18.453 0 20.188.016 21.921 0c.105 2.041.839 4.12 2.333 5.563c1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-.063-3.855-.463-5.6-1.291c-.76-.344-1.468-.787-2.161-1.24c-.009 3.896.016 7.787-.025 11.667c-.104 1.864-.719 3.719-1.803 5.255c-1.744 2.557-4.771 4.224-7.88 4.276c-1.907.109-3.812-.411-5.437-1.369C4.307 29.027 2.412 26.12 2.136 23a22.3 22.3 0 0 1-.016-1.984c.24-2.537 1.495-4.964 3.443-6.615c2.208-1.923 5.301-2.839 8.197-2.297c.027 1.975-.052 3.948-.052 5.923c-1.323-.428-2.869-.308-4.025.495a4.618 4.618 0 0 0-1.819 2.333c-.276.676-.197 1.427-.181 2.145c.317 2.188 2.421 4.027 4.667 3.828c1.489-.016 2.916-.88 3.692-2.145c.251-.443.532-.896.547-1.417c.131-2.385.079-4.76.095-7.145c.011-5.375-.016-10.735.025-16.093z"
                  ></path>
                </svg>
                {/* <TikTok className="fill-primary text-primary lg:size-5 size-3" /> */}
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.facebook.com/profile.php?id=61582851270548"}
              >
                <Facebook className="fill-primary text-primary lg:size-5 size-3" />
              </Link>
            </li>
            <li>
              <Link
                href={
                  "https://www.instagram.com/suite.park?igsh=MW03dDVuOHMzeWJxbA%3D%3D&utm_source=qr"
                }
              >
                <Instagram className="text-primary lg:size-5 size-3" />
              </Link>
            </li>
            <li>
              <Link
                href={"https://x.com/SuitePark58907/status/2031894658368827776"}
                className="text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                  ></path>
                </svg>
                {/* <Twitter className="fill-primary text-primary lg:size-5 size-3" /> */}
              </Link>
            </li>
            {/* <li>
              <Link href={"https://facebook.com"}>
                <Linkedin className="fill-primary text-primary lg:size-5 size-3" />
              </Link>
            </li>
            <li>
              <Link href={"https://facebook.com"}>
                <Youtube className="text-primary lg:size-5 size-3" />
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center gap-4 py-3 container mx-auto">
        <Link href={"/"}>
          <Image
            src="/imgs/logo.svg"
            alt=""
            width={200}
            height={200}
            className="lg:w-40 w-20"
          />
        </Link>
        <ul className="lg:flex hidden items-center gap-4">
          <li>
            <Link href={"/"}>{t("index.home")}</Link>
          </li>
          <li>
            <Link href={"/about-us"}>{t("index.aboutus")}</Link>
          </li>
          <li>
            <Link href={"/rooms"}>{t("index.rooms")}</Link>
          </li>
          <li>
            <Link href={"/contact-us"}>{t("index.contactus")}</Link>
          </li>
        </ul>
        <form onSubmit={handleSearch} className="relative">
          <Search className="absolute start-2 size-4 top-[50%] -translate-y-[50%] pointer-events-none z-10" />
          <Input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-full h-auto py-2 ps-8 bg-muted lg:max-w-none max-w-40 lg:text-sm text-xs"
            placeholder={t("global.search_here")}
          />
        </form>
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher variant="light" />
          <CountryCurrencySelector />
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger className="lg:hidden">
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent className="p-6" dir="ltr">
            <div dir={isRTL ? "rtl" : "ltr"} className="space-y-4">
              <ul className="flex flex-col gap-4 pt-4 ">
                <li>
                  <Link href={"/"} onClick={closeMobileMenu}>
                    {t("index.home")}
                  </Link>
                </li>
                <li>
                  <Link href={"/about-us"} onClick={closeMobileMenu}>
                    {t("index.aboutus")}
                  </Link>
                </li>
                <li>
                  <Link href={"/rooms"} onClick={closeMobileMenu}>
                    {t("index.rooms")}
                  </Link>
                </li>
                <li>
                  <Link href={"/contact-us"} onClick={closeMobileMenu}>
                    {t("index.contactus")}
                  </Link>
                </li>
              </ul>
              <LanguageSwitcher
                variant="light"
                onLocaleChange={closeMobileMenu}
              />
              <CountryCurrencySelector className="mt-6" />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
