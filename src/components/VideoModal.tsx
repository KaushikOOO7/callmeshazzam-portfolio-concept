import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Tag, Sparkles } from 'lucide-react';
import { ContentItem } from '../types';
import { Button } from './Button';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface VideoModalProps {
  item: ContentItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ item, onClose }) => {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const embedUrl = `https://www.youtube-nocookie.com/embed/${item.id}?rel=0&modestbranding=1`;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-md"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={
            prefersReducedMotion ? false : { opacity: 0, scale: 0.94, y: 15 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#171717] border border-[#303030] shadow-2xl rounded-none text-[#F4F1E9]"
        >
          {/* Header with Title and Close */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#171717]/95 backdrop-blur border-b border-[#303030]">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-widest bg-[#D7FF4F]/10 text-[#D7FF4F] border border-[#D7FF4F]/30">
                {item.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-[#A5A5A0] font-mono">
                <Clock className="w-3.5 h-3.5" />
                <span>{item.duration}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#A5A5A0] hover:text-[#D7FF4F] hover:bg-[#101010] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D7FF4F]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Official Responsive YouTube Video Embed */}
          <div className="relative aspect-video w-full bg-[#101010] overflow-hidden">
            <iframe
              src={embedUrl}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="w-full h-full border-0"
            />
          </div>

          {/* Content Details & Editorial Analysis */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#A5A5A0] font-mono mb-2">
                <span className="text-[#D7FF4F]">CALLMESHAZZAM TECH</span>
                <span>//</span>
                <span>OFFICIAL EPISODE</span>
              </div>
              <h3
                id="video-modal-title"
                className="text-xl sm:text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-[#F4F1E9] leading-snug"
              >
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="mt-2 text-sm sm:text-base text-[#D7FF4F] font-medium">
                  {item.subtitle}
                </p>
              )}
            </div>

            <p className="text-sm sm:text-base text-[#A5A5A0] leading-relaxed">
              {item.summary}
            </p>

            {/* Key Takeaways */}
            {item.keyTakeaways && item.keyTakeaways.length > 0 && (
              <div className="p-5 bg-[#101010] border border-[#303030]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#D7FF4F] uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Episode Highlights & Key Points</span>
                </div>
                <ul className="space-y-2">
                  {item.keyTakeaways.map((takeaway, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F4F1E9]"
                    >
                      <span className="text-[#D7FF4F] font-mono font-bold mt-0.5">
                        0{idx + 1}.
                      </span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags & Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#303030]">
              <div className="flex flex-wrap items-center gap-2">
                <Tag className="w-3.5 h-3.5 text-[#A5A5A0]" />
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-0.5 bg-[#101010] text-[#A5A5A0] border border-[#303030]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Button
                  href={item.url}
                  target="_blank"
                  variant="primary"
                  size="md"
                  icon="arrow-up-right"
                >
                  Watch on YouTube
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
