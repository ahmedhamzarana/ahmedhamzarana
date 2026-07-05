import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, FolderOpen } from 'lucide-react';
import { PROJECTS_LIST } from '../data.js';

const TABS = [
  { id: 'all', label: 'All Projects' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'uiux', label: 'UI/UX Design' }
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [DialogOpen, setDialogOpen] = useState(false);

  // ✅ CLEAN FILTER (ONLY ONE LOGIC)
  const filteredProjects =
    activeTab === 'all'
      ? PROJECTS_LIST
      : PROJECTS_LIST.filter(
          (project) => project.projectType === activeTab
        );

  return (
    <section
      id="projects"
      className="relative py-28 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-white/5 bg-[#000000]"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono text-[#FFD60A] tracking-widest uppercase mb-2">
            03 // Showcase
          </span>

          <h2 className="font-display text-4xl sm:text-5xl font-black text-white">
            Premium Work
          </h2>

          <div className="w-12 h-[2px] bg-[#FFD60A] mt-4" />
        </div>

        {/* TABS (Premium UI like Skills) */}
        <div className="flex flex-wrap items-center gap-2 max-w-2xl p-1.5 rounded-2xl bg-zinc-950 border border-white/5 mb-12">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-grow py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm transition-all relative ${
                  isActive ? 'text-black' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="projectTab"
                    className="absolute inset-0 bg-[#FFD60A] rounded-xl shadow-[0_0_15px_rgba(255,214,10,0.4)]"
                  />
                )}

                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl overflow-hidden bg-zinc-950 border border-white/5 hover:border-[#FFD60A]/40 transition-all"
              >

                {/* IMAGE AREA */}
                <div className="relative aspect-[16/10] overflow-hidden">

                  {/* CATEGORY BADGE */}
                  <span className="absolute top-3 left-3 z-20 px-2 py-1 bg-black/70 border border-white/10 rounded-full text-[9px] text-white font-mono uppercase">
                    {proj.category}
                  </span>

                  {/* PROJECT TYPE BADGE */}
                  <span className="absolute top-3 right-3 z-20 px-2 py-1 bg-[#FFD60A]/15 border border-[#FFD60A]/20 rounded-full text-[9px] text-[#FFD60A] font-mono uppercase">
                    {proj.projectType}
                  </span>

                  <img
                    src={proj.imageSeed}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="p-4 flex flex-col justify-between">
                  
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-bold group-hover:text-[#FFD60A]">
                        {proj.title}
                      </h3>

                      <FolderOpen size={14} className="text-zinc-500" />
                    </div>

                    <p className="text-[10px] text-[#FFD60A] font-mono mt-1 truncate">
                      {proj.tech.join(' • ')}
                    </p>
                  </div>

                  {/* ACTIONS */}
                  <div className="mt-5 pt-3 border-t border-white/5 flex gap-2">
                    <a
                      href={proj.codeUrl}
                      target="_blank"
                      className="flex-1 py-2 text-center text-xs bg-zinc-900 hover:bg-zinc-800 text-white rounded"
                    >
                      <Github size={12} className="inline mr-1" />
                      Code
                    </a>

                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      className="px-3 py-2 bg-[#FFD60A] text-black rounded text-xs font-bold"
                    >
                      <ExternalLink size={12} />
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}