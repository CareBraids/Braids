'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { registerCustomer } from '@/app/actions/auth';

export default function RegisterPage() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError('');

    const password = formData.get('password') as string;

    if (password.length < 5) {
      setError('Password must be at least 5 characters');
      setLoading(false);
      return;
    }

    try {
      const res = await registerCustomer(null, formData);

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
    <div className="min-h-screen bg-[#fdf4ff] flex flex-col justify-center items-center px-6 py-24">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#fae8ff] blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fff0f5] blur-[100px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/70 backdrop-blur-xl p-8 md:p-12 shadow-2xl rounded-3xl z-10 border border-white"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-serif text-[#601438] mb-3 leading-tight font-medium">
            Create Account
          </h1>
          <p className="text-[#601438]/60 font-light">Join CareBraids for seamless checkout.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 text-center">
            {error}
          </div>
        )}

        <form action={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase text-[#601438] mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                required
                className="w-full bg-white border border-[#601438]/10 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#601438]/20 focus:border-[#601438]/30 transition-all text-gray-800"
                placeholder="Jane"
              />
            </div>
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase text-[#601438] mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                required
                className="w-full bg-white border border-[#601438]/10 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#601438]/20 focus:border-[#601438]/30 transition-all text-gray-800"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold tracking-widest uppercase text-[#601438] mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-white border border-[#601438]/10 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#601438]/20 focus:border-[#601438]/30 transition-all text-gray-800"
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
            {loading ? 'Creating...' : 'Create Account'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-[#601438]/60">
          Already have an account?{' '}
          <Link href="/pages/account/login" className="text-[#601438] font-bold tracking-wide hover:underline">
            Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
