'use server';

import { createCustomerAccessToken, createCustomer, getCustomer } from '@/lib/shopify';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function loginCustomer(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const res = await createCustomerAccessToken({ email, password });

    if (res?.customerUserErrors?.length > 0) {
      return { error: res.customerUserErrors[0].message };
    }

    const token = res?.customerAccessToken?.accessToken;
    if (token) {
      const cookieStore = await cookies();
      cookieStore.set('shopify_customer_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/'
      });
      return { success: true };
    }

    return { error: 'Failed to login. Please check your credentials.' };
  } catch (error) {
    console.error('Login action error:', error);
    return { error: 'Authentication service is currently unavailable. Please try again later.' };
  }
}

export async function registerCustomer(prevState: any, formData: FormData) {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const res = await createCustomer({ firstName, lastName, email, password });

    if (res?.customerUserErrors?.length > 0) {
      return { error: res.customerUserErrors[0].message };
    }

    // After successful registration, log them in automatically
    return await loginCustomer(prevState, formData);
  } catch (error) {
    console.error('Registration action error:', error);
    return { error: 'Registration service is currently unavailable. Please try again later.' };
  }
}

export async function logoutCustomer() {
  const cookieStore = await cookies();
  cookieStore.delete('shopify_customer_token');
  redirect('/pages/account/login');
}

export async function getCustomerData() {
  const cookieStore = await cookies();
  const token = cookieStore.get('shopify_customer_token')?.value;
  if (!token) return null;

  const data = await getCustomer(token);
  return data;
}
