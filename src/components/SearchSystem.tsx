'use client';

import { Search, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function SearchSystem({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [query, setQuery] = useState('');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-[200] overflow-y-auto"
        >
          {/* Global Blurred Background Layer */}
          <div className="fixed inset-0 z-[-1]">
            <Image
              src="/global_background_image.png"
              alt="Atmosphere"
              fill
              unoptimized={true}
              className="object-cover opacity-90 blur-xl"
            />
            {/* Soft overlay to ensure text remains perfectly readable */}
            <div className="absolute inset-0 bg-white/40 mix-blend-overlay backdrop-blur-md"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 relative z-10">
            {/* Header */}
            <div className="flex justify-between items-center mb-16">
              <span className="text-3xl font-serif italic text-brand-950">Search</span>
              <button onClick={onClose} className="p-2 hover:bg-brand-50 transition-colors">
                <X className="w-8 h-8 text-brand-950" />
              </button>
            </div>

            {/* Input */}
            <div className="relative mb-24">
              <input
                autoFocus
                type="text"
                placeholder="LOOKING FOR SOMETHING?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full text-2xl md:text-5xl font-serif italic border-b-2 border-[#601438]/30 py-6 focus:outline-none focus:border-[#601438] placeholder:text-[#601438]/30 text-[#601438] bg-transparent"
              />
              <Search className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 text-[#601438]" />
            </div>

            {/* Quick Links / Suggestions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              <div className="space-y-8">
                <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#601438]">Popular Searches</h4>
                <ul className="space-y-4">
                  {['Faux Locs', 'Hydra-Shield', 'Kidz Range', 'Fuchsia Rain'].map((item) => (
                    <li key={item}>
                      <button className="text-xl font-serif italic text-[#601438]/80 hover:text-[#601438] transition-colors flex items-center gap-4 group">
                        {item} <ArrowRight className="w-5 h-5 text-[#601438] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#601438]">Trending Now</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    '/product_1.png',
                    '/product_2.png',
                    '/product_3.png',
                    '/product_1.png'
                  ].map((src, i) => (
                    <div key={i} className="aspect-[4/3] bg-brand-50 relative overflow-hidden group cursor-pointer shadow-md">
                      <Image
                        src={src}
                        fill
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        alt="Trend"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
