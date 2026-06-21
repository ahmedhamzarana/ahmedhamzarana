import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data.js';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Tech Stack', id: 'tech' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // If at bottom of page, default to last section
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isAtBottom) {
        setActiveSection(NAV_ITEMS[NAV_ITEMS.length - 1].id);
        return;
      }

      // Check which section is in focus by checking its position in the viewport
      let currentActive = 'home';
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If section top is above 150px and bottom is below 150px
          if (rect.top <= 150 && rect.bottom > 150) {
            currentActive = item.id;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run immediately to capture initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-panel bg-black/75 shadow-lg shadow-black/40 py-4 border-b border-white/5'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-1 cursor-pointer group"
          >
            <span className="font-display font-black text-xl tracking-wider text-white group-hover:text-yellow-400 transition-colors uppercase">
              {PERSONAL_INFO.logoText}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#FFD60A] animate-pulse"></span>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`font-sans text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                      activeSection === item.id
                        ? 'text-[#FFD60A] font-semibold'
                        : 'text-[#A1A1AA] hover:text-[#FFFFFF]'
                    }`}
                  >
                    {item.label}
                  </button>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-2.5 left-0 right-0 h-[2px] bg-[#FFD60A] shadow-[0_0_8px_#FFD60A]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              ))}
            </ul>

            <button
              onClick={() => scrollToSection('contact')}
              className="ml-4 px-4 py-2 text-xs font-mono tracking-wider font-semibold border border-[#FFD60A]/30 text-white hover:text-black hover:bg-[#FFD60A] transition-all duration-300 rounded cursor-pointer flex items-center gap-1 group"
            >
              HIRE ME <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 pt-24 bg-[#050505] border-b border-white/5 flex flex-col justify-start px-8 lg:hidden"
          >
            <ul className="flex flex-col gap-6 text-xl">
              {NAV_ITEMS.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left font-display font-medium py-2 ${
                      activeSection === item.id ? 'text-[#FFD60A] text-glow-yellow' : 'text-[#A1A1AA]'
                    }`}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            <div className="mt-12 pt-6 border-t border-white/5 flex flex-col gap-4">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Available for Freelance & Internships</span>
              <a
                href={`mailto:${PERSONAL_INFO.contact.email}`}
                className="text-[#FFD60A] font-mono text-sm underline hover:text-white transition-colors"
              >
                {PERSONAL_INFO.contact.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
