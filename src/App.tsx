import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/Experience';
import { ProjectsSection } from './components/Projects';
import { SkillsSection } from './components/Skills';
import { Contact } from './components/Contact';
import { AnimatedBackground } from './components/AnimatedBackground';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden dark bg-[#0F0F0F] text-white">
      <AnimatedBackground />
      <div className="relative z-10">
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
