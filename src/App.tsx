import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { StatsSection } from './sections/StatsSection';
import { ContentSection } from './sections/ContentSection';
import { AboutSection } from './sections/AboutSection';
import { FeaturedVideoSection } from './sections/FeaturedVideoSection';
import { StatementSection } from './sections/StatementSection';
import { SocialSection } from './sections/SocialSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.title = 'SHAZZAM — The Creator Experience';

    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#101010] text-[#F4F1E9] flex flex-col font-sans selection:bg-[#D7FF00] selection:text-[#101010]">
      {/* Reading Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-transparent">
        <div
          className="h-full bg-[#D7FF00] transition-all duration-150 ease-out shadow-[0_0_8px_#D7FF00]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Fixed Header Navbar */}
      <Navbar />

      {/* Main Page Flow with Intentional Section Transitions */}
      <main id="main-content" className="flex-grow">
        {/* Section 01: Hero */}
        <HeroSection />

        {/* Section 02: Typography Marquee Strip */}
        <MarqueeSection />

        {/* Section 03: Verified Social Media Statistics Strip */}
        <StatsSection />

        {/* Section 04: The Latest Episodes — Horizontal Video Showcase */}
        <ContentSection />

        {/* Section 05: About The Creator */}
        <AboutSection />

        {/* Section 06: Featured Video Spotlight */}
        <FeaturedVideoSection />

        {/* Section 07: Signature Editorial Statement ("LESS NOISE. MORE SIGNAL.") */}
        <StatementSection />

        {/* Section 08: Social Presence */}
        <SocialSection />

        {/* Section 09: Collaboration / Inquiries */}
        <ContactSection />
      </main>

      {/* Section 10: Footer */}
      <Footer />
    </div>
  );
}

export default App;
