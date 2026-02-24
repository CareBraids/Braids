import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import BenefitFeatures from '@/components/BenefitFeatures';
import { getProducts } from '@/lib/shopify';

export default async function Home() {
  let products = [];
  try {
    products = await getProducts(10);
  } catch (err) {
    console.error('Failed to fetch Shopify products', err);
  }

  return (
    <main className="min-h-screen bg-white font-sans">
      <Hero />
      <BenefitFeatures />
      <FeaturedProducts products={products} />
    </main>
  );
}
