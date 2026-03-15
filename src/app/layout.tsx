import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import { cookies } from 'next/headers';
import { getCustomerDetails, getProducts } from '@/lib/shopify';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.carebraids.com'),
  title: {
    default: 'CareBraids | Raising the Standard in Braiding Hair',
    template: '%s | CareBraids',
  },
  description: 'CareBraids exists to create braiding fibres that support both beautiful styles and healthier hair. Engineered for protective styling, independently safety tested, and designed without compromise.',
  openGraph: {
    title: 'CareBraids | Premium Protective Braiding Hair',
    description: 'CareBraids exists to create braiding fibres that support both beautiful styles and healthier hair. Elevate your protective styling.',
    url: 'https://www.carebraids.com',
    siteName: 'CareBraids',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { CartProvider } from '@/components/CartProvider';
import CookieBanner from '@/components/CookieBanner';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get('shopify_customer_access_token')?.value || cookieStore.get('shopify_customer_token')?.value;

  let userName = null;
  if (token) {
    try {
      const customer = await getCustomerDetails(token);
      if (customer?.firstName) {
        userName = customer.firstName;
      }
    } catch (e) {
      console.error("Failed to fetch user details for Header navigation", e);
    }
  }

  let trendingProducts: any[] = [];
  try {
    // Fetch 4 products to use for the Search modal's popular/trending sections
    trendingProducts = await getProducts(4);
  } catch (e) {
    console.error("Failed to fetch products for layout", e);
  }
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(inter.variable, 'font-sans bg-white text-gray-900 antialiased')}>
        <CartProvider>
          <Header userName={userName} trendingProducts={trendingProducts} />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CookieBanner />
        </CartProvider>
      </body>
    </html>
  );
}
