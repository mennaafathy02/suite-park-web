"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="md:py-10 py-8 container mx-auto">
      {/* Main Banner container mx-auto: Uses a custom linear gradient to match the image.
        It's set to be flex for easy alignment.
      */}
      <motion.div
        className="flex flex-wrap gap-4 items-center justify-between p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg"
        style={{
          // Custom gradient from a slightly lighter green to a slightly darker one
          background: "linear-gradient(to right, #4a7e4e, #387040, #1f3731)",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Discount Text */}
        <motion.h2
          className="text-lg sm:text-xl md:text-2xl font-semibold text-white select-none"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Early Booking Discounts Up To **50%!**
        </motion.h2>

        {/* Book Now Button */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
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
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
