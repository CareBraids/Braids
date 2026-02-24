'use client';

import Image from 'next/image';

export default function RefundPolicy() {
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

      <div className="max-w-4xl mx-auto px-6 md:px-12 bg-white/85 backdrop-blur-xl p-12 shadow-2xl border border-[#601438]/10 rounded-none relative z-10">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-[#601438] mb-6 tracking-tight">Refund Policy</h1>
          <div className="w-16 h-[1px] bg-[#601438] mx-auto opacity-30 mb-6"></div>
          <p className="text-sm tracking-[0.2em] text-[#601438]/50 uppercase">Effective: Immediately</p>
        </div>

        <div className="space-y-12 text-[#601438]/80 font-light leading-relaxed">

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#601438] mb-4">1. Return Window</h2>
            <p>We have a 30-day return policy, which means you have 30 days after receiving your item to request a return. Due to the hygienic nature of our Hydra-Shield braiding hair, returns are subject to strict quality control inspections.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#601438] mb-4">2. Eligibility for Returns</h2>
            <p>To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.</p>
            <p className="bg-[#fff5f7] p-6 border-l-4 border-[#601438] mt-4 font-normal text-[#601438]">
              <strong>Note:</strong> Used hair extensions of any kind cannot be returned under any circumstances for health and safety reasons.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#601438] mb-4">3. Damages and Issues</h2>
            <p>Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right. If you receive a damaged package, please take photos before opening.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#601438] mb-4">4. Refunds Process</h2>
            <p>We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method within 10 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too.</p>
          </section>

          <section className="space-y-4 border-t border-[#601438]/10 pt-12 mt-12 text-center">
            <p className="text-[#601438]">To start a return, you can contact us at <a href="mailto:support@carebraids.com" className="font-bold underline hover:opacity-70">support@carebraids.com</a>.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
