import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Sparkles, Clock } from 'lucide-react';
import { Button } from '../components/Button';
import { contentItems } from '../data/content';
import { VideoModal } from '../components/VideoModal';
import { siteConfig } from '../data/siteConfig';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const FeaturedVideoSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const featuredItem = contentItems.find((item) => item.isFeatured) || contentItems[0];

  return (
    <section id="featured" className="py-16 sm:py-20 bg-[#141414] border-t border-[#303030] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#D7FF4F] uppercase mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEATURED SPOTLIGHT // 03</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-tight text-[#F4F1E9]">
              WORTH YOUR ATTENTION.
            </h2>
          </div>

          <div className="mt-3 sm:mt-0 text-xs font-mono text-[#A5A5A0]">
            CURATED HIGHLIGHT • UNFILTERED VERDICT
          </div>
        </div>

        {/* Cinematic Wide Showcase Frame with Guaranteed Immediate Visibility */}
        <div className="relative bg-[#171717] border border-[#303030] hover:border-[#D7FF4F]/80 transition-colors duration-500 overflow-hidden group shadow-2xl">
          {/* Top Metadata Strip */}
          <div className="px-6 py-3 bg-[#101010] border-b border-[#303030] flex flex-wrap items-center justify-between text-xs font-mono text-[#A5A5A0]">
            <div className="flex items-center gap-4">
              <span className="text-[#D7FF4F] font-semibold tracking-wider">
                PRIMARY EPISODE
              </span>
              <span>//</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D7FF4F]" />
                {featuredItem.duration} RUNTIME
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 bg-[#171717] border border-[#303030] text-[#D7FF4F]">
                4K MASTER
              </span>
            </div>
          </div>

          {/* Cinematic Poster Area */}
          <div
            onClick={() => setModalOpen(true)}
            className="relative aspect-video sm:aspect-[21/9] w-full bg-[#101010] overflow-hidden cursor-pointer"
          >
            <img
              src={featuredItem.thumbnail}
              alt={featuredItem.title}
              className="w-full h-full object-cover filter brightness-85 group-hover:brightness-95 group-hover:scale-105 transition-all duration-700 ease-out will-change-transform"
              onError={(e) => {
                if (featuredItem.fallbackThumbnail) {
                  (e.target as HTMLImageElement).src = featuredItem.fallbackThumbnail;
                }
              }}
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-black/30 to-black/40 pointer-events-none" />

            {/* Center Animated Play Button with Pulse */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-24 h-24 rounded-full bg-[#D7FF4F]/25 animate-ping pointer-events-none" />
                <div className="w-20 h-20 rounded-full bg-[#D7FF4F] text-[#101010] flex items-center justify-center shadow-[0_0_35px_rgba(215,255,79,0.5)] group-hover:scale-110 active:scale-95 transition-transform duration-300 cursor-pointer">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </div>
            </div>

            {/* Bottom Floating Title */}
            <div className="absolute bottom-6 left-6 right-6 hidden sm:block pointer-events-none">
              <span className="inline-block px-3 py-1 bg-[#101010]/90 text-[#D7FF4F] font-mono text-xs uppercase tracking-wider mb-2 border border-[#303030]">
                {featuredItem.category}
              </span>
              <h3 className="text-2xl lg:text-3xl font-display font-bold uppercase text-[#F4F1E9] tracking-tight max-w-3xl drop-shadow-md">
                {featuredItem.title}
              </h3>
            </div>
          </div>

          {/* Content Panel Below Video */}
          <div className="p-6 sm:p-10 bg-[#171717] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="sm:hidden">
                <span className="inline-block px-2.5 py-1 bg-[#101010] text-[#D7FF4F] font-mono text-[11px] uppercase tracking-wider mb-2 border border-[#303030]">
                  {featuredItem.category}
                </span>
                <h3 className="text-xl font-display font-bold uppercase text-[#F4F1E9]">
                  {featuredItem.title}
                </h3>
              </div>

              <p className="text-base sm:text-lg text-[#F4F1E9] font-medium leading-snug">
                {featuredItem.subtitle}
              </p>

              <p className="text-sm sm:text-base text-[#A5A5A0] leading-relaxed">
                {featuredItem.summary}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {featuredItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 bg-[#101010] text-[#A5A5A0] border border-[#303030]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Action Column */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center items-stretch lg:border-l lg:border-[#303030] lg:pl-8">
              <Button
                variant="primary"
                size="lg"
                icon="arrow-up-right"
                onClick={() => setModalOpen(true)}
              >
                WATCH VIDEO
              </Button>

              <Button
                href={siteConfig.youtubeUrl}
                target="_blank"
                variant="secondary"
                size="md"
                icon="arrow-up-right"
              >
                OPEN CHANNEL
              </Button>

              <div className="text-[11px] font-mono text-[#A5A5A0] text-center pt-1">
                Authentic CallMeShazzam release
              </div>
            </div>
          </div>
        </div>

        {/* Modal Preview with Official YouTube Embed */}
        <VideoModal item={modalOpen ? featuredItem : null} onClose={() => setModalOpen(false)} />
      </div>
    </section>
  );
};
