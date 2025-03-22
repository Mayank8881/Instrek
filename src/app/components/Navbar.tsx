'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-700">Instrek</span>
              <span className="ml-1 text-xl font-semibold text-gray-900">Technologies</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-blue-700 font-medium">About</Link>
            <Link href="#technologies" className="text-gray-700 hover:text-blue-700 font-medium">Technologies</Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-700 font-medium">Services</Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-700 font-medium">Contact</Link>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-700 focus:outline-none"
            >
              {mounted && isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mounted && isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-700 font-medium">About</Link>
            <Link href="#technologies" className="block px-3 py-2 text-gray-700 hover:text-blue-700 font-medium">Technologies</Link>
            <Link href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-700 font-medium">Services</Link>
            <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-700 font-medium">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
} 