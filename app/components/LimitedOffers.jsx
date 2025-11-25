'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ClockIcon, ShoppingCartIcon } from 'lucide-react'

// Simple Countdown Timer Component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(7200) // 2 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const hours = Math.floor(timeLeft / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = timeLeft % 60

  return (
    <div className="flex items-center gap-4 justify-center">
      <div className="text-center">
        <div className="bg-white px-5 py-4 rounded-lg shadow-md font-bold text-2xl">
          <div className="text-[#2F2F2F]">{String(hours).padStart(2, '0')}</div>
        </div>
        <span className="text-sm text-[#2F2F2F] mt-1">Hours</span>
      </div>
      <span className="text-2xl font-bold">:</span>
      <div className="text-center">
        <div className="bg-white px-5 py-4 rounded-lg shadow-md font-bold text-2xl">
          <div className="text-[#2F2F2F]">{String(minutes).padStart(2, '0')}</div>
        </div>
        <span className="text-sm text-[#2F2F2F] mt-1">Minutes</span>
      </div>
      <span className="text-2xl font-bold">:</span>
      <div className="text-center">
        <div className="bg-white px-5 py-4 rounded-lg shadow-md font-bold text-2xl">
          <div className="text-[#2F2F2F]">{String(seconds).padStart(2, '0')}</div>
        </div>
        <span className="text-sm text-[#2F2F2F] mt-1">Seconds</span>
      </div>
    </div>
  )
}

// Card Component
function SpecialCard({ special, index }) {

  return (
    <div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={special.image} 
          alt={special.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-[Playfair_Display] text-xl font-bold text-[#2F2F2F] mb-2">
          {special.title}
        </h3>
        <p className="text-[#2F2F2F] text-sm mb-4">
          {special.description}
        </p>

        {/* Price */}
        <div className="items-center mb-4">
          {special.originalPrice && (
            <span className="font-[Poppins] text-gray-400 line-through text-lg">
              {special.originalPrice}
            </span>
          )}
          <br />

          <span className="font-[Poppins] text-2xl font-bold text-[#D4AF37]">
            {special.price}
          </span>
        </div>

        {/* Order Button */}
        <button
          className="w-full py-3 rounded-lg font-semibold text-white bg-[#C41E3A] hover:bg-[#A01828] transition-colors duration-300 flex items-center justify-center gap-2"
        >
          Order Now
        </button>
      </div>
    </div>
  )
}

// Main LimitedOffers Component
export default function LimitedOffers() {
  const specials = [
    {
      id: '1',
      image: './images/foods/rice&curry1.jpg    ',
      title: 'Executive Lunch Combo',
      description: 'Rice with 3 curries, papadum, and fresh sambol + King Coconut drink',
      originalPrice: 'LKR 1,500',
      price: 'LKR 1,200',
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop',
      title: 'Aloo Samosa',
      description: '10 Aloo Samosa  Samosa Stuffed With Spiced Potato and Peas',
      price: 'LKR 800',
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1081&auto=format&fit=crop',
      title: 'Spicy Crab Kottu',
      description: 'Fresh crab meat stir-fried with roti and secret spice blend',
      price: 'LKR 2,500',
    },
  ]

  return (
    <section id='offers' className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="bg-[#C41E3A] text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block mt-10">
            🔥 TODAY'S SPECIALS
          </div>
          <h2 className="font-[Playfair_Display] text-3xl sm:text-4xl font-bold text-[#2F2F2F] mb-4">
            Limited Time Offers
          </h2>
          <p className="text-[#2F2F2F] max-w-2xl mx-auto mb-8">
            Exclusive deals available only today. Order now before they're gone!
          </p>

          {/* Countdown Timer */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-sm font-semibold text-[#C41E3A]">
              Lunch Special Ends In:    
            </span>
            <CountdownTimer />
          </div>
        </motion.div>

        {/* Special Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specials.map((special, index) => (
            <SpecialCard key={special.id} special={special} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}