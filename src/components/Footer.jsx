import { motion } from 'motion/react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data.js';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-[#000000] py-12 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      
      {/* Absolute Periodic Shooting Star across Footer Bar */}
      <motion.div
        animate={{
          x: ['-10%', '110%'],
          y: ['0px', '2px'],
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 8,
          ease: 'easeInOut'
        }}
        className="absolute top-0 left-0 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#FFD60A] to-transparent pointer-events-none"
        style={{ filter: 'drop-shadow(0 0 4px #FFD60A)' }}
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Copyright Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-xs sm:text-sm text-zinc-500 font-sans leading-relaxed">
            &copy; 2026 <strong className="text-zinc-300 font-semibold">{PERSONAL_INFO.fullName}</strong>. All rights reserved.
          </p>
          <p className="text-[10px] text-zinc-600 font-mono tracking-wider mt-1 uppercase">
            Built with passion using modern web technologies.
          </p>
        </div>

        {/* Center: Social Networks Shortcuts */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/5 hover:border-[#FFD60A]/30 hover:bg-zinc-900 text-zinc-500 hover:text-white transition-all cursor-pointer"
            title="GitHub Profile"
          >
            <Github size={15} />
          </a>
          
          <a
            href={PERSONAL_INFO.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/5 hover:border-[#FFD60A]/30 hover:bg-zinc-900 text-zinc-500 hover:text-white transition-all cursor-pointer"
            title="LinkedIn Profile"
          >
            <Linkedin size={15} />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.contact.email}`}
            className="p-2 rounded-full border border-white/5 hover:border-[#FFD60A]/30 hover:bg-zinc-900 text-zinc-500 hover:text-white transition-all cursor-pointer"
            title="Secure Email"
          >
            <Mail size={15} />
          </a>
        </div>

        {/* Right Side: Back to Top */}
        <button
          onClick={scrollToTop}
          className="px-4 py-2.5 rounded-lg bg-zinc-950 hover:bg-zinc-900 border border-white/5 hover:border-white/10 text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1.5 transition-all cursor-pointer group"
        >
          <span>Back to Top</span>
          <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform text-[#FFD60A]" />
        </button>

      </div>
    </footer>
  );
}
