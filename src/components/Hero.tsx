'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#fdf4ff]">

      {/* Background Image - Optimized for Mobile */}
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 767px)" srcSet="/hero_image_mobile.png" />
          <source media="(min-width: 768px)" srcSet="/hero_image_1.png" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero_image_1.png"
            alt="Premium Braids"
            className="w-full h-full object-cover object-center md:object-[right_top] absolute inset-0"
          />
        </picture>
        {/* Refined Professional Floral Overlay Matching Mockup */}
        {/* A soft white gradient from the left so the text is perfectly readable, fading into the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fae8ff]/90 via-white/40 to-transparent w-[80%] md:w-[60%]" />
        {/* A subtle peach/pink gradient at the bottom to blend with the next section */}
        <div className="absolute bottom-0 w-full h-[35%] bg-gradient-to-t from-[#fff5f7] via-[#fff5f7]/80 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 md:px-12 pt-20">
        <div className="max-w-2xl text-left">
          {/* Animated Main Heading with Serif Font */}
          <motion.h1
            className="text-[3.5rem] md:text-6xl lg:text-[5.5rem] font-medium tracking-tight mb-6 font-serif text-[#601438] leading-[1.05]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Finally.
            <br />
            Braiding Hair You Can Trust.
          </motion.h1>

          <motion.p
            className="max-w-xl text-lg md:text-xl font-normal tracking-wide mb-8 text-[#5a2a3f]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professionally tested fibres designed to protect your hair and retain moisture.
          </motion.p>

          <motion.div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-br from-white/70 to-white/30 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_0_rgba(96,20,56,0.15)] mb-10 w-auto group cursor-default"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex-shrink-0 flex items-center justify-center drop-shadow-md transition-transform duration-500 group-hover:scale-110">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[1.75rem] h-[1.75rem] md:w-9 md:h-9">
                {/* Thick outer border */}
                <path d="M16 29c0 0 11-5.5 11-14V8L16 3 5 8v7c0 8.5 11 14 11 14z" fill="#601438"/>
                {/* Inner light region */}
                <path d="M16 26.5C16 26.5 7 21.5 7 14.5V9.5L16 5.5l9 4v5c0 7-9 12-9 12z" fill="#fdf4ff"/>
                {/* Inner purple core */}
                <path d="M16 24.5C16 24.5 8.5 20 8.5 14.5V10.5L16 7.5l7.5 3v4c0 5.5-7.5 10-7.5 10z" fill="#601438"/>
                {/* Checkmark */}
                <path d="M11.5 15l3 3 6-6" stroke="#fdf4ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-semibold text-[#601438] text-sm md:text-lg pr-2 tracking-wide drop-shadow-sm">Lab Tested Fibres</span>
          </motion.div>

          <motion.div
            className="flex flex-row gap-3 sm:gap-4 w-full sm:w-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/collections/all"
              className="flex-1 flex items-center justify-center px-2 sm:px-10 py-4 font-bold text-[9px] sm:text-xs tracking-widest sm:tracking-[0.2em] uppercase transition-all duration-300 rounded-sm bg-[#601438] text-white shadow-xl hover:bg-[#4a0e2d] text-center"
            >
              Shop Now
            </Link>
            <Link
              href="/pages/about"
              className="flex-1 flex items-center justify-center px-2 sm:px-10 py-4 bg-transparent border border-[#601438] font-bold text-[9px] sm:text-xs tracking-widest sm:tracking-[0.2em] uppercase transition-all duration-300 rounded-sm text-[#601438] hover:bg-[#601438] hover:text-white text-center"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#601438]/50 to-transparent" />
      </div>
    </div>
  );
}
