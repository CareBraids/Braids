'use client';

import { use } from 'react';
import Image from 'next/image';

export default function GenericPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = use(params);

  // Convert URL handle to beautiful human-readable title (e.g. 'prep-guide' -> 'Prep Guide')
  const title = handle
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="relative pt-40 pb-32 min-h-screen">
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

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 px-4 py-8 bg-white/40 backdrop-blur-sm border border-[#601438]/10 max-w-2xl mx-auto shadow-sm">
          <h1 className="text-5xl md:text-7xl font-serif text-[#601438] mb-6">{title}</h1>
          <div className="w-24 h-[1px] bg-[#601438] mx-auto opacity-20"></div>
        </div>

        <div className="prose prose-lg max-w-none text-[#601438]/80 space-y-8 tracking-wide font-light">
          <p className="text-xl md:text-2xl text-center leading-relaxed font-light mb-16 max-w-2xl mx-auto text-[#601438] bg-white/60 backdrop-blur-md px-6 py-4 shadow-lg border border-[#601438]/5">
            We are currently crafting an elevated experience for this section. Please check back soon.
          </p>

          <div className="bg-white/85 backdrop-blur-xl p-12 shadow-2xl border border-[#601438]/10 rounded-none text-[#601438]/90">
            <p className="leading-relaxed">
              At CareBraids, we believe that every interaction with our brand should represent the premium
              quality of our <strong>Hydra-Shield</strong> products. Our team is actively curating the content
              for this specific page to ensure it meets our rigorous standards.
            </p>
            <br />
            <p className="leading-relaxed">
              In the meantime, our core focus remains absolute: delivering scalp-friendly, itch-reduced braiding hair
              tested for ultimate safety and comfort. If you have immediate questions related to <strong>{title}</strong>,
              please reach out to our dedicated support team directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
