import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, FileText, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data.js';

export default function ContactSection() {
  const contactDetails = [
    {
      label: "Phone",
      value: PERSONAL_INFO.contact.phone,
      href: `tel:${PERSONAL_INFO.contact.phone}`,
      icon: <Phone size={18} className="text-[#FFD60A]" />,
      actionText: "Call directly"
    },
    {
      label: "Email",
      value: PERSONAL_INFO.contact.email,
      href: `mailto:${PERSONAL_INFO.contact.email}`,
      icon: <Mail size={18} className="text-[#FFD60A]" />,
      actionText: "Send email"
    },
    {
      label: "LinkedIn",
      value: PERSONAL_INFO.contact.linkedinLabel,
      href: PERSONAL_INFO.contact.linkedin,
      icon: <Linkedin size={18} className="text-[#FFD60A]" />,
      actionText: "Visit profile"
    },
    {
      label: "GitHub",
      value: PERSONAL_INFO.contact.githubLabel,
      href: PERSONAL_INFO.contact.github,
      icon: <Github size={18} className="text-[#FFD60A]" />,
      actionText: "View repositories"
    }
  ];

  const handleDownloadResume = () => {
    const resumeText = `--- AHMED HAMZA RANA COMPREHENSIVE FLUTTER PROFILE 2026 ---`;
    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ahmed_Hamza_Rana_Flutter_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-[#000000]"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono text-[#FFD60A] tracking-widest uppercase mb-2">Contact Me</span>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-white text-glow-white tracking-tight leading-none">
            Let's Build Something<br />Amazing Together
          </h2>
          <div className="w-16 h-[2px] bg-[#FFD60A] mt-6" />
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactDetails.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4, borderColor: 'rgba(255, 214, 10, 0.4)' }}
                className="p-5 rounded-2xl bg-zinc-950/40 border border-white/5 hover:bg-zinc-950 flex flex-col justify-between group transition-all duration-300 min-h-[140px]"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/5 text-yellow-500 group-hover:border-[#FFD60A]/30 transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{item.label}</span>
                </div>

                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <span className="block text-white font-display font-bold text-sm sm:text-base group-hover:text-[#FFD60A] transition-colors overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px] sm:max-w-xs">
                      {item.value}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono tracking-wider mt-1 block uppercase">
                      {item.actionText}
                    </span>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-yellow-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Right Column: CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center p-8 rounded-3xl border border-white/5 bg-zinc-950/15 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 font-mono text-[9px] text-[#FFD60A] tracking-widest uppercase select-none">
              Get In Touch
            </div>

            <h3 className="font-display font-extrabold text-2xl text-white leading-tight">
              Ready to collaborate on your next mobile app?
            </h3>
            
            <p className="text-sm text-zinc-400 mt-4 leading-relaxed font-sans font-light">
              I can help you build custom cross-platform mobile apps with Flutter, clean backend models, and smooth database integrations.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${PERSONAL_INFO.contact.email}`}
                className="w-full py-4 bg-[#FFD60A] hover:bg-yellow-400 text-black font-display font-black text-sm rounded shadow-[0_0_20px_rgba(255,214,10,0.15)] transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <Mail size={16} />
                Email Me Directly
              </a>

              <button
                onClick={handleDownloadResume}
                className="w-full py-4 bg-black hover:bg-zinc-900 text-white font-display font-semibold text-sm rounded border border-white/10 hover:border-white/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText size={16} className="text-yellow-400" />
                Download Complete Resume
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
