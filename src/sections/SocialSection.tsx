import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { socialLinks } from '../data/socialLinks';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const SocialSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="socials" className="py-24 sm:py-32 bg-[#171717] border-t border-[#303030]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow="DISTRIBUTION // ECOSYSTEM"
          title="FIND ME OUT THERE."
          description="Explore verified channels for daily insights, video essays, live reactions, and unfiltered commentary."
        />

        {/* Clean Typographic Social Directory */}
        <div className="divide-y divide-[#303030] border-y border-[#303030]">
          {socialLinks.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: 'easeOut',
              }}
              className="group py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 hover:bg-[#121212]/60 px-3 sm:px-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7FF4F] relative"
              aria-label={`${item.name} profile (${item.handle}) - opens in new window`}
            >
              {/* Left Column: Index & Name */}
              <div className="flex items-center gap-6 sm:gap-10">
                <span className="font-mono text-xs sm:text-sm text-[#A5A5A0] group-hover:text-[#D7FF4F] transition-colors">
                  0{index + 1}.
                </span>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold uppercase tracking-tight text-[#F4F1E9] group-hover:text-[#D7FF4F] transition-colors duration-300">
                      {item.name}
                    </h3>
                    {item.verified && (
                      <CheckCircle2 className="w-5 h-5 text-[#D7FF4F] fill-[#D7FF4F]/10 shrink-0" />
                    )}
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-[#A5A5A0] mt-1 group-hover:text-[#F4F1E9] transition-colors">
                    {item.handle}
                  </div>
                </div>
              </div>

              {/* Right Column: Label & Arrow */}
              <div className="flex items-center justify-between md:justify-end gap-6 pl-10 md:pl-0">
                <span className="text-xs sm:text-sm text-[#A5A5A0] max-w-sm hidden sm:inline-block leading-relaxed">
                  {item.label}
                </span>

                <div className="w-10 h-10 sm:w-12 sm:h-12 border border-[#303030] group-hover:border-[#D7FF4F] group-hover:bg-[#D7FF4F] flex items-center justify-center text-[#F4F1E9] group-hover:text-[#101010] transition-all duration-300 shrink-0">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
