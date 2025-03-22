const services = [
  {
    title: 'Strategic Consulting',
    description: 'Expert guidance on technology roadmaps, digital transformation strategies, and innovation frameworks tailored to your organizational goals.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'AI Solutions',
    description: 'Custom AI applications, machine learning models, and intelligent automation systems to revolutionize your business processes.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Smart City Technologies',
    description: 'Integrated urban systems combining IoT, data analytics, and cloud infrastructure to create sustainable, efficient, and responsive cities.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
  {
    title: 'Blockchain Development',
    description: 'Secure, transparent solutions leveraging distributed ledger technology for supply chain, finance, healthcare and more.',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10',
  },
  {
    title: 'Workforce Training',
    description: 'Comprehensive training programs to upskill your team in AI, blockchain, cloud computing and other next-gen technologies.',
    icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
  },
  {
    title: 'Digital Transformation',
    description: 'End-to-end services to modernize legacy systems, optimize operations, and build future-ready digital infrastructure.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services & Solutions</h2>
          <div className="h-1 w-20 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology services designed to deliver innovation, efficiency, and competitive advantage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl p-8 transition-all hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-700 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 