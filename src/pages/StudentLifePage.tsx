import React from 'react';

const StudentLifePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Student Life</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Campus Life Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Campus Life</h2>
          <p className="text-gray-600 mb-4">
            Experience a vibrant and engaging campus community with numerous opportunities
            for personal growth, leadership development, and lifelong friendships.
          </p>
        </div>

        {/* Student Organizations Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Student Organizations</h2>
          <p className="text-gray-600 mb-4">
            Join one of our many student-led organizations and clubs that cater to various
            interests, from academic societies to cultural groups.
          </p>
        </div>

        {/* Athletics & Recreation Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Athletics & Recreation</h2>
          <p className="text-gray-600 mb-4">
            Stay active and healthy with our comprehensive athletics programs and
            state-of-the-art recreational facilities.
          </p>
        </div>

        {/* Housing Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Housing</h2>
          <p className="text-gray-600 mb-4">
            Discover comfortable and convenient on-campus housing options that provide
            a supportive living and learning environment.
          </p>
        </div>

        {/* Dining Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dining Services</h2>
          <p className="text-gray-600 mb-4">
            Enjoy diverse dining options across campus, featuring fresh, healthy meals
            and accommodating various dietary preferences.
          </p>
        </div>

        {/* Support Services Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Support Services</h2>
          <p className="text-gray-600 mb-4">
            Access comprehensive support services including counseling, health care,
            academic advising, and career guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentLifePage;