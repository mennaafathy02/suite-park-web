"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function ContactHero() {
  return (
    <>
      <section className="flex relative justify-center items-center container mx-auto md:pb-10 pb-6 min-h-96 overflow-hidden">
        <motion.div
          className=" relative z-20 text-white max-w-2xl space-y-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="md:text-4xl text-xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact us
          </motion.h1>
          <motion.p
            className="text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From local escapes to far-flung adventures, find what makes you
            happy anytime, anywhere
          </motion.p>
        </motion.div>
        <motion.div
          className="rounded-lg overflow-hidden absolute top-0 start-[50%] -translate-x-[50%] h-full w-[calc(100%-1rem)] lg:w-[calc(100%-2rem)] xl:w-[calc(100%-3rem)] 2xl:w-[calc(100%-4rem)] mx-auto"
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
          <motion.div
            className="container z-10 mx-auto bg-[#022C223D] xl overflow-hidden absolute top-0 start-0 h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          ></motion.div>
        </motion.div>
      </section>
      <motion.section
        className="flex relative justify-center items-center container mx-auto py-10 pb-6 min-h-96 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src={"/imgs/map.png"}
          alt=""
          width={1000}
          height={1000}
          quality={100}
          className="object-cover w-full"
        />
      </motion.section>
    </>
  );
}
