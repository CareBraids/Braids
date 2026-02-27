import Image from 'next/image';

export default function TrustedBadges() {
  return (
    <section className="py-16 md:py-20 bg-[#fdf4ff] border-t border-[#601438]/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-12 md:mb-16">
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-[#601438]/30"></div>
          <h2 className="text-2xl md:text-3xl font-serif text-[#601438]">
            Trusted & Independently Verified
          </h2>
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-[#601438]/30"></div>
        </div>

        {/* Badges Display */}
        <div className="flex flex-row items-center justify-center gap-4 sm:gap-10 md:gap-16 lg:gap-24">

          {/* Badge 1 */}
          <div className="flex flex-col items-center group">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-[0_10px_40px_-15px_rgba(96,20,56,0.3)] border border-[#ffffff] transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_15px_50px_-15px_rgba(96,20,56,0.4)]">
              <Image
                src="/badge1.svg"
                alt="Independently Safety Verified Badge"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 160px, 192px"
              />
            </div>
          </div>

          {/* Badge 2 */}
          <div className="flex flex-col items-center group">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-[0_10px_40px_-15px_rgba(96,20,56,0.5)] border border-[#ffffff] transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_15px_50px_-15px_rgba(96,20,56,0.6)]">
              <Image
                src="/badge2.svg"
                alt="Heavy Metal Screened Every Batch Badge"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 160px, 192px"
              />
            </div>
          </div>

          {/* Badge 3 */}
          <div className="flex flex-col items-center group">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-[0_10px_40px_-15px_rgba(96,20,56,0.3)] border border-[#ffffff] transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_15px_50px_-15px_rgba(96,20,56,0.4)]">
              <Image
                src="/badge3.svg"
                alt="Reach Minded Compliant Formulation Badge"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 160px, 192px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
