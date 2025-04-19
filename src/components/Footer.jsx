import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">TrinityByte</h3>
            <p className="text-sm text-gray-300">
              Delivering innovative IT solutions for businesses of all sizes. Empower your digital transformation journey with TrinityByte.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-white">Web Development</Link></li>
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-white">Mobile Apps</Link></li> 
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-white">IT Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="text-sm text-gray-300 not-italic">
              <p>Bansree, Rampura</p>
              <p>Dhaka, Bangladesh</p>
              <p className="mt-2">contact@trinitybyte.com</p>
              <p>12345678</p>
            </address>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-center text-sm text-gray-300">
            &copy; {new Date().getFullYear()} TrinityByte IT Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;