import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { CheckCircle2, Sliders, Cpu, Eye } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const AboutSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="pt-8 sm:pt-12 pb-16 sm:pb-24 bg-[#101010] border-t border-[#303030] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          index="01"
          eyebrow="CREATOR PROFILE // PERSPECTIVE"
          title="THE PERSON BEHIND THE CONTENT."
          description="Technology is more interesting when it comes with a point of view."
        />

        {/* Editorial Layout: Image + Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Portrait & Creator Philosophy Card */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative bg-[#171717] border border-[#303030] overflow-hidden group shadow-xl">
              <div className="p-3 bg-[#141414] border-b border-[#303030] flex items-center justify-between text-xs font-mono text-[#A5A5A0]">
                <span>ARCHIVE // STUDIO EDITORIAL</span>
                <span className="text-[#D7FF00] font-bold">SHAZ MOHAMED</span>
              </div>

              {/* Reliable Portrait Container */}
              <div className="aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-[#101010] relative">
                <img
                  src="/images/creator/shaz-about.jpg"
                  alt="Shaz Mohamed in studio broadcast environment"
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      '/images/creator/shaz-portrait-02.jpg';
                  }}
                />
              </div>

              <div className="p-6 bg-[#171717] space-y-3">
                <div className="text-xs font-mono text-[#D7FF00] tracking-widest uppercase font-bold">
                  CORE TENET
                </div>
                <blockquote className="text-lg font-display font-medium text-[#F4F1E9] italic border-l-2 border-[#D7FF00] pl-4">
                  "If a gadget is frustrating to use in real life, a five-star spec sheet does not save it."
                </blockquote>
              </div>
            </div>

            {/* Quick Stats/Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#171717] border border-[#303030] hover:border-[#D7FF00]/50 transition-colors">
                <div className="text-xs font-mono text-[#A5A5A0] mb-1">CONTENT FORMAT</div>
                <div className="text-base font-display font-bold text-[#F4F1E9]">VIDEO & REVIEWS</div>
              </div>
              <div className="p-4 bg-[#171717] border border-[#303030] hover:border-[#D7FF00]/50 transition-colors">
                <div className="text-xs font-mono text-[#A5A5A0] mb-1">APPROACH</div>
                <div className="text-base font-display font-bold text-[#D7FF00]">ZERO FILTER</div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Body & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-7">
            <div className="space-y-5 text-base sm:text-lg text-[#A5A5A0] leading-relaxed">
              <p className="text-[#F4F1E9] text-xl sm:text-2xl font-display font-semibold leading-snug">
                Known online as <span className="text-[#D7FF00]">CallMeShazzam</span>, Shaz Mohamed covers smartphones, hardware, audio gear, and the cultural quirks of modern consumer electronics.
              </p>

              <p>
                In an era where tech coverage is frequently crowded by sponsor talking points, scripted embargo reactions, and sterile benchmark graphs, Shazzam delivers candid commentary rooted in actual daily usage, honest ergonomics, and healthy skepticism.
              </p>

              <p>
                The focus isn't just about what a device can do on paper, but whether it truly deserves a place in your pocket, on your desk, or in your routine. It's thoughtful critique delivered with sharp wit and high-production visual craftsmanship.
              </p>
            </div>

            {/* 3 Pillar Cards with Staggered Entrance */}
            <div className="space-y-3.5 pt-3 border-t border-[#303030]">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#D7FF00] mb-2 font-bold">
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
                <div
                  key={idx}
                  className="p-5 bg-[#171717] border border-[#303030] hover:border-[#D7FF00] transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-[#101010] text-[#D7FF00] border border-[#303030] group-hover:border-[#D7FF00] shrink-0 transition-colors">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-display font-bold uppercase text-[#F4F1E9] group-hover:text-[#D7FF00] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#A5A5A0] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Verification Links */}
            <div className="pt-2 flex flex-wrap items-center gap-5 text-xs font-mono text-[#A5A5A0]">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D7FF00]" />
                Public Creator Identity
              </span>
              <span>•</span>
              <a
                href={siteConfig.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F4F1E9] hover:text-[#D7FF00] underline underline-offset-4 transition-colors"
              >
                callmeshazzam.com ↗
              </a>
              <span>•</span>
              <a
                href={siteConfig.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F4F1E9] hover:text-[#D7FF00] underline underline-offset-4 transition-colors"
              >
                @callmeshazzamtech on YouTube ↗
              </a>
              <span>•</span>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F4F1E9] hover:text-[#D7FF00] underline underline-offset-4 transition-colors"
              >
                @callmeshazzam on Instagram ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
