import React, { useState } from 'react';
import NotificationModal from '../ui/NotificationModal';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const [legalModal, setLegalModal] = useState({ isOpen: false, title: '', message: '' });

  const openLegalNotice = (title, message) => {
    setLegalModal({ isOpen: true, title, message });
  };

  return (
    <footer className="bg-white border-t border-[#E9E5F0] pt-12 sm:pt-16 pb-10 sm:pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: 1 col on Mobile, 2 cols on Tablet, 5 cols on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8 pb-10 sm:pb-12 border-b border-[#E9E5F0]">
          
          {/* Brand Info (Span 1 on Mobile, 2 on Tablet, 2 on Desktop) */}
          <div className="sm:col-span-2 space-y-3.5 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#7041D8] flex items-center justify-center text-white shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L12 9L17 17" />
                  <path d="M9 13.5H15" />
                  <circle cx="12" cy="5" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-[#29243A]">
                MOZHI
              </span>
            </div>

            <p className="text-xs sm:text-sm font-medium text-[#7041D8]">
              Your experience, expressed better.
            </p>

            <p className="text-xs sm:text-sm text-[#706B7C] max-w-sm leading-relaxed">
              Turn your genuine customer experience into clear, natural and meaningful Google reviews with AI.
            </p>

            <div className="pt-1 text-xs text-[#706B7C]">
              <span className="inline-block px-2.5 py-1 rounded-md bg-[#F7F5FC] border border-[#E9E5F0] text-[#7041D8] font-medium text-[11px] sm:text-xs">
                AI-Powered Google Review Generator
              </span>
            </div>
          </div>

          {/* Column: Product */}
          <div>
            <h4 className="font-heading text-xs font-bold text-[#29243A] uppercase tracking-wider mb-3 sm:mb-4">
              Product
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-[#706B7C]">
              <li>
                <a href="#hero-composer" className="hover:text-[#7041D8] transition-colors py-1 inline-block">
                  Review Composer
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#7041D8] transition-colors py-1 inline-block">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#7041D8] transition-colors py-1 inline-block">
                  Features
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-[#7041D8] transition-colors py-1 inline-block">
                  Interactive Showcase
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#7041D8] transition-colors py-1 inline-block">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column: For Businesses */}
          <div>
            <h4 className="font-heading text-xs font-bold text-[#29243A] uppercase tracking-wider mb-3 sm:mb-4">
              For Businesses
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-[#706B7C]">
              <li>
                <a href="#businesses" className="hover:text-[#7041D8] transition-colors py-1 inline-block">
                  Custom Review Links
                </a>
              </li>
              <li>
                <a href="#businesses" className="hover:text-[#7041D8] transition-colors py-1 inline-block">
                  QR Code Generation
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openLegalNotice('Business Dashboard', 'The business review analytics portal will launch in Phase 2 for verified merchant locations.')}
                  className="hover:text-[#7041D8] transition-colors text-left py-1 inline-block"
                >
                  Merchant Dashboard
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openLegalNotice('Google Place ID Setup', 'Businesses will be able to connect their Google Business Profile in seconds using Place IDs.')}
                  className="hover:text-[#7041D8] transition-colors text-left py-1 inline-block"
                >
                  Place ID Setup
                </button>
              </li>
            </ul>
          </div>

          {/* Column: Trust & Legal */}
          <div>
            <h4 className="font-heading text-xs font-bold text-[#29243A] uppercase tracking-wider mb-3 sm:mb-4">
              Trust & Legal
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-[#706B7C]">
              <li>
                <button
                  type="button"
                  onClick={() => openLegalNotice('Privacy Policy', 'MOZHI treats your raw notes with strict privacy. We do not sell your personal data or retain customer drafts for advertising.')}
                  className="hover:text-[#7041D8] transition-colors text-left py-1 inline-block"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openLegalNotice('Terms of Service', 'MOZHI is an assistance tool. All generated reviews remain the sole responsibility of the customer who chooses to submit them.')}
                  className="hover:text-[#7041D8] transition-colors text-left py-1 inline-block"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openLegalNotice('Authentic Review Pledge', 'MOZHI does not generate fake reviews, does not accept incentives for artificial ratings, and encourages honest feedback.')}
                  className="hover:text-[#7041D8] transition-colors text-left py-1 inline-block"
                >
                  Authentic Review Pledge
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openLegalNotice('Google Compliance', 'MOZHI is not affiliated with Google LLC. Google Maps and Google Reviews are registered trademarks of Google LLC.')}
                  className="hover:text-[#7041D8] transition-colors text-left py-1 inline-block"
                >
                  Google Disclaimer
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Copyright Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-[#706B7C]">
          <p className="max-w-2xl text-center md:text-left leading-relaxed text-[11px] sm:text-xs">
            Google™ is a trademark of Google LLC. MOZHI is an independent productivity tool and is not affiliated with, endorsed by, or sponsored by Google LLC.
          </p>

          <p className="shrink-0 text-center md:text-right text-[11px] sm:text-xs">
            &copy; {CURRENT_YEAR} MOZHI. All rights reserved.
          </p>
        </div>
      </div>

      <NotificationModal
        isOpen={legalModal.isOpen}
        onClose={() => setLegalModal({ isOpen: false, title: '', message: '' })}
        title={legalModal.title}
        message={legalModal.message}
        badge="Legal & Trust"
      />
    </footer>
  );
}
