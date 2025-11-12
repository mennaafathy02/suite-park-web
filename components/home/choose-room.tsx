import { useTranslations } from "next-intl";
import RoomCard from "../room-card";
import Link from "next/link";

export default function ChooseRoom() {
  const t = useTranslations();
  return (
    <div className="md:px-8 px-6 py-10 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="md:text-4xl text-2xl font-extrabold">
          {t("index.find_room")}
        </h2>
        <div>
          <Link href={"/rooms"}>{t("global.see_all")}</Link>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <RoomCard key={index} />
        ))}
      </div>
    </div>
  );
}
