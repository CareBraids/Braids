'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted or declined cookies
    const cookieConsent = localStorage.getItem('carebraids_cookie_consent');
    if (!cookieConsent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('carebraids_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('carebraids_cookie_consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="fixed bottom-0 left-0 right-0 z-[100] px-4 pb-4 md:px-8 md:pb-8 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-xl border border-brand-100 shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-between pointer-events-auto">
            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-serif italic text-brand-950">We value your privacy</h3>
              <p className="text-sm font-light text-brand-900/70 leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
              <button
                onClick={handleDecline}
                className="px-6 py-3 border-2 border-brand-100 hover:bg-brand-50 text-brand-900 font-bold text-[10px] tracking-[0.2em] uppercase transition-all whitespace-nowrap"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 bg-brand-950 hover:bg-brand-800 text-white font-bold text-[10px] tracking-[0.2em] uppercase transition-all shadow-lg whitespace-nowrap"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
