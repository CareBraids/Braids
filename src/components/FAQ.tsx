'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "ARE CAREBRAIDS MATERIALS SAFE?",
    answer: "Yes, our hair is made from low-tox, hypoallergenic materials that are independently tested to be safe for prolonged scalp contact."
  },
  {
    question: "HOW LONG DOES THE INSTALLATION LAST?",
    answer: "With proper maintenance and our Hydra-Shield™ technology, our braids can comfortably last between 6 to 8 weeks."
  },
  {
    question: "DO YOU SHIP INTERNATIONALLY?",
    answer: "Absolutely! We ship worldwide with expedited options to ensure you get your hair in time for your next appointment."
  },
  {
    question: "HOW DO I CARE FOR MY BRAIDS?",
    answer: "We recommend using a light scalp oil and avoiding excessive heat. Check our 'How To' section for detailed maintenance guides."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="bg-white/85 backdrop-blur-xl p-8 md:p-12 shadow-2xl border border-[#601438]/10 rounded-none w-full">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#601438]/80 font-bold tracking-[0.3em] uppercase text-[10px]">Assistance</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#601438]">
            Common Questions
          </h2>
          <div className="w-16 h-[1px] bg-[#601438] mx-auto opacity-30 mt-6"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#601438]/10 pb-2">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex justify-between items-center text-left group transition-all"
              >
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#601438] group-hover:text-[#601438]/70 transition-colors uppercase">
                  {faq.question}
                </span>
                {openIndex === i ? (
                  <Minus className="w-4 h-4 text-[#601438]" />
                ) : (
                  <Plus className="w-4 h-4 text-[#601438]/40 group-hover:text-[#601438] transition-colors" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-[#601438]/80 font-light leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
