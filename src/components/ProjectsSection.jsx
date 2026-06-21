import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Blocks, Sparkles, FolderOpen, ArrowUpRight } from 'lucide-react';
import { PROJECTS_LIST } from '../data.js';

const TABS = [
  { id: 'all', label: 'All' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'uiux', label: 'UI/UX' }
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('all');

  // Filter projects by custom category mappings
  const filteredProjects = PROJECTS_LIST.filter(proj => {
    if (activeTab === 'all') return true;

    // Custom tag checks
    if (activeTab === 'mobile' && proj.category.toLowerCase().includes('mobile')) return true;
    if (activeTab === 'fullstack' && (proj.tech.includes('Supabase') || proj.tech.includes('Firebase') || proj.tech.includes('PostgreSQL'))) return true;
    if (activeTab === 'uiux' && (proj.title === 'Watch Hub' || proj.title === 'E-Book App')) return true;

    return false;
  });

  return (
    <section
      id="projects"
      className="relative py-28 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-white/5 bg-[#000000]"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono text-[#FFD60A] tracking-widest uppercase mb-2">03 // Showcase</span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white text-glow-white tracking-tight">
            Premium Work
          </h2>
          <div className="w-12 h-[2px] bg-[#FFD60A] mt-4" />
        </div>

        {/* Category switcher tabs */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-12 pb-2 overflow-x-auto scrollbar-none">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-4 rounded-full font-mono text-xs font-bold tracking-wide transition-all border cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#FFD60A] text-black border-[#FFD60A] shadow-[0_0_12px_rgba(255,214,10,0.25)] font-bold'
                    : 'bg-zinc-950 text-zinc-400 border-white/5 hover:border-white/10 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Bento Grid layout with category-driven animated entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[auto]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => {
              return (
                <motion.div
                  key={proj.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -5 }}
                  className="group relative rounded-2xl overflow-hidden bg-zinc-950 border border-white/5 hover:border-[#FFD60A]/40 hover:shadow-[0_0_24px_rgba(255,214,10,0.06)] transition-all duration-300 flex flex-col justify-between"
                  style={{ contentVisibility: 'auto' }}
                >
                  {/* Glowing halo frame */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFD60A]/[0.01] rounded-full blur-2xl pointer-events-none group-hover:bg-[#FFD60A]/[0.03] transition-all duration-500" />

                  {/* Thumbnail Cover aspect changes */}
                  <div className="relative w-full overflow-hidden z-10 aspect-[16/10]">
                    <span className="absolute top-3 left-3 z-20 px-2 py-0.5 bg-black/60 border border-white/10 rounded-full font-mono text-[8px] text-white backdrop-blur-md uppercase tracking-wider">
                      {proj.category}
                    </span>

                    <img
                      src={proj.imageSeed}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out select-none group-hover:scale-105"
                    />

                    {/* Gradient Fade overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  </div>

                  {/* Body information */}
                  <div className="p-4 relative z-10 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Name + Labels */}
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display font-black text-base sm:text-lg text-white group-hover:text-[#FFD60A] transition-colors truncate">
                          {proj.title}
                        </h3>
                        
                        <FolderOpen size={14} className="text-zinc-650 mt-1 opacity-60 group-hover:text-yellow-400 group-hover:opacity-100 transition-all" />
                      </div>

                      {/* Horizontal Tech String */}
                      <p className="font-mono text-[10px] text-[#FFD60A] mt-1 font-bold tracking-wide truncate">
                        {proj.tech.join(' • ')}
                      </p>
                    </div>

                    {/* Bottom Actions links only */}
                    <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                      <a
                        href={proj.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-grow py-1.5 px-2 bg-zinc-900 hover:bg-zinc-850 hover:border-zinc-700 rounded-md font-mono text-[10px] font-semibold text-zinc-350 hover:text-white transition-all flex items-center justify-center gap-1 cursor-pointer border border-white/5 text-center decoration-none"
                        aria-label={`View code for ${proj.title}`}
                      >
                        <Github size={10} />
                        Repo Code
                      </a>

                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-[#FFD60A] hover:bg-yellow-400 text-black rounded-md font-mono text-[10px] font-black transition-all flex items-center justify-center cursor-pointer text-center decoration-none"
                        title="Live Mobile Showcase Launcher"
                        aria-label={`Launch deployment for ${proj.title}`}
                      >
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                </motion.div>
              );
            })}

            {/* Future Projects small placeholder card in grid */}
            {activeTab === 'all' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                className="p-4 rounded-2xl bg-zinc-950 border border-white/5 hover:border-[#FFD60A]/10 border-dashed flex flex-col justify-between min-h-[220px] group transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-zinc-900 border border-white/5 text-[#FFD60A] group-hover:border-[#FFD60A]/20 transition-all duration-300">
                    <Blocks size={16} className="animate-spin" style={{ animationDuration: '6s' }} />
                  </div>
                  <span className="font-mono text-[8px] text-[#FFD60A] tracking-wider uppercase font-bold">Planned</span>
                </div>

                <div>
                  <h3 className="font-display font-medium text-sm text-zinc-400 mt-4 tracking-tight">
                    Upcoming Flutter projects
                  </h3>
                  <p className="text-[11px] text-zinc-650 font-sans mt-1.5 leading-relaxed font-light line-clamp-3">
                    Designing and refining new mobile concepts including customizable UI widgets and native cloud integrations. Stay tuned!
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-zinc-500 font-mono text-[9px] uppercase">
                  <span>In Progress</span>
                  <div className="flex items-center gap-1 font-bold text-[#FFD60A]">
                    <span>UPCOMING</span>
                    <Sparkles size={8} />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
