import React from 'react';
import RegistrationForm from '../components/ui/RegistrationForm';

const AdmissionsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Admissions</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Join Our Academic Community</h2>
        <p className="text-lg text-gray-600 mb-4">
          We welcome ambitious students who are ready to embark on their educational journey. 
          Our admissions process is designed to be thorough yet accessible, ensuring we find 
          students who will thrive in our academic environment.
        </p>
      </section>

      <section className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Apply Now</h2>
        <RegistrationForm />
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Admission Requirements</h3>
          <ul className="space-y-3 text-gray-600">
            <li>• Completed application form</li>
            <li>• Academic transcripts</li>
            <li>• Letters of recommendation</li>
            <li>• Personal statement</li>
            <li>• Standardized test scores (if applicable)</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Important Dates</h3>
          <ul className="space-y-3 text-gray-600">
            <li>• Early Decision: November 1</li>
            <li>• Regular Decision: January 15</li>
            <li>• Transfer Applications: March 1</li>
            <li>• Financial Aid Priority: February 1</li>
          </ul>
        </div>
      </section>

      <section className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Application Process</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Submit Application</h3>
            <p className="text-gray-600">Complete and submit your online application with all required documents.</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Review Process</h3>
            <p className="text-gray-600">Our admissions team will carefully review your application materials.</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Decision</h3>
            <p className="text-gray-600">Receive your admissions decision and next steps information.</p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Admissions</h2>
        <p className="text-lg text-gray-600 mb-6">
          Have questions about the admissions process? Our admissions team is here to help.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
            <p className="text-gray-600">Email: admissions@university.edu</p>
            <p className="text-gray-600">Phone: (555) 123-4567</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;