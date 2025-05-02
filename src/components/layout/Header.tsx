import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'News & Events', path: '/news-events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <Logo />
            <span className={`ml-2 font-bold text-xl ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
              ENCT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-amber-500 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                } ${location.pathname === link.path ? 'text-amber-500' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link 
            to="/admissions"
            className="hidden md:block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-md transition-colors shadow-md"
          >
            Apply Now
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg p-4 mt-2">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors hover:text-amber-500 ${
                    location.pathname === link.path ? 'text-amber-500' : 'text-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/admissions"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-md transition-colors shadow-md text-center"
              >
                Apply Now
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;