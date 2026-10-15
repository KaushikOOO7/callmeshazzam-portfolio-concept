import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const StatementSection: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // +-10px drift
    setMouseOffset({ x });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setMouseOffset({ x: 0 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="py-28 sm:py-40 bg-[#101010] border-t border-[#303030] relative overflow-hidden select-none"
    >
      {/* Background radial accent glow */}
      <div
        className={`absolute inset-0 bg-radial from-[#D7FF4F]/10 via-transparent to-transparent pointer-events-none transition-opacity duration-700 ${
          hovered ? 'opacity-100' : 'opacity-40'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Micro Eyebrow */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between border-b border-[#303030] pb-4 mb-10 text-xs font-mono text-[#A5A5A0]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D7FF4F]" />
            <span>EDITORIAL MANIFESTO // 04</span>
          </div>
          <span className="text-[#D7FF4F]">PHILOSOPHY</span>
        </motion.div>

        {/* Oversized Signature Typography with Masked Scroll Reveal & Drift */}
        <div className="space-y-2 sm:space-y-4 text-center sm:text-left py-4">
          <div className="overflow-hidden py-1">
            <motion.h2
              initial={prefersReducedMotion ? false : { y: '105%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{
                transform: `translateX(${mouseOffset.x * 0.6}px)`,
                transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-[#F4F1E9] leading-[0.88] hover:text-[#D7FF4F] transition-colors duration-300"
            >
              LESS NOISE.
            </motion.h2>
          </div>

          <div className="overflow-hidden py-1">
            <motion.h2
              initial={prefersReducedMotion ? false : { y: '105%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                transform: `translateX(${-mouseOffset.x * 0.6}px)`,
                transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-transparent leading-[0.88] text-stroke hover:text-[#F4F1E9] transition-all duration-300"
            >
              MORE SIGNAL.
            </motion.h2>
          </div>
        </div>

        {/* Editorial Body Split */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="mt-14 pt-10 border-t border-[#303030] grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
        >
          <div className="md:col-span-4">
            <span className="text-xs font-mono tracking-[0.25em] text-[#D7FF4F] uppercase block mb-2">
              WHY IT MATTERS
            </span>
            <div className="text-lg font-display font-bold uppercase text-[#F4F1E9]">
              THE INFLUENCER ECHO CHAMBER HAS FAILED AUDIENCES.
            </div>
          </div>

          <div className="md:col-span-8 space-y-4 text-base sm:text-lg text-[#A5A5A0] leading-relaxed">
            <p>
              We live in a world flooded with recycled press releases, staged unboxings, and influencers scared to lose review units. The result? Everyone sounds identical.
            </p>
            <p>
              CallMeShazzam was built on a different contract: look at the hardware that touches our lives every single day, test it with unapologetic rigor, call out anti-consumer behavior, and deliver opinions with craft, wit, and unmistakable energy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
