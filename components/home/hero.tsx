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
import { useImagesByType } from "@/components/content/hooks";

export default function Hero() {
  const { data: images = [] } = useImagesByType("home");

  if (images.length === 0) return null;

  return (
    <section className="flex justify-center items-center container mx-auto md:pb-10 pb-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
        <Carousel dir={"ltr"} className="w-full ">
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image.id}>
                <div className="p-1">
                  <div>
                    <Image
                      src={image.path}
                      alt={image.name}
                      width={1000}
                      height={1000}
                      className="w-full md:h-[80vh] h-full aspect-video object-cover object-bottom rounded-xl"
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
