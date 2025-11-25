'use client'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section id='hero' className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Sri Lankan rice and curry"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#2F2F2F] px-6 py-3 rounded-3xl mb-6"
        >
          <span className="text-[#D4AF37] text-sm sm:text-base tracking-widest font-light">
            AYUBOWAN •  
          </span>

          <span className="text-[#D4AF37] font-apex-pura text-sm sm:text-base tracking-widest font-light">
            ආයුබෝවන්
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-['Playfair_Display'] text-5xl sm:text-6xl lg:text-7xl font-bold text-[#FFF8E7] mb-6"
        >
          Spice Garden
        </motion.h1>

        {/* Tagline and divider - moved outside the paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="text-xl sm:text-2xl text-[#D4AF37] max-w-2xl font-light tracking-wide mb-0">
            Authentic Sri Lankan Flavors in Every Bite
          </p>

                      
          {/* Divider line  */}
          <div className="w-[450px] h-0.5 bg-[#D4AF37] rounded-full mx-auto"/>

        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#D4AF37] text-[#000000] px-12 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          Explore Our Menu
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-40 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-[#D4AF37] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}