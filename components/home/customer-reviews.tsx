"use client";
// import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UserCircle2 } from "lucide-react";

// 1. Define a clear interface for the Review
interface Review {
  id: number;
  quote: string;
  author: string;
  country: string;
  flag: string;
  icon: React.ReactNode; // This can be a LucideIcon or an Image component
  size: string;
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

// 2. Cast your initial data to that interface
const initialReviews: Review[] = [
  {
    id: 1,
    quote:
      "The attention to detail here is unmatched. From the personalized welcome to the pristine room condition, every second felt like a five-star dream.",
    author: "James Anderson",
    country: "United Kingdom",
    flag: "🇬🇧",
    icon: <UserCircle2 className=" size-10 text-black"/>,
    position: { top: "15%", left: "12%" },
    size: "w-14 h-14",
  },
  {
    id: 2,
    quote:
      "As a frequent traveler, I'm picky about breakfast. The rooftop buffet here wasn't just food; it was a culinary experience with a breathtaking view.",
    author: "Elena Rossi",
    country: "Italy",
    flag: "🇮🇹",
    icon: <UserCircle2 className=" size-10 text-black"/>,
    position: { top: "18%", right: "14%" },
    size: "w-12 h-12",
  },
  {
    id: 3,
    quote:
      "Perfect location for exploring the city. We were within walking distance of the main square, yet the room was incredibly quiet and peaceful.",
    author: "Marcus Schneider",
    country: "Germany",
    flag: "🇩🇪",
    icon: <UserCircle2 className=" size-10 text-black"/>,
    position: { bottom: "22%", left: "16%" },
    size: "w-12 h-12",
  },
  {
    id: 4,
    quote:
      "The concierge team saved our trip! They managed to get us a last-minute table at a Michelin-star restaurant. Exceptional service beyond words.",
    author: "Sophia Chen",
    country: "Singapore",
    flag: "🇸🇬",
    icon: <UserCircle2 className=" size-10 text-black"/>,
    position: { bottom: "18%", right: "18%" },
    size: "w-14 h-14",
  },
  {
    id: 5,
    quote:
      "A true oasis of calm. The spa facilities are top-tier, and the aromatherapy session was exactly what I needed after a long flight.",
    author: "Amara Okafor",
    country: "Nigeria",
    flag: "🇳🇬",
    icon: <UserCircle2 className=" size-10 text-black"/>,
    position: { top: "52%", left: "6%" },
    size: "w-12 h-12",
  },
  {
    id: 6,
    quote:
      "Traveling with kids is usually stressful, but the family suite and the staff's kindness toward our little ones made this our best vacation yet.",
    author: "David Miller",
    country: "Canada",
    flag: "🇨🇦",
    icon: <UserCircle2 className=" size-10 text-black"/>,
    position: { top: "48%", right: "8%" },
    size: "w-14 h-14",
  },
  {
    id: 7,
    quote:
      "The interior design is stunning—a perfect mix of modern luxury and local heritage. I spent the first hour just taking photos of the lobby!",
    author: "Lucia Fernandez",
    country: "Spain",
    flag: "🇪🇸",
    icon: <UserCircle2 className=" size-10 text-black"/>,
    position: { top: "30%", left: "25%" },
    size: "w-11 h-11",
  },
];

const InteractiveCustomerReviews = () => {
  // 3. Initialize states with the explicit Review type
  const [activeReview, setActiveReview] = useState<Review>(initialReviews[0]);
  const [floatingReviews, setFloatingReviews] = useState<Review[]>(
    initialReviews.slice(1),
  );

  const DARK_GREEN_TEXT = "#1f3731";
  const LIGHT_GREEN_TEXT = "#387040";

  const handleSwitch = (selectedReview: Review) => {
    // This will now work because all 'Review' objects share the same structure
    const oldActiveWithNewPos: Review = {
      ...activeReview,
      position: selectedReview.position,
      size: selectedReview.size,
    };

    setActiveReview(selectedReview);

    setFloatingReviews((prev) => [
      ...prev.filter((r) => r.id !== selectedReview.id),
      oldActiveWithNewPos,
    ]);
  };

  return (
    <section className="relative md:py-20 py-8 container mx-auto bg-white overflow-hidden min-h-[600px] flex flex-col justify-center">
      <div className="text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-16"
          style={{ color: DARK_GREEN_TEXT }}
        >
          Customer Reviews
        </h2>

        {/* Central Card */}
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeReview.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full mx-auto -mt-20 md:-mt-24 mb-6 border-4 border-white shadow-xl overflow-hidden bg-gray-100">
                {/* <Image
                  width={80}
                  height={80}
                  src={activeReview.imgSrc}
                  alt={activeReview.author}
                  className="w-full h-full object-cover"
                /> */}
                {activeReview.icon}
              </div>

              <div className="relative">
                <span
                  className="text-6xl absolute -top-4 -left-4 opacity-10"
                  style={{ color: LIGHT_GREEN_TEXT }}
                >
                  &ldquo;
                </span>
                <p
                  className="text-xl md:text-2xl font-medium leading-relaxed"
                  style={{ color: DARK_GREEN_TEXT }}
                >
                  {activeReview.quote}
                </p>
                <span
                  className="text-6xl absolute -bottom-10 -right-2 opacity-10"
                  style={{ color: LIGHT_GREEN_TEXT }}
                >
                  &rdquo;
                </span>
              </div>

              <div className="mt-10">
                <p
                  className="text-lg font-bold"
                  style={{ color: LIGHT_GREEN_TEXT }}
                >
                  {activeReview.author}
                </p>
                <p className="text-sm text-gray-400 uppercase tracking-widest mt-1">
                  {activeReview.flag} {activeReview.country}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Interactive Avatars */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        {floatingReviews.map((reviewer) => (
          <motion.div
            key={reviewer.id}
            layoutId={reviewer.id.toString()} // This handles the smooth sliding "switch"
            onClick={() => handleSwitch(reviewer)}
            className={`absolute cursor-pointer pointer-events-auto rounded-full p-1 border-2 transition-colors hover:border-green-500 bg-white shadow-lg ${reviewer.size}`}
            style={{
              ...reviewer.position,
              borderColor: "#e5e7eb",
              zIndex: 20,
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="w-full h-full flex items-center justify-center rounded-full overflow-hidden">
            
              {/* <Image
                width={60}
                height={60}
                src={reviewer.imgSrc}
                alt={reviewer.author}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
              /> */}
              {reviewer.icon}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Selector */}
      <div className="flex md:hidden justify-center gap-3 mt-8 px-4 overflow-x-auto pb-4">
        {floatingReviews.map((reviewer) => (
          <button
            key={reviewer.id}
            onClick={() => handleSwitch(reviewer)}
            className="w-12 h-12 flex items-center justify-center rounded-full overflow-hidden border-2 border-gray-200 shrink-0"
          >
            {/* <Image
              width={48}
              height={48}
              src={reviewer.imgSrc}
              alt=""
              className="object-cover"
            /> */}
            {reviewer.icon}
          </button>
        ))}
      </div>
    </section>
  );
};

export default InteractiveCustomerReviews;
