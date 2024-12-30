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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-brand-dark/95 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white">
            <Users className="w-8 h-8 text-brand-light" />
            <span className="font-heading text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-light to-brand">
              Student Tribe
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('community')} 
              className="text-white/80 hover:text-white transition-colors"
            >
              Community
            </button>
            <button 
              onClick={() => scrollToSection('events')} 
              className="text-white/80 hover:text-white transition-colors"
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('st33')} 
              className="text-white/80 hover:text-white transition-colors"
            >
              ST33
            </button>
            <button 
              onClick={() => scrollToSection('opportunities')} 
              className="text-white/80 hover:text-white transition-colors"
            >
              Opportunities
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-white/80 hover:text-white transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};