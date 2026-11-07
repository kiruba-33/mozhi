import React, { useEffect, useRef } from 'react';
import { FiArrowRight, FiCheckCircle, FiShield } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';
import Button from '../ui/Button';
import ReviewComposer from '../review/ReviewComposer';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const leftContentRef = useRef(null);
  const composerContainerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Subtle upward reveal for hero left content
      gsap.from(leftContentRef.current?.children || [], {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      });

      // Subtle entrance for composer
      if (composerContainerRef.current) {
        gsap.from(composerContainerRef.current, {
          opacity: 0,
          y: 24,
          scale: 0.98,
          duration: 0.85,
          delay: 0.2,
          ease: 'power2.out',
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleCreateReview = () => {
    const composer = document.querySelector('#hero-composer');
    if (composer) {
      const navHeight = 72;
      const elementPosition = composer.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setTimeout(() => {
        const textarea = composer.querySelector('textarea');
        if (textarea) textarea.focus();
      }, 400);
    }
  };

  const handleExploreBusiness = () => {
    const bizSection = document.querySelector('#businesses');
    if (bizSection) {
      const navHeight = 72;
      const elementPosition = bizSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative pt-6 sm:pt-10 lg:pt-16 pb-12 sm:pb-20 lg:pb-24 overflow-hidden bg-white"
    >
      {/* Background ambient radial glow */}
      <div
        className="absolute top-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#F0ECF8]/60 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 items-start">
          
          {/* LEFT CONTENT (Stacked on Mobile/Tablet, 5 cols on Laptop/Desktop) */}
          <div
            ref={leftContentRef}
            className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left max-w-2xl mx-auto lg:mx-0 lg:max-w-none pt-2 sm:pt-4"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase bg-[#F0ECF8] text-[#7041D8] border border-[#B69AFB]/30 w-fit mx-auto lg:mx-0 mb-4 sm:mb-5">
              <HiSparkles className="w-3.5 h-3.5 text-[#7041D8]" />
              <span>AI-POWERED REVIEW ASSISTANT</span>
            </div>

            {/* Headline with highlighted words */}
            <h1 className="hero-heading text-[#29243A] mb-4 sm:mb-5">
              Your experience{' '}
              <span className="text-[#7041D8] block sm:inline">
                deserves better words.
              </span>
            </h1>

            {/* Description */}
            <p className="body-regular text-[#706B7C] mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
              Share your genuine experience. MOZHI helps turn your thoughts into clear, natural Google reviews that sound like you.
            </p>

            {/* Primary & Secondary CTA: Full-width on mobile, auto on tablet & desktop */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-3.5 mb-5 sm:mb-6">
              <Button
                variant="primary"
                size="lg"
                onClick={handleCreateReview}
                icon={FiArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto justify-center shadow-md shadow-[#7041D8]/20"
              >
                Create Your Review
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={handleExploreBusiness}
                className="w-full sm:w-auto justify-center"
              >
                Explore for Businesses
              </Button>
            </div>

            {/* Small supporting line */}
            <p className="text-xs sm:text-[13px] font-medium text-[#706B7C] tracking-wide mb-6">
              Your experience. Your words. Your decision.
            </p>

            {/* Key trust bullets */}
            <div className="pt-5 sm:pt-6 border-t border-[#E9E5F0] flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 sm:gap-x-6 text-xs text-[#706B7C]">
              <span className="flex items-center gap-1.5 font-medium">
                <FiCheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                Never posts without your review
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <FiShield className="w-4 h-4 text-[#7041D8] shrink-0" />
                Zero fabricated claims
              </span>
            </div>
          </div>

          {/* RIGHT CONTENT: The Review Composer */}
          <div
            ref={composerContainerRef}
            className="lg:col-span-7 w-full max-w-2xl mx-auto lg:max-w-none lg:pl-4 xl:pl-8"
          >
            <div className="relative w-full">
              {/* Subtle visual accent framing */}
              <div
                className="absolute -inset-1 sm:-inset-1.5 bg-gradient-to-tr from-[#B69AFB]/20 via-[#F0ECF8]/40 to-transparent rounded-[20px] sm:rounded-[24px] blur-sm -z-10"
                aria-hidden="true"
              />
              <ReviewComposer />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
