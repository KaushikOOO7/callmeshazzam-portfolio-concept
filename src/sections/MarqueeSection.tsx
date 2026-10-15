import React from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const tickerWords = [
  'TEA',
  '×',
  'TECH',
  '×',
  'SARCASM',
  '×',
  'ENTERTAINMENT',
  '×',
  'OPINIONS',
  '×',
  'GADGETS',
  '×',
  'REPEAT',
  '×',
];

export const MarqueeSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Creator brand philosophy marquee"
      className="relative overflow-hidden py-7 sm:py-9 bg-[#171717] border-y border-[#303030] select-none"
    >
      {/* Edge gradient fades for seamless visual bounds */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#171717] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#171717] to-transparent z-10 pointer-events-none" />

      {prefersReducedMotion ? (
        <div className="flex flex-wrap items-center justify-center gap-4 text-center px-4">
          {tickerWords.map((word, idx) => (
            <span
              key={idx}
              className={`font-display font-extrabold text-xl sm:text-2xl md:text-3xl uppercase tracking-wider ${
                word === '×' ? 'text-[#D7FF00]' : 'text-[#F4F1E9]'
              }`}
            >
              {word}
            </span>
          ))}
        </div>
      ) : (
        <div className="flex w-max animate-shazzam-ticker hover:[animation-play-state:paused]">
          {/* Repeating identical tracks to guarantee perfectly seamless, jump-free loop */}
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              className="flex items-center shrink-0 space-x-6 sm:space-x-10 pr-6 sm:pr-10"
              aria-hidden={copyIndex > 0}
            >
              {tickerWords.map((word, idx) => (
                <span
                  key={`${copyIndex}-${idx}`}
                  className={`font-display font-black text-2xl sm:text-3xl md:text-5xl uppercase tracking-widest transition-colors duration-300 ${
                    word === '×'
                      ? 'text-[#D7FF00] font-mono text-2xl sm:text-4xl'
                      : 'text-[#F4F1E9] hover:text-[#D7FF00]'
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* GPU Accelerated Keyframes */}
      <style>{`
        @keyframes shazzamTicker {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-shazzam-ticker {
          display: flex;
          will-change: transform;
          animation: shazzamTicker 32s linear infinite;
        }
      `}</style>
    </section>
  );
};
