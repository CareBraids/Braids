'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  handle: string;
  title: string;
  price: string;
  imageSrc: string;
  imageAlt?: string;
}

interface FeaturedProductsProps {
  products?: Product[];
}

export default function FeaturedProducts({ products = [] }: FeaturedProductsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  // Fallback in case Shopify fetching fails or has zero products
  const displayProducts = products.length > 0 ? products : [
    { id: '1', handle: 'hydra-shield-faux-locs-14', title: 'Hydra-Shield Faux Locs (14")', price: '£13.99', imageSrc: '/product_1.png' },
    { id: '2', handle: 'hydra-shield-pre-stretched-24', title: 'Hydra-Shield Pre-Stretched (24")', price: '£13.99', imageSrc: '/product_2.png' },
    { id: '3', handle: 'hydra-shield-butterfly-locs-24', title: 'Hydra-Shield Butterfly Locs (24")', price: '£13.99', imageSrc: '/product_3.png' }
  ];

  return (
    <section className="relative py-32 overflow-hidden isolate">
      {/* Global Blurred Background Layer (Localized to Section) */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/global_background_image.png"
          alt="Atmosphere"
          fill
          unoptimized={true}
          className="object-cover opacity-80 blur-md"
        />
        {/* Soft overlay to ensure main background blends cleanly without washing it out to solid white */}
        <div className="absolute inset-0 bg-white/20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Right Column: Products Horizontal Carousel (Transparent Wrapper) */}
          <div className="w-full flex flex-col justify-center">
            {/* Carousel Controls */}
            <div className="flex justify-between items-center mb-8 gap-4">
              <h2 className="text-3xl md:text-4xl font-serif text-[#601438]">Shop Carebraids</h2>
              <div className="flex gap-4">
                <button
                  onClick={scrollLeft}
                  className="w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-md border border-[#601438]/20 text-[#601438] hover:bg-[#601438] hover:text-white transition-all shadow-sm rounded-none"
                  aria-label="Previous products"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollRight}
                  className="w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-md border border-[#601438]/20 text-[#601438] hover:bg-[#601438] hover:text-white transition-all shadow-sm rounded-none"
                  aria-label="Next products"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-6 sm:gap-8 pb-4 snap-x snap-mandatory hide-scrollbar scroll-smooth items-center"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {displayProducts.map((product) => (
                <div key={product.id || product.handle} className="w-[85vw] sm:w-[280px] lg:w-[320px] flex-none snap-start">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
