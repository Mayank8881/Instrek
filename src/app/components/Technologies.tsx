import Image from 'next/image';

const technologies = [
  {
    name: 'Artificial Intelligence',
    description: 'Advanced AI solutions including machine learning, deep learning, and neural networks to automate processes and derive insights.',
    icon: '/ai-icon.svg',
  },
  {
    name: 'Internet of Things',
    description: 'Connected device ecosystems that collect and exchange data, enabling smart operations and real-time monitoring.',
    icon: '/iot-icon.svg',
  },
  {
    name: 'AIoT',
    description: 'Combining AI with IoT to create intelligent systems that can learn, adapt and make autonomous decisions.',
    icon: '/aiot-icon.svg',
  },
  {
    name: 'Blockchain',
    description: 'Secure, transparent and immutable distributed ledger technologies for various applications beyond cryptocurrencies.',
    icon: '/blockchain-icon.svg',
  },
  {
    name: 'Cloud Computing',
    description: 'Scalable cloud infrastructure and solutions that enable businesses to grow without hardware limitations.',
    icon: '/cloud-icon.svg',
  },
  {
    name: 'Conversational AI',
    description: 'Natural language processing systems that enable human-like interactions between computers and humans.',
    icon: '/conversational-ai-icon.svg',
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Next-Gen Technologies</h2>
          <div className="h-1 w-20 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            We specialize in cutting-edge technologies that drive innovation and digital transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Image 
                    src={tech.icon} 
                    alt={tech.name} 
                    width={24} 
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{tech.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 