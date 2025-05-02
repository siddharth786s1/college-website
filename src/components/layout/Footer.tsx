import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <Logo className="text-white" />
              <span className="ml-2 font-bold text-xl">ENCT</span>
            </Link>
            <p className="text-gray-300 mt-4">
              Excellence in National Computing and Technology (ENCT) is a premier institution dedicated to providing 
              world-class education in computing and technology disciplines.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/academics" className="text-gray-300 hover:text-white transition-colors">Programs</Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-300 hover:text-white transition-colors">Admissions</Link>
              </li>
              <li>
                <Link to="/faculty" className="text-gray-300 hover:text-white transition-colors">Faculty</Link>
              </li>
              <li>
                <Link to="/student-life" className="text-gray-300 hover:text-white transition-colors">Student Life</Link>
              </li>
              <li>
                <Link to="/news-events" className="text-gray-300 hover:text-white transition-colors">News & Events</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/academics" className="text-gray-300 hover:text-white transition-colors">Computer Science</Link>
              </li>
              <li>
                <Link to="/academics" className="text-gray-300 hover:text-white transition-colors">Information Technology</Link>
              </li>
              <li>
                <Link to="/academics" className="text-gray-300 hover:text-white transition-colors">Data Science</Link>
              </li>
              <li>
                <Link to="/academics" className="text-gray-300 hover:text-white transition-colors">Cybersecurity</Link>
              </li>
              <li>
                <Link to="/academics" className="text-gray-300 hover:text-white transition-colors">Artificial Intelligence</Link>
              </li>
              <li>
                <Link to="/academics" className="text-gray-300 hover:text-white transition-colors">Software Engineering</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0 text-amber-400" />
                <span className="text-gray-300">123 University Avenue, Tech City, TC 12345, United States</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0 text-amber-400" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-amber-400" />
                <a href="mailto:info@enct.edu" className="text-gray-300 hover:text-white transition-colors">info@enct.edu</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Excellence in National Computing and Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;