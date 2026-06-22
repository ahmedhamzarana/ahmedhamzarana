import { motion } from "framer-motion";

const marquee1 = [
  "FLUTTER DEVELOPER",
  "AHMED HAMZA RANA",
  "FULL STACK ENGINEER",
  "UI/UX DESIGNER",
  "MOBILE APP DEVELOPER",
];

const marquee2 = [
  "APP BUILDER",
  "SOFTWARE ENGINEER",
  "CLEAN ARCHITECTURE",
  "API INTEGRATION",
  "MODERN UI SYSTEMS",
];

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Glow */}
      <div className="absolute w-[700px] h-[700px] bg-yellow-400/10 blur-[140px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* ================= TOP MARQUEE ================= */}
      <div className="absolute top-1/3 w-full overflow-hidden">
        <motion.div
          className="flex gap-16 whitespace-nowrap font-black text-9xl sm:text-7xl text-white/10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...marquee1, ...marquee1].map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>

      {/* ================= BOTTOM MARQUEE ================= */}
      <div className="absolute top-2/3 w-full overflow-hidden">
        <motion.div
          className="flex gap-16 whitespace-nowrap font-black text-9xl sm:text-7xl text-yellow-400/10"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...marquee2, ...marquee2].map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent" />
    </div>
  );
}