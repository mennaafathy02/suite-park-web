import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="md:py-10 py-8 container">
      {/* Main Banner Container: Uses a custom linear gradient to match the image. 
        It's set to be flex for easy alignment. 
      */}
      <div
        className="flex flex-wrap gap-4 items-center justify-between p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg"
        style={{
          // Custom gradient from a slightly lighter green to a slightly darker one
          background: "linear-gradient(to right, #4a7e4e, #387040, #1f3731)",
        }}
      >
        {/* Discount Text */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white select-none">
          Early Booking Discounts Up To **50%!**
        </h2>

        {/* Book Now Button */}
        <Link
          href="/"
          className="shrink-0 inline-flex items-center justify-center 
                     px-6 py-3 sm:py-3 sm:px-8 
                     font-semibold rounded-lg shadow-md transition-all duration-300 
                     transform hover:scale-105 bg-white text-primary"
          style={{
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          Book Now
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
