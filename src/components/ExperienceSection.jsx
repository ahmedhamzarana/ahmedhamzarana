import { motion } from 'motion/react';
import { Calendar, Landmark, ShieldCheck, Briefcase } from 'lucide-react';
import { EXPERIENCE_TIMELINE } from '../data.js';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-24 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-white/5 bg-[#030303]"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono text-[#FFD60A] tracking-widest uppercase mb-2">
            04 // Career Node
          </span>

          <h2 className="font-display text-4xl sm:text-5xl font-black text-white">
            Work Experience
          </h2>

          <div className="w-12 h-[2px] bg-[#FFD60A] mt-4" />
        </div>

        {/* Timeline (Education Style Reference Match) */}
        <div className="relative pl-8 space-y-10 max-w-4xl mx-auto">

          {/* Vertical Line (same as education) */}
          <div className="absolute left-2 top-5 bottom-0 w-[2px] bg-gradient-to-b from-[#FFD60A] via-yellow-600 to-transparent" />

          {EXPERIENCE_TIMELINE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >

              {/* ICON DOT (Education Style Match) */}
              <div className="
                absolute -left-[38px] top-5
                w-8 h-8 rounded-full
                bg-zinc-950 border border-[#FFD60A]
                flex items-center justify-center
                shadow-[0_0_12px_rgba(255,214,10,0.4)]
                hover:scale-110 transition-transform
              ">
                <Briefcase size={14} className="text-[#FFD60A]" />
              </div>

              {/* CARD (same hover as education) */}
              <div className="
                p-5 rounded-2xl bg-zinc-950 border border-white/5
                hover:border-[#FFD60A]/30
                hover:-translate-y-1
                transition-all duration-300
                relative overflow-hidden group
              ">

                {/* Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFD60A]/[0.03] blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition" />

                {/* YEAR */}
                <span className="text-xs text-[#FFD60A] font-mono flex items-center gap-2">
                  <Calendar size={12} />
                  {exp.duration}
                </span>

                {/* TITLE */}
                <h3 className="text-white font-bold mt-2 group-hover:text-[#FFD60A] transition-colors">
                  {exp.role}
                </h3>

                {/* COMPANY */}
                <p className="text-zinc-400 text-sm mt-1 flex items-center gap-2">
                  <Landmark size={14} />
                  {exp.company}
                </p>

                {/* DESCRIPTION */}
                <p className="text-zinc-500 text-sm mt-3 group-hover:text-zinc-300 transition-colors">
                  {exp.desc}
                </p>

                {/* STATUS */}
                <div className="mt-4 flex items-center justify-between">

                  <div className="flex items-center gap-2">
                    <ShieldCheck size={12} className="text-green-400" />
                    <span className="text-[10px] text-green-400 font-mono">
                      VERIFIED
                    </span>
                  </div>

                  <span className="text-[10px] text-zinc-400 font-mono">
                    {exp.status}
                  </span>

                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}