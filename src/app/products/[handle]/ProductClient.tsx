'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, ChevronRight, Share2, Heart, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '@/components/CartProvider';

export default function ProductClient({ product }: { product: any }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [shareText, setShareText] = useState('');

  // Format Shopify Data safely with fallbacks
  const title = product?.title || 'Unknown Product';
  const descriptionHtml = product?.descriptionHtml || '<p>No description available.</p>';

  const minPrice = product?.priceRange?.minVariantPrice;
  const priceCurrency = minPrice?.currencyCode || 'GBP';
  const priceAmount = parseFloat(minPrice?.amount || '0');
  let price = `£${priceAmount.toFixed(2)}`;

  try {
    price = new Intl.NumberFormat('en-GB', { style: 'currency', currency: priceCurrency }).format(priceAmount);
  } catch (e) { /* ignore */ }

  const images = product?.images?.edges?.map((e: any) => e.node.url) || ['/product_1.png'];
  const variants = product?.variants?.edges?.map((e: any) => e.node) || [];

  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    variants.length > 0 ? variants[0].id : null
  );

  const { addItem } = useCart();

  const handleAddToCart = () => {
    const variant = variants.find((v: any) => v.id === selectedVariantId) || variants[0];
    if (!variant && variants.length > 0) return;

    addItem({
      id: variant?.id || product?.id || 'unknown',
      title: title,
      price: priceAmount,
      currency: priceCurrency,
      image: images[activeImage] || images[0],
      quantity: 1,
      variantTitle: variant?.title === 'Default Title' ? '' : (variant?.title || 'Default'),
    });
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareText('Link copied!');
      setTimeout(() => setShareText(''), 2000);
    } catch (err) {
      console.error('Failed to copy link', err);
    }
  };

  const specs = [
    { label: 'Length', value: '24 Inches' },
    { label: 'Weight', value: '100g per pack' },
    { label: 'Material', value: 'Low-tox Premium' },
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-brand-900/40 mb-12">
          <Link href="/">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/collections/all">Collections</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-brand-950 truncate max-w-[200px]">{title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl bg-brand-50">
              <Image
                src={images[activeImage] || images[0]}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
            {images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto hide-scrollbar">
                {images.map((img: string, i: number) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative w-24 aspect-[4/5] flex-shrink-0 overflow-hidden border-2 transition-all ${activeImage === i ? 'border-brand-600' : 'border-transparent opacity-60'}`}
                  >
                    <Image src={img} alt={`${title} view ${i + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-500">CareBraids</span>
              <h1 className="text-5xl md:text-6xl font-serif italic text-brand-950">{title}</h1>
              <p className="text-2xl text-brand-900 font-light">{price}</p>
            </div>

            <div
              className="text-brand-900/60 font-light leading-relaxed text-lg prose"
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            />

            {/* Variants */}
            {variants.length > 0 && variants[0].title !== 'Default Title' && (
              <div className="space-y-6">
                <h4 className="text-[10px] font-bold tracking-widest uppercase text-brand-950">
                  Select Variant:
                  <span className="font-light text-brand-900/60 ml-2">
                    {variants.find((v: any) => v.id === selectedVariantId)?.title}
                  </span>
                </h4>
                <div className="flex flex-wrap gap-3">
                  {variants.map((variant: any) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariantId(variant.id)}
                      className={`px-4 py-2 text-[10px] font-bold tracking-widest uppercase border transition-all ${selectedVariantId === variant.id ? 'border-brand-950 bg-brand-950 text-white' : 'border-brand-100 text-brand-900 hover:border-brand-400'}`}
                    >
                      {variant.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={handleAddToCart}
                className="flex-grow bg-brand-950 text-white py-5 font-bold text-xs tracking-[0.3em] uppercase hover:bg-brand-800 transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                <ShoppingBag className="w-4 h-4" /> Add to Cart
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-5 border-2 transition-all flex justify-center items-center ${isWishlisted ? 'border-brand-600 bg-brand-50 text-brand-600' : 'border-brand-100 text-brand-900 hover:bg-brand-50'}`}
                title="Add to Wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-brand-600 text-brand-600' : ''}`} />
              </button>
              <button
                onClick={handleShare}
                className="relative p-5 border-2 border-brand-100 flex justify-center items-center text-brand-900 hover:bg-brand-50 transition-all group"
                title="Share Product"
              >
                <Share2 className="w-5 h-5" />
                {shareText && (
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-brand-950 text-white text-[10px] py-1 px-3 whitespace-nowrap rounded font-bold tracking-widest">
                    {shareText}
                  </span>
                )}
              </button>
            </div>

            <TrustPoints />

            {/* Specifications */}
            <div className="pt-12 border-t border-brand-100 space-y-4">
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-brand-950">Specifications</h4>
              <div className="grid grid-cols-2 gap-4">
                {specs.map((spec) => (
                  <div key={spec.label} className="space-y-1">
                    <p className="text-[10px] font-bold text-brand-900/40 uppercase tracking-widest">{spec.label}</p>
                    <p className="text-sm font-medium text-brand-950">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Add to Cart */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-brand-100 p-4 z-40">
        <div className="flex items-center gap-4">
          <div className="flex-grow">
            <p className="text-[10px] font-bold text-brand-500 uppercase tracking-widest truncate">{title}</p>
            <p className="text-sm font-bold text-brand-950">{price}</p>
          </div>
          <button
            onClick={handleAddToCart}
            className="px-8 py-3 bg-brand-950 text-white font-bold text-[10px] tracking-widest uppercase hover:bg-brand-800 transition-all shadow-lg"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
}

function TrustPoints() {
  return (
    <div className="grid grid-cols-2 gap-6 pt-10 border-t border-brand-100">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-brand-50 rounded-full text-brand-600">
          <Truck className="w-5 h-5" />
        </div>
        <p className="text-[10px] font-bold tracking-widest uppercase text-brand-950">Fast Global Shipping</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="p-3 bg-brand-50 rounded-full text-brand-600">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <p className="text-[10px] font-bold tracking-widest uppercase text-brand-950">Safety Tested</p>
      </div>
    </div>
  );
}
