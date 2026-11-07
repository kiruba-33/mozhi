import React from 'react';
import { FiMessageSquare, FiCpu, FiShare2 } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Share Your Experience',
      description: 'Tell us what happened through text or voice.',
      icon: FiMessageSquare,
      badge: 'Step 1',
    },
    {
      number: '02',
      title: 'Refine with AI',
      description: 'MOZHI transforms your thoughts into a natural, readable review while preserving your actual experience.',
      icon: FiCpu,
      badge: 'Step 2',
    },
    {
      number: '03',
      title: 'Copy and Share',
      description: 'Review your draft, make edits and publish it manually on Google.',
      icon: FiShare2,
      badge: 'Step 3',
    },
  ];

  return (
    <section id="how-it-works" className="py-14 sm:py-20 lg:py-28 bg-[#F7F5FC]/70 border-y border-[#E9E5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Workflow"
          title="From experience to"
          highlight="expression."
          description="Three simple steps to create a review that sounds like you."
          align="center"
        />

        {/* 3 Step Cards Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLastOnTablet = idx === 2;
            return (
              <div
                key={step.number}
                className={`bg-white rounded-2xl sm:rounded-3xl border border-[#E9E5F0] p-6 sm:p-7 lg:p-8 shadow-card hover:shadow-composer hover:border-[#B69AFB]/60 transition-all duration-300 flex flex-col justify-between group ${
                  isLastOnTablet ? 'sm:col-span-2 lg:col-span-1 max-w-lg sm:mx-auto lg:max-w-none w-full' : ''
                }`}
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <span className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#7041D8]/30 group-hover:text-[#7041D8] transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F0ECF8] border border-[#B69AFB]/30 flex items-center justify-center text-[#7041D8] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="card-heading text-[#29243A] mb-2 sm:mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-[15px] text-[#706B7C] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-6 sm:mt-8 pt-4 border-t border-[#E9E5F0] flex items-center justify-between text-xs text-[#706B7C]">
                  <span className="font-semibold text-[#7041D8]">{step.badge}</span>
                  <span className="text-[11px] text-[#706B7C]">No account required</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
