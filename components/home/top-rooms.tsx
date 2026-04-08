"use client";

import { useTranslations, useLocale } from "next-intl";
// import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { Link } from "@/i18n/routing";
import { useNazels } from "@/components/nazels/hooks/useNazels";
import type { Nazel } from "@/components/nazels/types";
import { Building2 } from "lucide-react";

const NazelCard = ({ nazel, locale }: { nazel: Nazel; locale: string }) => {
  const name = locale === "ar" ? nazel.name_ar : nazel.name_en;

  return (
    <div className="flex items-center rtl:space-x-reverse">
      <Building2 className="me-2" />
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-[#1f3731]">{name}</h3>
      </div>
    </div>
  );
};

function NazelCardSkeleton() {
  return (
    <div className="flex items-center space-x-4 rtl:space-x-reverse p-2 animate-pulse">
      <div className="shrink-0 w-16 h-16 rounded-lg bg-gray-200" />
      <div className="flex flex-col gap-2">
        <div className="h-5 w-32 bg-gray-200 rounded" />
      </div>
    </div>
  );
}

const TopRooms = () => {
  const t = useTranslations();
  const locale = useLocale();
  const { data: nazelsResponse, isLoading } = useNazels();
  const nazels = nazelsResponse?.data ?? [];

  return (
    <section className="md:py-10 py-6 container mx-auto space-y-6">
      <motion.div
        className="flex flex-wrap justify-between items-center"
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
          {t("index.rooms_types_title")}
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <NazelCardSkeleton key={index} />
            ))
          : nazels.map((nazel, index) => {
              const name = locale === "ar" ? nazel.name_ar : nazel.name_en;
              return (
                <motion.div
                  key={nazel.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className=""
                >
                  <Link href={`/rooms?type=${encodeURIComponent(name)}`}>
                    <NazelCard nazel={nazel} locale={locale} />
                  </Link>
                </motion.div>
              );
            })}
      </motion.div>
    </section>
  );
};

export default TopRooms;
