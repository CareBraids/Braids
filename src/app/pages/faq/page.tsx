'use client';

import FAQ from '@/components/FAQ';
import Image from 'next/image';

export default function FAQPage() {
  return (
    <div className="relative pt-32 pb-24 min-h-screen">
      {/* Global Blurred Background Layer */}
      <div className="fixed inset-0 z-[-50]">
        <Image
          src="/global_background_image.png"
          alt="Atmosphere"
          fill
          unoptimized={true}
          className="object-cover opacity-80 blur-md"
        />
        {/* Soft overlay to ensure text remains perfectly readable */}
        <div className="absolute inset-0 bg-white/20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 relative z-10">
        <h1 className="text-5xl md:text-8xl font-serif italic text-[#601438] mb-8 mt-12">FAQ</h1>
        <p className="text-[#601438]/80 font-light text-xl leading-relaxed max-w-3xl mx-auto uppercase tracking-widest bg-white/40 backdrop-blur-sm px-6 py-2 inline-block">
          Find answers to common questions about our products and services.
        </p>
      </div>
      <div className="relative z-10">
        <FAQ />
      </div>
    </div>
  );
}
