'use client';

import { ShieldCheck, Truck, CreditCard, RotateCcw } from 'lucide-react';

const perks = [
  {
    icon: Truck,
    title: 'Fast Shipping',
    desc: 'Worldwide delivery in 3-5 days'
  },
  {
    icon: ShieldCheck,
    title: 'Secure Checkout',
    desc: 'SSL encrypted payments'
  },
  {
    icon: CreditCard,
    title: 'Easy Payments',
    desc: 'Pay with cards or mobile money'
  },
  {
    icon: RotateCcw,
    title: 'Free Returns',
    desc: '30-day easy return policy'
  }
];

export default function TrustProof() {
  return (
    <section className="py-16 border-y border-brand-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {perks.map((perk) => (
            <div key={perk.title} className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-brand-50 rounded-full text-brand-600">
                <perk.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-brand-950 mb-1">{perk.title}</h4>
                <p className="text-xs text-brand-900/50 uppercase tracking-wider">{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
