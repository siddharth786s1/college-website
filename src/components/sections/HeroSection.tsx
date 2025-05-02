import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="ENCT Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10 mt-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
            Excellence in National Computing and Technology
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-delay">
            Shaping the future through innovation, technology, and education
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
            <Link 
              to="/admissions"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-md transition-colors shadow-md"
            >
              Apply Now
            </Link>
            <Link 
              to="/academics"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-md transition-colors"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="border-2 border-white rounded-full p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;