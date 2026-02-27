'use client';

import { FlaskConical, Droplets, Heart, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    id: 1,
    icon: FlaskConical,
    title: 'Low-tox materials',
    details: 'Independently tested and screened for heavy metals and restricted substances.',
    imageSrc: '/low_tox.png'
  },
  {
    id: 2,
    icon: Droplets,
    title: 'Hydra-Shield',
    details: 'Our fibre is designed with a moisture barrier to help reduce moisture loss from your natural hair during wear.',
    imageSrc: '/hydra-sheild.png'
  },
  {
    id: 3,
    icon: Heart,
    title: 'Comfort Lead',
    details: 'Lightweight fibre developed for a more comfortable braiding experience.',
    imageSrc: '/comfort_lead.png'
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: 'Independently safety tested',
    details: 'Screened for heavy metals and restricted substances for peace of mind',
    imageSrc: '/independency.png'
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
            Why fibre matters
          </h2>
          <p className="text-[#601438]/70 font-light text-lg md:text-xl tracking-tight max-w-2xl mx-auto">
            Lab tested fibre designed to support your hair retain moisture and minimise breakage.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
          {features.map((feature) => (
            <Link key={feature.id} href="/pages/benefits" className="group block relative border border-gray-100 bg-white transition-all duration-300 hover:shadow-2xl hover:border-[#601438]/20 rounded-none overflow-hidden">
              {/* Background Image that fades in on hover */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={feature.imageSrc}
                  alt={feature.title}
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                />
                {/* Darker overlay so text remains readable */}
                <div className="absolute inset-0 bg-[#601438]/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#4a0e2d] to-transparent opacity-80"></div>
              </div>

              {/* Content Box */}
              <div className="h-full flex flex-col items-center justify-between p-4 md:p-10 text-center relative z-10 transition-colors duration-300">

                <h3 className="text-sm md:text-xl font-medium tracking-tight text-[#601438] group-hover:text-white mb-4 md:mb-8 capitalize transition-colors duration-300">
                  {feature.title}
                </h3>

                <div className="mb-4 md:mb-8 p-0 text-[#601438]/80 group-hover:text-white/90 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1} />
                </div>

                <div className="space-y-4 mb-6 md:mb-10 flex-grow">
                  <p className="text-[11px] md:text-[14px] leading-relaxed text-gray-600 group-hover:text-white/80 font-light transition-colors duration-300">
                    {feature.details}
                  </p>
                </div>

                <div className="pt-2 md:pt-4 text-[9px] md:text-[11px] font-bold tracking-[0.2em] text-[#601438]/60 group-hover:text-white uppercase flex items-center justify-center gap-1 md:gap-2 transition-colors duration-300 w-full mt-auto">
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
