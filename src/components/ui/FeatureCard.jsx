import React from 'react';

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  tag,
}) {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E9E5F0] p-5 sm:p-6 lg:p-7 shadow-subtle hover:shadow-card hover:border-[#B69AFB]/60 transition-all duration-300 flex flex-col justify-between group h-full">
      <div>
        {/* Icon & optional tag */}
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#F0ECF8] border border-[#B69AFB]/30 flex items-center justify-center text-[#7041D8] group-hover:bg-[#7041D8] group-hover:text-white transition-all duration-300 shrink-0">
            <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
          </div>
          {tag && (
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#7041D8] bg-[#F7F5FC] border border-[#E9E5F0] px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          )}
        </div>

        {/* Heading */}
        <h3 className="card-heading text-[#29243A] mb-2 sm:mb-2.5">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#706B7C] leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-5 sm:mt-6 pt-3 border-t border-[#E9E5F0]/60 flex items-center gap-1.5 text-xs font-semibold text-[#7041D8] opacity-80 group-hover:opacity-100 transition-opacity">
        <span>Designed for authenticity</span>
      </div>
    </div>
  );
}
