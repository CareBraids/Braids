'use client';

import Image from 'next/image';

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl md:text-6xl font-serif text-[#601438] mb-6 tracking-tight">Privacy Policy</h1>
          <div className="w-16 h-[1px] bg-[#601438] mx-auto opacity-30 mb-6"></div>
          <p className="text-sm tracking-[0.2em] text-[#601438]/50 uppercase">Last updated: October 2023</p>
        </div>

        <div className="space-y-12 text-[#601438]/80 font-light leading-relaxed">

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#601438] mb-4">1. Introduction</h2>
            <p>Welcome to CareBraids. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#601438] mb-4">2. The Data We Collect About You</h2>
            <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#601438]/70">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Financial Data</strong> includes bank account and payment card details.</li>
              <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#601438] mb-4">3. How We Use Your Personal Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#601438]/70">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section className="space-y-4 border-t border-[#601438]/10 pt-12 mt-12">
            <p className="italic text-center text-[#601438]/60">For more detailed information regarding our privacy practices, please contact our Data Protection Officer at support@carebraids.com.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
