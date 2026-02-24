'use client';

import { Instagram } from 'lucide-react';
import Image from 'next/image';

const instagramPosts = [
  'https://placehold.co/400x400/fdf4ff/701a75?text=Post+1',
  'https://placehold.co/400x400/fae8ff/c026d3?text=Post+2',
  'https://placehold.co/400x400/f5d0fe/a21caf?text=Post+3',
  'https://placehold.co/400x400/f0abfc/86198f?text=Post+4',
  'https://placehold.co/400x400/e879f9/701a75?text=Post+5',
  'https://placehold.co/400x400/d946ef/4a044e?text=Post+6',
];

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif italic text-brand-950 mb-4">
            Follow Our Journey
          </h2>
          <a
            href="https://instagram.com/carebraids"
            target="_blank"
            className="text-brand-600 font-bold tracking-[0.2em] uppercase text-xs hover:text-brand-800 transition-colors inline-flex items-center gap-2"
          >
            <Instagram className="w-4 h-4" /> @carebraids
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, i) => (
            <div key={i} className="relative aspect-square overflow-hidden group cursor-pointer shadow-lg">
              <Image
                src={post}
                alt={`Instagram Post ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
