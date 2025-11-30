import React, { useState, useEffect } from 'react';
import { User, Briefcase, Zap, FileText } from 'lucide-react';
import { NavBar } from './components/layout/NavBar';
import { HeroGeometric } from './components/sections/HeroGeometric';
import { ServicesSection } from './components/sections/ServicesSection';
import { ApproachSection } from './components/sections/ApproachSection';
import { AboutSection } from './components/sections/AboutSection';
import { Footer } from './components/sections/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { name: 'Home', icon: User, id: 'home' },
    { name: 'Services', icon: Briefcase, id: 'services' },
    { name: 'Approach', icon: Zap, id: 'approach' },
    { name: 'About', icon: FileText, id: 'about' }
  ];

  const handleNavClick = (name) => {
    setActiveTab(name);
    const item = navItems.find(i => i.name === name);
    if (item) {
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Update active tab on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200; // Offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(navItems[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <NavBar items={navItems} activeTab={activeTab} setActiveTab={handleNavClick} />

      <main>
        <div id="home">
          <HeroGeometric
            title1="Intelligent"
            title2="Cyber Defense"
            subtitle="Secure your digital infrastructure with military-grade threat detection and proactive strategic management."
            onCtaClick={() => handleNavClick('Services')}
          />
        </div>

        <div id="services">
          <ServicesSection />
        </div>

        <div id="approach">
          <ApproachSection />
        </div>

        <div id="about">
          <AboutSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
