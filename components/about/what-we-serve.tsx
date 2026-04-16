"use client";

import { useTranslations } from "next-intl";
import { BookOpen, Gem, Medal, Ticket } from "lucide-react";
import { motion } from "motion/react";

export default function WhatWeServe() {
  const t = useTranslations();
  const items = [
    {
      icon: <Ticket className="size-8 text-primary" />,
      title: "feature1_title",
      desc: "feature1_desc",
    },
    {
      icon: <BookOpen className="size-8 text-primary" />,
      title: "feature2_title",
      desc: "feature2_desc",
    },
    {
      icon: <Gem className="size-8 text-primary" />,
      title: "feature3_title",
      desc: "feature3_desc",
    },
    {
      icon: <Medal className="size-8 text-primary" />,
      title: "feature4_title",
      desc: "feature4_desc",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="container mx-auto md:py-10 py-6 space-y-4">
      <motion.div
        className="space-y-2"
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
          {t("index.what_we_serve")}
        </motion.h2>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {t("index.what_we_serve_desc")}
        </motion.p>
      </motion.div>

      <motion.div
        className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {items.map((el, index) => (
          <motion.div
            key={index}
            className="p-4 space-y-4"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1 + 0.8,
                type: "spring",
                stiffness: 200,
              }}
              viewport={{ once: true }}
            >
              {el.icon}
            </motion.div>
            <motion.h3
              className="font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1 + 1,
              }}
              viewport={{ once: true }}
            >
              {t(`index.${el.title}`)}
            </motion.h3>
            <motion.p
              className="text-primary/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1 + 1.2,
              }}
              viewport={{ once: true }}
            >
              {t(`index.${el.desc}`)}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
