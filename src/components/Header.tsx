'use client';

import Link from 'next/link';
import { ShoppingBag, Search, Menu, User, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import CartDrawer from './CartDrawer';
import SearchSystem from './SearchSystem';
import { useCart } from './CartProvider';

export default function Header() {
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-6",
          isScrolled ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-brand-100 py-4" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-[#601438] transition-colors hover:opacity-70"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo - Serif Font */}
          <Link
            href="/"
            className="text-2xl md:text-3xl font-semibold tracking-tight font-serif transition-all duration-300 active:opacity-60 text-[#601438]"
          >
            CareBraids
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {[
              { label: 'Shop All', href: '/collections/all' },
              { label: "Shop's Pack", href: '/collections/shops-pack' },
              { label: 'Our Difference', href: '/pages/benefits' },
              { label: 'Our Story', href: '/pages/about' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 relative group active:opacity-60 hover:opacity-80 text-[#601438]"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full bg-[#601438]" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-6 md:space-x-8">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="transition-all active:opacity-60 hover:opacity-80 text-[#601438]"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/login"
              className="hidden md:block transition-all active:opacity-60 hover:opacity-80 text-[#601438]"
            >
              <User className="w-5 h-5" />
            </Link>
            <button
              onClick={openCart}
              className="relative transition-all active:opacity-60 hover:opacity-80 text-[#601438]"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white/20 bg-[#601438]">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out components */}
      <CartDrawer />
      <SearchSystem isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

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
                  { label: 'Shop All', href: '/collections/all' },
                  { label: "Shop's Pack", href: '/collections/shops-pack' },
                  { label: 'Our Difference', href: '/pages/benefits' },
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
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 text-[#601438] font-medium"
                >
                  <User className="w-6 h-6" />
                  My Account
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
