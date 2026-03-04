'use client';

import { useState, Suspense } from 'react';
import { startOAuthFlow } from '@/app/actions/auth';
import { ArrowRight, Lock } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

function LoginContent() {
  const searchParams = useSearchParams();
  const errorParam = searchParams.get('error');
  const [isLoading, setIsLoading] = useState(false);

  // Mapped error messages for clarity
  const errorMessages: Record<string, string> = {
    ConfigurationMissing: 'Client ID configuration is missing on the server.',
    InvalidCallback: 'The login callback was invalid. Please try again.',
    StateMismatch: 'Security verification failed. Please try again.',
    TokenExchangeFailed: 'Failed to retrieve your access token. Please try again.',
    UnknownError: 'An unknown error occurred during login. Please try again.'
  };

  const errorMessage = errorParam ? errorMessages[errorParam] || errorParam : null;

  return (
    <div className="w-full max-w-md bg-white p-8 md:p-12 shadow-xl border border-[#fdf4ff]">
      <h1 className="text-3xl font-serif text-[#601438] text-center mb-2">Sign In or Register</h1>
      <p className="text-sm text-center text-[#601438]/60 mb-8 font-light">
        Securely log in to your CareBraids account using your email. No passwords required.
      </p>

      {errorMessage && (
        <div className="p-4 mb-6 bg-red-50 border border-red-100 text-red-600 text-sm font-medium">
          {errorMessage}
        </div>
      )}

      <form action={startOAuthFlow} onSubmit={() => setIsLoading(true)}>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center items-center gap-2 py-4 bg-[#601438] text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#4a0e2d] transition-colors disabled:opacity-70 disabled:cursor-not-allowed group"
        >
          {isLoading ? 'Connecting Securely...' : 'Continue with Email'}
          {!isLoading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
        </button>
      </form>

      <div className="mt-8 text-center border-t border-[#601438]/10 pt-8 flex flex-col items-center justify-center gap-2 text-sm text-[#601438]/60">
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4" />
          <span>Passwordless Secure Login</span>
        </div>
        <p className="text-xs mt-2 text-[#601438]/40">You will be redirected to our secure authentication portal.</p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#fff5f7] flex flex-col items-center justify-center p-6 pt-32 pb-24">
      <Suspense fallback={<div className="w-full max-w-md bg-white p-8 shadow-xl opacity-50 flex justify-center py-24"><Lock className="animate-pulse" /></div>}>
        <LoginContent />
      </Suspense>
    </div>
  );
}
