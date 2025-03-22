'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Rajiv Kumar',
    role: 'CTO, TechSynergy Solutions',
    content: 'Instrek Technologies delivered exceptional AI solutions that transformed our data analytics capabilities. Their deep expertise and innovative approach helped us gain actionable insights from complex datasets.',
    image: '/placeholder-avatar-1.svg',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Innovation, SmartCity Initiatives',
    content: 'The IoT implementation by Instrek has been a game-changer for our smart city project. Their seamless integration of sensors and real-time monitoring has significantly improved urban management.',
    image: '/placeholder-avatar-2.svg',
  },
  {
    name: 'Arjun Desai',
    role: 'Director, FinTech Innovations',
    content: 'We partnered with Instrek for blockchain solutions, and they exceeded our expectations. Their secure and transparent ledger system has revolutionized our transaction verification process.',
    image: '/placeholder-avatar-3.svg',
  },
];

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle client-side hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  // Render static content for SSR, then enhance on client
  if (!mounted) {
    // Return a simple version that matches initial SSR
    return (
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Clients Say</h2>
            <div className="h-1 w-20 bg-blue-700 mx-auto mb-6"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-blue-100 dark:border-blue-900 overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <Image 
                      src={testimonials[0].image}
                      alt={testimonials[0].name}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{testimonials[0].name}</h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400">{testimonials[0].role}</p>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="relative">
                    <svg className="absolute -top-4 -left-4 w-10 h-10 text-blue-400 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-lg text-gray-700 dark:text-gray-300 italic">
                      {testimonials[0].content}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === 0 
                        ? 'bg-blue-600 dark:bg-blue-400' 
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    disabled
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Clients Say</h2>
          <div className="h-1 w-20 bg-blue-700 mx-auto mb-6"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-blue-100 dark:border-blue-900 overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <Image 
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{testimonials[activeIndex].name}</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">{testimonials[activeIndex].role}</p>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="relative">
                  <svg className="absolute -top-4 -left-4 w-10 h-10 text-blue-400 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-lg text-gray-700 dark:text-gray-300 italic">
                    {testimonials[activeIndex].content}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex 
                      ? 'bg-blue-600 dark:bg-blue-400' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
            <button
              onClick={prevTestimonial}
              className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
            <button
              onClick={nextTestimonial}
              className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 