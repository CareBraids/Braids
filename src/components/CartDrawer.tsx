'use client';

import { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from './CartProvider';
import Image from 'next/image';
import { generateCheckoutUrl } from '@/app/actions';

export default function CartDrawer() {
  const { isCartOpen, closeCart, items, removeItem, updateQuantity, cartCount, cartTotal } = useCart();
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setIsCheckoutLoading(true);
      const res = await generateCheckoutUrl(items);
      if (res?.url) {
        window.location.href = res.url;
      } else {
        console.error('Checkout failed:', res?.error);
        alert(res?.error || 'Failed to initiate checkout.');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('An unexpected error occurred. Please try again later.');
    } finally {
      setIsCheckoutLoading(false);
    }
  };
  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-brand-950/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-[#fdf4ff] flex justify-between items-center bg-[#fff5f7]">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-[#601438]" />
                <h2 className="text-xl font-serif italic text-[#601438]">Your Bag ({cartCount})</h2>
              </div>
              <button onClick={closeCart} className="p-2 hover:bg-[#fdf4ff] transition-colors">
                <X className="w-6 h-6 text-[#601438]" />
              </button>
            </div>

            {/* Cart Items */}
            {items.length === 0 ? (
              <div className="flex-grow flex flex-col items-center justify-center p-12 text-center space-y-6">
                <div className="w-20 h-20 bg-[#fff5f7] rounded-full flex items-center justify-center border border-[#601438]/10">
                  <ShoppingBag className="w-10 h-10 text-[#601438]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-serif italic text-[#601438]">Your bag is empty</h3>
                  <p className="text-sm text-[#601438]/60 font-light">Seems like you haven&apos;t added anything yet.</p>
                </div>
                <button
                  onClick={closeCart}
                  className="px-8 py-4 bg-[#601438] text-white font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-[#4a0e2d] transition-all rounded-none shadow-lg"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="flex-grow overflow-y-auto p-6 md:p-8 space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-24 h-24 bg-brand-50 border border-brand-100 flex-shrink-0">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="flex-grow flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-sm font-bold text-brand-950">{item.title}</h4>
                          <p className="text-[10px] text-brand-900/60 uppercase tracking-widest mt-1">
                            {item.variantTitle}
                          </p>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="p-1 hover:bg-brand-50 text-brand-900/40 hover:text-brand-900 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="flex items-center border border-brand-100">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-brand-50 text-brand-900 transition-colors">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-4 text-xs font-bold text-brand-950">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-brand-50 text-brand-900 transition-colors">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-sm font-bold text-brand-950">
                          {new Intl.NumberFormat('en-GB', { style: 'currency', currency: item.currency || 'GBP' }).format(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-8 border-t border-brand-100 space-y-6">
                <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-brand-950">
                  <span>Subtotal</span>
                  <span>{new Intl.NumberFormat('en-GB', { style: 'currency', currency: items[0]?.currency || 'GBP' }).format(cartTotal)}</span>
                </div>
                <p className="text-[10px] text-brand-900/40 uppercase tracking-widest leading-relaxed">
                  Shipping and taxes calculated at checkout.
                </p>
                <button
                  onClick={handleCheckout}
                  disabled={isCheckoutLoading}
                  className="w-full flex items-center justify-center py-5 bg-brand-950 text-white font-bold text-xs tracking-[0.3em] uppercase hover:bg-brand-800 transition-all disabled:opacity-50"
                >
                  {isCheckoutLoading ? (
                    <span className="animate-pulse">Redirecting...</span>
                  ) : (
                    'Checkout'
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
