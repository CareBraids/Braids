'use client';

import Image from 'next/image';

export default function TermsOfService() {
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
          <h1 className="text-4xl md:text-6xl font-serif text-[#601438] mb-6 tracking-tight">Terms of Service</h1>
          <div className="w-16 h-[1px] bg-[#601438] mx-auto opacity-30 mb-6"></div>
          <p className="text-sm tracking-[0.2em] text-[#601438]/50 uppercase">Last updated: October 2023</p>
        </div>

        <div className="space-y-12 text-[#601438]/80 font-light leading-relaxed">

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#601438] mb-4">1. Overview</h2>
            <p>This website is operated by CareBraids. Throughout the site, the terms &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to CareBraids. CareBraids offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#601438] mb-4">2. Online Store Terms</h2>
            <p>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>
            <p>You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#601438] mb-4">3. Accuracy of Billing and Account Information</h2>
            <p>We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#601438] mb-4">4. Personal Information</h2>
            <p>Your submission of personal information through the store is governed by our Privacy Policy. Please view our Privacy Policy for more details.</p>
          </section>

          <section className="space-y-4 border-t border-[#601438]/10 pt-12 mt-12 text-center">
            <p className="text-[#601438]">Questions about the Terms of Service should be sent to us at <a href="mailto:support@carebraids.com" className="font-bold underline hover:opacity-70">support@carebraids.com</a>.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
