'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { registerCustomer } from '@/app/actions';
import { ArrowRight, Mail, Lock, User } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await registerCustomer(formData);

    if (result?.error) {
      setError(result.error);
      setIsLoading(false);
    } else if (result?.success) {
      router.push('/'); // Or redirect to an /account page later
      router.refresh();
    }
  }

  return (
    <div className="min-h-screen bg-[#fff5f7] flex flex-col items-center justify-center p-6 pt-32 pb-24">
      <div className="w-full max-w-md bg-white p-8 md:p-12 shadow-xl border border-[#fdf4ff]">
        <h1 className="text-3xl font-serif text-[#601438] text-center mb-2">Create Account</h1>
        <p className="text-sm text-center text-[#601438]/60 mb-8 font-light">
          Join CareBraids for faster checkout.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-sm font-medium">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#601438]">
                First Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#601438]/40" />
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-[#fdf4ff]/50 border border-[#601438]/10 focus:border-[#601438]/30 focus:outline-none transition-colors text-sm text-[#601438]"
                  placeholder="Jane"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#601438]">
                Last Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#601438]/40" />
                <input
                  type="text"
                  name="lastName"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-[#fdf4ff]/50 border border-[#601438]/10 focus:border-[#601438]/30 focus:outline-none transition-colors text-sm text-[#601438]"
                  placeholder="Doe"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-[#601438]">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#601438]/40" />
              <input
                type="email"
                name="email"
                required
                className="w-full pl-12 pr-4 py-4 bg-[#fdf4ff]/50 border border-[#601438]/10 focus:border-[#601438]/30 focus:outline-none transition-colors text-sm text-[#601438]"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-[#601438]">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#601438]/40" />
              <input
                type="password"
                name="password"
                required
                className="w-full pl-12 pr-4 py-4 bg-[#fdf4ff]/50 border border-[#601438]/10 focus:border-[#601438]/30 focus:outline-none transition-colors text-sm text-[#601438]"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center gap-2 py-4 bg-[#601438] text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#4a0e2d] transition-colors disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
            {!isLoading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-[#601438]/10 pt-8">
          <p className="text-sm text-[#601438]/60">
            Already have an account?{' '}
            <Link href="/login" className="text-[#601438] font-bold hover:underline underline-offset-4">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
