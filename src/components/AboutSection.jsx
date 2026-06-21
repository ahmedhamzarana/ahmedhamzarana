import { motion } from 'motion/react';
import { 
  Brain, Zap, Users, Cpu, GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO, ABOUT_TEXT } from '../data';

export default function AboutSection() {
  // Soft Skills list with unique interactive characteristics and modern visual badges
  const softSkills = [
    {
      title: "Problem Solver",
      desc: "I enjoy breaking down complex bugs and designing clean, modular Dart code to build responsive cross-platform structures.",
      icon: <Brain size={20} className="text-[#FFD60A]" />,
      color: "hover:bg-[#FFD60A]/[0.02]",
      border: "hover:border-[#FFD60A]/30"
    },
    {
      title: "Continuous Learner",
      desc: "I love exploring state management frameworks, reactive hooks, and external API integrations as mobile development evolves.",
      icon: <Zap size={20} className="text-[#FFD60A]" />,
      color: "hover:bg-[#FFD60A]/[0.02]",
      border: "hover:border-[#FFD60A]/30"
    },
    {
      title: "Team Collaborative",
      desc: "I thrive in collaborative team environments, contributing to code reviews, architecture discussions, and iterative development.",
      icon: <Users size={20} className="text-[#FFD60A]" />,
      color: "hover:bg-[#FFD60A]/[0.02]",
      border: "hover:border-[#FFD60A]/30"
    },
    {
      title: "Performance & Detail Oriented",
      desc: "Focused on high-performance rendering, smooth interface animations, clean resource use, and pixel-perfect layouts.",
      icon: <Cpu size={20} className="text-[#FFD60A]" />,
      color: "hover:bg-[#FFD60A]/[0.02]",
      border: "hover:border-[#FFD60A]/30"
    }
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-white/5 bg-[#030303]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Grid: Left Side Summary & Stats, Right Side Soft Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Brief Biography Summary & Verification Stats */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-mono text-[#FFD60A] tracking-widest uppercase block mb-2">
                Get To Know Me
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white text-glow-white tracking-tight">
                {PERSONAL_INFO.fullName}
              </h2>
              <div className="w-12 h-[2px] bg-[#FFD60A] mt-4" />
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans font-light">
              I am a dedicated <span className="font-semibold text-white">Flutter Developer</span> focused on crafting responsive, high-performance, and elegant native mobile applications. By coupling clean interface designs with reliable logic and seamless cloud services, I help transform product visions into actual, deployed mobile software systems.
            </p>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {ABOUT_TEXT.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-zinc-950 border border-white/5 hover:border-[#FFD60A]/10 transition-all duration-300 relative group overflow-hidden"
                  style={{ contentVisibility: 'auto' }}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#FFD60A]/[0.01] rounded-full blur-xl group-hover:bg-[#FFD60A]/[0.03] transition-all duration-550" />
                  <span className="font-display text-2xl sm:text-3xl font-black text-[#FFD60A]">
                    {stat.value}
                  </span>
                  <p className="text-[10px] sm:text-xs text-zinc-500 font-mono uppercase tracking-wider mt-1.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Academic Credentials Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-zinc-950 to-zinc-900 border border-white/5 hover:border-[#FFD60A]/10 transition-all flex items-start gap-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFD60A]/[0.01] rounded-full blur-2xl group-hover:bg-[#FFD60A]/[0.03] transition-all duration-500" />
              <div className="p-3 bg-zinc-900 border border-white/5 rounded-xl text-[#FFD60A] shrink-0 group-hover:border-[#FFD60A]/25 transition-all">
                <GraduationCap size={22} />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="font-mono text-[9px] text-[#FFD60A] font-bold tracking-wider">EDUCATION</span>
                  <span className="px-2.5 py-0.5 bg-yellow-500/10 border border-[#FFD60A]/20 text-[#FFD60A] font-mono text-[8px] rounded-full flex items-center gap-1 select-none font-semibold">
                    ADSE Certified
                  </span>
                </div>
                <h4 className="text-white font-display font-bold text-sm sm:text-base mt-2">
                  Associate Diploma in Software Engineering
                </h4>
                <p className="text-[11px] sm:text-xs text-zinc-500 font-sans mt-1 leading-relaxed font-light">
                  Completed in 2026. Focused on structural programming, database tables design, and modern backend services integration.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Soft Skills list with no heading */}
          <div className="lg:col-span-6 space-y-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3, x: 1 }}
                className={`p-5 rounded-2xl bg-zinc-950 border border-white/5 ${skill.border} ${skill.color} transition-all duration-300 relative overflow-hidden flex gap-4`}
              >
                {/* Visual Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFD60A]/[0.01] rounded-full blur-2xl transition-all duration-500" />
                
                {/* Icon wrapper */}
                <div className="p-3 bg-zinc-900 border border-white/5 rounded-xl text-[#FFD60A] shrink-0 h-fit">
                  {skill.icon}
                </div>

                {/* Content body */}
                <div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-[#FFD60A] transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-zinc-450 mt-1.5 leading-relaxed font-sans font-light">
                    {skill.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
