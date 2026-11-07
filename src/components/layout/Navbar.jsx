import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiArrowRight, FiUser } from 'react-icons/fi';
import Button from '../ui/Button';
import NotificationModal from '../ui/NotificationModal';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'For Businesses', href: '#businesses' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 72;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleGetStarted = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const heroComposer = document.querySelector('#hero-composer');
    if (heroComposer) {
      const navHeight = 72;
      const elementPosition = heroComposer.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setTimeout(() => {
        const textarea = heroComposer.querySelector('textarea');
        if (textarea) textarea.focus();
      }, 400);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#E9E5F0] transition-shadow duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Left: Brand Logo & Symbol */}
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7041D8] rounded-lg p-1 shrink-0"
            aria-label="MOZHI Home"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#7041D8] flex items-center justify-center text-white shadow-sm shadow-[#7041D8]/20 group-hover:scale-105 transition-transform">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L12 9L17 17" />
                <path d="M9 13.5H15" />
                <circle cx="12" cy="5" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-[#29243A]">
                MOZHI
              </span>
            </div>
          </a>

          {/* Center: Navigation Links (Tablet & Desktop) */}
          <nav
            className="hidden md:flex items-center gap-4 lg:gap-8 text-sm lg:text-[15px] font-medium text-[#706B7C]"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="hover:text-[#7041D8] transition-colors py-1 px-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7041D8] rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Actions (Tablet & Desktop) */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
            <Button
              variant="ghost"
              size="sm"
              icon={FiUser}
              onClick={() => setAuthModalOpen(true)}
              className="text-xs sm:text-sm px-3 lg:px-4"
            >
              Sign In
            </Button>

            <Button
              variant="primary"
              size="sm"
              onClick={handleGetStarted}
              icon={FiArrowRight}
              iconPosition="right"
              className="text-xs sm:text-sm px-3.5 lg:px-5"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Right: Start CTA + Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              onClick={handleGetStarted}
              className="text-xs px-3 py-1.5 min-h-[38px]"
            >
              Start
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center rounded-xl text-[#29243A] hover:bg-[#F7F5FC] focus-visible:ring-2 focus-visible:ring-[#7041D8] outline-none touch-manipulation"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown & Backdrop */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            {/* Backdrop */}
            <div
              className="fixed inset-0 top-16 bg-[#29243A]/30 backdrop-blur-xs z-40 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <div className="relative z-50 border-t border-[#E9E5F0] bg-white px-4 pt-3 pb-6 shadow-xl animate-fade-in max-h-[calc(100vh-4rem)] overflow-y-auto">
              <nav className="flex flex-col space-y-1 py-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="flex items-center px-4 py-3 min-h-[44px] rounded-xl text-base font-semibold text-[#29243A] hover:bg-[#F7F5FC] hover:text-[#7041D8] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="pt-4 mt-2 border-t border-[#E9E5F0] flex flex-col gap-2.5">
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setAuthModalOpen(true);
                  }}
                  className="w-full justify-center min-h-[44px]"
                >
                  Sign In
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleGetStarted}
                  className="w-full justify-center min-h-[44px]"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Auth Modal for Sign In */}
      <NotificationModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        title="MOZHI Member Portal"
        badge="Phase 2 Release"
        type="info"
        message={
          <div className="space-y-2">
            <p>
              Account sign-in and business management profiles will be available in Phase 2.
            </p>
            <p className="text-xs text-[#706B7C]">
              You do not need an account to write, refine, and copy Google reviews today. The review composer is open and freely accessible.
            </p>
          </div>
        }
      />
    </>
  );
}
