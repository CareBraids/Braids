import Link from 'next/link';
import Image from 'next/image';
import { searchProducts } from '@/lib/shopify';
import { ChevronRight } from 'lucide-react';

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const q = Array.isArray(resolvedParams.q) ? resolvedParams.q[0] : resolvedParams.q;
  const query = q || '';
  let products: any[] = [];

  if (query) {
    products = await searchProducts(query);
  }

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-[80vh]">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-brand-900/40 mb-12">
          <Link href="/">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-brand-950">Search Results</span>
        </nav>

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif italic text-brand-950 mb-4">
            {query ? `Search results for "${query}"` : 'Search'}
          </h1>
          {query && (
            <p className="text-brand-900/60 font-light">
              {products.length} {products.length === 1 ? 'result' : 'results'} found.
            </p>
          )}
        </div>

        {!query ? (
          <div className="text-center py-20 border-t border-brand-100">
            <h2 className="text-2xl font-serif italic text-brand-950 mb-4">What are you looking for?</h2>
            <p className="text-brand-900/60 font-light">Please enter a search term in the menu above.</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 border-t border-brand-100">
            <h2 className="text-2xl font-serif italic text-brand-950 mb-4">No results found.</h2>
            <p className="text-brand-900/60 font-light max-w-md mx-auto">
              We couldn&apos;t find any products matching &quot;{query}&quot;. Try checking for typos or using more general terms.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {products.map((product) => (
              <Link href={`/products/${product.handle}`} key={product.id} className="group block">
                <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-brand-50 shadow-md">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-950/0 group-hover:bg-brand-950/10 transition-colors duration-300" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-serif italic text-brand-950 group-hover:text-brand-700 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm font-light text-brand-900">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
