'use client';

import { FlaskConical, Droplets, Heart, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    id: 1,
    icon: FlaskConical,
    title: 'Low-tox materials',
    details: 'Crafted with biocompatible fibers that reject the lead and carcinogenic dyes found in standard synthetics. Your beauty should never compromise your biology.'
  },
  {
    id: 2,
    icon: Droplets,
    title: 'Hydra-shield moisture barrier',
    details: 'A bio-mimetic macadamia infusion that seals moisture deep within each strand, mimicking the protective strength of natural human hair cuticles.'
  },
  {
    id: 3,
    icon: Heart,
    title: 'Scalp friendly',
    details: 'Engineered to respect your skin’s pH balance. Hypoallergenic and free from alkaline coatings, finally ending the silent struggle of the braid itch.'
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: 'Independently safety tested',
    details: 'Every batch undergoes rigorous clinical laboratory audits. Because global safety standards aren’t just met here—they are redefined.'
  }
];

export default function BenefitFeatures() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#fff1f2] to-[#fdf4ff] relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#fae8ff]/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#601438] mb-4 md:mb-6 italic leading-tight">
            Why CareBraids ?
          </h2>
          <p className="text-[#601438]/70 font-light text-lg md:text-xl tracking-tight max-w-2xl mx-auto">
            Because fibre quality matters.
          </p>
          <p className="text-[#601438]/70 font-light text-lg md:text-xl tracking-tight max-w-2xl mx-auto">
            Our fibers have been engineered to shield your hairs moisture levels.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
          {features.map((feature) => (
            <Link key={feature.id} href="/pages/benefits" className="group block relative border border-gray-100 bg-white transition-all duration-300 hover:shadow-2xl hover:border-[#601438]/20 rounded-none">
              <div className="h-full flex flex-col items-center justify-between p-4 md:p-10 text-center relative z-10 transition-opacity duration-300 group-hover:opacity-95">

                <h3 className="text-sm md:text-xl font-medium tracking-tight text-[#601438] mb-4 md:mb-8 capitalize">
                  {feature.title}
                </h3>

                {/* Icon wrapper - static sizing, no expansion */}
                <div className="mb-4 md:mb-8 p-0 text-[#601438]/80 transition-colors">
                  <feature.icon className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1} />
                </div>

                <div className="space-y-4 mb-6 md:mb-10 flex-grow">
                  <p className="text-[11px] md:text-[14px] leading-relaxed text-gray-600 font-light">
                    {feature.details}
                  </p>
                </div>

                {/* Read More - Subtle animation */}
                <div className="pt-2 md:pt-4 text-[9px] md:text-[11px] font-bold tracking-[0.2em] text-[#601438]/60 uppercase flex items-center justify-center gap-1 md:gap-2 group-hover:text-[#601438] transition-all w-full mt-auto">
                  Read More
                  <span className="translate-x-0 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
