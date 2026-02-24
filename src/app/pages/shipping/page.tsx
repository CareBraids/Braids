'use client';

import Image from 'next/image';

export default function ShippingPolicy() {
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
          <h1 className="text-4xl md:text-6xl font-serif text-[#601438] mb-6 tracking-tight">Shipping Policy</h1>
          <div className="w-16 h-[1px] bg-[#601438] mx-auto opacity-30 mb-6"></div>
          <p className="text-sm tracking-[0.2em] text-[#601438]/50 uppercase">Global & Domestic Delivery</p>
        </div>

        <div className="space-y-12 text-[#601438]/80 font-light leading-relaxed">

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#601438] mb-4">1. Processing Time</h2>
            <p>All orders are processed within 1 to 2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.</p>
            <p className="bg-[#fff5f7] p-6 border-l-4 border-[#601438] mt-4 font-normal text-[#601438]">
              <strong>Express Orders:</strong> Orders placed with expedited shipping before 12 PM EST will be processed the same day.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#601438] mb-4">2. Domestic Shipping Rates</h2>
            <p>Shipping charges for your order will be calculated and displayed at checkout.</p>
            <ul className="list-disc pl-6 space-y-2 text-[#601438]/70">
              <li><strong>Standard Delivery:</strong> 3-5 business days - $5.99</li>
              <li><strong>Express Delivery:</strong> 1-2 business days - $14.99</li>
              <li><strong>Free Shipping:</strong> Available on all domestic orders over $75.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#601438] mb-4">3. International Shipping</h2>
            <p>We offer international shipping to select countries worldwide. Delivery times range from 7-14 business days depending on the destination and customs processing.</p>
            <p>Your order may be subject to import duties and taxes (including VAT), which are incurred once a shipment reaches your destination country. CareBraids is not responsible for these charges if they are applied and are your responsibility as the customer.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#601438] mb-4">4. Order Status Tracking</h2>
            <p>When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available.</p>
          </section>

          <section className="space-y-4 border-t border-[#601438]/10 pt-12 mt-12 text-center">
            <p className="text-[#601438]">For any questions regarding shipping and delivery, please contact <a href="mailto:support@carebraids.com" className="font-bold underline hover:opacity-70">support@carebraids.com</a>.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
