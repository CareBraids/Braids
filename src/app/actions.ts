'use server';

import { createCart } from '@/lib/shopify';

export async function generateCheckoutUrl(cartItems: { id: string; quantity: number }[]) {
  try {
    const lines = cartItems.map((item) => ({
      merchandiseId: item.id,
      quantity: item.quantity,
    }));

    const cart = await createCart(lines);

    if (cart?.checkoutUrl) {
      return { url: cart.checkoutUrl };
    }

    return { error: 'Failed to create checkout session' };
  } catch (error) {
    console.error('Checkout error:', error);
    return { error: 'An unexpected error occurred during checkout' };
  }
}
