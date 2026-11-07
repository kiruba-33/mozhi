import React from 'react';
import { FiMic, FiAlertCircle } from 'react-icons/fi';

export default function ExperienceInput({
  businessName,
  setBusinessName,
  experience,
  setExperience,
  onMicClick,
  maxChars = 1000,
}) {
  const charCount = experience.length;
  const isOverLimit = charCount > maxChars;

  return (
    <div className="space-y-3.5 sm:space-y-4">
      {/* Business Name (Optional) */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label
            htmlFor="business-name"
            className="text-[11px] sm:text-xs font-semibold text-[#29243A] uppercase tracking-wider"
          >
            Business Name <span className="text-[#706B7C] font-normal lowercase">(optional)</span>
          </label>
        </div>
        <input
          id="business-name"
          type="text"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          placeholder="Enter business name (optional)"
          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9E5F0] bg-white text-base sm:text-sm text-[#29243A] placeholder-[#706B7C]/60 focus:border-[#7041D8] focus:ring-2 focus:ring-[#7041D8]/20 transition-all outline-none"
        />
      </div>

      {/* Experience Input */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label
            htmlFor="customer-experience"
            className="text-[11px] sm:text-xs font-semibold text-[#29243A] uppercase tracking-wider"
          >
            Tell us about your experience
          </label>
          <span
            className={`text-xs ${
              isOverLimit ? 'text-red-500 font-semibold' : 'text-[#706B7C]'
            }`}
          >
            {charCount}/{maxChars}
          </span>
        </div>

        <div className="relative">
          <textarea
            id="customer-experience"
            rows={4}
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="What happened during your visit? Tell us in your own words..."
            className="w-full px-3.5 py-3 pb-12 sm:pb-11 rounded-xl border border-[#E9E5F0] bg-white text-base sm:text-sm text-[#29243A] placeholder-[#706B7C]/60 focus:border-[#7041D8] focus:ring-2 focus:ring-[#7041D8]/20 transition-all outline-none resize-none leading-relaxed"
          />

          {/* Action bar inside textarea */}
          <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between border-t border-[#E9E5F0]/60 pt-1.5 sm:pt-2 bg-white">
            <button
              type="button"
              onClick={onMicClick}
              aria-label="Voice input"
              title="Voice input (Speech to text)"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-[#7041D8] hover:bg-[#F0ECF8] border border-transparent hover:border-[#B69AFB]/40 transition-colors min-h-[36px]"
            >
              <FiMic className="w-3.5 h-3.5 text-[#7041D8] shrink-0" />
              <span>Voice input</span>
              <span className="text-[10px] px-1.5 py-0.2 bg-[#F0ECF8] text-[#7041D8] rounded-full border border-[#B69AFB]/30 hidden xs:inline-block">Beta</span>
            </button>

            {experience.length > 0 && (
              <button
                type="button"
                onClick={() => setExperience('')}
                className="text-xs text-[#706B7C] hover:text-[#29243A] transition-colors px-2 py-1 min-h-[36px]"
              >
                Clear text
              </button>
            )}
          </div>
        </div>

        {isOverLimit && (
          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
            <FiAlertCircle className="w-3.5 h-3.5 shrink-0" /> Character limit exceeded.
          </p>
        )}
      </div>
    </div>
  );
}
