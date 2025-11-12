import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Search,
  Twitter,
  Youtube,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Input } from "./ui/input";
import { Link } from "@/navigation";

export default function Header() {
  const t = useTranslations();
  return (
    <div className="">
      <div className="bg-primary-foreground text-xs py-3 md:px-8 px-6 flex items-center justify-between gap-4">
        <div className="flex gap-8">
          <div className="flex gap-2 items-center">
            <Phone className="text-primary size-4" />
            <span>(93) 123 456 6789</span>
          </div>
          <div className="flex gap-2 items-center">
            <Mail className="text-primary size-4" />
            <span>yourinfo@yourmail.com </span>
          </div>
        </div>
        <ul className="flex gap-8 items-center">
          <li>
            <Link href={"https://facebook.com"}>
              <Facebook className="fill-primary text-primary size-5" />
            </Link>
          </li>
          <li>
            <Link href={"https://facebook.com"}>
              <Instagram className="text-primary size-5" />
            </Link>
          </li>
          <li>
            <Link href={"https://facebook.com"}>
              <Twitter className="fill-primary text-primary size-5" />
            </Link>
          </li>
          <li>
            <Link href={"https://facebook.com"}>
              <Linkedin className="fill-primary text-primary size-5" />
            </Link>
          </li>
          <li>
            <Link href={"https://facebook.com"}>
              <Youtube className="text-primary size-5" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center gap-4 py-3 md:px-8 px-6">
        <Image
          src="/imgs/logo.svg"
          alt=""
          width={200}
          height={200}
          className="h-8"
        />
        <div>
          <ul className="flex items-center gap-4">
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
        </div>
        <div className="relative">
          <Search className="absolute start-2 size-4 top-[50%] -translate-y-[50%]" />
          <Input
            className="rounded-full ps-8 bg-muted"
            placeholder={t("global.search_here")}
          />
        </div>
      </div>
    </div>
  );
}
