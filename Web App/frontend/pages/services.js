// frontend/pages/services.js
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Next.js, Node.js, and more.",
      features: [
        "Responsive design",
        "Performance optimization",
        "SEO friendly",
        "Cross-browser compatibility"
      ],
      price: "$2000+",
      duration: "4-8 weeks"
    },
    {
      id: 2,
      title: "API Development",
      description: "Robust and scalable APIs designed for your business needs with security and performance in mind.",
      features: [
        "RESTful design",
        "Authentication & Authorization",
        "Rate limiting",
        "Documentation"
      ],
      price: "$1500+",
      duration: "2-4 weeks"
    },
    {
      id: 3,
      title: "Database Design",
      description: "Efficient database architecture and optimization for your applications.",
      features: [
        "Schema design",
        "Performance tuning",
        "Migration planning",
        "Backup strategies"
      ],
      price: "$1000+",
      duration: "1-3 weeks"
    },
    {
      id: 4,
      title: "Consulting",
      description: "Technical guidance and architecture planning for your projects.",
      features: [
        "Architecture review",
        "Technology selection",
        "Security assessment",
        "Performance audit"
      ],
      price: "$150/hour",
      duration: "As needed"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-light">
      <Head>
        <title>Services - Andriyansah Fullstack Platform</title>
        <meta name="description" content="Services offered by Andriyansah" />
      </Head>

      {/* Navigation */}
      <nav className="bg-brand-dark text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Andriyansah</div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-primary-500 transition">Home</Link>
            <Link href="/about" className="hover:text-primary-500 transition">About</Link>
            <Link href="/projects" className="hover:text-primary-500 transition">Projects</Link>
            <Link href="/services" className="text-blue-400 font-medium">Services</Link>
            <Link href="/blog" className="hover:text-primary-500 transition">Blog</Link>
            <Link href="/contact" className="hover:text-primary-500 transition">Contact</Link>
          </div>
          <div>
            <Link href="/dashboard" className="brand-btn text-sm py-1 px-3">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold mb-4 text-gray-800"
          >
            Services
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional development services tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">What's included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                      <div className="text-gray-600 text-sm">{service.duration}</div>
                    </div>
                    <Link href="/contact" className="brand-btn">
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">My Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Discovery", description: "Understanding your needs and requirements" },
              { step: 2, title: "Planning", description: "Creating a roadmap and timeline" },
              { step: 3, title: "Development", description: "Building your solution with best practices" },
              { step: 4, title: "Delivery", description: "Testing, deployment, and handoff" }
            ].map((phase, index) => (
              <motion.div 
                key={phase.step}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss how I can help bring your ideas to life.
          </p>
          <Link href="/contact" className="inline-block brand-btn text-lg py-3 px-8">
            Contact Me
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Andriyansah Fullstack Platform. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Building modern tech solutions</p>
        </div>
      </footer>
    </div>
  );
}