'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  ClockIcon, 
  MapPinIcon, 
  InstagramIcon, 
  FacebookIcon, 
  TwitterIcon 
} from 'lucide-react';

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#2F2F2F] text-[#FFF8E7] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(47, 47, 47, 0.95)',
      }}
    >
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#D4AF37] via-[#C41E3A] to-[#228B22]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {/* Visit Us Section */}
        <div>
          <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-6 text-[#D4AF37]"
          >
            Visit Us
          </h3>
          <div className="space-y-4">

            <div className="flex items-start gap-3">
              <MapPinIcon className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
              <p className="text-sm">
                456 Spice Route
                <br />
                Cultural District, NY 10002
              </p>
            </div>

            <div className="flex items-center gap-3">
              <PhoneIcon className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
              <p className="text-sm">+1 (555) 789-0123</p>
            </div>

          </div>
        </div>

        {/* Opening Hours Section */}
        <div>
          <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-6 text-[#D4AF37]">
            Opening Hours
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3"
            >
              <ClockIcon className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
             
              <div className="text-sm">
                <p className="font-semibold">Monday - Thursday</p>
                <p>11:00 AM - 10:00 PM</p>
                <p className="mt-2 font-semibold">Friday - Sunday</p>
                <p>11:00 AM - 11:00 PM</p>
                <p className="mt-2 text-[#228B22] font-medium">Open Daily</p>
              </div>

            </div>
          </div>
        </div>

        {/* Connect With Us Section */}
        <div>
          <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-6 text-[#D4AF37]">
            Connect With Us
          </h3>

          <div className="flex gap-4">
            {[
              {
                icon: InstagramIcon,
                label: 'Instagram',
                href: '#',
              },
              {
                icon: FacebookIcon,
                label: 'Facebook',
                href: '#',
              },
              {
                icon: TwitterIcon,
                label: 'Twitter',
                href: '#',
              },
            ].map((social, index) => (
              <a 
              key={social.label}
              className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors duration-300">
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <p className="mt-6 text-sm text-[#D4AF37] font-['Noto_Serif_Sinhala']">
            ස්තූතියි • Thank You
          </p>

        </div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#D4AF37]/30 text-center text-sm text-[#D4AF37]">
        <p>
          &copy; 2024 Spice Garden. Bringing authentic Sri Lankan flavors to your table.
        </p>
      </div>
    </footer>
  );
}

export default Footer;