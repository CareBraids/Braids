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
    description1: "For years, the materials used to create synthetic braiding hair have largely gone overlooked. Yet the fibres used in protective styles sit close to the scalp for weeks at a time. CareBraids was created to bring greater transparency and higher standards to braiding hair.",
    description2: "Our fibres are independently screened for heavy metals and restricted substances, helping to support a cleaner and more comfortable braiding experience. Because what touches your hair should meet a higher standard."
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

            <motion.p
              className="max-w-xl text-lg md:text-xl font-normal tracking-wide mb-10 text-[#5a2a3f]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-4">For years, materials used to create syntetic braiding hair have received very little attention, despite their direct contact with your natural hair and scalp.</div> <div className='mb-4'>CareBraids was created to rise the standard. Our strands are carefully tested and thoughtfully designed to support healthier protective styling.</div>
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
