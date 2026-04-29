"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "motion/react";
import { useImagesByType } from "@/components/content/hooks";

export default function AboutInfo() {
  const t = useTranslations();
  const { data: visionImages = [] } = useImagesByType("aboutus-vision");
  const visionImage = visionImages[0];

  return (
    <section className="flex gap-6 flex-wrap relative justify-between items-center container mx-auto md:py-10 py-6">
      <div className="space-y-8 max-w-2xl">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="md:text-4xl text-xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t("index.who")}{" "}
            <motion.span
              className="text-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t("index.we_are")}
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-xl max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {t("index.who_we_are_desc")}
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="md:text-4xl text-xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {t("index.our")}{" "}
            <motion.span
              className="text-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {t("index.suite_park")}
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-xl max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
          >
            {t('index.our_suite_park_desc')}
          </motion.p>
        </motion.div>
      </div>

      {visionImage && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="transition-transform duration-300"
        >
          <Image
            src={visionImage.path}
            alt={visionImage.name}
            width={1000}
            height={1000}
            className="max-w-xl"
          />
        </motion.div>
      )}
    </section>
  );
}
