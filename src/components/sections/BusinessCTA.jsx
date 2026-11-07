import React, { useState } from 'react';
import { FiArrowRight, FiCheckCircle, FiShield } from 'react-icons/fi';
import Button from '../ui/Button';
import NotificationModal from '../ui/NotificationModal';

export default function BusinessCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#7041D8] text-white relative overflow-hidden">
      {/* Subtle restrained pattern/glow */}
      <div
        className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#8B5CF6]/30 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-60 sm:w-80 h-60 sm:h-80 bg-[#5E32BA]/40 rounded-full blur-2xl pointer-events-none -ml-16 -mb-16"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase bg-white/10 text-white border border-white/20 mb-4 sm:mb-6 backdrop-blur-sm">
          <FiShield className="w-3.5 h-3.5 text-[#B69AFB] shrink-0" />
          <span>MOZHI FOR BUSINESS</span>
        </div>

        {/* Heading: Mobile 24-28px, Tablet 32-36px, Desktop 40-44px */}
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-tight max-w-3xl mx-auto mb-3.5 sm:mb-5">
          Make it easier for customers to share their experience.
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
          Give your customers a simple, guided way to write and share genuine feedback.
        </p>

        {/* CTA Button: Full width on mobile, auto on tablet & desktop */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 sm:mb-8">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => setModalOpen(true)}
            icon={FiArrowRight}
            iconPosition="right"
            className="w-full sm:w-auto font-bold text-[#7041D8] bg-white hover:bg-[#F7F5FC] shadow-lg shadow-[#29243A]/20 min-h-[48px] justify-center"
          >
            Explore MOZHI for Businesses
          </Button>
        </div>

        {/* Supporting Points */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-white/80">
          <span className="flex items-center gap-1.5">
            <FiCheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B69AFB] shrink-0" />
            Zero fake reviews
          </span>
          <span className="flex items-center gap-1.5">
            <FiCheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B69AFB] shrink-0" />
            Google policy compliant
          </span>
          <span className="flex items-center gap-1.5">
            <FiCheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B69AFB] shrink-0" />
            No customer app downloads
          </span>
        </div>

      </div>

      <NotificationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="MOZHI for Businesses (Early Access)"
        badge="Phase 2 Program"
        type="info"
        message={
          <div className="space-y-3">
            <p>
              Thank you for your interest in MOZHI for Businesses!
            </p>
            <p className="text-xs text-[#706B7C] leading-relaxed">
              We are working closely with local cafes, service centers, medical clinics, and retail shops to pilot print-ready QR table tents, direct Google Maps link generators, and customer feedback workflows.
            </p>
            <p className="text-xs text-[#706B7C]">
              Business accounts and dashboard registration will go live with our Phase 2 release.
            </p>
          </div>
        }
      />
    </section>
  );
}
