'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MenuIcon, XIcon } from 'lucide-react'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    {
      name: 'Home',
      href: '#hero',
    },
    {
      name: 'Offers',
      href: '#offers',
    },
    {
      name: 'Dishes',
      href: '#dishes',
    },
    {
      name: 'Our Story',
      href: '#story',
    },
    {
      name: 'Contact',
      href: '#contact',
    },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Main Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FFF8E7]/50 backdrop-blur-lg shadow-md' 
            : 'bg-[#FFF8E7]/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="font-['Playfair_Display'] text-2xl font-bold text-[#2F2F2F]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Spice Garden
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-[#2F2F2F] hover:text-[#C41E3A] font-medium transition-colors duration-300 relative group"
                >
                  {item.name}
                  {/* underline the nav items */}
                    <span className="absolute left-0 -bottom-1 h-0.5 bg-[#D4AF37] transition-all duration-300 w-full"></span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-[#2F2F2F] hover:text-[#C41E3A] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Mobile Menu Sidebar */}
      <motion.div
        initial={false}
        animate={isOpen ? { x: 0 } : { x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-[#FFF8E7]/95 backdrop-blur-xl z-50 md:hidden shadow-2xl"
      >
        {/* close x icon */}
        <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-[#2F2F2F] hover:text-[#C41E3A] transition-colors"
            aria-label="Close menu"
        >
            <XIcon size={24} />
        </motion.button>
        
        <div className="flex flex-col h-full pt-24 px-8">
          
          {/* Mobile Navigation Links */}
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              initial={{ opacity: 0, x: 50 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-2xl font-['Playfair_Display'] font-semibold text-[#2F2F2F] hover:text-[#C41E3A] py-4 border-b border-[#D4AF37]/20 transition-colors duration-300"
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  )
}