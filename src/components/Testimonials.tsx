'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Loyal Customer',
    content: "I've tried many brands, but CareBraids is on another level. The hair is so soft and doesn't itch at all!",
    rating: 5
  },
  {
    name: 'Jessica T.',
    role: 'Professional Stylist',
    content: "My clients love the Hydra-Shield technology. It makes my job easier and the results last much longer.",
    rating: 5
  },
  {
    name: 'Amina D.',
    role: 'Beauty Influencer',
    content: "The fuchsia colors are so vibrant! I get compliments everywhere I go. Definitely my go-to brand.",
    rating: 4
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 px-6 md:px-12 relative z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <Quote className="w-16 h-16 text-[#601438]/20 mx-auto mb-8" />

        <div className="relative h-[250px] md:h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < testimonials[index].rating ? 'text-[#601438] fill-[#601438]' : 'text-[#601438]/10'}`}
                  />
                ))}
              </div>
              <p className="text-2xl md:text-3xl font-serif italic text-[#601438] mb-8 leading-relaxed font-medium">
                &quot;{testimonials[index].content}&quot;
              </p>
              <div>
                <h4 className="font-bold text-[#601438] uppercase tracking-[0.2em] text-[10px]">{testimonials[index].name}</h4>
                <p className="text-[#601438]/50 text-[10px] uppercase tracking-widest mt-2">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-6 mt-16">
          <button onClick={prev} className="p-4 rounded-full border border-[#601438]/20 text-[#601438] hover:bg-[#601438] hover:text-white transition-all">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="p-4 rounded-full border border-[#601438]/20 text-[#601438] hover:bg-[#601438] hover:text-white transition-all">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
