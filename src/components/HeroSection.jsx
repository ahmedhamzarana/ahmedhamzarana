import { motion } from 'motion/react';
import { ArrowRight, Smartphone, Terminal, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data.js';
import { TypeAnimation } from 'react-type-animation';
import profileImage from '../assets/images/ahmed_profile_avatar_1782041412201.jpg';
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
      {/* Background Crystal */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-20">
        <div className="w-[700px] h-[700px]">
          <InteractiveCrystal />
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-[#FFD60A]/20 text-[#FFD60A] text-xs font-mono tracking-wider mb-6 w-fit uppercase"
          >
            <Smartphone size={12} className="animate-bounce" />
            Open To New Opportunities
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-1"
          >
            <h1 className="font-display font-black tracking-tight text-white leading-tight sm:leading-none">
              <span className="block text-zinc-400 font-light text-base sm:text-xl md:text-2xl tracking-normal mb-1.5">
                Hello, I'm
              </span>

              <span className="block text-3xl min-[360px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white text-glow-white">
                Ahmed Hamza Rana
              </span>

              <div className="flex items-center mt-2">
                <TypeAnimation
                  sequence={[
                    'Flutter Developer',
                    1500,
                    'Full Stack Developer',
                    1500,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  cursor={false}
                  wrapper="span"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD60A] via-[#FFA600] to-yellow-300 font-bold leading-[1.3] text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl lg:text-5xl"
                />

                {/* Custom Cursor */}
                <span className="ml-1 animate-pulse text-yellow-400 font-bold text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
                  |
                </span>
              </div>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-[#A1A1AA] max-w-xl font-sans leading-relaxed"
          >
            {PERSONAL_INFO.subheading} I specialize in crafting reactive,
            high-performance, and pixel-perfect applications that run natively.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3 sm:gap-4 items-center"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-5 sm:px-6 py-3 bg-[#FFD60A] text-black font-display font-bold text-xs sm:text-sm rounded shadow-[0_0_20px_rgba(255,214,10,0.3)] hover:shadow-[0_0_30px_rgba(255,214,10,0.5)] hover:scale-[1.02] transition-all flex items-center gap-2"
            >
              View Projects
              <ArrowRight size={14} />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="px-5 sm:px-6 py-3 bg-zinc-950 hover:bg-zinc-900 border border-white/10 hover:border-white/20 text-white font-display font-semibold text-xs sm:text-sm rounded transition-all"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 pt-8 border-t border-white/5 max-w-lg"
          >
            <div className="flex items-center gap-2">
              <div className="p-2 rounded bg-zinc-900 border border-white/5 text-yellow-400">
                <Terminal size={14} />
              </div>
              <div>
                <span className="block text-white text-sm font-semibold">
                  8+ Projects
                </span>
                <span className="text-[10px] text-zinc-500 uppercase">
                  Built Native
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-2 rounded bg-zinc-900 border border-white/5 text-yellow-400">
                <Award size={14} />
              </div>
              <div>
                <span className="block text-white text-sm font-semibold">
                  4+ Certs
                </span>
                <span className="text-[10px] text-zinc-500 uppercase">
                  Recognized
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-2 rounded bg-zinc-900 border border-white/5 text-yellow-400">
                <Smartphone size={14} />
              </div>
              <div>
                <span className="block text-white text-sm font-semibold">
                  Mobile
                </span>
                <span className="text-[10px] text-zinc-500 uppercase">
                  Native UX
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Profile Card */}
        {/* Right Column - Premium Floating Profile */}
        <div className="lg:col-span-5 flex justify-center items-center relative z-10">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[420px]"
          >

            {/* Glow Background */}
            <div className="absolute -inset-10 bg-gradient-to-r from-[#FFD60A]/20 via-orange-400/10 to-yellow-400/20 blur-3xl rounded-full" />

            {/* Floating Border Ring */}
            <div className="absolute -inset-2 rounded-[40px] border border-white/10 rotate-2" />
            <div className="absolute -inset-2 rounded-[40px] border border-[#FFD60A]/20 -rotate-2" />

            {/* Main Card */}
            <div className="relative rounded-[32px] overflow-hidden bg-zinc-950/40 backdrop-blur-xl border border-white/10 shadow-2xl">

              {/* Top Accent Bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#FFD60A] via-orange-400 to-yellow-300" />

              {/* Image Container */}
              <div className="relative group">

                <img
                  src={profileImage}
                  alt="Ahmed Hamza Rana"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[10px] font-mono text-[#FFD60A] backdrop-blur-md">
                  Available for Work
                </div>
              </div>


            </div>

            {/* Floating Shadow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-60 h-10 bg-black/40 blur-2xl rounded-full" />

          </motion.div>
        </div>
      </div>

      {/* Discover */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer select-none z-10"
        onClick={() => handleScrollTo('about')}
      >
        <span className="text-[9px] font-mono tracking-widest text-[#FFD60A] uppercase">
          Discover
        </span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-5 rounded-full bg-gradient-to-b from-yellow-400 to-transparent"
        />
      </div>
    </section>
  );
}
