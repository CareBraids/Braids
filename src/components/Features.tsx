'use client';

import { Droplets, ShieldCheck, Smile, CheckCircle } from 'lucide-react';

const features = [
  {
    name: 'Low-tox materials',
    description: 'Safe for prolonged wear',
    icon: Droplets,
  },
  {
    name: 'Hydra-Shield',
    description: 'Moisture barrier technology',
    icon: ShieldCheck,
  },
  {
    name: 'Scalp friendly',
    description: 'Itch-free guarantee',
    icon: Smile,
  },
  {
    name: 'Safety tested',
    description: 'Independently verified',
    icon: CheckCircle,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-900 mb-4">
            CareBraids Hydra-Shield
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Hydration inside every strand
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center text-center group">
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 md:h-10 md:w-10 text-brand-600 stroke-1" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {feature.name}
              </h3>
              <p className="text-sm text-gray-500 font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
