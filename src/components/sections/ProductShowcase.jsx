import React, { useState } from 'react';
import {
  FiMic,
  FiCopy,
  FiCheck,
  FiEdit3,
  FiCheckCircle,
  FiShield,
  FiSliders,
} from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import NotificationModal from '../ui/NotificationModal';

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('dining');
  const [copied, setCopied] = useState(false);
  const [isEditingDraft, setIsEditingDraft] = useState(false);
  const [noticeModal, setNoticeModal] = useState({ isOpen: false, title: '', message: '' });

  // Example genuine customer experiences
  const sampleScenarios = {
    dining: {
      label: 'Casual Dining',
      business: 'Harbor Street Bistro',
      rawThoughts: 'Came in for dinner on a busy Friday night. The pasta was fresh and the truffle sauce was incredible. Our waiter Marcus made sure our water was always topped up despite how packed it was. Had to wait about 10 minutes for our table even with a reservation, but totally worth it.',
      sampleDraft: 'Had a wonderful dinner at Harbor Street Bistro on a Friday evening. Although we waited about 10 minutes past our reservation time due to the busy crowd, the staff handled it gracefully. The pasta was freshly made with rich, flavorful truffle sauce, and our server Marcus provided attentive, warm service throughout the meal. Will definitely be returning.',
    },
    service: {
      label: 'Auto & Repair',
      business: 'Apex Auto Care',
      rawThoughts: 'Brought my car in for strange brake noises. They diagnosed the worn pads within an hour, quoted me a fair price upfront with no hidden fees, and had it ready by 4 PM. Very honest crew.',
      sampleDraft: 'Brought my car into Apex Auto Care after noticing brake noises. The team diagnosed worn brake pads in under an hour and provided a transparent, upfront quote without unnecessary upselling. The work was finished ahead of schedule by 4 PM, and the car drives quietly and smoothly. Highly recommend their honest and professional service.',
    },
    retail: {
      label: 'Local Boutique',
      business: 'Greenleaf Plant Studio',
      rawThoughts: 'Loved the selection of indoor plants. The owner walked me through low-light options for my apartment and gave great watering tips. Prices are a bit higher than big-box stores, but the plant health is ten times better.',
      sampleDraft: 'Greenleaf Plant Studio has an exceptional indoor plant collection. The owner took the time to recommend species that thrive in lower-light apartments and shared practical care guidance. While prices are slightly higher than big-box retailers, the quality and health of the plants make it well worth the difference.',
    },
  };

  const currentScenario = sampleScenarios[activeTab];
  const [customDraft, setCustomDraft] = useState(currentScenario.sampleDraft);

  const handleScenarioChange = (key) => {
    setActiveTab(key);
    setIsEditingDraft(false);
    setCustomDraft(sampleScenarios[key].sampleDraft);
  };

  const handleCopyShowcase = async () => {
    try {
      await navigator.clipboard.writeText(customDraft);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleMicClick = () => {
    setNoticeModal({
      isOpen: true,
      title: 'Voice Recording Integration',
      message: 'The voice input microphone will record raw speech and transcribe it directly into the experience field in Phase 2.',
    });
  };

  const handleGenerateClick = () => {
    setNoticeModal({
      isOpen: true,
      title: 'AI Synthesis Process',
      message: 'In production, MOZHI preserves the customer\'s true sentiments, corrects grammar, and formats readable paragraphs while avoiding marketing hyperbole.',
    });
  };

  return (
    <section id="showcase" className="py-14 sm:py-20 lg:py-28 bg-[#F0ECF8]/70 border-b border-[#E9E5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Product Interface"
          title="From messy thoughts to a"
          highlight="polished review draft."
          description="See how the Review Composer organizes raw experiences into structured, readable feedback while maintaining 100% of the customer's authentic voice."
          align="center"
        />

        {/* Scenario Switcher Tabs: Touch friendly, wrapping cleanly */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10">
          <span className="text-xs font-semibold text-[#706B7C] uppercase tracking-wider mr-1 sm:mr-2 w-full sm:w-auto text-center sm:text-left mb-1 sm:mb-0">
            Try Scenarios:
          </span>
          {Object.entries(sampleScenarios).map(([key, data]) => (
            <button
              key={key}
              type="button"
              onClick={() => handleScenarioChange(key)}
              className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all min-h-[42px] touch-manipulation ${
                activeTab === key
                  ? 'bg-[#7041D8] text-white shadow-sm'
                  : 'bg-white text-[#29243A] border border-[#E9E5F0] hover:border-[#B69AFB]'
              }`}
            >
              {data.label}
            </button>
          ))}
        </div>

        {/* Expanded Interface Mockup */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E9E5F0] shadow-composer p-4 sm:p-7 lg:p-10 max-w-5xl mx-auto">
          
          {/* Top Interface Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 mb-6 sm:mb-8 border-b border-[#E9E5F0] gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#7041D8] flex items-center justify-center text-white font-heading font-extrabold text-sm sm:text-base shrink-0">
                M
              </div>
              <div className="min-w-0">
                <h3 className="font-heading text-sm sm:text-base lg:text-lg font-bold text-[#29243A] truncate">
                  Review Composer Studio
                </h3>
                <p className="text-[11px] sm:text-xs text-[#706B7C] truncate">
                  Simulating input for <strong className="text-[#29243A] font-medium">{currentScenario.business}</strong>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[11px] sm:text-xs font-medium text-[#706B7C] bg-[#F7F5FC] border border-[#E9E5F0] px-2.5 sm:px-3 py-1 rounded-full flex items-center gap-1.5">
                <FiSliders className="w-3.5 h-3.5 text-[#7041D8]" /> Natural Review Tone
              </span>
            </div>
          </div>

          {/* Two-Column Workspace: Vertically Stacked on Mobile & Tablet, Side-by-Side on Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-start">
            
            {/* Left: Raw Experience Input Field */}
            <div className="space-y-3.5 sm:space-y-4 bg-[#F7F5FC]/60 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-[#E9E5F0]">
              <div className="flex items-center justify-between">
                <span className="text-[11px] sm:text-xs font-bold text-[#29243A] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#7041D8]"></span>
                  Raw Customer Experience
                </span>
                <span className="text-xs text-[#706B7C]">
                  {currentScenario.rawThoughts.length} chars
                </span>
              </div>

              <div className="bg-white rounded-xl border border-[#E9E5F0] p-3.5 sm:p-4 text-xs sm:text-sm text-[#29243A] leading-relaxed min-h-[140px] sm:min-h-[160px] break-words">
                {currentScenario.rawThoughts}
              </div>

              {/* Action Bar */}
              <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleMicClick}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-[#7041D8] bg-white border border-[#E9E5F0] hover:border-[#B69AFB] transition-colors min-h-[40px]"
                >
                  <FiMic className="w-3.5 h-3.5 shrink-0" />
                  <span>Voice Dictation (Demo)</span>
                </button>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleGenerateClick}
                  icon={HiSparkles}
                  className="text-xs w-full xs:w-auto justify-center min-h-[40px]"
                >
                  Generate Review
                </Button>
              </div>

              <div className="text-[10px] sm:text-[11px] text-[#706B7C] flex items-center gap-1.5 pt-1">
                <FiShield className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>MOZHI preserves exact facts and constructive details without exaggeration.</span>
              </div>
            </div>

            {/* Right: Review Output & Staging Preview */}
            <div className="space-y-3.5 sm:space-y-4 bg-[#F0ECF8]/40 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-[#B69AFB]/40">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] sm:text-xs font-bold text-[#7041D8] uppercase tracking-wider flex items-center gap-1.5">
                    <FiCheckCircle className="w-4 h-4 text-[#7041D8]" />
                    Synthesized Review Draft
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsEditingDraft(!isEditingDraft)}
                  className="inline-flex items-center gap-1 text-xs text-[#7041D8] hover:text-[#5E32BA] font-semibold transition-colors py-1 px-2 min-h-[36px]"
                >
                  <FiEdit3 className="w-3.5 h-3.5" />
                  <span>{isEditingDraft ? 'Save Edits' : 'Edit Draft'}</span>
                </button>
              </div>

              {isEditingDraft ? (
                <textarea
                  rows={6}
                  value={customDraft}
                  onChange={(e) => setCustomDraft(e.target.value)}
                  className="w-full bg-white rounded-xl border border-[#7041D8] p-3.5 sm:p-4 text-xs sm:text-sm text-[#29243A] leading-relaxed outline-none focus:ring-2 focus:ring-[#7041D8]/20 transition-all resize-none"
                />
              ) : (
                <div className="bg-white rounded-xl border border-[#E9E5F0] p-3.5 sm:p-4 text-xs sm:text-sm text-[#29243A] leading-relaxed min-h-[140px] sm:min-h-[160px] whitespace-pre-line shadow-subtle break-words">
                  {customDraft}
                </div>
              )}

              {/* Action Buttons: Stack on mobile */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-1">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleCopyShowcase}
                  icon={copied ? FiCheck : FiCopy}
                  className={`text-xs w-full sm:w-auto justify-center min-h-[42px] ${
                    copied ? 'bg-emerald-600 hover:bg-emerald-700' : ''
                  }`}
                >
                  {copied ? 'Copied to Clipboard!' : 'Copy Review Draft'}
                </Button>

                <span className="text-[11px] sm:text-xs text-[#706B7C] flex items-center gap-1 text-center sm:text-left justify-center sm:justify-start">
                  Ready to paste into Google Maps
                </span>
              </div>

              <div className="text-[10px] sm:text-[11px] text-[#706B7C] pt-1">
                Customers always have the final say before submitting to their personal Google account.
              </div>
            </div>

          </div>

          {/* Bottom Trust Pillars */}
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#E9E5F0] grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 text-xs text-[#706B7C]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7041D8] shrink-0"></span>
              <span><strong>Natural Voice:</strong> No robotic phrases</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7041D8] shrink-0"></span>
              <span><strong>Sentiment Accuracy:</strong> Nuances respected</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7041D8] shrink-0"></span>
              <span><strong>Zero Friction:</strong> Copies instantly to clipboard</span>
            </div>
          </div>

        </div>

      </div>

      <NotificationModal
        isOpen={noticeModal.isOpen}
        onClose={() => setNoticeModal({ isOpen: false, title: '', message: '' })}
        title={noticeModal.title}
        message={noticeModal.message}
        badge="Interface Preview"
      />
    </section>
  );
}
