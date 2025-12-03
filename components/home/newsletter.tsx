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
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

// // Data for social links (using simple SVG icons or linking to an icon library)
// const socialLinks = [
//   { icon: "fa-facebook-f", url: "#" },
//   { icon: "fa-instagram", url: "#" },
//   { icon: "fa-twitter", url: "#" },
//   { icon: "fa-linkedin-in", url: "#" },
//   { icon: "fa-youtube", url: "#" },
// ];

const NewsletterFooter = () => {
  // Custom colors matching your theme
  const t = useTranslations();
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
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
          >
            <Image
              src={"/imgs/logo.svg"}
              alt=""
              width={1000}
              height={1000}
              className="md:w-40 w-24"
            />
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
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {t("index.newsletter_title")}
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {t("index.join_newsletter")}
          </motion.p>

          <form className="space-y-4">
            {/* Input: First Name */}
            <input
              type="text"
              placeholder={t("global.first_name")}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              required
            />
            {/* Input: Last Name */}
            <input
              type="text"
              placeholder={t("global.last_name")}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              required
            />
            {/* Input: Email Address */}
            <input
              type="email"
              placeholder={t("global.email")}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              required
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full inline-flex rounded-none bg-primary-foreground items-center justify-center mt-6 px-6 py-3 text-gray-700 h-auto  shadow-none transition-colors duration-300"
            >
              {t("index.newsletter_subscription")}
              <ArrowRight className="w-5 h-5 ms-2 rtl:rotate-180" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterFooter;
