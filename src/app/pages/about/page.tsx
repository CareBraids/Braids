'use client';

import BrandStory from '@/components/BrandStory';
import Testimonials from '@/components/Testimonials';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="relative pt-32 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column Text Content */}
          <div className="space-y-8 flex flex-col justify-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-serif text-[#601438] mb-6">Our Story</h1>
              <div className="w-full h-[1px] bg-gradient-to-r from-[#601438]/20 to-transparent"></div>
            </div>

            <div className="space-y-6 text-[#601438]/90 font-serif leading-relaxed text-lg md:text-xl font-light">
              <p>
                Braiding hair has been part of protective styling for decades. Yet the materials used to create synthetic braiding fibres have rarely been questioned.
              </p>
              <p>
                CareBraids was created after recognizing that the fibres used in braiding hair sit close to the scalp for weeks at a time, yet very little attention had been given to their material quality.
              </p>
              <p>
                Our team of scientists and fiber experts set out to change this, developing a safer, low-tox alternative that's rigorously screened and designed to be scalp-friendly.
              </p>
              <p>
                Our mission is simple: to bring greater transparency, care, and higher standards to braiding hair.
              </p>
              <p className="italic font-medium">
                This is only the beginning of a new standard in braiding hair.
              </p>
            </div>

            <div className="pt-6">
              <a href="/collections/all" className="inline-block bg-[#601438] text-white px-8 md:px-12 py-4 text-xs md:text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#4a0e2d] transition-colors">
                Discover Carebraids
              </a>
            </div>
          </div>

          {/* Right Column Image Content */}
          <div className="relative h-[500px] md:h-[700px] w-full rounded-sm overflow-hidden shadow-xl border border-white/40">
            <Image
              src="/our_story.png"
              alt="Carebraids Story - Woman with Braids"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>

      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-8 p-6 md:p-12">
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
