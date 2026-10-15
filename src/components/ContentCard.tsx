import React from 'react';
import { ArrowUpRight, Play, Clock } from 'lucide-react';
import { ContentItem } from '../types';

interface ContentCardProps {
  item: ContentItem;
  onSelect: (item: ContentItem) => void;
  className?: string;
}

export const ContentCard: React.FC<ContentCardProps> = ({ item, onSelect, className = '' }) => {
  const isWide = item.aspect === 'wide';
  const isTall = item.aspect === 'tall';

  return (
    <article
      onClick={() => onSelect(item)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(item);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View content: ${item.title}`}
      className={`group relative flex flex-col justify-between overflow-hidden bg-[#171717] border border-[#303030] hover:border-[#D7FF4F] transition-all duration-500 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7FF4F] ${className}`}
    >
      {/* Top Media Container */}
      <div
        className={`relative w-full overflow-hidden bg-[#101010] ${
          isWide ? 'aspect-[16/9] sm:aspect-[21/9]' : isTall ? 'aspect-[4/5]' : 'aspect-[16/10]'
        }`}
      >
        <img
          src={item.thumbnail}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
          onError={(e) => {
            if (item.fallbackThumbnail) {
              (e.target as HTMLImageElement).src = item.fallbackThumbnail;
            }
          }}
        />

        {/* Ambient Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

        {/* Play Icon Tag */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#101010]/80 backdrop-blur border border-[#303030] flex items-center justify-center text-[#F4F1E9] group-hover:bg-[#D7FF4F] group-hover:text-[#101010] group-hover:border-[#D7FF4F] transition-all duration-300">
          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
        </div>

        {/* Badges on Image */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <span className="px-2.5 py-1 text-[11px] font-mono tracking-widest uppercase bg-[#101010]/90 text-[#D7FF4F] border border-[#303030]">
            {item.category}
          </span>
          <span className="px-2 py-1 text-[11px] font-mono text-[#A5A5A0] bg-[#101010]/90 border border-[#303030] flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#A5A5A0]" />
            {item.duration}
          </span>
        </div>
      </div>

      {/* Content Text Body */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-[#A5A5A0] mb-2 tracking-wider">
            <span>{item.date}</span>
            <span className="text-[#D7FF4F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
              PREVIEW <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-[#F4F1E9] group-hover:text-[#D7FF4F] transition-colors duration-300 leading-snug">
            {item.title}
          </h3>

          <p className="mt-2.5 text-sm text-[#A5A5A0] line-clamp-2 leading-relaxed">
            {item.subtitle}
          </p>
        </div>

        {/* Bottom tags */}
        <div className="mt-6 pt-4 border-t border-[#303030]/60 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {item.tags.slice(0, 2).map((t) => (
              <span key={t} className="text-[11px] font-mono text-[#A5A5A0]">
                #{t}
              </span>
            ))}
          </div>
          <span className="text-xs font-mono font-medium text-[#F4F1E9] group-hover:text-[#D7FF4F] transition-colors flex items-center gap-1">
            VIEW DETAILS
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
};
