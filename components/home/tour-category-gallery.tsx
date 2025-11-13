import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Data structure for the tour cards with specific grid placement classes
const tourCategories = [
  {
    title: "Cruises",
    imgUrl: "/imgs/popular-1.png",
    // Takes one column and one row
    gridClasses: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Museum Tour",
    imgUrl: "/imgs/popular-3.png",
    // Takes the 1st column and the 2nd row
    gridClasses: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Beach Tours",
    imgUrl: "/imgs/popular-4.png",
    // Takes the 2nd and 3rd columns and both rows
    gridClasses: "lg:col-span-3 lg:row-span-1",
  },
  {
    title: "City Tours",
    imgUrl: "/imgs/popular-2.png",
    // Takes the 4th, 5th, and 6th columns on the first row
    gridClasses: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Food",
    imgUrl: "/imgs/popular-5.png",
    // Takes the 4th column and the 2nd row
    gridClasses: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Hiking",
    imgUrl: "/imgs/popular-6.png",
    // Takes the 5th and 6th columns on the second row
    gridClasses: "lg:col-span-2 lg:row-span-1",
  },
];

// Reusable Card Component (same as before)
const TourCard = ({
  title,
  imgUrl,
  gridClasses,
}: {
  title: string;
  imgUrl: string;
  gridClasses: string;
}) => {
  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer 
                  min-h-56 ${gridClasses}`}
    >
      {/* Background Image */}
      <Image
        src={imgUrl}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-gray-900/10 to-transparent"
        style={{
          background:
            "linear-gradient(to top, rgba(31, 55, 49, 0.8), rgba(31, 55, 49, 0) 60%)",
        }}
      ></div>

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-white text-xl font-semibold z-10 relative">
          {title}
        </h3>
      </div>
    </div>
  );
};

// Main Component
const SpecificTourGridGallery = () => {
  const t = useTranslations();
  return (
    <section className="md:py-10 py-6 container space-y-8">
      <div className="flex flex-wrap justify-between items-center ">
        <h2 className="md:text-4xl sm:text-2xl text-lg font-extrabold">
          {t("index.popular_title")}
        </h2>
        <div>
          <Link href={"/rooms"}>{t("global.see_all")}</Link>
        </div>
      </div>
      <div
        className="grid gap-4 sm:gap-6 
                   grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 
                   grid-rows-auto lg:grid-rows-2"
      >
        {tourCategories.map((category, index) => (
          <TourCard
            key={index}
            title={category.title}
            imgUrl={`${category.imgUrl}`}
            gridClasses={category.gridClasses}
          />
        ))}
      </div>
    </section>
  );
};

export default SpecificTourGridGallery;
