"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

// Data for each destination item
const destinations = [
  {
    name: "Colosseum",
    tours: "100+",
    img: "/imgs/room.jpg", // Placeholder image name
  },
  {
    name: "Statue of Liberty",
    tours: "100+",
    img: "/imgs/room.jpg", // Placeholder image name
  },
  {
    name: "Vatican Museums",
    tours: "100+",
    img: "/imgs/room.jpg", // Placeholder image name
  },
  {
    name: "Eiffel Tower",
    tours: "100+",
    img: "/imgs/room.jpg", // Placeholder image name
  },
  {
    name: "Tower of London",
    tours: "100+",
    img: "/imgs/room.jpg", // Placeholder image name
  },
  {
    name: "National September 11 Memorial",
    tours: "100+",
    img: "/imgs/room.jpg", // Placeholder image name
  },
  {
    name: "Stonehenge",
    tours: "100+",
    img: "/imgs/room.jpg", // Placeholder image name
  },
  {
    name: "Antelope Canyon",
    tours: "100+",
    img: "/imgs/room.jpg", // Placeholder image name
  },
  {
    name: "Louvre",
    tours: "100+",
    img: "/imgs/room.jpg", // Placeholder image name
  },
];

// Reusable Destination Card Component
const DestinationCard = ({
  name,
  tours,
  img,
}: {
  name: string;
  tours: string;
  img: string;
}) => {
  const LIGHT_GREEN = "#387040"; // For the tour count text
  const DARK_TEXT = "#1f3731"; // For the destination name

  return (
    <div className="flex items-center space-x-4 p-2">
      {/* Image */}
      <div className="shrink-0 w-16 h-16 rounded-lg overflow-hidden shadow-md">
        <Image
          // IMPORTANT: Replace with actual image paths
          // For example: `/path/to/your/images/${img}`
          src={img} // Placeholder
          alt={name}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold" style={{ color: DARK_TEXT }}>
          {name}
        </h3>
        <p className="text-sm" style={{ color: LIGHT_GREEN }}>
          {tours} Tours
        </p>
      </div>
    </div>
  );
};

// Main Component
const TopRooms = () => {
  const t = useTranslations();
  return (
    <section className="md:py-10 py-6 container mx-auto space-y-6">
      <motion.div
        className="flex flex-wrap justify-between items-center"
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
          {t("index.top_rooms_title")}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href={"/rooms"}>{t("global.see_all")}</Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        {destinations.map((destination, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <DestinationCard
              name={destination.name}
              tours={destination.tours}
              img={destination.img}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TopRooms;
