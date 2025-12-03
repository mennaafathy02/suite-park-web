"use client";

import { BookOpen, Gem, Medal, Ticket } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
// import Image from "next/image";

export default function WhyUs() {
  const t = useTranslations();
  const items = [
    {
      icon: <Ticket className="size-8 text-primary" />,
      title: "Ultimate flexibility",
      desc: "You're in control, with free cancellation and payment options to satisfy any plan or budget.",
    },
    {
      icon: <BookOpen className="size-8 text-primary" />,
      title: "Memorable experiences",
      desc: "Browse and book tours and activities so incredible, you'll want to tell your friends.",
    },
    {
      icon: <Gem className="size-8 text-primary" />,
      title: "Quality at our core",
      desc: "High-quality standards. Millions of reviews. A tourz company.",
    },
    {
      icon: <Medal className="size-8 text-primary" />,
      title: "Award-winning support",
      desc: "New price? New plan? No problem. We're here to help, 24/7.",
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
      <motion.h2
        className="md:text-4xl sm:text-2xl text-lg font-extrabold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t("index.whyus")}
      </motion.h2>

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
              {el.title}
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
              {el.desc}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
