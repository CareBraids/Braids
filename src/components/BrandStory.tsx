'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function BrandStory() {
  return (
    <section className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-square md:aspect-[4/3] overflow-hidden shadow-2xl border border-[#601438]/5 rounded-none">
          <Image
            src="/more_than_love.png"
            alt="Brand Story"
            fill
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-md p-8 md:p-12 border-t border-[#601438]/10">
            <p className="text-[#601438] text-2xl md:text-4xl font-serif italic leading-tight">
              &quot;More than just hair, it&apos;s a statement of self-love.&quot;
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <span className="text-[#601438]/80 font-bold tracking-[0.3em] uppercase text-[10px]">Our Narrative</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#601438] leading-tight">
            Redefining the Braiding <br className="hidden lg:block" /> Experience
          </h2>
          <div className="space-y-6 text-[#601438]/70 font-light leading-relaxed text-lg tracking-wide">
            <p>
              CareBraids was born out of a desire for quality that doesn&apos;t compromise on comfort. We believe every woman deserves hair that feels as good as it looks.
            </p>
            <p>
              Our Hydra-Shield™ technology and low-tox materials ensure that your style stays fresh and your scalp stays happy. We are here to empower your beauty journey with products that are safe, stylish, and durable.
            </p>
          </div>
          <div className="pt-4">
            <Link href="/pages/benefits" className="inline-block px-10 py-5 bg-[#601438] text-white font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-[#4a0e2d] transition-all rounded-none shadow-xl border border-[#601438]">
              Discover Our Values
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
