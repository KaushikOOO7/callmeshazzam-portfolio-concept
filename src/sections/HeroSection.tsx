import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Radio, ShieldCheck, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { Button } from '../components/Button';
import { siteConfig } from '../data/siteConfig';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const HeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const decorLineRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  const portraitFrameRef = useRef<HTMLDivElement>(null);
  const portraitImgRef = useRef<HTMLImageElement>(null);
  const cornerTopRef = useRef<HTMLDivElement>(null);
  const cornerBottomRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  // Subtle 2D mouse tilt state
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.15,
      });

      // Initial states
      gsap.set(eyebrowRef.current, { y: -15, opacity: 0 });
      gsap.set([line1Ref.current, line2Ref.current, line3Ref.current], {
        yPercent: 110,
        opacity: 0,
      });
      gsap.set(decorLineRef.current, { scaleX: 0, transformOrigin: 'left center' });
      gsap.set(descRef.current, { y: 24, opacity: 0 });
      gsap.set(ctaRef.current?.children || [], { y: 20, opacity: 0 });
      gsap.set(metaRef.current, { y: 15, opacity: 0 });

      // Portrait initial clip
      gsap.set(portraitFrameRef.current, {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        opacity: 0,
      });
      gsap.set(portraitImgRef.current, { scale: 1.18 });
      gsap.set([cornerTopRef.current, cornerBottomRef.current], {
        scale: 0.7,
        opacity: 0,
      });
      gsap.set(scrollCueRef.current, { opacity: 0, y: 10 });

      // Sequence
      // 1. Eyebrow badge
      tl.to(eyebrowRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
      })
        // 2. Masked headline lines staggered
        .to(
          [line1Ref.current, line2Ref.current, line3Ref.current],
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '-=0.35'
        )
        // 3. Portrait clip-path reveal + scale down
        .to(
          portraitFrameRef.current,
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            opacity: 1,
            duration: 1.1,
            ease: 'power3.inOut',
          },
          '-=0.75'
        )
        .to(
          portraitImgRef.current,
          {
            scale: 1.0,
            duration: 1.3,
            ease: 'power2.out',
          },
          '<'
        )
        // 4. Accent line expands
        .to(
          decorLineRef.current,
          {
            scaleX: 1,
            duration: 0.75,
            ease: 'power2.out',
          },
          '-=0.8'
        )
        // 5. Supporting description text
        .to(
          descRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: 'power2.out',
          },
          '-=0.6'
        )
        // 6. Action buttons staggered
        .to(
          ctaRef.current?.children || [],
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.1,
            ease: 'power2.out',
          },
          '-=0.5'
        )
        // 7. Corner frame accents & metadata
        .to(
          [cornerTopRef.current, cornerBottomRef.current],
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'back.out(1.5)',
          },
          '-=0.4'
        )
        .to(
          metaRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          '-=0.3'
        )
        // 8. Scroll cue
        .to(
          scrollCueRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          '-=0.2'
        );
    }, heroRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  // Subtle interactive 2D mouse tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12; // max +-6px
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12; // max +-6px
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const scrollToContent = () => {
    const el = document.getElementById('content');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden bg-[#101010] border-b border-[#303030]"
    >
      {/* Subtle Background Radial & Grid */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D7FF4F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        {/* Two-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div ref={eyebrowRef} className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D7FF4F] animate-pulse" />
              <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#A5A5A0] uppercase">
                {siteConfig.eyebrow}
              </span>
            </div>

            {/* Deliberate 3-Line Masked Headline */}
            <h1 className="font-display font-extrabold tracking-tight uppercase text-[#F4F1E9] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] leading-[0.92] select-none">
              <div className="overflow-hidden py-0.5">
                <span ref={line1Ref} className="block will-change-transform">
                  TECH.
                </span>
              </div>
              <div className="overflow-hidden py-0.5">
                <span
                  ref={line2Ref}
                  className="block text-[#D7FF4F] will-change-transform"
                >
                  WITHOUT
                </span>
              </div>
              <div className="overflow-hidden py-0.5">
                <span ref={line3Ref} className="block will-change-transform">
                  THE FILTER.
                </span>
              </div>
            </h1>

            {/* Horizontal Decorative Expanding Line */}
            <div
              ref={decorLineRef}
              className="my-8 h-[2px] bg-gradient-to-r from-[#D7FF4F] via-[#303030] to-transparent w-full max-w-lg origin-left will-change-transform"
            />

            {/* Supporting Text */}
            <p
              ref={descRef}
              className="text-lg sm:text-xl text-[#A5A5A0] font-normal max-w-xl leading-relaxed mb-8 will-change-transform"
            >
              {siteConfig.supportingCopy}
            </p>

            {/* Call-to-Action Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10"
            >
              <Button
                variant="primary"
                size="lg"
                icon="arrow-right"
                onClick={scrollToContent}
              >
                EXPLORE THE CONTENT
              </Button>

              <Button
                href={siteConfig.instagramUrl}
                target="_blank"
                variant="secondary"
                size="lg"
                icon="arrow-up-right"
              >
                INSTAGRAM
              </Button>
            </div>

            {/* Creator metadata footer tag */}
            <div
              ref={metaRef}
              className="pt-6 border-t border-[#303030]/60 flex flex-wrap items-center gap-6 text-xs font-mono text-[#A5A5A0]"
            >
              <div className="flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-[#D7FF4F]" />
                <span className="text-[#F4F1E9] font-medium">SHAZ MOHAMED</span>
                <span>// CALLMESHAZZAM</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D7FF4F]" />
                <span>INDEPENDENT PERSPECTIVES</span>
              </div>
            </div>
          </div>

          {/* Right Column: 5 cols Editorial Portrait */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative mx-auto max-w-md lg:max-w-none transition-transform duration-300 ease-out"
              style={{
                transform: `translate3d(${tilt.x}px, ${tilt.y}px, 0)`,
              }}
            >
              {/* Geometric Frame Elements */}
              <div
                ref={cornerTopRef}
                className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#D7FF4F] z-20 pointer-events-none"
              />
              <div
                ref={cornerBottomRef}
                className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#303030] z-20 pointer-events-none"
              />

              {/* Main Portrait Card Container with Clip Path Reveal */}
              <div
                ref={portraitFrameRef}
                className="relative bg-[#171717] border border-[#303030] overflow-hidden group shadow-2xl will-change-[clip-path,opacity]"
              >
                {/* Status bar atop portrait */}
                <div className="px-4 py-2.5 bg-[#171717] border-b border-[#303030] flex items-center justify-between text-[11px] font-mono text-[#A5A5A0]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#D7FF4F]" />
                    <span>REC // 4K 60FPS</span>
                  </span>
                  <span className="tracking-widest text-[#D7FF4F]">RAW // 50MM</span>
                </div>

                {/* Portrait Image with Editorial Treatment */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#101010]">
                  <img
                    ref={portraitImgRef}
                    src="/images/creator/shaz-hero.jpg"
                    alt="Shaz Mohamed (CallMeShazzam) official creator portrait"
                    className="w-full h-full object-cover object-top filter contrast-105 brightness-95 group-hover:scale-105 transition-all duration-700 ease-out will-change-transform"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://www.callmeshazzam.com/shazzam.jpg';
                    }}
                  />

                  {/* Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-black/20 pointer-events-none" />

                  {/* Tech Specs Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#101010]/85 backdrop-blur border border-[#303030] flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-[#D7FF4F] tracking-widest uppercase">
                        CREATOR PROFILE
                      </div>
                      <div className="text-sm font-display font-bold uppercase text-[#F4F1E9]">
                        SHAZ MOHAMED
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-[#A5A5A0]">FOCUS</div>
                      <div className="text-xs font-mono text-[#F4F1E9]">UNFILTERED TECH</div>
                    </div>
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div className="p-4 bg-[#141414] border-t border-[#303030] flex items-center justify-between text-xs font-mono text-[#A5A5A0]">
                  <span>CALLMESHAZZAM.COM</span>
                  <span className="text-[#D7FF4F] flex items-center gap-1">
                    VERIFIED CREATOR
                    <Sparkles className="w-3 h-3 fill-current" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div
        ref={scrollCueRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10"
      >
        <button
          onClick={scrollToAbout}
          className="group flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#A5A5A0] hover:text-[#D7FF4F] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D7FF4F] cursor-pointer"
          aria-label="Scroll down to About section"
        >
          <span className="w-8 h-[1px] bg-[#303030] group-hover:bg-[#D7FF4F] transition-colors" />
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#D7FF4F]" />
        </button>
      </div>
    </section>
  );
};
