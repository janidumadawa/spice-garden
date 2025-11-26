"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeftIcon,
  StarIcon,
  ClockIcon,
  UsersIcon,
  ChevronRightIcon,
  ArrowRight,
} from "lucide-react";
import Footer from "./Footer";
import NavBar from "./NavBar";

export function DishDetails({ dish }) {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sampleReviews = [
    {
      name: "Priya S.",
      rating: 5,
      date: "2 days ago",
      comment:
        "Absolutely delicious! The authentic flavors remind me of home. The spice level was perfect.",
    },
    {
      name: "Michael R.",
      rating: 4,
      date: "1 week ago",
      comment:
        "Great dish with generous portions. Would recommend the medium spice level for first-timers.",
    },
    {
      name: "Anjali K.",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "A true taste of Sri Lanka! The blend of spices was exquisite, and the presentation was beautiful.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <NavBar />
      {/* Header */}
      <motion.header
        className={`sticky top-20 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm transition-transform duration-300 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.history.back()}
            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <ArrowLeftIcon color={"black"} size={20} />
          </motion.button>
          <div>
            <h1 className="font-['Playfair_Display'] text-lg font-bold text-[#2F2F2F]">
              {dish.name}
            </h1>
          </div>
        </div>
      </motion.header>
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 top-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover border border-black rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>

          {/* Right Column - Dish Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Primary Info */}
            <div>
              <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#2F2F2F] mb-2">
                {dish.name}
              </h2>
              <p className="text-3xl font-extrabold text-[#D4AF37] mb-4">
                {dish.details?.sinhala || dish.name}
              </p>

              {/* Rating & Meta */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      size={16}
                      className={
                        i < Math.floor(dish.details?.rating || 4)
                          ? "text-[#D4AF37] fill-[#D4AF37]"
                          : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="text-sm font-semibold text-[#2F2F2F] ml-1">
                    4.5
                  </span>
                  <span className="text-sm text-gray-500">(47 reviews)</span>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <UsersIcon size={16} />
                  <span>{dish.details?.servingSize || "2-3 people"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon size={16} />
                  <span>{dish.details?.prepTime || "15-20 minutes"}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#2F2F2F] leading-relaxed">
                {dish.details?.fullDescription || dish.description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Customer Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#2F2F2F] mb-6">
            Customer Reviews
          </h3>
          <div className="space-y-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleReviews.map((review, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-md">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-[#2F2F2F]">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        size={16}
                        className={
                          i < review.rating
                            ? "text-[#D4AF37] fill-[#D4AF37]"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>
                <p className="text-[#2F2F2F] leading-relaxed">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
          <button className="mt-6 text-[#000000] bg-[#D4AF37] px-4 py-1 rounded-2xl hover:bg-[#c49e2a] mb-20 flex items-center gap-2">
            Read all reviews <ArrowRight color={"black"} size={20} />
          </button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default DishDetails;
