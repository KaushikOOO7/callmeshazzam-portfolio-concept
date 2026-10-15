import React from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  index?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  index,
  className = '',
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={`mb-8 md:mb-12 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-4xl'} ${className}`}>
        {(eyebrow || index) && (
          <div className={`flex items-center gap-3 mb-3 text-xs tracking-[0.25em] uppercase font-mono text-[#A5A5A0] ${align === 'center' ? 'justify-center' : ''}`}>
            {index && (
              <span className="text-[#D7FF00] font-bold">[{index}]</span>
            )}
            {eyebrow && <span>{eyebrow}</span>}
            <div className="h-px w-8 bg-[#303030]" />
          </div>
        )}

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display uppercase tracking-tight text-[#F4F1E9] leading-[1.05]">
          {title}
        </h2>

        {description && (
          <p className="mt-3 text-base sm:text-lg text-[#A5A5A0] font-normal leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`mb-6 sm:mb-8 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-4xl'} ${className}`}>
      {(eyebrow || index) && (
        <div
          className={`flex items-center gap-3 mb-2.5 text-xs tracking-[0.25em] uppercase font-mono text-[#A5A5A0] ${align === 'center' ? 'justify-center' : ''}`}
        >
          {index && (
            <span className="text-[#D7FF00] font-bold">[{index}]</span>
          )}
          {eyebrow && <span>{eyebrow}</span>}
          <div className="h-px w-8 bg-[#303030]" />
        </div>
      )}

      {/* Upward Masked Headline with Guaranteed Immediate Visibility */}
      <div className="py-0.5">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display uppercase tracking-tight text-[#F4F1E9] leading-[1.05]">
          {title}
        </h2>
      </div>

      {description && (
        <p className="mt-2 text-base sm:text-lg text-[#A5A5A0] font-normal leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
