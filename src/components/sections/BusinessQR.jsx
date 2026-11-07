import React, { useState } from 'react';
import {
  FiLink,
  FiGrid,
  FiShare2,
  FiClock,
  FiCopy,
  FiCheck,
  FiStar,
} from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';
import Button from '../ui/Button';
import NotificationModal from '../ui/NotificationModal';

export default function BusinessQR() {
  const [businessName, setBusinessName] = useState('Artisan Coffee Roasters');
  const [copiedLink, setCopiedLink] = useState(false);
  const [qrModal, setQrModal] = useState({ isOpen: false, title: '', message: '' });

  const slug = businessName
    ? businessName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
    : 'your-business';

  const previewUrl = `mozhi.app/r/${slug || 'your-business'}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`https://${previewUrl}`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleGenerateQR = () => {
    setQrModal({
      isOpen: true,
      title: 'Business QR & Review Link Generator',
      message: (
        <div className="space-y-3">
          <p>
            <strong>Phase 2 Business Portal:</strong> In the upcoming release, merchants can enter their official Google Maps Place ID to generate scannable SVG & PDF vector QR assets ready for print.
          </p>
          <p className="text-xs text-[#706B7C]">
            This ensures your customers are routed directly to your official Google review dialog without searching or getting lost on competitors&apos; profiles.
          </p>
        </div>
      ),
    });
  };

  const benefits = [
    {
      icon: FiLink,
      title: 'Direct Google Review Destination',
      description: 'Bypasses confusing map searches and opens your verified Google review pop-up directly on customer phones.',
    },
    {
      icon: FiGrid,
      title: 'Print-Ready QR Codes',
      description: 'Generate high-resolution vector QR badges for table tents, receipts, front counters, and packaging.',
    },
    {
      icon: FiShare2,
      title: 'Easy Sharing Across Channels',
      description: 'Share a clean, memorable short link via SMS, WhatsApp, and post-purchase follow-up emails.',
    },
    {
      icon: FiClock,
      title: '30-Second Business Setup',
      description: 'No software installation. Simply paste your Google Maps link to generate your branded card.',
    },
  ];

  return (
    <section id="businesses" className="py-14 sm:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Business Benefits (Stacked on Mobile/Tablet, 7 cols on Desktop) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 max-w-2xl mx-auto lg:mx-0 lg:max-w-none text-center lg:text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4 bg-[#F0ECF8] text-[#7041D8] border border-[#B69AFB]/30 mx-auto lg:mx-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7041D8]"></span>
                For Local Businesses
              </div>

              <h2 className="section-heading text-[#29243A]">
                Make sharing your review link{' '}
                <span className="text-[#7041D8]">effortless.</span>
              </h2>

              <p className="mt-3 sm:mt-4 text-[15px] sm:text-[17px] text-[#706B7C] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Give customers a simple way to reach your Google Review page through a custom link or QR code.
              </p>
            </div>

            {/* Benefits List: 1 col on mobile, 2 col on tablet/desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 pt-2 text-left">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="space-y-2">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F7F5FC] border border-[#E9E5F0] flex items-center justify-center text-[#7041D8] shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="font-heading text-sm sm:text-base font-bold text-[#29243A]">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#706B7C] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: QR Code Preview Card */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
            <div className="bg-[#F7F5FC] rounded-2xl sm:rounded-3xl border border-[#E9E5F0] p-4 sm:p-6 lg:p-8 shadow-card">
              
              {/* Business Name Input for dynamic preview */}
              <div className="mb-4 sm:mb-6">
                <label
                  htmlFor="biz-name-input"
                  className="block text-[11px] sm:text-xs font-semibold text-[#29243A] uppercase tracking-wider mb-1.5"
                >
                  Preview Your Business QR
                </label>
                <input
                  id="biz-name-input"
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Artisan Coffee Roasters"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9E5F0] bg-white text-base sm:text-sm text-[#29243A] focus:border-[#7041D8] focus:ring-2 focus:ring-[#7041D8]/20 outline-none transition-all"
                />
              </div>

              {/* Physical QR Card Mockup */}
              <div className="bg-white rounded-xl sm:rounded-2xl border border-[#E9E5F0] p-4 sm:p-6 text-center shadow-subtle relative overflow-hidden">
                {/* Header with Google star indicator */}
                <div className="mb-3 sm:mb-4">
                  <span className="text-[10px] sm:text-xs font-semibold text-[#7041D8] uppercase tracking-wider">
                    Google Review Card
                  </span>
                  <h4 className="font-heading text-base sm:text-lg font-bold text-[#29243A] truncate mt-0.5">
                    {businessName.trim() || 'Your Business Name'}
                  </h4>
                  <div className="flex items-center justify-center gap-1 mt-1 text-amber-500 text-xs">
                    <FiStar className="fill-amber-400 text-amber-400 w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <FiStar className="fill-amber-400 text-amber-400 w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <FiStar className="fill-amber-400 text-amber-400 w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <FiStar className="fill-amber-400 text-amber-400 w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <FiStar className="fill-amber-400 text-amber-400 w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="text-[#706B7C] font-medium ml-1 text-[11px] sm:text-xs">5.0 on Google</span>
                  </div>
                </div>

                {/* Vector QR Visual Placeholder: Responsive sizing */}
                <div className="w-36 h-36 sm:w-44 sm:h-44 mx-auto bg-white p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-[#E9E5F0] shadow-sm flex flex-col items-center justify-center relative">
                  <svg
                    viewBox="0 0 120 120"
                    className="w-full h-full text-[#29243A]"
                    fill="currentColor"
                    aria-label="QR Code Visual Placeholder"
                  >
                    {/* Top-left corner finder */}
                    <rect x="10" y="10" width="30" height="30" rx="6" fill="#29243A" />
                    <rect x="16" y="16" width="18" height="18" rx="3" fill="#FFFFFF" />
                    <rect x="20" y="20" width="10" height="10" rx="2" fill="#7041D8" />

                    {/* Top-right corner finder */}
                    <rect x="80" y="10" width="30" height="30" rx="6" fill="#29243A" />
                    <rect x="86" y="16" width="18" height="18" rx="3" fill="#FFFFFF" />
                    <rect x="90" y="20" width="10" height="10" rx="2" fill="#7041D8" />

                    {/* Bottom-left corner finder */}
                    <rect x="10" y="80" width="30" height="30" rx="6" fill="#29243A" />
                    <rect x="16" y="86" width="18" height="18" rx="3" fill="#FFFFFF" />
                    <rect x="20" y="90" width="10" height="10" rx="2" fill="#7041D8" />

                    {/* Matrix data module simulation */}
                    <rect x="48" y="14" width="6" height="6" rx="1.5" fill="#29243A" />
                    <rect x="58" y="14" width="6" height="6" rx="1.5" fill="#29243A" />
                    <rect x="68" y="14" width="6" height="6" rx="1.5" fill="#29243A" />
                    
                    <rect x="48" y="26" width="6" height="6" rx="1.5" fill="#29243A" />
                    <rect x="60" y="26" width="14" height="6" rx="1.5" fill="#7041D8" />

                    <rect x="14" y="48" width="6" height="6" rx="1.5" fill="#29243A" />
                    <rect x="24" y="48" width="8" height="6" rx="1.5" fill="#29243A" />
                    <rect x="36" y="48" width="6" height="6" rx="1.5" fill="#29243A" />
                    <rect x="48" y="48" width="8" height="6" rx="1.5" fill="#29243A" />
                    <rect x="62" y="48" width="6" height="6" rx="1.5" fill="#7041D8" />
                    <rect x="74" y="48" width="12" height="6" rx="1.5" fill="#29243A" />
                    <rect x="92" y="48" width="14" height="6" rx="1.5" fill="#29243A" />

                    <rect x="14" y="60" width="12" height="6" rx="1.5" fill="#29243A" />
                    <rect x="32" y="60" width="6" height="6" rx="1.5" fill="#29243A" />
                    <rect x="74" y="60" width="6" height="6" rx="1.5" fill="#29243A" />
                    <rect x="88" y="60" width="8" height="6" rx="1.5" fill="#29243A" />
                    <rect x="100" y="60" width="6" height="6" rx="1.5" fill="#29243A" />

                    <rect x="48" y="70" width="6" height="8" rx="1.5" fill="#29243A" />
                    <rect x="58" y="70" width="8" height="8" rx="1.5" fill="#29243A" />
                    <rect x="70" y="70" width="6" height="8" rx="1.5" fill="#29243A" />

                    <rect x="48" y="86" width="12" height="6" rx="1.5" fill="#29243A" />
                    <rect x="66" y="86" width="16" height="6" rx="1.5" fill="#29243A" />
                    <rect x="88" y="86" width="18" height="6" rx="1.5" fill="#29243A" />

                    <rect x="48" y="98" width="6" height="8" rx="1.5" fill="#29243A" />
                    <rect x="60" y="98" width="8" height="8" rx="1.5" fill="#29243A" />
                    <rect x="74" y="98" width="12" height="8" rx="1.5" fill="#29243A" />
                    <rect x="94" y="98" width="12" height="8" rx="1.5" fill="#29243A" />

                    {/* Center MOZHI badge */}
                    <circle cx="60" cy="60" r="13" fill="#FFFFFF" stroke="#E9E5F0" strokeWidth="1.5" />
                    <circle cx="60" cy="60" r="9" fill="#7041D8" />
                  </svg>

                  <div className="text-[9px] sm:text-[10px] text-[#706B7C] mt-1 font-mono">
                    Visual Placeholder Only
                  </div>
                </div>

                {/* Scan message */}
                <p className="text-xs font-semibold text-[#29243A] mt-2.5 sm:mt-3">
                  Scan with phone camera to review on Google
                </p>

                {/* Direct Link Preview Bar: strictly prevented from overflowing */}
                <div className="mt-3 sm:mt-4 p-2 sm:p-2.5 rounded-xl bg-[#F7F5FC] border border-[#E9E5F0] flex items-center justify-between text-xs gap-2 min-w-0">
                  <span className="text-[#706B7C] truncate font-mono text-[10px] sm:text-[11px] min-w-0">
                    {previewUrl}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1 font-semibold text-[#7041D8] hover:text-[#5E32BA] transition-colors shrink-0 py-1 px-1.5 min-h-[36px]"
                  >
                    {copiedLink ? (
                      <>
                        <FiCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <FiCopy className="w-3.5 h-3.5 shrink-0" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Generate QR CTA: Full width, touch friendly */}
              <div className="mt-4 sm:mt-5">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleGenerateQR}
                  icon={HiSparkles}
                  className="w-full text-xs sm:text-sm font-semibold min-h-[46px] justify-center"
                >
                  Generate Business QR Code
                </Button>
              </div>

            </div>
          </div>

        </div>

      </div>

      <NotificationModal
        isOpen={qrModal.isOpen}
        onClose={() => setQrModal({ isOpen: false, title: '', message: '' })}
        title={qrModal.title}
        message={qrModal.message}
        badge="Business Tools"
      />
    </section>
  );
}
