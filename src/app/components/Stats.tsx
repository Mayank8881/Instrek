'use client';

import { useState, useEffect, useRef } from 'react';

const stats = [
  { id: 1, value: 150, label: 'Projects Delivered', suffix: '+' },
  { id: 2, value: 98, label: 'Client Satisfaction', suffix: '%' },
  { id: 3, value: 25, label: 'Expert Team Members', suffix: '+' },
  { id: 4, value: 5, label: 'Years of Excellence', suffix: '+' },
];

export default function Stats() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  const [counters, setCounters] = useState(stats.map(() => 0));

  // Handle client-side hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.disconnect();
      }
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted || !isVisible) return;

    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounters(prev => {
          const newCounters = [...prev];
          if (newCounters[index] < stat.value) {
            newCounters[index] = Math.min(
              newCounters[index] + Math.ceil(stat.value / 20),
              stat.value
            );
          }
          return newCounters;
        });
      }, 50);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isVisible, mounted]);

  return (
    <section ref={statsRef} className="py-16 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Impact by Numbers</h2>
          <div className="h-1 w-20 bg-blue-700 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center transform transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl sm:text-5xl font-bold text-blue-700 dark:text-blue-400 mb-2 flex items-center justify-center">
                <span>{mounted ? counters[index] : 0}</span>
                <span>{stat.suffix}</span>
              </div>
              <div className="text-gray-700 dark:text-gray-300 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 