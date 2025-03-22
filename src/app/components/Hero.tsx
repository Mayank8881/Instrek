import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
      
      {/* Particles overlay */}
      <div className="absolute inset-0 opacity-30 particles-animation" style={{ backgroundImage: 'url(/images/particles.svg)' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="text-center md:text-left md:w-1/2 lg:pr-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Shaping the Future with <span className="text-blue-300">Next-Gen</span> Digital Solutions
            </h1>
            
            {/* Mobile Hero Image */}
            <div className="block md:hidden w-full mt-6 mb-8">
              <div className="relative h-[200px] w-full pulse-glow">
                <Image
                  src="/images/hero-image.svg"
                  alt="Instrek Technologies - AI, IoT and Blockchain Solutions"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto md:mx-0">
              Empowering businesses, governments, and institutions with cutting-edge AI, IoT, Blockchain and intelligent automation solutions.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
              <Link 
                href="#services" 
                className="inline-block px-6 py-3 bg-white text-blue-800 font-medium rounded-lg shadow-md hover:bg-blue-50 transition-colors"
              >
                Explore Solutions
              </Link>
              <Link 
                href="#contact" 
                className="inline-block px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Desktop Hero Image */}
          <div className="hidden md:block md:w-1/2 mt-12 md:mt-0">
            <div className="relative h-[400px] lg:h-[500px] w-full floating-animation pulse-glow">
              <Image
                src="/images/hero-image.svg"
                alt="Instrek Technologies - AI, IoT and Blockchain Solutions"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-[#0a0a0a] to-transparent"></div>
    </section>
  );
} 