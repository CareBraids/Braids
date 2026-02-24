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

          {/* Left Column: Heading and Text inside Frosted Glass */}
          <div className="lg:w-1/3 w-full bg-white/70 backdrop-blur-xl p-10 shadow-xl border border-[#601438]/10">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif text-[#601438] leading-tight">
                Our Best Sellers
              </h2>

              <div className="w-full h-[1px] bg-[#601438]/20" />

              <div className="space-y-6">
                <p className="text-gray-800 font-light tracking-wide text-lg">
                  Experience the <span className="font-medium text-[#601438]">CareBraids</span> difference.
                </p>
                <p className="text-gray-700 font-light text-[15px] leading-relaxed">
                  Shop the 2-Pack now for gentle, itch-free braiding.
                </p>
              </div>
            </div>

            <div className="pt-10">
              <Link
                href="/collections/all"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#fff1f2] border border-[#fce7f3] text-[#601438] font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#601438] hover:text-white shadow-sm group w-full"
              >
                Shop Now
                <span className="ml-3 group-hover:translate-x-1 transition-transform">›</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Products Horizontal Carousel (Transparent Wrapper) */}
          <div className="lg:w-2/3 w-full flex flex-col justify-center">
            {/* Carousel Controls */}
            <div className="flex justify-between md:justify-end items-center mb-6 gap-4">
              <h3 className="md:hidden text-2xl font-serif text-[#601438]">Swipe to explore</h3>
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
