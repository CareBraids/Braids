'use client';

import { Mail } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto bg-brand-950 p-12 md:p-24 relative overflow-hidden shadow-2xl">
        {/* Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-800 rounded-full -mr-32 -mt-32 opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-600 rounded-full -ml-48 -mb-48 opacity-10" />

        <div className="relative z-10 text-center space-y-8 max-w-2xl mx-auto">
          <Mail className="w-12 h-12 text-brand-400 mx-auto" />
          <h2 className="text-4xl md:text-6xl font-serif italic text-white leading-tight">
            Join the Sisterhood
          </h2>
          <p className="text-brand-100/70 font-light text-lg">
            Subscribe to receive hair care tips, exclusive offers, and early access to new collections.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 mt-8" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              className="px-8 py-5 bg-white/10 border border-white/20 text-white placeholder-white/40 font-light text-sm tracking-widest uppercase focus:outline-none focus:border-brand-400 flex-grow"
            />
            <button className="px-12 py-5 bg-white text-brand-950 font-bold text-xs tracking-[0.3em] uppercase hover:bg-brand-100 transition-all rounded-none">
              Subscribe
            </button>
          </form>

          <p className="text-[10px] text-brand-100/30 uppercase tracking-[0.2em] font-light">
            By subscribing, you agree to our privacy policy.
          </p>
        </div>
      </div>
    </section>
  );
}
