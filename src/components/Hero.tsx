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
            Moisture First
            Braiding Hair.
          </motion.h1>

          <motion.p
            className="max-w-xl text-lg md:text-xl font-normal tracking-wide mb-10 text-[#5a2a3f]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Created to help your hair retain moisture
          </motion.p>

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
