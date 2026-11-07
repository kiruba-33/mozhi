import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
  className = '',
  light = false,
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-8 sm:mb-12 lg:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4 bg-[#F0ECF8] text-[#7041D8] border border-[#B69AFB]/30">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7041D8]"></span>
          {eyebrow}
        </div>
      )}
      
      <h2 className={`section-heading ${light ? 'text-white' : 'text-[#29243A]'}`}>
        {title}{' '}
        {highlight && (
          <span className={light ? 'text-[#B69AFB]' : 'text-[#7041D8]'}>
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className={`mt-3 sm:mt-4 text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-[#706B7C]'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
