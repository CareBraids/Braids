'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#fafafa]">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        <picture>
            <source media="(max-width: 767px)" srcSet="/hero_image_phone.png" />
            <source media="(min-width: 768px)" srcSet="/hero_image_1.png" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero_image_1.png"
              alt="Premium Braids"
              className="w-full h-full object-cover object-top md:object-[right_top] transition-transform duration-700 md:object-[50%_15%]"
            />
        </picture>

        {/* Premium Fade-to-Solid Overlays for Flawless Text Legibility */}
        {/* Mobile: Smooth fade from solid background at the bottom to transparent */}
        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#fafafa]/80 to-transparent md:hidden" />

        {/* Desktop: Elegant fade from the left for content block */}
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#fafafa] via-[#fafafa]/60 to-transparent hidden md:block" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-end md:justify-center px-6 md:px-12 pb-56 md:pb-0 pt-32 md:pt-0">
        <div className="max-w-2xl text-left">

          {/* Main Heading - Clean premium typography without needing drop shadows */}
          <motion.h1
            className="text-[2.75rem] sm:text-[3.5rem] leading-[1.05] md:text-7xl lg:text-[5.5rem] md:leading-[1] font-bold tracking-tight mb-4 font-serif text-[#c026d3]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Finally.<br />Braiding Hair You Can Trust.
          </motion.h1>


          {/* Badge: Lab Tested Fibres - Refined for "Pro" look */}
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/40 backdrop-blur-md border border-[#601438]/10 shadow-sm mb-6 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-8 h-8 rounded-full bg-[#601438] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-semibold text-[#601438] text-sm md:text-base pr-1">Lab Tested Fibres</span>
          </motion.div>

          {/* CTA Buttons - Professional Alignment */}
          <motion.div
            className="flex flex-row gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/collections/all"
              className="flex-1 sm:flex-initial flex items-center justify-center px-8 md:px-12 py-4 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-[#601438] text-white hover:bg-[#4a0e2d] active:scale-95"
            >
              Shop Now
            </Link>
            <Link
              href="/pages/about"
              className="flex-1 sm:flex-initial flex items-center justify-center px-8 md:px-12 py-4 bg-transparent border border-[#601438] font-bold text-xs tracking-widest uppercase transition-all duration-300 text-[#601438] hover:bg-[#601438]/5 active:scale-95"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator for desktop */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block opacity-30">
        <div className="w-[1px] h-12 bg-[#601438]" />
      </div>
    </div>
  );
}
