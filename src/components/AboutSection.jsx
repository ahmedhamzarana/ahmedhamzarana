import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_TEXT, EDUCATION_TIMELINE } from '../data';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-white/5 bg-[#030303]"
    >
      <div className="max-w-7xl mx-auto">

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* ================= LEFT ================= */}
          <div className="space-y-8">

            <div>
              <span className="text-xs font-mono text-[#FFD60A] tracking-widest uppercase">
                Get To Know Me
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2">
                {ABOUT_TEXT.title}
              </h2>

              <div className="w-12 h-[2px] bg-[#FFD60A] mt-4" />
            </div>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {ABOUT_TEXT.paragraph}
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4">
              {ABOUT_TEXT.stats.map((stat, i) => (
                <div
                  key={i}
                  className="
                    p-4 rounded-2xl bg-zinc-950 border border-white/5
                    hover:-translate-y-1 hover:border-[#FFD60A]/30
                    hover:shadow-[0_10px_30px_rgba(255,214,10,0.08)]
                    transition-all duration-300 group
                    relative overflow-hidden
                  "
                >
                  <div className="absolute inset-0 bg-[#FFD60A]/[0.02] opacity-0 group-hover:opacity-100 transition" />

                  <div className="relative text-[#FFD60A] text-2xl font-black">
                    {stat.value}
                  </div>

                  <div className="relative text-xs text-zinc-500 mt-1 uppercase group-hover:text-zinc-300 transition">
                    {stat.label}
                  </div>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#FFD60A] group-hover:w-full transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT: EDUCATION TIMELINE ================= */}
          <div className="relative pl-8 space-y-10">

            {/* LINE */}
            <div className="absolute left-2 top-5 bottom-0 w-[2px] bg-gradient-to-b from-[#FFD60A] via-yellow-600 to-transparent" />

            {EDUCATION_TIMELINE.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative"
                >

                  {/* DOT ICON */}
                  <div className="
                    absolute -left-[38px] top-5
                    w-8 h-8 rounded-full
                    bg-zinc-950 border border-[#FFD60A]
                    flex items-center justify-center
                    shadow-[0_0_12px_rgba(255,214,10,0.4)]
                    hover:scale-110 transition-transform
                  ">
                    <Icon size={14} className="text-[#FFD60A]" />
                  </div>

                  {/* CARD */}
                  <div className="
                    p-5 rounded-2xl bg-zinc-950 border border-white/5
                    hover:border-[#FFD60A]/30
                    hover:-translate-y-1
                    transition-all duration-300
                    group relative overflow-hidden
                  ">

                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFD60A]/[0.03] blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition" />

                    <span className="text-xs text-[#FFD60A] font-mono flex items-center gap-2">
                      <Calendar size={12} />
                      {item.year}
                    </span>

                    <h3 className="text-white font-bold mt-2 group-hover:text-[#FFD60A] transition">
                      {item.title}
                    </h3>

                    <p className="text-zinc-400 text-sm mt-1">
                      {item.institute}
                    </p>

                    <p className="text-zinc-500 text-sm mt-3 group-hover:text-zinc-300 transition">
                      {item.desc}
                    </p>

                    <div className="mt-4 text-[10px] text-zinc-400 font-mono">
                      {item.status}
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}