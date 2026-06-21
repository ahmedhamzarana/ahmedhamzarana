import { motion } from 'motion/react';
import { Calendar, Briefcase, Landmark, ShieldCheck } from 'lucide-react';
import { EXPERIENCE_TIMELINE } from '../data.js';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-24 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-white/5 bg-[#030303]"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono text-[#FFD60A] tracking-widest uppercase mb-2">04 // Career Node</span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white text-glow-white tracking-tight">
            Work Experience
          </h2>
          <div className="w-12 h-[2px] bg-[#FFD60A] mt-4" />
        </div>

        {/* Minimal Timeline Layout */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-10 space-y-12">
          
          {/* Animated vertical line with yellow neon glow */}
          <div className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-gradient-to-b from-[#FFD60A] via-yellow-600 to-transparent shadow-[0_0_8px_#FFD60A]" />

          {EXPERIENCE_TIMELINE.map((exp) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Floating Circle Anchor */}
              <div className="absolute -left-[30px] sm:-left-[49px] top-1.5 w-5 h-5 bg-[#000000] rounded-full border-2 border-[#FFD60A] shadow-[0_0_10px_rgba(255,214,10,0.5)] flex items-center justify-center text-yellow-500" />

              {/* Core Timeline block */}
              <div className="p-6 rounded-3xl bg-zinc-950 border border-white/5 relative overflow-hidden group hover:border-[#FFD60A]/20 transition-all duration-300">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-[#FFD60A]/40 uppercase tracking-widest select-none">
                  INTERN_EXP_01
                </div>

                {/* Left/Right Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  
                  {/* Left block Info */}
                  <div className="space-y-1.5">
                    
                    {/* Year badge */}
                    <span className="inline-block px-2.5 py-1 rounded bg-[#FFD60A]/10 border border-[#FFD60A]/20 text-[#FFD60A] text-xs font-mono font-bold tracking-wider uppercase mb-1">
                      2026
                    </span>

                    <h3 className="font-display font-black text-2xl text-white group-hover:text-[#FFD60A] transition-colors leading-tight">
                      {exp.role}
                    </h3>

                    <div className="flex items-center gap-2 font-display text-sm text-[#A1A1AA] font-bold">
                      <Landmark size={14} className="text-zinc-500" />
                      <span>{exp.company}</span>
                    </div>

                  </div>

                  {/* Right metadata badge */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-white/5 font-mono text-xs text-zinc-400">
                      <Calendar size={12} className="text-[#FFD60A]" />
                      <span className="font-bold">2 Months</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <ShieldCheck size={14} className="text-green-400" />
                      <span className="text-[10px] font-mono text-green-400 font-bold tracking-wider select-none">VERIFIED</span>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
