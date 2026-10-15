import React from 'react';
import { ArrowUp, Instagram, Youtube, ExternalLink } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0b0b] text-[#A5A5A0] border-t border-[#303030] py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#303030]/80">
          {/* Brand Col: 5 cols */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-2xl sm:text-3xl tracking-[0.2em] text-[#F4F1E9] uppercase">
                {siteConfig.brandName}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#D7FF4F]" />
            </div>

            <p className="text-sm text-[#A5A5A0] max-w-sm leading-relaxed">
              Technology, opinions, entertainment and a little sarcasm. An unfiltered lens on modern consumer hardware and creator culture.
            </p>

            <div className="text-xs font-mono text-[#D7FF4F] tracking-wider uppercase pt-2">
              CALLMESHAZZAM // DIGITAL CREATOR
            </div>
          </div>

          {/* Links Col: 4 cols */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs font-mono uppercase tracking-wider">
            <div>
              <div className="text-[#F4F1E9] font-bold mb-4">// NAVIGATION</div>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="hover:text-[#D7FF4F] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#D7FF4F] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#content" className="hover:text-[#D7FF4F] transition-colors">
                    Content
                  </a>
                </li>
                <li>
                  <a href="#featured" className="hover:text-[#D7FF4F] transition-colors">
                    Featured
                  </a>
                </li>
                <li>
                  <a href="#socials" className="hover:text-[#D7FF4F] transition-colors">
                    Socials
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-[#F4F1E9] font-bold mb-4">// VERIFIED</div>
              <ul className="space-y-3">
                <li>
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D7FF4F] transition-colors flex items-center gap-1"
                  >
                    Instagram ↗
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D7FF4F] transition-colors flex items-center gap-1"
                  >
                    Official Site ↗
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D7FF4F] transition-colors flex items-center gap-1"
                  >
                    YouTube ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Back to Top Col: 3 cols */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 px-4 py-3 bg-[#171717] border border-[#303030] hover:border-[#D7FF4F] hover:bg-[#D7FF4F] hover:text-[#101010] text-xs font-mono uppercase tracking-widest text-[#F4F1E9] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7FF4F]"
              aria-label="Back to top of page"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            </button>

            <div className="text-[11px] font-mono text-[#A5A5A0] mt-6 md:mt-0 text-left md:text-right">
              SYSTEM STATUS: OPERATIONAL
              <br />
              FRAMEWORK: REACT + TAILWIND
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#A5A5A0]">
          <div>
            © {currentYear} SHAZZAM. All editorial rights reserved.
          </div>

          <div className="max-w-xl text-[11px] text-[#777] leading-normal">
            Independent creative portfolio and design concept celebrating CallMeShazzam. Not an official site or direct endorsement.
          </div>
        </div>
      </div>
    </footer>
  );
};
