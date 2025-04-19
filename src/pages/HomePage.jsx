import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-6">Innovative IT Solutions for Your Business</h1>
              <p className="text-xl mb-8">Transform your business with cutting-edge technology solutions tailored to your needs.</p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Link to="/services" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md text-center">
                  Our Services
                </Link>
                <Link to="/contact" className="bg-transparent border border-white hover:bg-white hover:text-slate-900 text-white font-medium py-2 px-6 rounded-md text-center">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="mt-12 md:mt-0 md:w-5/12">
              <img src="https://www.1stcomputerservices.com/wp-content/uploads/2022/04/image-1600x900.png" alt="IT Solutions" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-600 text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl text-gray-600 font-bold mb-2">Web Development</h3>
              <p className="text-gray-600 mb-4">Custom web applications and responsive websites tailored to your business needs.</p>
              <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium">Learn more &rarr;</Link>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl text-gray-600 font-bold mb-2">Mobile Apps</h3>
              <p className="text-gray-600 mb-4">Native and cross-platform mobile applications for iOS and Android platforms.</p>
              <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium">Learn more &rarr;</Link>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                </svg>
              </div>
              <h3 className="text-xl text-gray-600 font-bold mb-2">Cloud Solutions</h3>
              <p className="text-gray-600 mb-4">Secure and scalable cloud infrastructure, migration, and management services.</p>
              <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium">Learn more &rarr;</Link>
            </div>
            
            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 className="text-xl text-gray-600 font-bold mb-2">IT Consulting</h3>
              <p className="text-gray-600 mb-4">Strategic IT consulting to optimize your technology infrastructure and processes.</p>
              <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium">Learn more &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About TrinityByte" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-5/12">
              <h2 className="text-3xl font-bold mb-6">About TrinityByte</h2>
              <p className="text-gray-600 mb-6">
                TrinityByte is a leading IT solutions provider with a passion for innovation. 
                We help businesses of all sizes leverage technology to achieve their goals and stay ahead of the competition.
              </p>
              <p className="text-gray-600 mb-8">
                With our team of experienced professionals, we deliver customized solutions that address your unique challenges and drive growth.
              </p>
              <Link to="/about" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md inline-block">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-600 text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/60/60" alt="Client" className="w-12 h-12 text-gray-600 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">CEO, Acme Corp</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "TrinityByte transformed our business with their innovative solutions. Their team was professional, responsive, and delivered beyond our expectations."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/60/60" alt="Client" className="w-12 h-12 text-gray-600 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-sm text-gray-500">CTO, TechStart Inc</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The cloud migration project handled by TrinityByte was seamless and efficient. Their technical expertise and attention to detail are unmatched."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/60/60" alt="Client" className="w-12 h-12 text-gray-600 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Jessica Patel</h4>
                  <p className="text-sm text-gray-500">Marketing Director, GlobalReach</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Our new website developed by TrinityByte has significantly increased our conversion rates. Their team understood our vision and brought it to life perfectly."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how TrinityByte can help you leverage technology to achieve your business goals.
          </p>
          <Link to="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md inline-block">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;