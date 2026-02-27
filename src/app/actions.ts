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

export async function loginCustomer(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Please provide both email and password.' };
  }

  try {
    const { createCustomerAccessToken } = await import('@/lib/shopify');
    const { cookies } = await import('next/headers');

    const response = await createCustomerAccessToken({ email, password });

    if (response?.customerUserErrors?.length > 0) {
      return { error: response.customerUserErrors[0].message };
    }

    const token = response?.customerAccessToken?.accessToken;
    const expiresAt = response?.customerAccessToken?.expiresAt;

    if (token) {
      (await cookies()).set('accessToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        expires: new Date(expiresAt),
      });
      return { success: true };
    }

    return { error: 'Failed to retrieve access token.' };
  } catch (error) {
    console.error('Login error:', error);
    return { error: 'An unexpected error occurred during login.' };
  }
}

export async function registerCustomer(formData: FormData) {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password || !firstName || !lastName) {
    return { error: 'Please fill in all fields.' };
  }

  try {
    const { createCustomer } = await import('@/lib/shopify');

    const response = await createCustomer({
      firstName,
      lastName,
      email,
      password,
    });

    if (response?.customerUserErrors?.length > 0) {
      return { error: response.customerUserErrors[0].message };
    }

    if (response?.customer?.id) {
      // Automatically log them in after registration
      return await loginCustomer(formData);
    }

    return { error: 'Failed to create account.' };
  } catch (error) {
    console.error('Registration error:', error);
    return { error: 'An unexpected error occurred during registration.' };
  }
}

export async function logoutCustomer() {
  const { cookies } = await import('next/headers');
  (await cookies()).delete('accessToken');
  return { success: true };
}
