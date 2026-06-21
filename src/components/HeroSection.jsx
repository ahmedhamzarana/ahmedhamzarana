import { motion } from 'motion/react';
import { ArrowRight, Smartphone, Terminal, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data.js';
import InteractiveCrystal from './InteractiveCrystal.jsx';

export default function HeroSection() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Headline, Bio and Buttons */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Subtle badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-[#FFD60A]/20 text-[#FFD60A] text-xs font-mono tracking-wider mb-6 w-fit uppercase"
          >
            <Smartphone size={12} className="animate-bounce" />
            Flutter Professional
          </motion.div>

          {/* Headline - fully responsive with adjusted sizes for tiny mobile screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-1"
          >
            <h1 className="font-display font-black tracking-tight text-white leading-tight sm:leading-none">
              <span className="block text-zinc-400 font-light text-base sm:text-xl md:text-2xl tracking-normal mb-1.5">Hello, I'm</span>
              {/* Responsive name wrap - split into two parts on tiny mobile screens beautifully so it never overflows */}
              <span className="block text-3xl min-[360px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white text-glow-white break-words">
                Ahmed Hamza Rana
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFD60A] via-[#FFA600] to-yellow-300 font-bold text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl lg:text-5xl mt-2">
                Flutter Developer
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-[#A1A1AA] max-w-xl font-sans leading-relaxed"
          >
            {PERSONAL_INFO.subheading} I specialize in crafting reactive, high-performance, and pixel-perfect applications that run natively.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3 sm:gap-4 items-center"
          >
            <button
              id="cta_view_projects"
              onClick={() => handleScrollTo('projects')}
              className="px-5 sm:px-6 py-3 bg-[#FFD60A] text-black font-display font-bold text-xs sm:text-sm rounded shadow-[0_0_20px_rgba(255,214,10,0.3)] hover:shadow-[0_0_30px_rgba(255,214,10,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2 group text-center"
            >
              View Projects
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="cta_contact_me"
              onClick={() => handleScrollTo('contact')}
              className="px-5 sm:px-6 py-3 bg-zinc-950 hover:bg-zinc-900 border border-white/10 hover:border-white/20 text-white font-display font-semibold text-xs sm:text-sm rounded transition-all cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Stats quick view */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-white/5 max-w-lg"
          >
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="p-1.5 sm:p-2 rounded bg-zinc-900 border border-white/5 text-yellow-400 flex-shrink-0">
                <Terminal size={12} className="sm:size-3.5" />
              </div>
              <div className="min-w-0">
                <span className="block text-white font-display text-xs sm:text-sm font-semibold truncate">8+ Projects</span>
                <span className="text-[8px] sm:text-[10px] text-zinc-500 font-mono tracking-wider uppercase truncate block">Built Native</span>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="p-1.5 sm:p-2 rounded bg-zinc-900 border border-white/5 text-yellow-400 flex-shrink-0">
                <Award size={12} className="sm:size-3.5" />
              </div>
              <div className="min-w-0">
                <span className="block text-white font-display text-xs sm:text-sm font-semibold truncate">4+ Certs</span>
                <span className="text-[8px] sm:text-[10px] text-zinc-500 font-mono tracking-wider uppercase truncate block">Recognized</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-11">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="p-1.5 sm:p-2 rounded bg-zinc-900 border border-white/5 text-yellow-400 flex-shrink-0">
                  <Smartphone size={12} className="sm:size-3.5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-white font-display text-xs sm:text-sm font-semibold truncate">Mobile</span>
                  <span className="text-[8px] sm:text-[10px] text-zinc-500 font-mono tracking-wider uppercase truncate block">Native UX</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Geometric Crystal instead of profile image */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-4 sm:py-8 lg:py-12">
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-none aspect-square flex items-center justify-center">
            <InteractiveCrystal />
          </div>
        </div>

      </div>

      {/* Bounce Discover prompt */}
      <div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer select-none" 
        onClick={() => handleScrollTo('about')}
      >
        <span className="text-[9px] font-mono tracking-widest text-[#FFD60A] uppercase">Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-1 h-5 rounded-full bg-gradient-to-b from-yellow-400 to-transparent"
        />
      </div>
    </section>
  );
}
