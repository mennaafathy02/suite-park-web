"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import { Link } from "@/navigation";
import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  const images = [
    "/imgs/hero/home-slider-1.webp",
    "/imgs/hero/home-slider-4.jpg",
    "/imgs/hero/home-slider-15.jpg",
    "/imgs/hero/home-slider-14.jpg",
    "/imgs/hero/home-slider-6.jpg",
    "/imgs/hero/home-slider-9.jpg",
    "/imgs/hero/home-slider-18.jpg",
  ];
  return (
    <section className="flex justify-center items-center container mx-auto md:pb-10 pb-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
        <Carousel dir={"ltr"} className="w-full">
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div>
                    <Image
                      src={src}
                      alt="slider"
                      width={1000}
                      height={1000}
                      className="w-full h-[80vh] aspect-video object-cover object-bottom rounded-xl"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="end-0 size-10 [&_svg]:size-10! translate-x-[50%]" />
          <CarouselNext className="start-0 size-10 [&_svg]:size-10! -translate-x-[50%]" />
        </Carousel>
      </motion.div>
    </section>
  );
}
