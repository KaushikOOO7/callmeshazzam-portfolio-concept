import React, { useEffect, useRef, useState } from 'react';
import { verifiedSocialStats, SocialStat } from '../data/socialStats';
import { ArrowUpRight, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface CounterItemProps {
  stat: SocialStat;
  index: number;
  hasTriggered: boolean;
  prefersReducedMotion: boolean;
}

const CounterItem: React.FC<CounterItemProps> = ({
  stat,
  index,
  hasTriggered,
  prefersReducedMotion,
}) => {
  const [currentValue, setCurrentValue] = useState<number>(() =>
    prefersReducedMotion ? stat.numericValue : 0
  );
  const [isSettled, setIsSettled] = useState<boolean>(() => prefersReducedMotion);

  useEffect(() => {
    if (!hasTriggered) return;
    if (prefersReducedMotion) {
      setCurrentValue(stat.numericValue);
      setIsSettled(true);
      return;
    }

    const duration = 1800; // 1.8s smooth duration
    const startTime = performance.now();
    let animationFrameId: number;

    const easeOutQuad = (t: number): number => t * (2 - t);

    const updateCounter = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);
      const interpolated = easedProgress * stat.numericValue;

      setCurrentValue(interpolated);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setCurrentValue(stat.numericValue);
        setIsSettled(true);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasTriggered, stat.numericValue, prefersReducedMotion]);

  const formattedDisplay = () => {
    if (stat.decimals > 0) {
      return currentValue.toFixed(stat.decimals);
    }
    return Math.floor(currentValue).toLocaleString();
  };

  return (
    <a
      href={stat.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-6 sm:p-8 bg-[#171717] hover:bg-[#151515] border-b sm:border-b-0 sm:border-r last:border-b-0 last:border-r-0 border-[#303030] hover:border-[#D7FF00]/80 transition-all duration-500 flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7FF00] overflow-hidden"
      aria-label={`${stat.metricLabel}: ${stat.numericValue}${stat.displaySuffix} - visit ${stat.platform} profile`}
    >
      {/* Top Accent line reveal */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-[#D7FF00] transition-transform duration-700 origin-left ${
          isSettled ? 'scale-x-100' : 'scale-x-0'
        }`}
      />

      {/* Header index & platform tag */}
      <div className="flex items-center justify-between text-xs font-mono text-[#A5A5A0] mb-6">
        <span className="flex items-center gap-1.5">
          <span className="text-[#D7FF00] font-bold">0{index + 1}.</span>
          <span className="uppercase tracking-wider">{stat.platform}</span>
        </span>
        <ArrowUpRight className="w-4 h-4 text-[#A5A5A0] group-hover:text-[#D7FF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
      </div>

      {/* Main Counter Display */}
      <div className="my-auto py-2">
        <div className="flex items-baseline">
          <span className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#F4F1E9] group-hover:text-[#D7FF00] transition-colors duration-300">
            {formattedDisplay()}
          </span>
          <span className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#D7FF00] ml-1">
            {stat.displaySuffix}
          </span>
        </div>

        {/* Small uppercase label */}
        <div className="mt-3 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#F4F1E9] font-semibold">
          {stat.metricLabel}
        </div>
      </div>

      {/* Description & verification cue */}
      <div className="mt-6 pt-4 border-t border-[#303030]/60 text-xs text-[#A5A5A0] leading-relaxed">
        <p className="line-clamp-2">{stat.description}</p>
        <div className="mt-2 text-[10px] font-mono text-[#777] flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-[#D7FF00]" />
          <span>VERIFIED AUDIENCE</span>
        </div>
      </div>
    </a>
  );
};

export const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasTriggered(true);
          observer.disconnect(); // Trigger strictly ONCE
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      aria-label="Verified creator statistics and audience reach"
      className="relative bg-[#101010] border-y border-[#303030] py-0 select-none overflow-hidden"
    >
      {/* Top Banner Tag */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono border-b border-[#303030]">
        <div className="flex items-center gap-2 text-[#D7FF00]">
          <TrendingUp className="w-4 h-4" />
          <span className="font-bold tracking-widest uppercase">
            AUDIENCE IMPACT // PUBLIC METRICS
          </span>
        </div>
        <div className="flex items-center gap-3 text-[#A5A5A0]">
          <span>VERIFIED CREATOR METRICS</span>
          <span>•</span>
          <span className="text-[#F4F1E9]">CALLMESHAZZAM TECH ECOSYSTEM</span>
        </div>
      </div>

      {/* Four Horizontal Statistics Track */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-x border-[#303030]">
          {verifiedSocialStats.map((stat, idx) => (
            <CounterItem
              key={stat.id}
              stat={stat}
              index={idx}
              hasTriggered={hasTriggered}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>

      {/* Sub-footer disclaimer strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 bg-[#141414] border-t border-[#303030] flex flex-wrap items-center justify-between text-[11px] font-mono text-[#777]">
        <span>METRICS SOURCED FROM PUBLIC CHANNELS (OCTOBER 2026)</span>
        <span className="text-[#A5A5A0]">YOUTUBE: @CALLMESHAZZAMTECH • INSTAGRAM: @CALLMESHAZZAM</span>
      </div>
    </section>
  );
};
