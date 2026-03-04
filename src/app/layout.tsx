import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import { cookies } from 'next/headers';
import { getCustomerDetails } from '@/lib/shopify';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'CareBraids | Premium Braiding Hair',
  description: 'Elevate your style with premium braiding hair extensions.',
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
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(inter.variable, 'font-sans bg-white text-gray-900 antialiased')}>
        <CartProvider>
          <Header userName={userName} />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CookieBanner />
        </CartProvider>
      </body>
    </html>
  );
}
