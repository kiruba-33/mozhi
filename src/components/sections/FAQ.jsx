import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What is MOZHI?',
      answer:
        'MOZHI is an AI-powered Google Review Generator. It is designed to help customers turn genuine, unorganized thoughts into clear, natural, and well-written review drafts. MOZHI is not a generic AI chatbot, translation tool, or generic content generator—it is purpose-built to solve the friction of articulating authentic customer reviews.',
    },
    {
      question: 'Does MOZHI automatically post Google reviews?',
      answer:
        'No. MOZHI does not automatically post reviews to Google, nor does it guarantee Google review publication. Google requires reviews to be submitted manually by authenticated users under their personal Google accounts to protect platform integrity and prevent spam. MOZHI prepares your draft, which you can easily copy and paste into Google with a single click.',
    },
    {
      question: 'Can I edit the generated review?',
      answer:
        'Yes, absolutely. You retain complete ownership and control over your review. You can edit every sentence, add specific details, change the tone, or rephrase anything before copying it to your clipboard. The draft is purely your starting point.',
    },
    {
      question: 'Can I write a negative or mixed review?',
      answer:
        'Yes. Authentic reviews include both praise and constructive criticism. MOZHI preserves your genuine sentiment—if you had a mixed or negative experience, MOZHI helps express your thoughts objectively and constructively without sugarcoating or altering your true experience.',
    },
    {
      question: 'Can I use voice input?',
      answer:
        'Voice input is currently in development for Phase 2. Once connected, you will be able to press the microphone button, dictate your experience hands-free, and let speech-to-text transcribe your words directly into the composer.',
    },
    {
      question: 'How do businesses create QR codes?',
      answer:
        'Businesses will be able to connect their official Google Maps link or Google Place ID in the MOZHI Business Portal. MOZHI automatically creates a branded review card and vector QR code that customers can scan with any smartphone camera to open the review dialog instantly.',
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 lg:py-28 bg-[#F7F5FC]/70 border-t border-[#E9E5F0] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Questions & Answers"
          title="Frequently asked"
          highlight="questions."
          description="Honest, transparent answers about how MOZHI works, Google compliance, and user control."
          align="center"
        />

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={faq.question}
                className={`bg-white rounded-xl sm:rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#B69AFB] shadow-card'
                    : 'border-[#E9E5F0] hover:border-[#D5CDE8]'
                }`}
              >
                <button
                  id={headerId}
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-3 sm:gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7041D8] focus-visible:ring-inset min-h-[52px] touch-manipulation"
                >
                  <span className="font-heading text-sm sm:text-base md:text-lg font-bold text-[#29243A]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#7041D8] text-white rotate-180'
                        : 'bg-[#F0ECF8] text-[#7041D8]'
                    }`}
                  >
                    <FiChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1 text-xs sm:text-sm md:text-[15px] text-[#706B7C] leading-relaxed border-t border-[#E9E5F0]/60 animate-fade-in break-words"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
