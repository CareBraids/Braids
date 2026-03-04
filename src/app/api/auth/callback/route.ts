import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getOidcEndpoints } from '@/app/actions/auth';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const error = searchParams.get('error');
  const errorDescription = searchParams.get('error_description');

  const protocol = request.headers.get('x-forwarded-proto') || (request.nextUrl.protocol.replace(':', ''));
  const host = request.headers.get('host') || request.nextUrl.host;
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || `${protocol}://${host}`;
  if (error) {
    console.error("Shopify OAuth Error:", error, errorDescription);
    return NextResponse.redirect(new URL(`/login?error=${error}`, baseUrl));
  }

  if (!code || !state) {
    return NextResponse.redirect(new URL('/login?error=InvalidCallback', baseUrl));
  }

  const cookieStore = await cookies();
  const storedState = cookieStore.get('shopify_oauth_state')?.value;
  const verifier = cookieStore.get('shopify_oauth_verifier')?.value;

  if (!storedState || !verifier || state !== storedState) {
    return NextResponse.redirect(new URL('/login?error=StateMismatch', baseUrl));
  }

  try {
    const oidc = await getOidcEndpoints();
    const clientId = process.env.SHOPIFY_CUSTOMER_ACCOUNT_API_CLIENT_ID;

    if (!clientId) {
      throw new Error("Missing client ID");
    }

    // Generate the redirectURI dynamically from the request or env var
    const redirectUri = `${baseUrl}/api/auth/callback`;

    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: clientId,
      redirect_uri: redirectUri,
      code,
      code_verifier: verifier
    });

    const response = await fetch(oidc.token_endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body.toString()
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Token exchange failed:", response.status, errorText);
      return NextResponse.redirect(new URL('/login?error=TokenExchangeFailed', baseUrl));
    }

    const data = await response.json();

    console.log("✅ Shopify Token Exchange Successful. Received payload keys:", Object.keys(data));

    // Securely store the new customer access token
    // Using Data.expires_in to set maxAge dynamically
    cookieStore.set('shopify_customer_access_token', data.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: data.expires_in || 3600
    });

    // Also store the id_token if needed later
    if (data.id_token) {
      cookieStore.set('shopify_customer_id_token', data.id_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: data.expires_in || 3600
      });
    }

    // Clean up temporary cookies
    cookieStore.delete('shopify_oauth_state');
    cookieStore.delete('shopify_oauth_verifier');

    return NextResponse.redirect(new URL('/account', baseUrl));

  } catch (err) {
    console.error("OAuth Callback exception:", err);
    return NextResponse.redirect(new URL('/login?error=UnknownError', baseUrl));
  }
}
