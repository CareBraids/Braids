'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { randomBytes, createHash } from 'crypto';

const domain = process.env.SHOPIFY_STORE_DOMAIN || process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const clientId = process.env.SHOPIFY_CUSTOMER_ACCOUNT_API_CLIENT_ID;

// Helper to get OIDC endpoints
export async function getOidcEndpoints() {
  const res = await fetch(`https://${domain}/.well-known/openid-configuration`, {
    next: { revalidate: 3600 } // Cache for an hour
  });
  return await res.json();
}

export async function startOAuthFlow() {
  if (!clientId) {
    console.error("Missing SHOPIFY_CUSTOMER_ACCOUNT_API_CLIENT_ID in environment variables");
    redirect('/login?error=ConfigurationMissing');
  }

  const oidc = await getOidcEndpoints();

  const verifier = randomBytes(32).toString('base64url');
  const challenge = createHash('sha256').update(verifier).digest('base64url');
  const state = randomBytes(16).toString('base64url');
  const nonce = randomBytes(16).toString('base64url');

  const cookieStore = await cookies();

  // Securely store PKCE and State parameters
  cookieStore.set('shopify_oauth_verifier', verifier, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 600 // 10 minutes
  });

  cookieStore.set('shopify_oauth_state', state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 600
  });

  // Dynamically resolve the origin for the redirect
  const headersList = await import('next/headers').then(m => m.headers());
  const host = headersList.get('host') || 'carebraids.com';
  const protocol = headersList.get('x-forwarded-proto') || (host.includes('localhost') ? 'http' : 'https');
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || `${protocol}://${host}`;

  const redirectUri = `${baseUrl}/api/auth/callback`;

  const authUrl = new URL(oidc.authorization_endpoint);
  authUrl.searchParams.append('client_id', clientId);
  authUrl.searchParams.append('response_type', 'code');
  authUrl.searchParams.append('redirect_uri', redirectUri);
  authUrl.searchParams.append('scope', 'openid email customer-account-api:full');
  authUrl.searchParams.append('state', state);
  authUrl.searchParams.append('nonce', nonce);
  authUrl.searchParams.append('code_challenge', challenge);
  authUrl.searchParams.append('code_challenge_method', 'S256');

  redirect(authUrl.toString());
}

export async function logoutCustomer() {
  const cookieStore = await cookies();
  const idToken = cookieStore.get('shopify_customer_id_token')?.value;

  // Clear local cookies first for immediate frontend impact
  cookieStore.delete('shopify_customer_token');
  cookieStore.delete('shopify_customer_access_token');
  cookieStore.delete('shopify_customer_id_token');

  if (idToken) {
    // If we have an ID token, we can perform a robust Shopify federated logout
    try {
      const oidc = await getOidcEndpoints();
      const endSessionUrl = new URL(oidc.end_session_endpoint);

      endSessionUrl.searchParams.append('client_id', clientId as string);
      endSessionUrl.searchParams.append('id_token_hint', idToken);

      // We will redirect them back to our local login page after Shopify terminates the session
      const headersList = await import('next/headers').then(m => m.headers());
      const host = headersList.get('host') || 'carebraids.com';
      const protocol = headersList.get('x-forwarded-proto') || (host.includes('localhost') ? 'http' : 'https');
      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || `${protocol}://${host}`;

      endSessionUrl.searchParams.append('post_logout_redirect_uri', `${baseUrl}/login`);

      // Execute the redirect to Shopify to wipe their SSO session
      redirect(endSessionUrl.toString());
    } catch (e) {
      console.error("Failed to construct federated logout URL", e);
      // Fallback to local redirect if OIDC fails
      redirect('/login');
    }
  }

  // Fallback string if no ID token was ever established
  redirect('/login');
}

export async function navigateToAccount() {
  const cookieStore = await cookies();
  const token = cookieStore.get('shopify_customer_access_token')?.value || cookieStore.get('shopify_customer_token')?.value;
  if (token) {
    redirect('/account');
  }
  redirect('/login');
}
