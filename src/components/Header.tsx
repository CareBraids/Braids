'use client';

import Link from 'next/link';
import { ShoppingBag, Search, Menu, User, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import CartDrawer from './CartDrawer';
import SearchSystem from './SearchSystem';
import { useCart } from './CartProvider';
import { navigateToAccount } from '@/app/actions/auth';

interface HeaderProps {
  userName?: string | null;
  trendingProducts?: any[];
}

export default function Header({ userName, trendingProducts = [] }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isCartOpen, openCart, closeCart, cartCount } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-12 py-4 md:py-6",
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-100/50 py-3 md:py-4" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] lg:grid-cols-3">
          
          {/* Left Area: Mobile Menu OR Desktop Logo */}
          <div className="flex items-center flex-1 md:flex-initial">
            {/* Mobile Menu Toggle (Left on mobile) */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-[#601438] transition-all hover:opacity-70 p-2 -ml-2"
              aria-label="Open menu"
            >
              <div className="flex flex-col gap-1.5 w-6">
                <span className="h-0.5 w-6 bg-[#601438] rounded-full" />
                <span className="h-0.5 w-4 bg-[#601438] rounded-full" />
              </div>
            </button>

            {/* Desktop Logo (Left on desktop) */}
            <Link
              href="/"
              className="hidden md:block text-2xl md:text-3xl font-semibold tracking-tight font-serif transition-all duration-300 active:opacity-60 text-[#601438]"
            >
              CareBraids
            </Link>
          </div>

          {/* Center Area: Mobile Logo OR Desktop Nav */}
          <div className="flex justify-center flex-1 md:flex-initial">
            {/* Mobile Logo (Centered on mobile) */}
            <Link
              href="/"
              className="md:hidden text-2xl font-semibold tracking-tight font-serif transition-all duration-300 active:opacity-60 text-[#601438]"
            >
              CareBraids
            </Link>

            {/* Desktop Nav (Centered on desktop) */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
              {[
                { label: 'Shop', href: '/collections/all' },
                { label: 'Why CareBraids?', href: '/pages/benefits' },
                { label: 'Our Story', href: '/pages/about' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 relative group active:opacity-60 hover:opacity-80 text-[#601438]"
                >
                  {item.label}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full bg-[#601438]" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Area: Actions (Search, Cart) */}
          <div className="flex items-center justify-end space-x-4 md:space-x-6 lg:space-x-8 flex-1 md:flex-initial">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="transition-all active:opacity-60 hover:opacity-80 text-[#601438] p-1"
            >
              <Search className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <form action={navigateToAccount} className="hidden md:block" suppressHydrationWarning>
              <button
                type="submit"
                className="transition-all active:opacity-60 hover:opacity-80 text-[#601438] flex items-center p-1"
              >
                {userName ? (
                  <span className="text-sm font-medium">Hi, {userName}</span>
                ) : (
                  <User className="w-6 h-6" />
                )}
              </button>
            </form>
            <button
              onClick={openCart}
              className="relative transition-all active:opacity-60 hover:opacity-80 text-[#601438] p-1"
            >
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white bg-[#601438]">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out components */}
      <CartDrawer />
      <SearchSystem isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} trendingProducts={trendingProducts} />

      {/* Mobile Menu Slide-out */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#601438]/20 backdrop-blur-sm z-[100] md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-full max-w-[80vw] bg-[#fdf4ff] z-[101] flex flex-col md:hidden border-r border-[#601438]/10"
            >
              <div className="p-6 border-b border-[#601438]/10 flex justify-between items-center bg-white">
                <span className="text-2xl font-serif text-[#601438] font-semibold">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                  <X className="w-6 h-6 text-[#601438]" />
                </button>
              </div>
              <nav className="p-6 flex flex-col space-y-6 overflow-y-auto w-full">
                {[
                  { label: 'Shop', href: '/collections/all' },
                  { label: 'Why CareBraids?', href: '/pages/benefits' },
                  { label: 'Our Story', href: '/pages/about' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium tracking-wide text-[#601438] border-b border-[#601438]/5 pb-4"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto p-6 bg-white border-t border-[#601438]/10">
                <form action={navigateToAccount} onSubmit={() => setIsMobileMenuOpen(false)} suppressHydrationWarning>
                  <button
                    type="submit"
                    className="flex items-center gap-4 text-[#601438] font-medium w-full text-left"
                  >
                    <User className="w-6 h-6" />
                    My Account
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
