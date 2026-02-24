'use client';

import Link from 'next/link';
import Image from 'next/image';

const collections = [
  {
    title: 'Signature Braids',
    handle: 'braids',
    image: 'https://placehold.co/800x1000/fdf4ff/701a75?text=Braids',
    description: 'Ultra-light, long-lasting textures'
  },
  {
    title: 'Faux Locs',
    handle: 'faux-locs',
    image: 'https://placehold.co/800x1000/fae8ff/c026d3?text=Faux+Locs',
    description: 'Bohemian styles for every look'
  },
  {
    title: 'Kidz Range',
    handle: 'kidz-range',
    image: 'https://placehold.co/800x1000/f5d0fe/a21caf?text=Kidz+Range',
    description: 'Gentle on scalps, fun on styles'
  }
];

export default function FeaturedCollections() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-6 text-brand-950">
              Curated Collections
            </h2>
            <p className="text-brand-900/60 font-light tracking-wide uppercase text-sm">
              Discover the perfect match for your unique style
            </p>
          </div>
          <Link
            href="/collections/all"
            className="text-sm font-bold tracking-[0.2em] uppercase border-b-2 border-brand-500 pb-1 hover:text-brand-600 hover:border-brand-600 transition-all"
          >
            Explore All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {collections.map((collection) => (
            <Link
              key={collection.handle}
              href={`/collections/${collection.handle}`}
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 shadow-2xl">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-950/0 group-hover:bg-brand-950/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-brand-950/60 to-transparent">
                  <span className="text-white text-xs tracking-widest uppercase">Shop Now</span>
                </div>
              </div>
              <h3 className="text-2xl font-serif italic text-brand-900 mb-2 group-hover:text-brand-600 transition-colors">
                {collection.title}
              </h3>
              <p className="text-brand-900/50 font-light text-sm uppercase tracking-wider">
                {collection.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
