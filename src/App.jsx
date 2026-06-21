import ShootingStarsBg from './components/ShootingStarsBg.jsx';
import CursorFollower from './components/CursorFollower.jsx';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import TechStackSection from './components/TechStackSection.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import CertificationsSection from './components/CertificationsSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import ScrollFadeIn from './components/ScrollFadeIn.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-[#FFD60A]/20 selection:text-white">
      {/* Immersive Particle & Shooting Star Background */}
      <ShootingStarsBg />
      <CursorFollower />

      {/* Global Interface container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Transparent Blur Sticky Navigation header */}
        <Navbar />

        {/* Portfolial Sections Flow */}
        <main className="flex-grow">
          {/* Hero Landing */}
          <HeroSection />

          {/* About Me context & specifications */}
          <ScrollFadeIn>
            <AboutSection />
          </ScrollFadeIn>

          {/* Dynamic Interactive capabilities */}
          <ScrollFadeIn>
            <TechStackSection />
          </ScrollFadeIn>

          {/* Projects Showcases */}
          <ScrollFadeIn>
            <ProjectsSection />
          </ScrollFadeIn>

          {/* Timeline Milestones list */}
          <ScrollFadeIn>
            <ExperienceSection />
          </ScrollFadeIn>

          {/* Credentials Certifications grid */}
          <ScrollFadeIn>
             <CertificationsSection />
          </ScrollFadeIn>

          {/* Connection Channels & actions */}
          <ScrollFadeIn>
            <ContactSection />
          </ScrollFadeIn>
        </main>

        {/* Footer info & elements */}
        <Footer />
      </div>
    </div>
  );
}
