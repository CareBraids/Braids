'use client';

import { use } from 'react';
import ProductCard from '@/components/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const mockProducts = [
  { handle: 'hydra-shield-faux-locs-14', title: 'Hydra-Shield Faux Locs (14")', price: '£13.99', imageSrc: '/product_1.png' },
  { handle: 'hydra-shield-pre-stretched-24', title: 'Hydra-Shield Pre-Stretched (24")', price: '£13.99', imageSrc: '/product_2.png' },
  { handle: 'hydra-shield-butterfly-locs-24', title: 'Hydra-Shield Butterfly Locs (24")', price: '£13.99', imageSrc: '/product_3.png' },
];

export default function CollectionPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = use(params);
  const title = handle.replace(/-/g, ' ').toUpperCase();

  return (
    <div className="relative pt-40 pb-24 px-6 md:px-12 min-h-screen">
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-serif text-[#601438] mb-6">{title}</h1>
          <p className="text-[#601438]/50 font-bold tracking-widest uppercase text-sm">Discover our premium selection</p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-y border-[#601438]/10 mb-12 gap-6">
          <div className="flex gap-8">
            <button className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#601438]">
              <Filter className="w-4 h-4" /> Filter By <ChevronDown className="w-3 h-3" />
            </button>
            <button className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#601438]">
              Availability <ChevronDown className="w-3 h-3" />
            </button>
          </div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-[#601438]/60">
            {mockProducts.length} PRODUCTS
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {mockProducts.map((product) => (
            <ProductCard key={product.handle} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
