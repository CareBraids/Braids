'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FlaskConical, Droplets, Heart, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    title: "Low-tox materials",
    icon: FlaskConical,
    imageSrc: "/low_tox_material.png",
    description1: "Standard synthetic hair is often a chemical cocktail of heavy metals and formaldehyde-releasing dyes. These toxins don't just sit on the hair; they leach into your scalp, causing inflammation and long-term biological stress.",
    description2: "CareBraids are crafted with biocompatible, medical-grade fibers that reject these harmful additives. By using pure, certified materials, we ensure that your signature look is as safe as it is stunning. Your beauty should never be a compromise for your health."
  },
  {
    title: "Hydra-shield moisture barrier",
    icon: Droplets,
    imageSrc: "/hydra_shield_moisture.png",
    description1: "The silent conflict of traditional braiding: hair that repels moisture while pulling it away from your own natural strands. This creates a cycle of dryness that leads to irreversible breakage.",
    description2: "We engineered a surface that breathes. Our bio-mimetic macadamia infusion mimics the natural hair cuticle, sealing vital hydration deep within each fiber for six full weeks. No plastic sheen, no brittleness—just the soft, hydrated glow of hair that is truly protected."
  },
  {
    title: "Scalp friendly",
    icon: Heart,
    imageSrc: "/scalp_freindly.png",
    description1: "The industry norm relies on alkaline coatings to force a synthetic shine, a primary trigger for chronic scalp inflammation and the notorious \"braid itch.\"",
    description2: "CareBraids are pH-balanced and designed for physiological comfort. By respecting your skin's natural barrier, we've eliminated the irritation that often follows new styles. Finally, you can wear your beauty without the burden of discomfort."
  },
  {
    title: "Independently safety tested",
    icon: ShieldCheck,
    imageSrc: "/independent_safety.png",
    description1: "We believe that safety shouldn't be a promise; it should be a proven fact. While others hide behind self-certification, we open our products to the most rigorous clinical audits.",
    description2: "Every batch of CareBraids is subjected to 3rd-party laboratory testing that goes beyond industry norms. We screen for over 300 harmful substances to ensure global safety standards aren't just met—they are redefined. This is integrity you can feel in every strand."
  }
];

export default function BenefitsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section - Professional Match to Home Hero */}
      <section className="relative h-screen w-full overflow-hidden bg-[#fdf4ff] z-20">
        {/* Background Image - Optimized for Mobile */}
        <div className="absolute inset-0">
          <picture>
            <source media="(max-width: 767px)" srcSet="/hero_image_mobile.png" />
            <source media="(min-width: 768px)" srcSet="/hero_image_1.png" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero_image_1.png"
              alt="The Science of Care"
              className="w-full h-full object-cover object-center md:object-[right_top] absolute inset-0"
            />
          </picture>
          {/* Refined Professional Floral Overlay Matching Mockup */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#fae8ff]/90 via-white/40 to-transparent w-[80%] md:w-[60%]" />
          <div className="absolute bottom-0 w-full h-[35%] bg-gradient-to-t from-[#fff5f7] via-[#fff5f7]/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 md:px-12 pt-20">
          <div className="max-w-2xl text-left">
            <motion.h1
              className="text-[3.5rem] md:text-6xl lg:text-[5.5rem] font-medium tracking-tight mb-6 font-serif text-[#601438] leading-[1.05]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              The Science <br /> of Care
            </motion.h1>

            <motion.p
              className="max-w-xl text-lg md:text-xl font-normal tracking-wide mb-10 text-[#5a2a3f]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Beyond beauty.<br className="hidden md:block" /> Into the fiber.
            </motion.p>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <div className="w-[1px] h-20 bg-gradient-to-b from-[#601438]/50 to-transparent" />
        </div>
      </section>

      {/* Global Background Container for Benefits */}
      <div className="relative w-full z-10 bg-[#fff5f7]">
        {/* Global Background Image Layer */}
        <div className="absolute inset-0 z-0 opacity-30 md:opacity-40 pointer-events-none mix-blend-multiply">
          <Image
            src="/global_background_image.png"
            alt="Floral Background"
            fill
            className="object-cover object-center"
            priority={false}
          />
        </div>

        {/* The 4 Feature Sections */}
        <div className="relative z-10 py-16 md:py-24">
          {benefits.map((feature, index) => (
            <section key={index} className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto relative group">
              <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Image Frame Column */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative order-1"
                >
                  {/* Outer Frame Wrapper */}
                  <div className="relative aspect-[4/5] max-w-[340px] md:max-w-[400px] w-full mx-auto md:mr-auto md:ml-0 mt-8 md:mt-0">

                    {/* Decorative background behind frame (adds premium feel) */}
                    <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-br from-[#fdf4ff] to-[#fff1f2] rounded-[2rem] md:rounded-[3rem] transform -rotate-3 border border-pink-100/50 z-0 transition-transform duration-500 group-hover:-rotate-1"></div>

                    {/* The Image inside the frame */}
                    <div className="absolute inset-0 rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white z-10 bg-white">
                      <Image
                        src={feature.imageSrc}
                        alt={feature.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                      />
                    </div>

                    {/* The Icon inside a circle overlay at top right */}
                    <div className="absolute -top-6 -right-6 md:-top-8 md:-right-8 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-2xl flex items-center justify-center border border-pink-50 z-20">
                      <div className="w-[4.4rem] h-[4.4rem] md:w-[5.2rem] md:h-[5.2rem] rounded-full border border-pink-100 flex items-center justify-center bg-[#fffafa] transition-transform duration-500 group-hover:rotate-[15deg]">
                        <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-[#601438]" strokeWidth={1} />
                      </div>
                    </div>

                    {/* Title overlay at the bottom */}
                    <div className="absolute -bottom-6 left-4 right-4 md:-bottom-8 md:left-8 md:right-8 bg-white backdrop-blur-md px-4 py-4 md:py-5 shadow-2xl rounded-xl md:rounded-2xl border border-pink-50 z-20 text-center transform transition-transform duration-500 group-hover:-translate-y-1">
                      <h2 className="text-[1.35rem] md:text-2xl lg:text-[1.65rem] font-serif text-[#601438] leading-tight font-medium">
                        {feature.title}
                      </h2>
                    </div>
                  </div>
                </motion.div>

                {/* Text Description Column */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="space-y-6 md:space-y-8 order-2 mt-12 md:mt-0 relative"
                >
                  <div className="space-y-6 text-gray-700 leading-relaxed text-[1.1rem] md:text-lg lg:text-xl font-light tracking-wide bg-white/60 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-6 md:p-0 rounded-2xl md:rounded-none shadow-sm md:shadow-none border border-white/50 md:border-none">
                    <p className="opacity-90">{feature.description1}</p>
                    <p className="text-gray-900 font-medium leading-relaxed">{feature.description2}</p>
                  </div>
                </motion.div>

              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Footer Call to Action - Light & Strong */}
      <section className="py-32 bg-white text-center px-6 relative overflow-hidden border-t border-[#fdf4ff] z-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#fff1f2] via-white to-transparent opacity-80" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#601438] mb-8 md:mb-12 font-medium tracking-tight px-4 leading-tight">
            Ready to <span className="italic">feel</span> the difference?
          </h2>
          <Link
            href="/collections/all"
            className="inline-block px-10 md:px-16 py-5 md:py-7 bg-[#601438] text-white font-bold text-[10px] md:text-sm tracking-[0.4em] uppercase hover:bg-[#4a0e2d] transition-all shadow-xl rounded-none w-full sm:w-auto"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </main>
  );
}
