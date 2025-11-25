'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossedIcon, LeafIcon, SparklesIcon } from 'lucide-react';


// Story Feature Card Component
function StoryFeature({ feature, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-50px',
      }}
      transition={{
        duration: 0.6,
        delay: feature.delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-gray-100"
    >

      {/* Icon Container */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto shadow-md"
        src={feature.icon}
        style={{
          backgroundColor: `${feature.color}15`,
        }}
      >
        <img
            src={feature.icon}
            alt={feature.title}
            className="w-10 h-10"
        />
      </div>

      {/* Content */}
      <div className="text-center">
        <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#2F2F2F] mb-3">
          {feature.title}
        </h3>
        
        <p className="text-[#D4AF37] text-sm mb-4 font-['Noto_Serif_Sinhala'] font-medium">
          {feature.sinhala}
        </p>

        <p className="text-[#2F2F2F] leading-relaxed text-base">
          {feature.description}
        </p>
      </div>

      {/* Decorative Corner */}
      <div className="absolute bottom-4 right-4 w-8 h-8 opacity-20">
        <div 
          className="w-full h-full border-2 rounded-lg"
          style={{ borderColor: feature.color }}
        />
      </div>
    </motion.div>
  );
}

// Main Our Story Component
export function OurStory() {
  const storyFeatures = [
    {
      title: 'Traditional Recipes',
      sinhala: 'සාම්ප්‍රදායික වට්ටෝරු',
      description: 'Passed down through generations, our recipes honor the rich culinary heritage of Sri Lanka, from coastal curries to hill country delicacies.',
      icon: "./images/icons/Traditional-Recipes.png",
      delay: 0.1,
    },
    {
      title: 'Fresh Local Ingredients',
      sinhala: 'නැවුම් දේශීය අමුද්‍රව්‍ය',
      description: 'Daily market-fresh produce, aromatic curry leaves, and authentic spices create the vibrant flavors that define true Sri Lankan cuisine.',
      icon: "./images/icons/Fresh-Ingredients.png",
      delay: 0.2,
    },
    {
      title: 'Cultural Heritage',
      sinhala: 'සංස්කෘතික උරුමය',
      description: 'Experience the warmth of Sri Lankan hospitality and the artistry of our traditional cooking methods in every dish we serve.',
      icon: "./images/icons/Cultural-Heritage.png",
      delay: 0.3,
    },
  ];

  return (
    <section id="story" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF8E7]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
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
            margin: '-100px',
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center mb-4"
        >
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2F2F2F] mb-4">
            Our Story
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-12 mb-40">
          {storyFeatures.map((feature, index) => (
            <StoryFeature key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStory;