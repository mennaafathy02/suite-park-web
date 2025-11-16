"use client";
import Image from "next/image";
import { useState } from "react";

// --- DATA ---
const allReviews = [
  {
    id: 1,
    quote:
      "This place is exactly like the picture posted on Tripto. Great service, we had a great stay!",
    author: "Ethan Rogrinho",
    country: "Malaysia",
    flag: "🇲🇾",
    imgSrc: "/imgs/user-1.svg",
    position: { top: "25%", left: "20%" },
    size: "w-12 h-12",
  },
  {
    id: 2,
    quote:
      "Exceptional service and beautiful ambiance. The staff made our stay truly unforgettable.",
    author: "Sarah Jenkins",
    country: "USA",
    flag: "🇺🇸",
    imgSrc: "/imgs/user-2.svg",
    position: { top: "25%", right: "20%" },
    size: "w-10 h-10",
  },
  {
    id: 3,
    quote:
      "A perfect blend of comfort and luxury. Highly recommend Suite Park for any vacation!",
    author: "Ricardo Mendes",
    country: "Brazil",
    flag: "🇧🇷",
    imgSrc: "/imgs/user-3.svg",
    position: { bottom: "25%", left: "20%" },
    size: "w-10 h-10",
  },
  {
    id: 4,
    quote:
      "The view was spectacular and the facilities were top-notch. Can't wait to visit again.",
    author: "Aisha Khan",
    country: "UAE",
    flag: "🇦🇪",
    imgSrc: "/imgs/user-4.svg",
    position: { bottom: "25%", right: "20%" },
    size: "w-12 h-12",
  },
  {
    id: 5,
    quote: "The staff were incredibly friendly and accommodating. Five stars!",
    author: "Kenji Tanaka",
    country: "Japan",
    flag: "🇯🇵",
    imgSrc: "/imgs/user-5.svg",
    position: { top: "50%", left: "5%" },
    size: "w-10 h-10",
  },
  {
    id: 6,
    quote:
      "Truly a peaceful retreat. Everything was spotlessly clean and comfortable.",
    author: "Olga Petrova",
    country: "Russia",
    flag: "🇷🇺",
    imgSrc: "/imgs/user-6.svg",
    position: { top: "50%", right: "5%" },
    size: "w-12 h-12",
  },
  {
    // Added 7th Review for completeness
    id: 7,
    quote:
      "Excellent location and smooth check-in process. We felt right at home.",
    author: "Javier Sanchez",
    country: "Spain",
    flag: "🇪🇸",
    imgSrc: "/imgs/user-7.svg",
    position: { top: "40%", left: "35%" },
    size: "w-10 h-10",
  },
];

const InteractiveCustomerReviews = () => {
  // Initialize with allReviews[0] or default if 7 reviews are present
  const [currentReview, setCurrentReview] = useState(allReviews[0]);

  const DARK_GREEN_TEXT = "#1f3731";
  const LIGHT_GREEN_TEXT = "#387040";

  return (
    <section className="relative md:py-10 py-8 container mx-auto bg-white overflow-hidden space-y-6">
      <div className="text-center">
        {/* Main Title */}
        <h2
          className="text-3xl sm:text-4xl font-bold mb-16"
          style={{ color: DARK_GREEN_TEXT }}
        >
          Customer Reviews
        </h2>

        {/* Central Testimonial Block: Set to z-10 */}
        <div className="relative z-10 bg-white p-6 sm:p-8 md:p-10 rounded-lg max-w-2xl mx-auto shadow-xl transition-opacity duration-500">
          {/* Main Avatar for the current review */}
          <div className="w-16 h-16 rounded-full mx-auto -mt-20 mb-6 border-4 border-white shadow-lg overflow-hidden">
            <Image
              width={1000}
              height={1000}
              src={currentReview.imgSrc}
              alt={currentReview.author}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quote and Text */}
          <div className="flex justify-center items-start mb-6">
            <span
              className="text-5xl font-serif mr-2 opacity-30"
              style={{ color: LIGHT_GREEN_TEXT }}
            >
              &ldquo;
            </span>
            <p
              className="text-xl sm:text-2xl font-medium text-gray-700"
              style={{ color: DARK_GREEN_TEXT }}
            >
              {currentReview.quote}
            </p>
            <span
              className="text-5xl font-serif ml-2 opacity-30"
              style={{ color: LIGHT_GREEN_TEXT }}
            >
              &rdquo;
            </span>
          </div>

          {/* Author and Country */}
          <div className="mt-8">
            <p
              className="text-lg font-semibold"
              style={{ color: LIGHT_GREEN_TEXT }}
            >
              {currentReview.author}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {currentReview.flag} {currentReview.country}
            </p>
          </div>

          {/* --- Responsive Mobile Reviewer List --- */}
          <div className="mt-10 md:hidden">
            <h4 className="text-sm text-gray-500 mb-4">
              Click to view other reviews:
            </h4>
            <div className="flex justify-center space-x-3 overflow-x-auto p-2">
              {allReviews.map((reviewer) => (
                <div
                  key={reviewer.id}
                  onClick={() => setCurrentReview(reviewer)}
                  className={`shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 cursor-pointer transition-all duration-200 
                            ${
                              reviewer.id === currentReview.id
                                ? "border-4 transform scale-110"
                                : "opacity-60 border-gray-200"
                            }`}
                  style={{
                    // Apply green border color when active
                    borderColor:
                      reviewer.id === currentReview.id
                        ? LIGHT_GREEN_TEXT
                        : undefined,
                  }}
                >
                  <Image
                    width={1000}
                    height={1000}
                    src={reviewer.imgSrc}
                    alt={reviewer.author}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* --- End Mobile Reviewer List --- */}
        </div>
      </div>

      {/* Scattered Avatars (Interactive - HIDDEN ON MD AND SMALLER SCREENS) */}
      {/* Set to z-20 to ensure they float above the z-10 central card */}
      <div className="hidden md:block absolute inset-0 w-full h-full z-20 pointer-events-none">
        <div className="relative w-full h-full">
          {allReviews.map((reviewer) => (
            <div
              key={reviewer.id}
              onClick={() => setCurrentReview(reviewer)}
              // Resetting pointer-events for the clickable area
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-20 
                          ${
                            reviewer.size
                          } rounded-full overflow-hidden border-2 cursor-pointer pointer-events-auto
                          hover:scale-110 transition-transform duration-300
                          ${
                            reviewer.id === currentReview.id
                              ? "opacity-0 pointer-events-none" // Hide current avatar
                              : ""
                          }`}
              style={{
                ...reviewer.position,
                borderColor: LIGHT_GREEN_TEXT, // Add border back
              }}
            >
              <Image
                width={1000}
                height={1000}
                src={reviewer.imgSrc}
                alt={reviewer.author}
                className="w-full h-full object-cover opacity-75 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
      {/* --- End Floating Avatars --- */}
    </section>
  );
};

export default InteractiveCustomerReviews;
