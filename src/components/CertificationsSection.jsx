import { motion } from 'motion/react';
import { Award, ShieldCheck, Ticket } from 'lucide-react';
import { CERT_BADGES_ROW_1, CERT_BADGES_ROW_2 } from '../data.js';


export default function CertificationsSection() {
  // Triple-multiply lists for seamless infinite scroll
  const row1Merged = [...CERT_BADGES_ROW_1, ...CERT_BADGES_ROW_1, ...CERT_BADGES_ROW_1];
  const row2Merged = [...CERT_BADGES_ROW_2, ...CERT_BADGES_ROW_2, ...CERT_BADGES_ROW_2];

  return (
    <section
      id="certifications"
      className="relative py-28 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-white/5 bg-[#000000] overflow-hidden"
    >
      {/* Background glow node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-yellow-500/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 mb-16">
        {/* Section Header */}
        <div className="flex flex-col items-start">
          <span className="text-xs font-mono text-[#FFD60A] tracking-widest uppercase mb-2">05 // Credentials</span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white text-glow-white tracking-tight">
            Badges & Certifications
          </h2>
          <div className="w-12 h-[2px] bg-[#FFD60A] mt-4" />
        </div>
      </div>

      {/* Marquee Outer Wrapper */}
      <div className="relative space-y-6 w-full py-4">
        
        {/* Row 1 track: Scrolling Left */}
        <div id="marquee_track_left" className="relative flex overflow-hidden w-full select-none" style={{ maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)' }}>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-33.333%" }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            }}
            className="flex gap-4 pr-4 whitespace-nowrap"
          >
            {row1Merged.map((cert, index) => (
              <div
                key={`${cert.name}-${index}`}
                className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-zinc-950 border border-white/5 hover:border-[#FFD60A]/30 hover:bg-zinc-900/40 transition-colors cursor-default"
              >
                <div className="p-1 rounded bg-[#FFD60A]/10 text-[#FFD60A]">
                  <Award size={14} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-display font-extrabold text-white tracking-wide">
                    {cert.name}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest leading-none mt-1">
                    {cert.issuer}
                  </span>
                </div>
                <ShieldCheck size={14} className="text-green-500 ml-2" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 track: Scrolling Right */}
        <div id="marquee_track_right" className="relative flex overflow-hidden w-full select-none mt-2" style={{ maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)' }}>
          <motion.div
            initial={{ x: "-33.333%" }}
            animate={{ x: 0 }}
            transition={{
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            }}
            className="flex gap-4 pr-4 whitespace-nowrap"
          >
            {row2Merged.map((cert, index) => (
              <div
                key={`${cert.name}-${index}`}
                className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-zinc-950 border border-white/5 hover:border-[#FFD60A]/30 hover:bg-zinc-900/40 transition-colors cursor-default"
              >
                <div className="p-1 rounded bg-[#FFD60A]/10 text-[#FFD60A]">
                  <Ticket size={14} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-display font-extrabold text-white tracking-wide">
                    {cert.name}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest leading-none mt-1">
                    {cert.issuer}
                  </span>
                </div>
                <ShieldCheck size={14} className="text-green-500 ml-2" />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
