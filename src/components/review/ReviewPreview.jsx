import React, { useState } from 'react';
import { FiCopy, FiCheck, FiExternalLink, FiEdit3, FiFileText } from 'react-icons/fi';
import Button from '../ui/Button';

export default function ReviewPreview({
  reviewDraft,
  setReviewDraft,
  hasGenerated,
  onPostOnGoogle,
  onCopySuccess,
}) {
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleCopy = async () => {
    if (!reviewDraft) return;
    try {
      await navigator.clipboard.writeText(reviewDraft);
      setCopied(true);
      if (onCopySuccess) onCopySuccess();
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-[#E9E5F0]">
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2">
          <span className="text-[11px] sm:text-xs font-semibold text-[#29243A] uppercase tracking-wider">
            Review Draft
          </span>
          {hasGenerated && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#7041D8] bg-[#F0ECF8] px-2 py-0.5 rounded-full border border-[#B69AFB]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7041D8]"></span>
              Draft Ready
            </span>
          )}
        </div>

        {hasGenerated && (
          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className="inline-flex items-center gap-1 text-xs text-[#7041D8] hover:text-[#5E32BA] font-medium transition-colors py-1 px-2 -mr-2 min-h-[36px]"
          >
            <FiEdit3 className="w-3.5 h-3.5" />
            <span>{isEditing ? 'Done Editing' : 'Edit Review'}</span>
          </button>
        )}
      </div>

      {!hasGenerated ? (
        /* Empty State */
        <div className="rounded-xl border border-dashed border-[#E9E5F0] bg-[#F7F5FC]/60 p-4 sm:p-6 text-center">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-subtle border border-[#E9E5F0] flex items-center justify-center mx-auto mb-2 text-[#B69AFB]">
            <FiFileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#7041D8]" />
          </div>
          <p className="text-xs sm:text-sm font-medium text-[#29243A] mb-1">
            Your review will appear here after generation.
          </p>
          <p className="text-[11px] sm:text-xs text-[#706B7C] max-w-xs mx-auto">
            Share what happened above, then click &ldquo;Generate My Review&rdquo; to create a clear, natural draft.
          </p>
        </div>
      ) : (
        /* Review Output & Edit Area */
        <div className="space-y-3">
          <div className="relative">
            {isEditing ? (
              <div>
                <label htmlFor="edit-draft-textarea" className="sr-only">
                  Edit Review Draft
                </label>
                <textarea
                  id="edit-draft-textarea"
                  rows={4}
                  value={reviewDraft}
                  onChange={(e) => setReviewDraft(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl border border-[#7041D8] bg-white text-base sm:text-sm text-[#29243A] focus:ring-2 focus:ring-[#7041D8]/20 transition-all outline-none leading-relaxed"
                  placeholder="Edit your review draft here..."
                />
                <span className="text-[11px] text-[#706B7C] mt-1 block">
                  You are editing this draft. Click &ldquo;Done Editing&rdquo; when satisfied.
                </span>
              </div>
            ) : (
              <div
                onClick={() => setIsEditing(true)}
                className="w-full min-h-[96px] p-3.5 rounded-xl border border-[#E9E5F0] bg-[#F7F5FC]/50 text-sm text-[#29243A] leading-relaxed cursor-pointer hover:border-[#B69AFB] transition-colors relative group"
                title="Click to edit review draft"
              >
                <p className="whitespace-pre-line break-words">{reviewDraft}</p>
                <div className="hidden sm:flex absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-2 py-1 rounded shadow-sm border border-[#E9E5F0] text-[11px] text-[#7041D8] font-medium items-center gap-1">
                  <FiEdit3 className="w-3 h-3" /> Click to edit
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons: Stack on mobile, side-by-side on tablet/desktop */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-2.5 pt-1">
            <Button
              variant="secondary"
              size="sm"
              onClick={handleCopy}
              icon={copied ? FiCheck : FiCopy}
              className={`w-full sm:w-auto text-xs justify-center ${copied ? 'border-emerald-500 text-emerald-700 bg-emerald-50' : ''}`}
            >
              {copied ? 'Copied Review!' : 'Copy Review'}
            </Button>

            <Button
              variant="primary"
              size="sm"
              onClick={onPostOnGoogle}
              icon={FiExternalLink}
              iconPosition="right"
              className="w-full sm:w-auto text-xs justify-center"
            >
              Post on Google
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
