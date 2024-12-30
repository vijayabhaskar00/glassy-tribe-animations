import { Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl text-white font-semibold">Student Tribe</h3>
            <p className="text-gray-300 text-sm">
              Connecting students worldwide through learning, collaboration, and growth opportunities.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl text-white font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/mentors" className="text-gray-300 hover:text-white transition-colors">Mentors</Link></li>
              <li><Link to="/internships" className="text-gray-300 hover:text-white transition-colors">Internships</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl text-white font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <Mail className="inline-block w-4 h-4 mr-2" />
                contact@studenttribe.com
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl text-white font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Student Tribe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
