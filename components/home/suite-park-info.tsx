import { ArrowRightCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

// Use Heroicons for the SVGs (common practice in React/Tailwind projects)
// Assuming you have them installed (npm install @heroicons/react)

const statItems = [
  {
    number: "240",
    label: "Total Destinations",
    icon: "/icons/map-pin-icon.svg",
    positionClass: "lg:col-start-1 lg:row-start-1", // Top Right
  },
  {
    number: "92,842",
    label: "Happy Customer",
    icon: "/icons/routing-icon.svg",
    positionClass: "lg:col-start-1 lg:row-start-2 lg:mt-28", // Bottom Right (pushed down)
  },
  {
    number: "3672",
    label: "Amazing Tours",
    icon: "/icons/users-icon.svg",
    positionClass: "lg:col-start-2 lg:row-start-2 mb-32", // Bottom Left
  },
];

const StatCard = ({
  number,
  label,
  icon,
  className,
}: {
  number: string;
  label: string;
  icon: string;
  className: string;
}) => (
  <div className={`flex flex-col items-center justify-center ${className} p-2`}>
    {/* icon Circle */}
    <div className="flex items-center justify-center w-24 h-24 rounded-full mb-2 text-[#387040]">
      <Image src={icon} alt="icon" width={500} height={500} className="" />
    </div>

    {/* Stat Number */}
    <p className="text-4xl font-extrabold text-[#387040] leading-tight m-0">
      {number}
    </p>

    {/* Stat Label */}
    <p className="text-base text-gray-500 text-center m-0">{label}</p>
  </div>
);

const SuiteParkIntro = () => {
  const t = useTranslations();
  return (
    <section className="container mx-auto md:py-10 py-6 space-y-6">
     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight text-[#1f3731] mb-6">
            {t("index.we_make")}
            <br />
            {t("index.we_make_2")}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            {t("index.we_make_desc")}
          </p>
          <Link
            href="/rooms"
            className="inline-flex gap-2 items-center justify-center w-fit px-8 py-3 bg-linear-to-l from-primary to-[#5F936C] text-white font-semibold rounded-lg shadow-md hover:from-[#387040] transition-colors duration-300"
          >
            <span>Explore Our Rooms</span>
            {/* Simple Arrow SVG for visual flourish */}
            <ArrowRightCircle />
          </Link>
        </div>

        {/* Right Column: Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-y-16 py-4">
          {statItems.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              icon={stat.icon}
              className={stat.positionClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuiteParkIntro;
