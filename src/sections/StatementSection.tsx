import React, { useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const StatementSection: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
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
      aria-label="Editorial manifesto and creator philosophy"
      className="py-14 sm:py-18 bg-[#101010] border-t border-[#303030] relative overflow-hidden select-none"
    >
      {/* Background radial accent glow */}
      <div
        className={`absolute inset-0 bg-radial from-[#D7FF00]/10 via-transparent to-transparent pointer-events-none transition-opacity duration-700 ${
          hovered ? 'opacity-100' : 'opacity-35'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Micro Eyebrow */}
        <div className="flex items-center justify-between border-b border-[#303030] pb-3 mb-6 text-xs font-mono text-[#A5A5A0]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D7FF00] animate-pulse" />
            <span className="tracking-widest uppercase">EDITORIAL MANIFESTO // 04</span>
          </div>
          <span className="text-[#D7FF00] font-bold tracking-wider">CREATOR PHILOSOPHY</span>
        </div>

        {/* Oversized Signature Typography with Guaranteed Immediate Visibility */}
        <div
          className="space-y-1 sm:space-y-2 text-center sm:text-left py-2 transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${mouseOffset.x * 0.4}px, 0, 0)`,
          }}
        >
          <div className="py-0.5 overflow-hidden">
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-[#F4F1E9] leading-[0.9] hover:text-[#D7FF00] transition-colors duration-300 block">
              LESS NOISE.
            </h2>
          </div>

          <div className="py-0.5 overflow-hidden">
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.9] text-[#D7FF00] hover:text-[#F4F1E9] transition-colors duration-300 block">
              MORE SIGNAL.
            </h2>
          </div>
        </div>

        {/* Editorial Body Split with Authentic Creator Banner Card */}
        <div className="mt-8 pt-8 border-t border-[#303030] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Why It Matters & Core Thesis */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono tracking-[0.25em] text-[#D7FF00] uppercase block font-bold">
              WHY IT MATTERS
            </span>
            <div className="text-xl sm:text-2xl font-display font-bold uppercase text-[#F4F1E9] leading-snug">
              THE INFLUENCER ECHO CHAMBER HAS FAILED AUDIENCES.
            </div>
            <p className="text-sm font-mono text-[#A5A5A0] pt-1">
              Independent evaluations without scripted embargo reactions or sponsor scripts.
            </p>
          </div>

          {/* Center Column: Detailed Editorial Narrative */}
          <div className="lg:col-span-5 space-y-4 text-base sm:text-lg text-[#A5A5A0] leading-relaxed">
            <p>
              We live in a tech ecosystem flooded with recycled press releases, staged unboxings, and creators hesitant to lose review units. The result? Every review sounds identical.
            </p>
            <p>
              CallMeShazzam operates on a straightforward contract: look at the hardware that touches our lives every single day, test it with unapologetic rigor, call out anti-consumer behavior, and deliver opinions with craft, wit, and unmistakable energy.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#F4F1E9]">
              <span className="flex items-center gap-1.5 text-[#D7FF00]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                100% UNBIASED
              </span>
              <span>•</span>
              <span>KOCHI / UAE BASED</span>
              <span>•</span>
              <span className="text-[#A5A5A0]">2.5M+ SUBSCRIBERS</span>
            </div>
          </div>

          {/* Right Column: Authentic CallMeShazzam Hub Banner Visual */}
          <div className="lg:col-span-3">
            <a
              href={siteConfig.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative bg-[#171717] border border-[#303030] hover:border-[#D7FF00] overflow-hidden transition-all duration-300 shadow-xl"
            >
              <div className="p-2.5 bg-[#141414] border-b border-[#303030] flex items-center justify-between text-[10px] font-mono text-[#A5A5A0]">
                <span>OFFICIAL HUB</span>
                <span className="text-[#D7FF00] flex items-center gap-1">
                  CALLMESHAZZAM.COM
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#101010]">
                <img
                  src="/images/creator/shaz-banner.png"
                  alt="Official CallMeShazzam creator banner and branding"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/creator/shaz-channel-banner.jpg';
                  }}
                />
              </div>
              <div className="p-3 text-[11px] font-mono text-[#A5A5A0] group-hover:text-[#F4F1E9] transition-colors">
                TEA × TECH × SARCASM • OFFICIAL PLATFORM
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
