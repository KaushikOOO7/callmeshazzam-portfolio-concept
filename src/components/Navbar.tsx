import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'CONTENT', href: '#content' },
  { name: 'SOCIALS', href: '#socials' },
  { name: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section scrollspy
      const sections = ['home', 'about', 'content', 'featured', 'socials', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section === 'featured' ? 'content' : section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#101010]/95 backdrop-blur-md border-b border-[#303030]/80 py-4 shadow-xl'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Typographic Wordmark on Left */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group text-[#F4F1E9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7FF4F]"
            aria-label="SHAZZAM Home"
          >
            <span className="font-display font-extrabold text-xl sm:text-2xl tracking-[0.2em] uppercase text-[#F4F1E9] group-hover:text-[#D7FF4F] transition-colors">
              {siteConfig.brandName}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D7FF4F] shadow-[0_0_8px_#D7FF4F] group-hover:scale-125 transition-transform" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`group relative font-display text-xs tracking-[0.2em] uppercase py-1.5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D7FF4F] ${
                    isActive ? 'text-[#D7FF4F] font-semibold' : 'text-[#A5A5A0] hover:text-[#F4F1E9]'
                  }`}
                >
                  <span>{item.name}</span>
                  {/* Smooth Underline Animation on Hover and Active */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#D7FF4F] transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Action: Instagram Link */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-[#A5A5A0] hover:text-[#101010] bg-[#171717] hover:bg-[#D7FF4F] border border-[#303030] hover:border-[#D7FF4F] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7FF4F]"
              aria-label="CallMeShazzam on Instagram (opens in new tab)"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@CALLMESHAZZAM</span>
              <ArrowUpRight className="w-3 h-3 ml-0.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#A5A5A0] hover:text-[#D7FF4F] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-[#F4F1E9] hover:text-[#D7FF4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7FF4F] cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with Animated Transition */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#101010]/98 border-b border-[#303030] px-6 py-8 overflow-hidden"
          >
            <div className="flex flex-col space-y-6">
              <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#A5A5A0] border-b border-[#303030]/60 pb-2">
                NAVIGATION // DIRECTORY
              </div>
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between text-xl font-display font-bold uppercase tracking-wider py-1 border-b border-[#303030]/40 transition-colors ${
                      isActive ? 'text-[#D7FF4F]' : 'text-[#F4F1E9] hover:text-[#D7FF4F]'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#A5A5A0]">0{idx + 1}.</span>
                      <span>{item.name}</span>
                    </span>
                    <span className="text-xs text-[#A5A5A0] font-mono">→</span>
                  </a>
                );
              })}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-[#D7FF4F] text-[#101010] font-display font-semibold text-xs uppercase tracking-widest hover:bg-[#cbf438] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>FOLLOW ON INSTAGRAM</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={siteConfig.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-[#171717] border border-[#303030] text-[#F4F1E9] hover:border-[#D7FF4F] hover:text-[#D7FF4F] font-display text-xs uppercase tracking-widest transition-colors"
                >
                  <span>YOUTUBE CHANNEL</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
