import React from 'react';
import { Briefcase, Users, Shield, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ENCT</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Excellence in National Computing and Technology (ENCT) is committed to providing high-quality education in computing and technology disciplines.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2000 by visionaries Siddharth and Priya, ENCT began as a small institute with a big dream: to transform technology education in the country. What started as a modest operation with just three classrooms and fifty students has now grown into one of the nation's premier institutions for computing and technology education.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we have expanded our campus, diversified our programs, and built a community of scholars and innovators. Our journey has been marked by a relentless pursuit of excellence, a commitment to innovation, and a passion for nurturing the next generation of technology leaders.
              </p>
              <p className="text-gray-700">
                Today, ENCT stands as a testament to the vision of its founders and the dedication of its faculty, staff, and students. We continue to evolve and adapt to the changing landscape of technology, always staying true to our mission of providing exceptional education and fostering innovation.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="ENCT Campus" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-6 rounded-lg shadow-lg md:max-w-xs">
                <p className="font-bold text-xl mb-2">25+ Years</p>
                <p>Of excellence in technology education</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission, Vision & Values</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Guiding principles that shape our institution and educational approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Target className="text-blue-800" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To educate and inspire the next generation of technology leaders through innovative teaching, 
                cutting-edge research, and meaningful engagement with industry and community.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Briefcase className="text-blue-800" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be a globally recognized center of excellence in computing and technology education, 
                known for producing graduates who are innovative, ethical, and ready to tackle the world's most pressing challenges.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Shield className="text-blue-800" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <ul className="text-gray-700 space-y-2">
                <li><span className="font-semibold">Excellence:</span> Pursuing the highest standards in all we do</li>
                <li><span className="font-semibold">Innovation:</span> Embracing new ideas and approaches</li>
                <li><span className="font-semibold">Integrity:</span> Acting with honesty and transparency</li>
                <li><span className="font-semibold">Inclusivity:</span> Valuing diversity and fostering belonging</li>
                <li><span className="font-semibold">Impact:</span> Making a positive difference in society</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Founders */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Founders</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Meet the visionaries who established ENCT and set it on a path to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Siddharth" 
                className="w-48 h-48 object-cover rounded-full shadow-md mx-auto md:mx-0"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-4 md:mt-0 text-center md:text-left">Dr. Siddharth Verma</h3>
                <p className="text-blue-700 font-medium mb-4 text-center md:text-left">Co-Founder & Chairman</p>
                <p className="text-gray-700">
                  Dr. Siddharth Verma is a renowned technologist with over 30 years of experience in the industry. With a Ph.D. in Computer Science from MIT and experience working with leading tech companies, he brings a wealth of knowledge and expertise to ENCT. His vision for creating a world-class institution that bridges academia and industry has been the driving force behind ENCT's success.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img 
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Priya" 
                className="w-48 h-48 object-cover rounded-full shadow-md mx-auto md:mx-0"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-4 md:mt-0 text-center md:text-left">Dr. Priya Sharma</h3>
                <p className="text-blue-700 font-medium mb-4 text-center md:text-left">Co-Founder & President</p>
                <p className="text-gray-700">
                  Dr. Priya Sharma is a distinguished educator and researcher with a passion for technology innovation. With a Ph.D. in Educational Technology from Stanford University and extensive experience in developing innovative teaching methodologies, she has been instrumental in shaping ENCT's academic curriculum and research initiatives. Her focus on experiential learning and industry collaboration has set ENCT apart from traditional institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Campus */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Campus</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Experience our state-of-the-art facilities designed to foster learning, innovation, and collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="ENCT Library" 
                className="w-full h-60 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-lg mb-1">Modern Library</h3>
                <p className="text-gray-700">A vast collection of resources and comfortable study spaces.</p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="ENCT Tech Labs" 
                className="w-full h-60 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-lg mb-1">Advanced Tech Labs</h3>
                <p className="text-gray-700">Cutting-edge equipment for research and learning.</p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="ENCT Student Center" 
                className="w-full h-60 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-lg mb-1">Student Center</h3>
                <p className="text-gray-700">Collaborative spaces for students to relax and connect.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Meet the dedicated professionals who lead our institution with vision and commitment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Dean of Academics" 
                className="w-40 h-40 object-cover rounded-full shadow-md mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">Dr. Michael Chen</h3>
              <p className="text-blue-700 font-medium">Dean of Academics</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Research Director" 
                className="w-40 h-40 object-cover rounded-full shadow-md mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">Dr. Sarah Johnson</h3>
              <p className="text-blue-700 font-medium">Director of Research</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Student Affairs" 
                className="w-40 h-40 object-cover rounded-full shadow-md mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">Robert Williams</h3>
              <p className="text-blue-700 font-medium">VP of Student Affairs</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Industry Relations" 
                className="w-40 h-40 object-cover rounded-full shadow-md mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">Dr. Aisha Patel</h3>
              <p className="text-blue-700 font-medium">Director of Industry Relations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;