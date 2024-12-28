import { Link } from "react-router-dom";
import { Users } from "lucide-react";

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white">
            <Users className="w-8 h-8 text-purple-400" />
            <span className="font-heading text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Student Tribe
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('community')} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Community
            </button>
            <button 
              onClick={() => scrollToSection('events')} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('st33')} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              ST33
            </button>
            <button 
              onClick={() => scrollToSection('opportunities')} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Opportunities
            </button>
            <button 
              onClick={() => scrollToSection('stats')} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Numbers
            </button>
            <button 
              onClick={() => scrollToSection('showcase')} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              App
            </button>
            <button 
              onClick={() => scrollToSection('collaborative')} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Collaborate
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};