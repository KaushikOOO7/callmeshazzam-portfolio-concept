import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { CheckCircle2, Sliders, Cpu, Eye } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const AboutSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#101010] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          index="01"
          eyebrow="CREATOR PROFILE // PERSPECTIVE"
          title="THE PERSON BEHIND THE CONTENT."
          description="Technology is more interesting when it comes with a point of view."
        />

        {/* Editorial Layout: Image + Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Creator Philosophy Card */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#171717] border border-[#303030] overflow-hidden group shadow-xl"
            >
              <div className="p-3 bg-[#141414] border-b border-[#303030] flex items-center justify-between text-xs font-mono text-[#A5A5A0]">
                <span>ARCHIVE // STUDIO EDITORIAL</span>
                <span className="text-[#D7FF4F]">SHAZ MOHAMED</span>
              </div>

              {/* Cinematic Clip-Path Revealed Portrait Container */}
              <motion.div
                initial={
                  prefersReducedMotion
                    ? false
                    : { clipPath: 'inset(100% 0% 0% 0%)' }
                }
                whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className="aspect-[3/4] overflow-hidden bg-[#101010]"
              >
                <motion.img
                  initial={prefersReducedMotion ? false : { scale: 1.12 }}
                  whileInView={{ scale: 1.0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  src="/images/creator/shaz-about.jpg"
                  alt="Shaz Mohamed in studio broadcast environment"
                  className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      '/images/creator/shaz-portrait-02.jpg';
                  }}
                />
              </motion.div>

              <div className="p-6 bg-[#171717] space-y-3">
                <div className="text-xs font-mono text-[#D7FF4F] tracking-widest uppercase">
                  CORE TENET
                </div>
                <blockquote className="text-lg font-display font-medium text-[#F4F1E9] italic border-l-2 border-[#D7FF4F] pl-4">
                  "If a gadget is frustrating to use in real life, a five-star spec sheet does not save it."
                </blockquote>
              </div>
            </motion.div>

            {/* Quick Stats/Badges */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-4 bg-[#171717] border border-[#303030] hover:border-[#D7FF4F]/50 transition-colors">
                <div className="text-xs font-mono text-[#A5A5A0] mb-1">CONTENT FORMAT</div>
                <div className="text-base font-display font-bold text-[#F4F1E9]">VIDEO & REVIEWS</div>
              </div>
              <div className="p-4 bg-[#171717] border border-[#303030] hover:border-[#D7FF4F]/50 transition-colors">
                <div className="text-xs font-mono text-[#A5A5A0] mb-1">APPROACH</div>
                <div className="text-base font-display font-bold text-[#D7FF4F]">ZERO FILTER</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Body & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="space-y-6 text-base sm:text-lg text-[#A5A5A0] leading-relaxed"
            >
              <p className="text-[#F4F1E9] text-xl sm:text-2xl font-display font-semibold leading-snug">
                Known online as <span className="text-[#D7FF4F]">CallMeShazzam</span>, Shaz Mohamed covers smartphones, hardware, audio gear, and the cultural quirks of modern consumer electronics.
              </p>

              <p>
                In an era where tech coverage is frequently crowded by sponsor talking points, scripted embargo reactions, and sterile benchmark graphs, Shazzam delivers candid commentary rooted in actual daily usage, honest ergonomics, and healthy skepticism.
              </p>

              <p>
                The focus isn't just about what a device can do on paper, but whether it truly deserves a place in your pocket, on your desk, or in your routine. It's thoughtful critique delivered with sharp wit and high-production visual craftsmanship.
              </p>
            </motion.div>

            {/* 3 Pillar Cards with Staggered Entrance */}
            <div className="space-y-4 pt-4 border-t border-[#303030]">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#D7FF4F] mb-2">
                THE 3 PILLARS OF CONTENT
              </div>

              {[
                {
                  icon: <Sliders className="w-5 h-5" />,
                  title: '01 // Real-World Ergonomics Over Synthetic Scores',
                  desc: 'No user interacts with Geekbench scores. We examine thermal throttling, hand feel, button actuation, display tint, and software coherence.',
                },
                {
                  icon: <Eye className="w-5 h-5" />,
                  title: '02 // Unfiltered Critique Without Brand Allegiance',
                  desc: 'Calling out unnecessary price hikes, missing chargers, and gimmick features with no brand favoritism. Praise is earned, not bought.',
                },
                {
                  icon: <Cpu className="w-5 h-5" />,
                  title: '03 // Tech Culture & Visual Storytelling',
                  desc: 'High-production cinematography, crisp pacing, and genuine entertainment. Tech journalism shouldn\'t feel like a spreadsheet.',
                },
              ].map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-5 bg-[#171717] border border-[#303030] hover:border-[#D7FF4F] transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-[#101010] text-[#D7FF4F] border border-[#303030] group-hover:border-[#D7FF4F] shrink-0 transition-colors">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-display font-bold uppercase text-[#F4F1E9] group-hover:text-[#D7FF4F] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#A5A5A0] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Direct Verification Links */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-[#A5A5A0]"
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D7FF4F]" />
                Public Creator Identity
              </span>
              <span>•</span>
              <a
                href={siteConfig.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F4F1E9] hover:text-[#D7FF4F] underline underline-offset-4 transition-colors"
              >
                callmeshazzam.com ↗
              </a>
              <span>•</span>
              <a
                href={siteConfig.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F4F1E9] hover:text-[#D7FF4F] underline underline-offset-4 transition-colors"
              >
                @callmeshazzamtech on YouTube ↗
              </a>
              <span>•</span>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F4F1E9] hover:text-[#D7FF4F] underline underline-offset-4 transition-colors"
              >
                @callmeshazzam on Instagram ↗
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
