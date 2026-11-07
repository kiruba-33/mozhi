import React, { useState } from 'react';
import { FiCheckCircle, FiShield } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';
import ExperienceInput from './ExperienceInput';
import ReviewPreview from './ReviewPreview';
import Button from '../ui/Button';
import NotificationModal from '../ui/NotificationModal';

export default function ReviewComposer({ id = 'hero-composer', className = '' }) {
  const [businessName, setBusinessName] = useState('');
  const [experience, setExperience] = useState('');
  const [reviewDraft, setReviewDraft] = useState('');
  const [hasGenerated, setHasGenerated] = useState(false);

  // Modals / notifications
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    title: '',
    message: null,
    badge: 'System Notice',
    type: 'info',
  });

  const handleMicClick = () => {
    setModalConfig({
      isOpen: true,
      title: 'Voice Input Integration',
      badge: 'Feature Pending',
      type: 'info',
      message: (
        <div className="space-y-2">
          <p>
            Speech-to-text recording is currently being integrated for upcoming releases.
          </p>
          <p className="text-xs text-[#706B7C]">
            Soon, you will simply press record, describe your experience verbally, and MOZHI will accurately transcribe and organize your thoughts into review drafts.
          </p>
        </div>
      ),
    });
  };

  const handleGenerate = () => {
    if (!experience.trim()) return;

    // Open clear notification explaining Phase 2 AI engine
    setModalConfig({
      isOpen: true,
      title: 'AI Generation Pipeline (Phase 2)',
      badge: 'Engineering Notice',
      type: 'info',
      message: (
        <div className="space-y-3">
          <p>
            <strong>Live AI Engine Pending:</strong> In accordance with product requirements, live AI generation is not connected in this frontend release.
          </p>
          <p className="text-xs text-[#706B7C] leading-relaxed">
            MOZHI does not invent experiences or create fake AI text. For evaluation purposes, we have unlocked the review draft staging area below with your actual text so you can test the editing, copying, and Google handoff flow.
          </p>
        </div>
      ),
    });

    setReviewDraft(
      businessName.trim()
        ? `Review for ${businessName.trim()}:\n${experience.trim()}`
        : experience.trim()
    );
    setHasGenerated(true);
  };

  const handlePostOnGoogle = () => {
    setModalConfig({
      isOpen: true,
      title: 'Google Review Hand-Off',
      badge: 'Google Policy Compliant',
      type: 'info',
      message: (
        <div className="space-y-2">
          <p>
            Google requires all reviews to be posted directly by authenticated users through their own Google accounts to prevent spam and maintain authentic customer trust.
          </p>
          <p className="text-xs text-[#706B7C]">
            MOZHI will automatically copy your verified draft to your clipboard and direct you straight to {businessName.trim() ? `"${businessName.trim()}"'s` : 'the business&apos;s'} official Google Maps review dialogue where you can paste and post with one click.
          </p>
        </div>
      ),
    });
  };

  return (
    <div
      id={id}
      className={`bg-white rounded-2xl sm:rounded-3xl border border-[#E9E5F0] shadow-composer p-4 sm:p-6 lg:p-7 relative transition-all duration-300 hover:border-[#B69AFB]/60 w-full ${className}`}
    >
      {/* Composer Header */}
      <div className="flex items-center justify-between pb-3.5 sm:pb-4 mb-3.5 sm:mb-4 border-b border-[#E9E5F0] gap-2">
        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#F0ECF8] border border-[#B69AFB]/30 flex items-center justify-center shrink-0">
            <span className="font-heading font-extrabold text-xs sm:text-sm text-[#7041D8]">M</span>
          </div>
          <div className="min-w-0">
            <h3 className="font-heading text-xs sm:text-sm md:text-base font-bold text-[#29243A] truncate">
              Create your Google review
            </h3>
            <p className="text-[10px] sm:text-[11px] text-[#706B7C] flex items-center gap-1 truncate">
              <span>Powered by MOZHI</span>
              <span>•</span>
              <span className="text-[#7041D8] font-medium hidden xs:inline">Authentic draft assistant</span>
              <span className="text-[#7041D8] font-medium xs:hidden">Draft assistant</span>
            </p>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-full bg-[#F7F5FC] border border-[#E9E5F0] shrink-0">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[10px] sm:text-[11px] font-medium text-[#706B7C]">Ready</span>
        </div>
      </div>

      {/* Inputs Section */}
      <ExperienceInput
        businessName={businessName}
        setBusinessName={setBusinessName}
        experience={experience}
        setExperience={setExperience}
        onMicClick={handleMicClick}
      />

      {/* Generate CTA Button: Full width, touch friendly */}
      <div className="mt-4 sm:mt-5">
        <Button
          variant="primary"
          size="md"
          onClick={handleGenerate}
          disabled={!experience.trim()}
          icon={HiSparkles}
          className="w-full text-xs sm:text-sm font-semibold py-3 min-h-[46px] justify-center"
        >
          Generate My Review
        </Button>
      </div>

      {/* Review Output Preview & Actions */}
      <ReviewPreview
        reviewDraft={reviewDraft}
        setReviewDraft={setReviewDraft}
        hasGenerated={hasGenerated}
        onPostOnGoogle={handlePostOnGoogle}
      />

      {/* Supporting Trust Line */}
      <div className="mt-4 pt-3 border-t border-[#E9E5F0]/60 flex flex-col xs:flex-row items-center justify-between gap-1.5 text-[10px] sm:text-[11px] text-[#706B7C]">
        <span className="flex items-center gap-1">
          <FiShield className="w-3.5 h-3.5 text-[#7041D8] shrink-0" /> 100% human-approved
        </span>
        <span className="flex items-center gap-1">
          <FiCheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> No fake reviews
        </span>
      </div>

      {/* Interactive Modal Notice */}
      <NotificationModal
        isOpen={modalConfig.isOpen}
        onClose={() => setModalConfig((prev) => ({ ...prev, isOpen: false }))}
        title={modalConfig.title}
        message={modalConfig.message}
        badge={modalConfig.badge}
        type={modalConfig.type}
      />
    </div>
  );
}
