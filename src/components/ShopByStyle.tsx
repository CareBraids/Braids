'use client';

import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { name: 'Afro Textures', image: 'https://placehold.co/400x400/fdf4ff/701a75?text=Afro' },
  { name: 'Silky Smooth', image: 'https://placehold.co/400x400/fae8ff/c026d3?text=Silky' },
  { name: 'Boho Waves', image: 'https://placehold.co/400x400/f5d0fe/a21caf?text=Boho' },
  { name: 'Neon Vibes', image: 'https://placehold.co/400x400/f0abfc/86198f?text=Neon' },
  { name: 'Natural Hues', image: 'https://placehold.co/400x400/e879f9/701a75?text=Natural' },
];

export default function ShopByStyle() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-serif italic mb-16 text-brand-950">
          Shop by Style
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/collections/${cat.name.toLowerCase().replace(' ', '-')}`}
              className="group flex flex-col items-center gap-4"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-brand-100 p-1 group-hover:border-brand-500 transition-all duration-300">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <span className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-brand-900 group-hover:text-brand-600 transition-colors">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
