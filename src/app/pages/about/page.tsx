'use client';

import BrandStory from '@/components/BrandStory';
import Testimonials from '@/components/Testimonials';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="relative pt-32 min-h-screen">
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

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24 text-center relative z-10">
        <h1 className="text-5xl md:text-8xl font-serif italic text-[#601438] mb-8 mt-12">Our Journey</h1>
        <p className="text-[#601438]/80 font-light text-xl leading-relaxed max-w-3xl mx-auto uppercase tracking-widest bg-white/40 backdrop-blur-sm px-6 py-2 inline-block">
          Empowering beauty through quality and innovation
        </p>
      </div>

      <div className="relative z-10">
        <BrandStory />
      </div>

      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-8 bg-white/85 backdrop-blur-xl p-12 md:p-16 shadow-2xl border border-[#601438]/10 rounded-none">
          <h2 className="text-4xl md:text-5xl font-serif text-[#601438]">Sustainability & Safety</h2>
          <div className="w-16 h-[1px] bg-[#601438] mx-auto opacity-30"></div>
          <p className="text-[#601438]/90 font-light text-lg md:text-xl leading-relaxed">
            We are committed to using only the safest materials for your scalp and the environment. Our production process is independently verified to ensure zero harmful chemicals are used in our braiding hair.
          </p>
        </div>
      </section>

      <div className="relative z-10">
        <Testimonials />
      </div>
    </div>
  );
}
