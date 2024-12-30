import { Link } from "react-router-dom";
import { Users, Menu, X } from "lucide-react";
import { useState, lazy, Suspense } from "react";
import { Button } from "./ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl backdrop-saturate-150 border-b border-white/10 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white">
            <Users className="w-8 h-8 text-brand-light" />
            <span className="font-heading text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-light to-brand">
              Student Tribe
            </span>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/80 backdrop-blur-xl backdrop-saturate-150 border-b border-white/10">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('community')} 
                className="text-white/80 hover:text-white transition-colors text-left py-2"
              >
                Community
              </button>
              <button 
                onClick={() => scrollToSection('events')} 
                className="text-white/80 hover:text-white transition-colors text-left py-2"
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection('st33')} 
                className="text-white/80 hover:text-white transition-colors text-left py-2"
              >
                ST33
              </button>
              <button 
                onClick={() => scrollToSection('opportunities')} 
                className="text-white/80 hover:text-white transition-colors text-left py-2"
              >
                Opportunities
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-white/80 hover:text-white transition-colors text-left py-2"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};