import { getProductByHandle } from '@/lib/shopify';
import ProductClient from './ProductClient';
import Link from 'next/link';

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const resolvedParams = await params;
  const product = await getProductByHandle(resolvedParams.handle);

  if (!product) {
    return (
      <div className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif text-brand-950 mb-6">Product not found</h1>
        <p className="mb-8 text-brand-900/60">We couldn't find the product you're looking for.</p>
        <Link href="/collections/all" className="px-8 py-4 bg-brand-950 text-white uppercase text-xs tracking-widest font-bold">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return <ProductClient product={product} />;
}

