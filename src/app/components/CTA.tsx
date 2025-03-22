import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-800 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Business with Next-Gen Technology?</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8">
            Partner with Instrek Technologies to navigate the future of intelligent automation and digital excellence. 
            Our experts are ready to help you implement cutting-edge solutions tailored to your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="#contact" 
              className="px-8 py-4 bg-white text-blue-800 font-medium rounded-lg shadow-md hover:bg-blue-50 transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="#services" 
              className="px-8 py-4 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              Explore Our Solutions
            </Link>
          </div>
          
          <p className="mt-8 text-blue-200">
            Join the hundreds of organizations leveraging our expertise to become future-ready.
          </p>
        </div>
      </div>
    </section>
  );
} 