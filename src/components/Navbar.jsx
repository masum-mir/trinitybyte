import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import { Home } from 'lucide-react';
import { Code } from 'lucide-react';
import { Users } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import { Send } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Terminal } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Database } from 'lucide-react';
import { BarChart } from 'lucide-react';
import { Cloud } from 'lucide-react';
import { Globe } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-color text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-xl font-bold">TrinityByte</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={({isActive}) => 
                isActive ? "bg-slate-800 px-3 py-2 rounded-md text-sm font-medium" : "px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700"
              }>Home</NavLink>
              <NavLink to="/services" className={({isActive}) => 
                isActive ? "bg-slate-800 px-3 py-2 rounded-md text-sm font-medium" : "px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700"
              }>Services</NavLink>
              <NavLink to="/about" className={({isActive}) => 
                isActive ? "bg-slate-800 px-3 py-2 rounded-md text-sm font-medium" : "px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700"
              }>About</NavLink>
              <NavLink to="/contact" className={({isActive}) => 
                isActive ? "bg-slate-800 px-3 py-2 rounded-md text-sm font-medium" : "px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700"
              }>Contact</NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={({isActive}) => 
              isActive ? "bg-slate-800 block px-3 py-2 rounded-md text-base font-medium" : "block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700"
            } onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/services" className={({isActive}) => 
              isActive ? "bg-slate-800 block px-3 py-2 rounded-md text-base font-medium" : "block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700"
            } onClick={toggleMenu}>Services</NavLink>
            <NavLink to="/about" className={({isActive}) => 
              isActive ? "bg-slate-800 block px-3 py-2 rounded-md text-base font-medium" : "block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700"
            } onClick={toggleMenu}>About</NavLink>
            <NavLink to="/contact" className={({isActive}) => 
              isActive ? "bg-slate-800 block px-3 py-2 rounded-md text-base font-medium" : "block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700"
            } onClick={toggleMenu}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
 
}

export default Navbar;