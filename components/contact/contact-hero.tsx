"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { MapPin, Phone, Navigation } from "lucide-react";

export default function ContactHero() {
  const t = useTranslations();

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative flex justify-center items-center container mx-auto min-h-[450px] overflow-visible">
        <motion.div
          className="relative z-20 text-white max-w-3xl px-6 text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            {t("index.contactus")}
          </h1>
          <p className="text-lg md:text-xl opacity-90 font-light max-w-xl mx-auto">
            {t("index.contact_desc")}
          </p>
        </motion.div>

        <motion.div
          className="rounded-lg overflow-hidden absolute top-0 ltr:end-1/2 rtl:start-1/2  translate-x-[50%] h-full w-[calc(100%-1rem)] lg:w-[calc(100%-2rem)] xl:w-[calc(100%-3rem)] 2xl:w-[calc(100%-4rem)] mx-auto"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src={"/imgs/bg-hero.jpg"}
            alt=""
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
          {/* <motion.div
            className="container z-10 mx-auto bg-[#022C223D] xl overflow-hidden absolute top-0 start-0 h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          ></motion.div> */}
        </motion.div>
      </section>

      {/* --- FLOATING CONTACT CARD --- */}
      <section className="container mx-auto px-6 -mt-16 relative z-30">
        <motion.div
          className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {/* Address Block */}
          <div className="flex items-start gap-5 flex-1">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary shrink-0">
              <MapPin size={28} />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-gray-900 text-lg">Our Location</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                Ahmad Ibn Zaydun, Al-Hamadani, Suite Park Jeddah, 7760 Corniche
                Road, Jeddah 23417, Saudi Arabia
              </p>
            </div>
          </div>

          {/* Vertical Divider for Desktop */}
          <div className="hidden md:block w-px h-16 bg-gray-100" />

          {/* Phone Block */}
          <div className="flex items-start gap-5 flex-1">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary shrink-0">
              <Phone size={28} />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-gray-900 text-lg">Call Us</h3>
              <a
                href="tel:+966551962005"
                className="text-xl md:text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                +966 55 196 2005
              </a>
              <p className="text-gray-400 text-sm">
                Available 24/7 for inquiries
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="w-full md:w-auto">
            <a
              href="https://maps.google.com/?q=Suite+Park+Jeddah"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 w-full md:w-auto"
            >
              <Navigation size={20} />
              Get Directions
            </a>
          </div>
        </motion.div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="container mx-auto py-16 px-4">
        <motion.div
          className="w-full h-[500px] rounded-[2.5rem] overflow-hidden shadow-inner border-8 border-white bg-gray-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d780.0730043772493!2d39.11568550667266!3d21.559619604013452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3dbe266a3d7d5%3A0x6afc7a6d56270165!2z2LPZiNmK2Kog2KjYp9ix2YMg2KzYr9ipIC0gU3VpdGUgcGFyayBKZWRkYWg!5e0!3m2!1sen!2seg!4v1774892946114!5m2!1sen!2seg"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </motion.div>
      </section>
    </>
  );
}
