'use client';

import Link from 'next/link';
import { Instagram, Music2, Phone, MapPin, Clock, Mail, Youtube, Twitter } from 'lucide-react';

const footerLinks = {
  shop: [
    { name: 'Classic', href: '/products/classic' },
    { name: 'French Curl', href: '/products/french-curl' },
    { name: 'Pre-Fluffed', href: '/products/pre-fluffed' },
  ],

  about: [
    { name: 'Our Story', href: '/pages/about' },
    { name: 'Why CareBraids?', href: '/pages/benefits' },
  ],
  help: [
    { name: 'Contact', href: '/pages/contact' },
    { name: 'FAQs', href: '/pages/faq' },
    { name: 'Policies', href: '/policies/privacy' },
    { name: 'Shipping Info', href: '/pages/shipping' },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12 md:py-20 px-6 md:px-12 border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Top Section: Business Info & VIP List */}
        <h4 className="text-3xl font-serif font-semibold tracking-tight bg-gradient-to-r from-[#d946ef] to-[#c121b6] bg-clip-text text-transparent mb-8">CareBraids</h4>
        <p className="text-[#601438]/80 font-light mb-8">Thoughtfully designed braiding fibres created to support healthier protective styling.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 mb-10 md:mb-20 pb-10 md:pb-12 border-b border-[#fdf4ff]">
          <div className="space-y-8">
            <h4 className="text-2xl font-serif text-[#601438]">Contact Us.</h4>
            <div className="space-y-6 text-sm font-light text-gray-600">

              <div className="flex items-center gap-4 hover:text-[#601438] transition-colors">
                <Mail className="w-5 h-5 text-[#601438] shrink-0" />
                <p>support@carebraids.com</p>
              </div>
            </div>

          </div>

          <div className="space-y-6">
            <h4 className="text-2xl font-serif text-[#601438]">Join our VIP List</h4>
            <p className="text-[#601438]/60 font-light">Be first to access new launches and stay up to date with our conscious collections.</p>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group max-w-md">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full border-b border-[#601438]/20 py-3 text-sm focus:outline-none focus:border-[#601438] transition-colors bg-transparent placeholder:text-[#601438]/40"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-bold tracking-[0.2em] uppercase hover:underline text-[#601438]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 md:gap-12 mb-10 md:mb-20">
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#601438]">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-[#601438] hover:-translate-y-[1px] transition-all inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>



          <div className="space-y-4 md:space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#601438]">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-[#601438] hover:-translate-y-[1px] transition-all inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#601438]">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-[#601438] hover:-translate-y-[1px] transition-all inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#fdf4ff] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#601438]/40 text-xs font-medium">
            © {new Date().getFullYear()} CareBraids. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase font-bold tracking-[0.2em] text-[#601438]/60">
            <Link href="/policies/privacy" className="hover:text-[#601438]">Privacy Policy</Link>
            <Link href="/pages/shipping" className="hover:text-[#601438]">Shipping Policy</Link>
            <Link href="/policies/refund" className="hover:text-[#601438]">Refund Policy</Link>
            <Link href="/policies/terms" className="hover:text-[#601438]">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
