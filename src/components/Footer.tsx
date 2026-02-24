'use client';

import Link from 'next/link';
import { Instagram, Music2, Phone, MapPin, Clock, Mail, Youtube, Twitter } from 'lucide-react';

const footerLinks = {
  shop: [
    { name: 'All Styles', href: '/collections/all' },
    { name: 'Box Braids', href: '/collections/box-braids' },
    { name: 'Knotless Braids', href: '/collections/knotless-braids' },
    { name: 'Cornrows', href: '/collections/cornrows' },
    { name: 'Crochet Braids', href: '/collections/crochet-braids' },
    { name: 'Accessories', href: '/collections/accessories' },
  ],
  services: [
    { name: 'Book Appointment', href: '/pages/book' },
    { name: 'Pricing', href: '/pages/pricing' },
    { name: 'Custom Requests', href: '/pages/custom-requests' },
    { name: 'Bridal Styling', href: '/pages/bridal' },
  ],
  about: [
    { name: 'Our Story', href: '/pages/about' },
    { name: 'Stylists', href: '/pages/stylists' },
    { name: 'Gallery', href: '/pages/gallery' },
    { name: 'Reviews', href: '/pages/reviews' },
  ],
  help: [
    { name: 'Contact', href: '/pages/contact' },
    { name: 'FAQs', href: '/pages/faq' },
    { name: 'Policies', href: '/policies/privacy' },
    { name: 'Shipping Info', href: '/pages/shipping' },
  ],
  hairCare: [
    { name: 'Prep Guide', href: '/pages/prep-guide' },
    { name: 'Maintenance Tips', href: '/pages/maintenance' },
    { name: 'Style Inspiration', href: '/pages/inspiration' },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-white text-black py-20 px-6 md:px-12 border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Top Section: Business Info & VIP List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 pb-12 border-b border-[#fdf4ff]">
          <div className="space-y-8">
            <h4 className="text-2xl font-serif text-[#601438]">Visit Us</h4>
            <div className="space-y-6 text-sm font-light text-gray-600">

              <div className="flex items-center gap-4 hover:text-[#601438] transition-colors">
                <Mail className="w-5 h-5 text-[#601438] shrink-0" />
                <p>support@carebraids.com</p>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="w-5 h-5 text-[#601438] shrink-0" />
                <p className="text-2xl font-medium text-[#601438]">24/7 Open</p>
              </div>
            </div>

          </div>

          <div className="space-y-6">
            <h4 className="text-2xl font-serif text-[#601438]">Join our VIP List</h4>
            <p className="text-[#601438]/60 font-light">Subscribe to receive updates, access to exclusive deals, and more.</p>
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
          <div className="space-y-6">
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

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#601438]">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-[#601438] hover:-translate-y-[1px] transition-all inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
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

          <div className="space-y-6">
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

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#601438]">Hair Care</h4>
            <ul className="space-y-3">
              {footerLinks.hairCare.map((link) => (
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
