import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Lightbulb, Globe, Award } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import NewsCard from '../components/ui/NewsCard';
import { featuredNews } from '../data/newsData';
import ProgramCard from '../components/ui/ProgramCard';
import { programs } from '../data/programData';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Welcome to ENCT</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Excellence in National Computing and Technology (ENCT) is a premier institution dedicated to providing 
              world-class education in computing and technology. Our cutting-edge curriculum, experienced faculty, 
              and state-of-the-art facilities prepare students for successful careers in the ever-evolving tech industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <BookOpen className="text-blue-800" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
              <p className="text-gray-600">Rigorous programs designed to challenge and inspire students.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Lightbulb className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Cutting-edge research and technology integration in all programs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Globe className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Perspective</h3>
              <p className="text-gray-600">Diverse community with international faculty and student body.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Award className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Success</h3>
              <p className="text-gray-600">High job placement rates with leading technology companies.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Programs</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover our cutting-edge programs designed to prepare you for success in the rapidly evolving field of technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.slice(0, 3).map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/academics" 
              className="inline-flex items-center text-blue-700 hover:text-blue-800 font-semibold transition-colors"
            >
              View all programs <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-amber-400">25+</p>
              <p className="text-xl mt-2">Years of Excellence</p>
            </div>
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-amber-400">95%</p>
              <p className="text-xl mt-2">Graduate Employment</p>
            </div>
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-amber-400">120+</p>
              <p className="text-xl mt-2">Expert Faculty</p>
            </div>
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-amber-400">5,000+</p>
              <p className="text-xl mt-2">Alumni Worldwide</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest News */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest News & Events</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Stay updated with the latest happenings, achievements, and events at ENCT.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredNews.slice(0, 3).map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/news-events" 
              className="inline-flex items-center text-blue-700 hover:text-blue-800 font-semibold transition-colors"
            >
              View all news & events <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Join our community of innovators, creators, and future tech leaders. Apply now to secure your place at ENCT.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/admissions"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-md transition-colors shadow-md"
            >
              Apply Now
            </Link>
            <Link 
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;