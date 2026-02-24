'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: '5 Tips for Long-Lasting Braids',
    excerpt: 'Discover how to maintain your style for weeks without frizz.',
    date: 'OCT 12, 2026',
    image: 'https://placehold.co/800x600/fdf4ff/701a75?text=Blog+Tip+1'
  },
  {
    title: 'Understanding Hydra-Shield™',
    excerpt: 'The science behind our moisture-locking technology.',
    date: 'SEP 28, 2026',
    image: 'https://placehold.co/800x600/fae8ff/c026d3?text=Blog+Tip+2'
  }
];

export default function BlogPreview() {
  return (
    <section className="py-24 px-6 md:px-12 bg-brand-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-6 text-brand-950">
              Hair Care Journal
            </h2>
            <p className="text-brand-900/60 font-light tracking-wide uppercase text-sm">
              Insights and inspiration from the world of CareBraids
            </p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-bold tracking-[0.2em] uppercase border-b-2 border-brand-500 pb-1 hover:text-brand-600 hover:border-brand-600 transition-all"
          >
            Read More
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <Link key={post.title} href="/blog/post" className="group block space-y-6">
              <div className="relative aspect-[16/10] overflow-hidden shadow-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-brand-500 tracking-[0.3em] uppercase">{post.date}</span>
                <h3 className="text-2xl md:text-3xl font-serif italic text-brand-950 group-hover:text-brand-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-brand-900/60 font-light text-sm leading-relaxed max-w-md">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-900 group-hover:gap-4 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
