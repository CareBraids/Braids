'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FlaskConical, Droplets, Heart, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    id: "low-tox",
    title: "Low-tox materials",
    icon: FlaskConical,
    imageSrc: "/low_tox.jpeg",
    description1: "The materials used to create synthetic braiding hair have often received little scrutiny. Yet the fibres used in protective styles sit close to the scalp for weeks at a time. CareBraids was created to bring greater transparency and higher standards to braiding hair.",
    description2: "Many braiding fibres contain harsh coatings that can irritate the scalp. CareBraids fibres are independently screened for heavy metals and restricted substances, supporting a cleaner and more comfortable braiding experience. Because what touches your hair should meet a higher standard."
  },
  {
    id: "hydra-shield",
    title: "Hydra-shield moisture barrier",
    icon: Droplets,
    imageSrc: "/hydra-sheild.png",
    description1: "Traditional braiding hair can sometimes feel dry against natural hair, especially during long-term wear. CareBraids were designed differently.",
    description2: "Our Hydra-Shield technology helps support moisture retention while maintaining a soft, flexible fibre that moves naturally with your hair. The result is braiding hair that looks beautiful while helping your natural hair feel comfortable throughout wear."
  },
  {
    id: "scalp-friendly",
    title: "Scalp friendly",
    icon: Heart,
    imageSrc: "/comfort_led.jpeg",
    description1: "The industry norm often relies on alkaline coatings to create a synthetic shine. These coatings can disrupt the scalp’s natural balance and are widely linked to irritation and the well known “braid itch.”",
    description2: "CareBraids fibres are pH balanced and designed with scalp comfort in mind. By respecting your skin’s natural barrier, our fibres help reduce the irritation that often follows new styles. The result is braiding hair that feels lighter, calmer and easier to wear so you can enjoy your style without the discomfort."
  },
  {
    id: "safety-tested",
    title: "Independently tested for safety",
    icon: ShieldCheck,
    imageSrc: "/independency.png",
    description1: "We believe safety shouldn’t be a promise. It should be proven. While many products rely on self-certification, CareBraids fibres are independently tested to ensure they meet the highest safety standards.",
    description2: "Every batch is submitted to third-party laboratory screening for heavy metals and restricted substances. This extra step gives you peace of mind that what touches your hair and scalp has been carefully verified. Because your hair style should not come at the expense of your health."
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
              Why <br />CareBraids?
            </motion.h1>

            <motion.div
              className="max-w-xl text-lg md:text-xl font-normal tracking-wide mb-10 text-[#5a2a3f]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-4">Many traditional braiding fibres are produced using chemical finishes and harsh alkaline coatings designed to improve handling during manufacturing. These coatings can sometimes irritate the scalp or contribute to dryness during long-term wear.</div> <div className='mb-4'>Most synthetic braiding hair is designed primarily for cost and appearance. CareBraids was created to prioritise scalp comfort, fibre safety and long-term hair health. Our fibres are carefully tested and thoughtfully designed to help protect your hair while you wear your favourite styles.</div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <div className="w-[1px] h-20 bg-gradient-to-b from-[#601438]/50 to-transparent" />
        </div>
      </section>

      {/* Comparison Section: Traditional vs CareBraids */}
      <section className="relative w-full z-20 bg-[#fffdfc] py-20 md:py-32 px-6 md:px-12 border-b border-[#fdf4ff]">
        <div className="max-w-5xl mx-auto">
          {/* Header Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left mb-16 max-w-4xl mx-auto md:mx-0"
          >
            <h2 className="text-[2.2rem] md:text-5xl lg:text-[3.5rem] font-serif font-medium text-[#601438] leading-tight mb-6">
              Why Traditional Braiding Hair<br className="hidden md:block" /> <span className="text-[#c121b6]">Damages</span> Natural Hair
            </h2>
            <p className="text-lg md:text-xl font-light text-[#5a2a3f] leading-relaxed max-w-3xl border-l-2 border-[#fdf4ff] pl-6 py-2">
              Many synthetic braiding fibres are coated with chemical finishes or residues that can irritate the scalp and strip moisture from natural hair. These fibres often sit close to the scalp for weeks during protective styling, yet the materials used to create them have historically received little scrutiny.
            </p>
          </motion.div>

          {/* Comparison Card / Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-white rounded-3xl md:rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(96,20,56,0.1)] border border-[#fdf4ff] overflow-hidden"
          >
            {/* Split Images Header */}
            <div className="flex flex-row relative divide-x-[4px] sm:divide-x-[8px] divide-white bg-white">
              {/* VS Badge */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-white shadow-xl flex items-center justify-center border-2 sm:border-4 border-[#fffdfc]">
                <span className="font-serif font-bold text-[#601438] text-sm md:text-xl tracking-wider">VS</span>
              </div>

              {/* Traditional Image */}
              <div className="w-1/2 h-32 sm:h-48 md:h-64 relative bg-[#fff5f5]">
                <Image
                  src="/traditional_braids.jpeg"
                  alt="Traditional Braiding Hair"
                  fill
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#fff5f5] via-transparent to-black/10 mix-blend-multiply" />
              </div>

              {/* CareBraids Image */}
              <div className="w-1/2 h-32 sm:h-48 md:h-64 relative bg-[#fdf4ff]">
                <Image
                  src="/carebraids.jpeg"
                  alt="CareBraids Protected Styling"
                  fill
                  className="object-cover opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#fdf4ff] via-transparent to-black/10 mix-blend-multiply" />
              </div>
            </div>

            {/* Split Content Grid */}
            <div className="flex flex-row divide-x-[4px] sm:divide-x-[8px] divide-white bg-white">

              {/* Traditional Side (Left) */}
              <div className="w-1/2 bg-gradient-to-b from-[#fff5f5]/80 to-white pt-6 pb-8 px-3 sm:px-6 md:pt-10 md:pb-12 md:px-12">
                <div className="flex flex-col xl:flex-row items-center justify-center gap-2 md:gap-3 mb-6 md:mb-10 text-center">
                  <span className="w-6 h-6 md:w-8 md:h-8 rounded-md bg-[#ffe4e6] flex items-center justify-center text-[#e11d48] font-bold text-sm md:text-lg">!</span>
                  <h3 className="text-sm sm:text-lg md:text-2xl font-serif font-medium text-[#881337]">Traditional<br className="hidden xl:block" /> Braiding Hair</h3>
                </div>
                <ul className="space-y-4 md:space-y-6">
                  {[
                    "May contain chemical coatings",
                    "Can dry out natural hair",
                    "Often not independently tested",
                    "Designed for cost, not scalp health"
                  ].map((item, i) => (
                    <li key={i} className="flex flex-row items-center sm:items-start text-left gap-2 sm:gap-4">
                      <div className="w-5 h-5 md:w-6 md:h-6 mt-0 sm:mt-0.5 rounded-full bg-[#ffe4e6] flex-shrink-0 flex items-center justify-center">
                        <span className="text-[#e11d48] font-bold text-[10px] md:text-xs">!</span>
                      </div>
                      <span className="text-gray-700 font-medium text-[11px] sm:text-sm md:text-lg leading-tight md:leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CareBraids Side (Right) */}
              <div className="w-1/2 bg-gradient-to-b from-[#fdf4ff]/80 to-white pt-6 pb-8 px-3 sm:px-6 md:pt-10 md:pb-12 md:px-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 md:w-40 md:h-40 bg-gradient-to-bl from-[#fae8ff]/50 to-transparent rounded-bl-full pointer-events-none" />

                <div className="flex flex-col xl:flex-row items-center justify-center gap-2 md:gap-3 mb-6 md:mb-10 text-center relative z-10">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-md bg-white border border-[#fae8ff] shadow-sm flex items-center justify-center text-[#601438]">
                    <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <h3 className="text-sm sm:text-lg md:text-2xl font-serif font-medium text-[#601438]">CareBraids</h3>
                </div>
                <ul className="space-y-4 md:space-y-6 relative z-10">
                  {[
                    "Screened for restricted substances",
                    "Hydra-Shield moisture barrier technology",
                    "Comfort-led fibre designed for protective styling",
                    "Independently safety tested"
                  ].map((item, i) => (
                    <li key={i} className="flex flex-row items-center sm:items-start text-left gap-2 sm:gap-4">
                      <div className="w-5 h-5 md:w-6 md:h-6 mt-0 sm:mt-0.5 rounded-full bg-[#601438] flex-shrink-0 flex items-center justify-center">
                        <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-800 font-medium text-[11px] sm:text-sm md:text-lg leading-tight md:leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>

          {/* Bottom Summary & Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <p className="text-[#5a2a3f] font-medium text-lg md:text-xl leading-relaxed mb-10 px-4">
              CareBraids was created to raise the standard in braiding hair by combining safer fibres with professional laboratory testing.
            </p>

            <div className="inline-flex items-center justify-center px-8 md:px-12 py-5 bg-[#601438] text-white font-medium text-sm md:text-base tracking-widest uppercase transition-all shadow-[0_8px_30px_rgb(96,20,56,0.3)] hover:shadow-[0_8px_30px_rgb(96,20,56,0.5)] cursor-default select-none group">
              Continue reading below
              <svg className="w-5 h-5 ml-4 rotate-90 transform transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.div>

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
            <section key={index} id={feature.id} className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto relative group scroll-mt-24 md:scroll-mt-32">
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
