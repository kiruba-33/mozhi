import React from 'react';
import {
  FiEdit2,
  FiMic,
  FiCheckSquare,
  FiCopy,
  FiLink2,
  FiGrid,
} from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import FeatureCard from '../ui/FeatureCard';

export default function Features() {
  const featureList = [
    {
      icon: FiEdit2,
      title: 'AI Review Writing',
      description: 'Convert genuine experiences into natural review drafts that accurately reflect your thoughts.',
      tag: 'Core Engine',
    },
    {
      icon: FiMic,
      title: 'Voice Input',
      description: 'Share your experience without typing. Speak naturally and let speech-to-text capture every detail.',
      tag: 'Hands-Free',
    },
    {
      icon: FiCheckSquare,
      title: 'Editable Reviews',
      description: 'Stay in complete control of your final wording. Add, adjust, or remove any sentence before copying.',
      tag: 'Full Control',
    },
    {
      icon: FiCopy,
      title: 'One-Click Copy',
      description: 'Copy your finished review directly to your clipboard, formatted and ready for Google Reviews.',
      tag: 'Instant Export',
    },
    {
      icon: FiLink2,
      title: 'Custom Google Review Links',
      description: 'Help businesses share their review destination easily with short, memorable, and direct links.',
      tag: 'Business Tool',
    },
    {
      icon: FiGrid,
      title: 'QR Code Generation',
      description: 'Create a QR code that directs customers to a business&apos;s Google Review page with a single phone scan.',
      tag: 'Print & Digital',
    },
  ];

  return (
    <section id="features" className="py-14 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Capabilities"
          title="Everything you need to"
          highlight="express your experience."
          description="Built specifically for authentic Google review writing, eliminating the friction of turning thoughts into words."
          align="center"
        />

        {/* 6 Feature Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {featureList.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              tag={item.tag}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
