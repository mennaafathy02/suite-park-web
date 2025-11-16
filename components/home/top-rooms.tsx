import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
      <div className="flex flex-wrap justify-between items-center ">
        <h2 className="md:text-4xl sm:text-2xl text-lg font-extrabold">
          {t("index.top_rooms_title")}
        </h2>
        <div>
          <Link href={"/rooms"}>{t("global.see_all")}</Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            name={destination.name}
            tours={destination.tours}
            img={destination.img}
          />
        ))}
      </div>
    </section>
  );
};

export default TopRooms;
