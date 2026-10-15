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
      <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-4xl'} ${className}`}>
        {(eyebrow || index) && (
          <div className={`flex items-center gap-3 mb-4 text-xs tracking-[0.25em] uppercase font-mono text-[#A5A5A0] ${align === 'center' ? 'justify-center' : ''}`}>
            {index && (
              <span className="text-[#D7FF4F] font-bold">[{index}]</span>
            )}
            {eyebrow && <span>{eyebrow}</span>}
            <div className="h-px w-8 bg-[#303030]" />
          </div>
        )}

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display uppercase tracking-tight text-[#F4F1E9] leading-[1.05]">
          {title}
        </h2>

        {description && (
          <p className="mt-4 text-base sm:text-lg text-[#A5A5A0] font-normal leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-4xl'} ${className}`}>
      {(eyebrow || index) && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`flex items-center gap-3 mb-4 text-xs tracking-[0.25em] uppercase font-mono text-[#A5A5A0] ${align === 'center' ? 'justify-center' : ''}`}
        >
          {index && (
            <span className="text-[#D7FF4F] font-bold">[{index}]</span>
          )}
          {eyebrow && <span>{eyebrow}</span>}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="h-px w-8 bg-[#303030] origin-left"
          />
        </motion.div>
      )}

      {/* Upward Masked Headline Reveal */}
      <div className="overflow-hidden py-1">
        <motion.h2
          initial={{ y: '105%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display uppercase tracking-tight text-[#F4F1E9] leading-[1.05]"
        >
          {title}
        </motion.h2>
      </div>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
          className="mt-4 text-base sm:text-lg text-[#A5A5A0] font-normal leading-relaxed max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
