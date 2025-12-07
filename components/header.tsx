"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Search,
  Twitter,
  Youtube,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Input } from "./ui/input";
import { Link } from "@/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useRouter } from "@/i18n/routing";
import { FormEvent, useState } from "react";

export default function Header() {
  const t = useTranslations();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

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
            <div className="flex gap-2 items-center">
              <Phone className="text-primary size-4" />
              <span className="hidden sm:block">(93) 123 456 6789</span>
            </div>
            <div className="flex gap-2 items-center">
              <Mail className="text-primary size-4" />
              <span className="hidden sm:block">yourinfo@yourmail.com </span>
            </div>
          </div>
          <ul className="flex md:gap-8 gap-2 items-center">
            <li>
              <Link href={"https://facebook.com"}>
                <Facebook className="fill-primary text-primary md:size-5 size-3" />
              </Link>
            </li>
            <li>
              <Link href={"https://facebook.com"}>
                <Instagram className="text-primary md:size-5 size-3" />
              </Link>
            </li>
            <li>
              <Link href={"https://facebook.com"}>
                <Twitter className="fill-primary text-primary md:size-5 size-3" />
              </Link>
            </li>
            <li>
              <Link href={"https://facebook.com"}>
                <Linkedin className="fill-primary text-primary md:size-5 size-3" />
              </Link>
            </li>
            <li>
              <Link href={"https://facebook.com"}>
                <Youtube className="text-primary md:size-5 size-3" />
              </Link>
            </li>
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
            className="md:w-40 w-20"
          />
        </Link>
        <ul className="md:flex hidden items-center gap-4">
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
            className="rounded-full h-auto py-2 ps-8 bg-muted md:max-w-none max-w-40 md:text-sm text-xs"
            placeholder={t("global.search_here")}
          />
        </form>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent className="p-6">
            <ul className="flex flex-col gap-4">
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
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
