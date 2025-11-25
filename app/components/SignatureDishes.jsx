"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HeartIcon, ShoppingCartIcon, ShareIcon } from "lucide-react";

// Signature Dish Card Component
function DishCard({ dish, index }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleCardClick = () => {
    window.location.hash = `#dish/${dish.id || "7"}`;
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden cursor-pointer border border-gray-100"
    >
      {/* Badge */}
      {dish.badge && (
        <motion.div
          initial={{
            scale: 0,
            rotate: -12,
          }}
          whileInView={{
            scale: 1,
            rotate: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.15 + 0.3,
            type: "spring",
          }}
          className="absolute top-4 right-4 bg-[#C41E3A] text-white px-3 py-1 rounded-full text-xs font-semibold z-10 shadow-md"
        >
          {dish.badge}
        </motion.div>
      )}

      {/* Action Buttons */}
      <div className="absolute top-4 left-4 flex gap-2 z-10">
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={handleFavoriteClick}
          className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
          aria-label="Add to favorites"
        >
          <HeartIcon
            size={18}
            className={`transition-colors duration-300 ${
              isFavorite ? "fill-[#C41E3A] text-[#C41E3A]" : "text-[#2F2F2F]"
            }`}
          />
        </motion.button>
      </div>

      {/* Dish Image */}
      <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden align-center mx-auto shadow-lg">
        <img
          src={dish.image}
          alt={dish.alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dish Details */}
      <div className="text-center mb-4">
        <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#2F2F2F] mb-2">
          {dish.name}
        </h3>
        <p className="text-[#C41E3A] text-sm font-['Noto_Serif_Sinhala'] mb-3">
          {dish.sinhala}
        </p>
        <p className="text-[#2F2F2F] text-sm leading-relaxed mb-4 min-h-[40px]">
          {dish.description}
        </p>

        {/* Spice Level Indicator */}
        {dish.icon && (
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-lg">{dish.icon}</span>
            <span className="text-xs text-[#2F2F2F] font-medium">
              {dish.iconLabel}
            </span>
          </div>
        )}
      </div>

      {/* Price */}
      <div className="text-center mb-4">
        <span className="font-[poppins] text-3xl font-bold text-[#D4AF37] font-['Playfair_Display']">
          {dish.price}
        </span>
      </div>

      {/* Order Button */}
      <button className="w-full py-3 rounded-lg font-semibold text-white bg-[#D4AF37] hover:bg-[#D4AF37]/90 transition-colors duration-300 flex items-center justify-center gap-2">
        Order Now
      </button>
    </div>
  );
}

// Main Signature Dishes Component
export function SignatureDishes() {
  const signatureDishes = [
    {
      id: "7",
      name: "Chicken Kottu",
      sinhala: "චිකන් කොත්තු",
      description:
        "Fresh roti strips stir-fried with chicken, vegetables, and aromatic spices",
      price: "LKR 1,200",
      image: "./images/foods/chicken-kottu.jpg",
      alt: "Sizzling chicken kottu preparation",
      badge: "🔥 Most Popular",
      icon: "🌶️",
      iconLabel: "Spicy",
    },
    {
      id: "10",
      name: "Egg Hoppers",
      sinhala: "බිත්තර ආප්ප",
      description:
        "Crispy bowl-shaped pancakes with egg, served with lunu miris",
      price: "LKR 400",
      image: "./images/foods/egg-hoppers.jpg",
      alt: "Perfect golden hopper with egg center",
      icon: "🌶️",
      iconLabel: "Spicy",
    },
    {
      id: "5",
      name: "Traditional Rice & Curry",
      sinhala: "රයිස් & කරි",
      description: "Steamed rice with 5 authentic curries and homemade sambol",
      price: "LKR 900",
      image: "./images/foods/rice-curry.jpg",
      alt: "Vibrant rice with multiple curry accompaniments",
      icon: "🌱",
      iconLabel: "Vegetarian",
    },
  ];

  return (
    <section id="dishes" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FFF8E7]">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: "-100px",
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="text-center mb-4"
      >
        <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-[#2F2F2F] mb-4">
          Signature Dishes
        </h2>
        <p className="text-[#2F2F2F] max-w-2xl mx-auto mt-4">
          Discover our most beloved creations, crafted with authentic recipes
          and the finest ingredients
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-12">
        {signatureDishes.map((dish, index) => (
          <DishCard key={index} dish={dish} index={index} />
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="bg-[#D4AF37] text-[#2F2F2F] px-10 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-[#C49F27] transition-all duration-300">
          View Full Menu
        </button>
      </div>
      
    </section>
  );
}

export default SignatureDishes;
