"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "@/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <section className="flex justify-center items-center container mx-auto md:pb-10 pb-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
        <Carousel dir={dir} className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div
                  className="p-1"
             
                >
                  <Link href={"/rooms"}>
                    <div
                    >
                      <Image
                        src={"/imgs/hero-slider.png"}
                        alt="slider"
                        width={1000}
                        height={1000}
                        className="w-full rounded-xl"
                      />
                    </div>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="end-0 translate-x-1/2" />
          <CarouselNext className="start-0 -translate-x-1/2" />
        </Carousel>
      </motion.div>
    </section>
  );
}
