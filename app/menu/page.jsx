"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SearchIcon } from "lucide-react";
import { menuItems, categories } from "../data/menu-data";
import Footer from "../components/Footer";

function CategoryNav() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isSticky
          ? "fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg shadow-md"
          : "relative"
      } transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-4 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-300 bg-gray-100 text-[#2F2F2F] hover:bg-[#D4AF37]"
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function MenuItemCard({ item }) {
  return (
    <Link href={`/dish/${item.id}`}>
      <div
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      >
        <div className="flex gap-4 p-4">
          <div className="relative w-24 h-24 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-[#C41E3A]/20 rounded-lg" />
            <img
              src={item.image}
              alt={item.name}
              className="relative w-full h-full object-cover rounded-lg"
            />
            {item.popular && (
              <div className="absolute -top-2 -right-2 bg-[#C41E3A] text-white text-xs px-2 py-1 rounded-full font-bold">
                Popular
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#2F2F2F] mb-1">
              {item.name}
            </h3>
            <h2 className="text-lg mb-1 font-extrabold text-[#D4AF37]">
              {item.details?.sinhala}
            </h2>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {item.description}
            </p>
            <span className="text-xl font-bold text-[#D4AF37] font-['Poppins']">
              LKR {item.price.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/menu-bg.png"
            alt="Sri Lankan food spread"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <Link
          href="/"
          className="absolute top-20 left-20 flex items-center text-white bg-[#2F2F2F] rounded-xl py-1 px-4 transition-colors duration-300 z-10"
        >
          Back to Home
        </Link>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-['Playfair_Display'] text-5xl sm:text-6xl font-bold text-white mb-4"
          >
            Our Menu
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#D4AF37] mb-8"
          >
            Authentic Sri Lankan Flavors
          </motion.p>

          <div
            className="w-full max-w-md"
          >
            <div className="relative">
              <SearchIcon
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2F2F2F]"
                size={20}
              />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-[#2F2F2F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] border border-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      <CategoryNav />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div>
          {categories.map((category) => {
            const categoryItems = menuItems.filter(
              (item) => item.category === category.id
            );
            return (
              <section
                key={category.id}
                id={`category-${category.id}`}
                className="mb-16"
              >
                <div
                  className="flex items-center gap-3 mb-8"
                >
                  <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#2F2F2F]">
                    {category.name}
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {categoryItems.map((item, index) => (
                    <div
                      key={item.id}
                    >
                      <MenuItemCard item={item} />
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}