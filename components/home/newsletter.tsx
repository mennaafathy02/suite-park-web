"use client";

import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import { useContactUs } from "./hook/useContactUs";

import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  type: z.string(),
});

export type ContactFormValues = z.input<typeof contactSchema>;

const NewsletterFooter = () => {
  const t = useTranslations();
  const { form, onSubmit, isLoading } = useContactUs();
  const locale = useLocale();
  const isRTL = ["ar"].includes(locale);
  const {
    register,
    formState: { errors },
  } = form;
  // Custom colors matching your theme
  return (
    <section className="container mx-auto md:py-10 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* --- Left Column: About/Info --- */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            {/* <Image
              src={"/imgs/logo.svg"}
              alt=""
              width={1000}
              height={1000}
              className="md:w-40 w-24"
            /> */}
            <Image
              src="/sp-logo.svg"
              alt=""
              width={200}
              height={200}
              className="md:w-10 sm:w-8 w-6"
            />
            <div className="sm:text-xl text-sm font-semibold">
              <span className="bg-linear-to-r from-green-950 to-primary text-transparent bg-clip-text">
                {isRTL ? "سويت" : "Suite"}
              </span>{" "}
              <span className="bg-linear-to-r from-yellow-800 to-yellow-700/80 text-transparent bg-clip-text">
                {isRTL ? "بارك" : "Park"}
              </span>
            </div>
          </motion.div>

          {/* Description Text */}
          <motion.p
            className="text-gray-600 mb-8 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t("index.newsletter_desc")}
            {/* The text is repetitive in your image; this is a truncated version */}
          </motion.p>

          {/* Social Share Section */}
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-xl font-semibold mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {t("global.social_share")}
            </motion.h3>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </motion.div>
        </motion.div>

        {/* --- Right Column: Newsletter Form --- */}
        <motion.div className="flex flex-col">
          <form onSubmit={onSubmit} className="space-y-4">
            {/* Name Field */}
            <div className="space-y-1">
              <input
                {...register("name")}
                placeholder={t("global.full_name")}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-green-500 outline-none"
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <input
                {...register("email")}
                type="email"
                placeholder={t("global.email")}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-green-500 outline-none"
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Subject Field */}
            <div className="space-y-1">
              <input
                {...register("subject")}
                placeholder={t("global.subject")}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-green-500 outline-none"
              />
              {errors.subject && (
                <p className="text-xs text-red-500">{errors.subject.message}</p>
              )}
            </div>

            {/* Message Field */}
            <div className="space-y-1">
              <textarea
                {...register("message")}
                placeholder={t("global.message")}
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-green-500 outline-none resize-none"
              />
              {errors.message && (
                <p className="text-xs text-red-500">{errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-none bg-primary-foreground py-6 text-gray-700 transition-all active:scale-95"
            >
              {isLoading ? "Sending..." : t("global.send_message")}
              <ArrowRight className="w-5 h-5 ms-2 rtl:rotate-180" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterFooter;
