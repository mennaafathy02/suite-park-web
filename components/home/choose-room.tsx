"use client";

import { useTranslations, useLocale } from "next-intl";
import RoomCard, { RoomCardSkeleton } from "../rooms/room-card";
import { Link } from "@/i18n/routing";
import { motion } from "motion/react";
import { useRooms } from "../rooms/hooks/useRooms";

export default function ChooseRoom() {
  const t = useTranslations();
  const locale = useLocale();
  const { data: roomsResponse, isLoading } = useRooms({
    page: 1,
    per_page: 8,
  });
  const rooms = roomsResponse?.data ?? [];

  return (
    <section className="container mx-auto md:py-10 py-6 space-y-8">
      <motion.div
        className="flex flex-wrap gap-4 justify-between items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="md:text-4xl sm:text-2xl text-lg font-extrabold"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t("index.find_room")}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/rooms">{t("global.see_all")}</Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <RoomCardSkeleton key={index} />
            ))
          : rooms.map((room) => (
              <RoomCard key={room.id} room={room} locale={locale} />
            ))}
      </motion.div>
    </section>
  );
}
