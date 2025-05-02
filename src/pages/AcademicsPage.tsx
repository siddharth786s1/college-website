import React, { useState } from 'react';
import { programs } from '../data/programData';
import ProgramCard from '../components/ui/ProgramCard';

const AcademicsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const levels = ['Undergraduate', 'Graduate', 'Doctorate', 'Certificate'];
  
  const filteredPrograms = activeFilter === 'all' 
    ? programs 
    : programs.filter(program => program.level === activeFilter);
  
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Programs</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Discover our cutting-edge programs designed to prepare you for success in the technology industry.
            </p>
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Programs</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From undergraduate degrees to specialized certificates, we offer a wide range of programs to fit your career goals.
            </p>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeFilter === 'all'
                  ? 'bg-blue-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Programs
            </button>
            
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setActiveFilter(level)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeFilter === level
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
          
          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Academic Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Academic Approach</h2>
              <p className="text-gray-700 mb-4">
                At ENCT, we believe in a holistic approach to education that combines theoretical knowledge with practical skills and real-world experience. Our curriculum is designed to be dynamic and responsive to the rapidly evolving technology landscape.
              </p>
              <p className="text-gray-700 mb-4">
                Key elements of our academic approach include:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-700 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Industry-aligned curriculum</strong> that prepares students for current and future industry needs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-700 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Experiential learning</strong> through projects, internships, and collaborative work</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-700 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Research opportunities</strong> that allow students to explore cutting-edge technologies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-700 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Personalized learning paths</strong> that cater to individual interests and career goals</span>
                </li>
              </ul>
              <p className="text-gray-700">
                Our faculty members are not just teachers but mentors and guides who are committed to helping each student achieve their full potential. With small class sizes and a supportive learning environment, we ensure that every student receives the attention and guidance they need to succeed.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Collaborative Learning" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Research Lab" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Project Work" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Technology Lab" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Academic Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Resources</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We provide a wealth of resources to support your academic journey at ENCT.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Library Resources</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Extensive digital and print collections</li>
                <li>Online research databases</li>
                <li>Research guides and tutorials</li>
                <li>Interlibrary loan services</li>
                <li>Research consultation with librarians</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Technology Labs</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Computer labs with specialized software</li>
                <li>Hardware and networking labs</li>
                <li>Virtual reality and simulation labs</li>
                <li>Robotics and IoT workspaces</li>
                <li>Cloud computing resources</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Academic Support</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Tutorial services</li>
                <li>Writing and communication center</li>
                <li>Academic advising</li>
                <li>Study groups and peer mentoring</li>
                <li>Disability services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;