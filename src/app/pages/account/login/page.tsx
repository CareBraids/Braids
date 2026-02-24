'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { loginCustomer } from '@/app/actions/auth';

export default function LoginPage() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError('');
    try {
      const res = await loginCustomer(null, formData);

      if (res?.error) {
        setError(res.error);
        setLoading(false);
      } else {
        router.push('/pages/account');
        router.refresh();
      }
    } catch (err) {
      setError('An unexpected error occurred while communicating with the server.');
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#fdf4ff] flex flex-col justify-center items-center px-6 py-20">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fae8ff] blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fff0f5] blur-[100px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/70 backdrop-blur-xl p-8 md:p-12 shadow-2xl rounded-3xl z-10 border border-white"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-serif text-[#601438] mb-3 leading-tight font-medium">
            Welcome Back
          </h1>
          <p className="text-[#601438]/60 font-light">Sign in to manage your CareBraids orders.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 text-center">
            {error}
          </div>
        )}

        <form action={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold tracking-widest uppercase text-[#601438] mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-white border border-[#601438]/10 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#601438]/20 focus:border-[#601438]/30 transition-all text-gray-800 placeholder-gray-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-xs font-bold tracking-widest uppercase text-[#601438] mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full bg-white border border-[#601438]/10 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#601438]/20 focus:border-[#601438]/30 transition-all text-gray-800"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#601438] hover:bg-[#4a0e2d] text-white py-4 rounded-xl font-bold text-[11px] tracking-[0.2em] uppercase transition-all shadow-lg hover:shadow-xl disabled:opacity-50 mt-4"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-[#601438]/60">
          Don&apos;t have an account?{' '}
          <Link href="/pages/account/register" className="text-[#601438] font-bold tracking-wide hover:underline">
            Create one
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
