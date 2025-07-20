import ContactSection from "./components/ContactSection";
import ResumeSection from "./components/ResumeSection";
import ProjectsSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import NavItem from "./components/NavItem";
import { useState , useEffect} from "react";
import { FileText, Folder, HomeIcon, Lightbulb, Mail, User } from "lucide-react";

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Function to scroll to a section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Effect to update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
      let currentActive = 'home';
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section is in the middle of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-inter">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4 px-6 md:px-12 flex justify-between items-center rounded-b-3xl">
        <div className="text-2xl font-bold text-indigo-700">Suresh Banoth</div>
        <div className="hidden md:flex space-x-6">
        <NavItem icon={<HomeIcon className="w-5 h-5" />} text="Home" sectionId="home" activeSection={activeSection} onClick={scrollToSection} />
          <NavItem icon={<User className="w-5 h-5" />} text="About" sectionId="about" activeSection={activeSection} onClick={scrollToSection} />
          <NavItem icon={<Lightbulb className="w-5 h-5" />} text="Skills" sectionId="skills" activeSection={activeSection} onClick={scrollToSection} />
          <NavItem icon={<Folder className="w-5 h-5" />} text="Projects" sectionId="projects" activeSection={activeSection} onClick={scrollToSection} />
          <NavItem icon={<FileText className="w-5 h-5" />} text="Resume" sectionId="resume" activeSection={activeSection} onClick={scrollToSection} />
          <NavItem icon={<Mail className="w-5 h-5" />} text="Contact" sectionId="contact" activeSection={activeSection} onClick={scrollToSection} />
        </div>
        {/* Mobile menu (can be expanded with a hamburger icon) */}
        <div className="md:hidden">
          {/* Add a hamburger icon and mobile menu logic here if needed */}
          <button className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </nav>

      {/* Main Content Sections */}
      <main className="pt-20"> {/* Adjusted padding top for fixed nav */}
        <HeroSection id="home" />
        <AboutSection id="about" />
        <SkillsSection id="skills" />
        <ProjectsSection id="projects" />
        <ResumeSection id="resume" />
        <ContactSection id="contact"/>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default App;
