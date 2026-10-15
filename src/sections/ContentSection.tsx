import React, { useState, useRef, useEffect } from 'react';
import { contentItems, categories, CategoryType } from '../data/content';
import { ContentItem } from '../types';
import { VideoModal } from '../components/VideoModal';
import { Button } from '../components/Button';
import { siteConfig } from '../data/siteConfig';
import {
  Filter,
  Youtube,
  ChevronLeft,
  ChevronRight,
  Play,
  Clock,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const ContentSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
  const [selectedVideo, setSelectedVideo] = useState<ContentItem | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const filteredItems =
    activeCategory === 'All'
      ? contentItems
      : contentItems.filter((item) => item.category === activeCategory);

  // Update track scroll progress indicator
  const handleRailScroll = () => {
    if (!railRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = railRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(Math.min(Math.max(scrollLeft / maxScroll, 0), 1));
    } else {
      setScrollProgress(0);
    }
  };

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleRailScroll, { passive: true });
    handleRailScroll();
    return () => el.removeEventListener('scroll', handleRailScroll);
  }, [filteredItems]);

  const scrollRail = (direction: 'left' | 'right') => {
    if (!railRef.current) return;
    const scrollAmount = Math.min(window.innerWidth * 0.75, 480);
    railRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="content"
      aria-label="The Latest Episodes horizontal video showcase"
      className="pt-16 sm:pt-20 pb-10 sm:pb-12 bg-[#101010] border-t border-[#303030] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        {/* Section Header with Eyebrow, Title & Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#303030]/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#D7FF00] uppercase mb-2.5">
              <span className="w-2 h-2 rounded-full bg-[#D7FF00] animate-pulse" />
              <span>CONTENT ARCHIVE // 02</span>
              <span>—</span>
              <span className="text-[#A5A5A0]">TECH. OPINIONS. ENTERTAINMENT.</span>
            </div>

            <div className="py-0.5">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display uppercase tracking-tight text-[#F4F1E9] leading-tight">
                THE LATEST EPISODES
              </h2>
            </div>
            <p className="mt-2 text-sm sm:text-base text-[#A5A5A0] font-normal max-w-2xl">
              Weekly smartphone teardowns, camera shootouts, and unfiltered tech commentary from the studio.
            </p>
          </div>

          {/* Navigation Controls: Carousel Arrows & Episode Counter */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[#A5A5A0] mr-2">
              <span className="text-[#D7FF00] font-bold">{filteredItems.length}</span>
              <span>SHOWCASED EPISODES</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollRail('left')}
                className="p-3 bg-[#171717] hover:bg-[#D7FF00] text-[#F4F1E9] hover:text-[#101010] border border-[#303030] hover:border-[#D7FF00] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7FF00]"
                aria-label="Scroll video rail left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollRail('right')}
                className="p-3 bg-[#171717] hover:bg-[#D7FF00] text-[#F4F1E9] hover:text-[#101010] border border-[#303030] hover:border-[#D7FF00] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7FF00]"
                aria-label="Scroll video rail right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills Bar */}
        <div className="flex items-center justify-between gap-4 flex-wrap pt-4">
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#A5A5A0]">
            <Filter className="w-3.5 h-3.5 text-[#D7FF00]" />
            <span>FILTER BY TOPIC:</span>
          </div>

          <div
            className="flex items-center gap-2 flex-wrap"
            role="tablist"
            aria-label="Episode categories"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCategory(category);
                    if (railRef.current) {
                      railRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`relative text-xs font-mono tracking-wider uppercase px-3 py-1.5 transition-all duration-300 border cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D7FF00] ${
                    isActive
                      ? 'bg-[#D7FF00] text-[#101010] font-bold border-[#D7FF00] shadow-[0_0_15px_rgba(215,255,0,0.25)]'
                      : 'bg-[#171717] text-[#A5A5A0] border-[#303030] hover:border-[#D7FF00] hover:text-[#F4F1E9]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Full-Bleed Horizontal Rail with Custom Snap Scrolling */}
      <div className="relative w-full">
        {/* Edge gradient indicator fades */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#101010] to-transparent z-10 pointer-events-none" />
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#101010] to-transparent z-10 pointer-events-none" />

        <div
          ref={railRef}
          tabIndex={0}
          aria-label="Horizontal video showcase track"
          className="flex items-stretch gap-6 overflow-x-auto scroll-smooth py-3 px-4 sm:px-6 lg:px-12 snap-x snap-mandatory focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D7FF00]"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {filteredItems.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedVideo(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedVideo(item);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Watch video: ${item.title}`}
              className="snap-start shrink-0 w-[290px] sm:w-[380px] md:w-[440px] bg-[#171717] border border-[#303030] hover:border-[#D7FF00] transition-all duration-500 cursor-pointer flex flex-col justify-between group overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7FF00] select-none shadow-xl"
            >
              {/* Top Media Frame with 16:9 Thumbnail & Clip Wipe */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#101010]">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100 will-change-transform"
                  onError={(e) => {
                    if (item.fallbackThumbnail) {
                      (e.target as HTMLImageElement).src = item.fallbackThumbnail;
                    }
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-black/30 opacity-80 group-hover:opacity-50 transition-opacity duration-500" />

                {/* Play Button Indicator with Pulse */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#101010]/85 backdrop-blur border border-[#303030] flex items-center justify-center text-[#F4F1E9] group-hover:bg-[#D7FF00] group-hover:text-[#101010] group-hover:border-[#D7FF00] transition-all duration-300">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>

                {/* Category & Duration Badges */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-2.5 py-1 text-[11px] font-mono tracking-widest uppercase bg-[#101010]/90 text-[#D7FF00] border border-[#303030]">
                    {item.category}
                  </span>
                  <span className="px-2 py-1 text-[11px] font-mono text-[#A5A5A0] bg-[#101010]/90 border border-[#303030] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D7FF00]" />
                    {item.duration}
                  </span>
                </div>
              </div>

              {/* Card Content & Title */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#A5A5A0] mb-2 tracking-wider">
                    <span>{item.date}</span>
                    <span className="text-[#D7FF00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 font-semibold">
                      PLAY EPISODE <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-display uppercase tracking-tight text-[#F4F1E9] group-hover:text-[#D7FF00] transition-colors duration-300 leading-snug line-clamp-2">
                    {item.title}
                  </h3>

                  {item.subtitle && (
                    <p className="mt-2 text-xs sm:text-sm text-[#A5A5A0] line-clamp-2 leading-relaxed">
                      {item.subtitle}
                    </p>
                  )}
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-5 pt-3.5 border-t border-[#303030]/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[11px] font-mono text-[#A5A5A0]">
                        #{t}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono font-medium text-[#F4F1E9] group-hover:text-[#D7FF00] transition-colors flex items-center gap-1">
                    WATCH VIDEO
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Gallery Progress Track Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3">
          <div className="h-[2px] w-full bg-[#202020] overflow-hidden">
            <div
              className="h-full bg-[#D7FF00] transition-all duration-150 ease-out"
              style={{
                width: `${Math.max(15, scrollProgress * 100)}%`,
                transform: `translateX(${scrollProgress * (100 - Math.max(15, scrollProgress * 100))}%)`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Channel Video Direct Link Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        <div className="pt-6 border-t border-[#303030] flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3 text-xs font-mono text-[#A5A5A0]">
            <Youtube className="w-4 h-4 text-[#D7FF00]" />
            <span>2,000+ TECH REVIEWS & BREAKDOWNS ON @CALLMESHAZZAMTECH</span>
          </div>

          <Button
            href={siteConfig.youtubeVideosUrl}
            target="_blank"
            variant="secondary"
            size="lg"
            icon="arrow-up-right"
          >
            VIEW ALL VIDEOS ON YOUTUBE
          </Button>
        </div>
      </div>

      {/* Video Preview Modal */}
      <VideoModal item={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </section>
  );
};
