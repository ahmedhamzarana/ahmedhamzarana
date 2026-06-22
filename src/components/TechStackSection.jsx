import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, Database, Terminal, Code, Settings, GitBranch, Github, Layers } from 'lucide-react';
import { SKILLS_DATA } from '../data.js';

const TABS = [
  { id: 'mobile', label: 'Mobile' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'tools', label: 'Tools' }
];


export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState('mobile');

  const getTabIcon = (tabId) => {
    switch (tabId) {
      case 'mobile':
        return <Smartphone size={16} />;
      case 'backend':
        return <Code size={16} />;
      case 'database':
        return <Database size={16} />;
      case 'tools':
        return <Settings size={16} />;
      default:
        return <Layers size={16} />;
    }
  };

  return (
    <section
      id="tech"
      className="relative py-28 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-white/5 bg-[#000000]"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono text-[#FFD60A] tracking-widest uppercase mb-2">02 // Core Stack</span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white text-glow-white tracking-tight">
            Tech Skills & Tools
          </h2>
          <div className="w-12 h-[2px] bg-[#FFD60A] mt-4" />
        </div>

        {/* Premium Glow Tab Switcher Bar */}
        <div className="flex flex-wrap items-center gap-2 max-w-xl p-1.5 rounded-2xl bg-zinc-950 border border-white/5 mb-12">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-grow flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-display font-semibold text-xs sm:text-sm tracking-wide transition-all relative cursor-pointer ${isActive ? 'text-black' : 'text-zinc-400 hover:text-white'
                  }`}
              >
                {/* Active Indicator Slide and Glow */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-[#FFD60A] rounded-xl shadow-[0_0_15px_rgba(255,214,10,0.4)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}

                <span className="relative z-10">{getTabIcon(tab.id)}</span>
                <span className="relative z-10 font-bold">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Skill Deck Layout */}
        <div className="relative min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {SKILLS_DATA[activeTab].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -5, borderColor: 'rgba(255, 214, 10, 0.3)' }}
                  className="p-6 rounded-2xl bg-gradient-to-b from-zinc-950 to-zinc-900/10 border border-white/5 hover:bg-zinc-900/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Skill Card Header */}
                  <div>
                    <div className="flex items-center justify-between pb-3.5 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        {/* Floating subtle animate core node */}
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFD60A] animate-pulse" />
                        <h3 className="font-display font-extrabold text-lg text-white group-hover:text-[#FFD60A] transition-colors leading-none pr-2">
                          {skill.name}
                        </h3>
                      </div>

                      {/* Display Label Badge */}
                      <span className="text-[9px] font-mono font-medium text-[#FFD60A] tracking-wider uppercase bg-[#FFD60A]/5 px-2 py-0.5 rounded border border-[#FFD60A]/10">
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-500 font-sans mt-4 leading-relaxed font-light">
                      <div className="mt-5">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[11px] text-zinc-500">
                            Proficiency
                          </span>

                          <span className="text-[11px] font-semibold text-[#FFD60A]">
                            {skill.progress}%
                          </span>
                        </div>

                        <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.progress}%` }}
                            transition={{
                              duration: 1,
                              delay: index * 0.1
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-[#FFD60A] via-[#FFC300] to-[#FFA600] shadow-[0_0_15px_rgba(255,214,10,0.4)]"
                          />
                        </div>
                      </div>
                    </p>
                  </div>

                  {/* High tech structural decoration in footer */}
                  <div className="mt-6 flex items-center justify-between opacity-40 group-hover:opacity-100 transition-opacity">
                    <span className="text-[8px] font-mono text-zinc-600 block uppercase select-none tracking-widest">
                      SYSTEM_INTEGRITY
                    </span>
                    <span className="w-3 h-0.5 bg-[#FFD60A]/40 rounded-full" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
