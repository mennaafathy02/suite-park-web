import { useTranslations } from "next-intl";
import RoomCard from "../room-card";
import Link from "next/link";

export default function ChooseRoom() {
  const t = useTranslations();
  return (
    <section className="container mx-auto md:py-10 py-6 space-y-8">
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <h2 className="md:text-4xl sm:text-2xl text-lg font-extrabold">
          {t("index.find_room")}
        </h2>
        <div>
          <Link href={"/rooms"} >{t("global.see_all")}</Link>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {Array.from({ length: 8 }).map((_, index) => (
          <RoomCard key={index} />
        ))}
      </div>
    </section>
  );
}
