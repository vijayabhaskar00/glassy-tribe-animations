import { Link } from "react-router-dom";
import { Users, Menu, X } from "lucide-react";
import { useState } from "react";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/30 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Users className="w-8 h-8 text-white" />
            <span className="font-heading text-xl font-bold text-white">
              Student Tribe
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {['community', 'events', 'st33', 'opportunities', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)} 
                className="text-white hover:text-primary/80 transition-colors font-medium"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-primary/80"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {['community', 'events', 'st33', 'opportunities', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)} 
                  className="text-white hover:text-primary/80 transition-colors font-medium text-left py-2"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;