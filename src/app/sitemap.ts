import { MetadataRoute } from 'next';
import { getProducts } from '@/lib/shopify';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.carebraids.com';

  // Define static routes
  const staticRoutes = [
    '',
    '/pages/benefits', // Also covers 'why carebraids?'
    '/pages/our-story', // Assuming this is the 'our story' route mapping
    '/collections',
    '/login',
    '/register',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Fetch dynamic product routes
  let productRoutes: MetadataRoute.Sitemap = [];
  try {
    const products = await getProducts(250); // Fetch up to 250 active products
    productRoutes = products.map((product: any) => ({
      url: `${baseUrl}/products/${product.handle}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    }));
  } catch (error) {
    console.error('Failed to fetch Shopify products for sitemap generation:', error);
  }

  return [...staticRoutes, ...productRoutes];
}
