'use client';

import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  handle: string;
  title: string;
  price: string;
  imageSrc: string;
  imageAlt?: string;
}

export default function ProductCard({ handle, title, price, imageSrc, imageAlt }: ProductCardProps) {
  return (
    <Link href={`/products/${handle}`} className="group block w-full">
      {/* Image Container - Strict Sharp Edges */}
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-gray-50 rounded-none border border-black/5">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          unoptimized={true}
          className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Quick Add Overlay (Optional, can be added later) */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-white/90 py-3 text-center text-sm font-medium uppercase tracking-widest opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 backdrop-blur-sm">
          Quick Add
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 text-center space-y-1">
        <h3 className="text-sm font-medium uppercase tracking-wide text-gray-900 group-hover:text-fuchsia-700 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500">{price}</p>
      </div>
    </Link>
  );
}
