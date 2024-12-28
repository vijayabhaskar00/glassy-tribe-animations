import { Link } from "react-router-dom";
import { Users } from "lucide-react";

export const Header = () => {
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
            <Link to="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link>
            <Link to="/mentors" className="text-gray-300 hover:text-white transition-colors">Mentors</Link>
            <Link to="/internships" className="text-gray-300 hover:text-white transition-colors">Internships</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};