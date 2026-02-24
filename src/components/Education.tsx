'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Play } from 'lucide-react';

const tutorials = [
  {
    title: 'Hydra-Shield Maintenance',
    duration: '4:20',
    image: 'https://placehold.co/800x600/fdf4ff/701a75?text=Maintenance'
  },
  {
    title: 'Perfect Parts Tutorial',
    duration: '6:15',
    image: 'https://placehold.co/800x600/fae8ff/c026d3?text=Parting'
  },
  {
    title: 'Low-Tox Hair Care',
    duration: '3:45',
    image: 'https://placehold.co/800x600/f5d0fe/a21caf?text=Care'
  }
];

export default function Education() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Education & Guides</span>
          <h2 className="text-4xl md:text-6xl font-serif italic text-brand-950">
            Master Your Style
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {tutorials.map((tutorial) => (
            <div key={tutorial.title} className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden mb-6 shadow-xl">
                <Image
                  src={tutorial.image}
                  alt={tutorial.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-950/20 group-hover:bg-brand-950/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-brand-950/80 backdrop-blur-sm text-white text-[10px] px-2 py-1 tracking-widest uppercase">
                  {tutorial.duration}
                </div>
              </div>
              <h3 className="text-xl font-serif italic text-brand-900 group-hover:text-brand-600 transition-colors">
                {tutorial.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/pages/tutorials"
            className="inline-block px-12 py-5 border-2 border-brand-950 text-brand-950 font-bold text-xs tracking-[0.3em] uppercase hover:bg-brand-950 hover:text-white transition-all rounded-none"
          >
            View All Tutorials
          </Link>
        </div>
      </div>
    </section>
  );
}
