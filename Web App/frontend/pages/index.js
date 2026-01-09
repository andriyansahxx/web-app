// frontend/pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const features = [
    {
      title: "Portfolio Showcase",
      description: "Display your projects and achievements in a modern interface",
      icon: "💼"
    },
    {
      title: "Digital Products",
      description: "Present your digital products and services effectively",
      icon: "🛒"
    },
    {
      title: "Technology Blog",
      description: "Share your technical knowledge and insights",
      icon: "📝"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-light">
      <Head>
        <title>Andriyansah - Fullstack Developer</title>
        <meta name="description" content="Personal tech platform by Andriyansah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-brand-dark text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="text-xl font-bold"
          >
            Andriyansah
          </motion.div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-primary-500 transition">Home</Link>
            <Link href="/about" className="hover:text-primary-500 transition">About</Link>
            <Link href="/projects" className="hover:text-primary-500 transition">Projects</Link>
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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-800"
          >
            Fullstack Developer & Tech Enthusiast
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Building modern, scalable solutions with clean design and performance-first approach
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <Link href="/projects" className="brand-btn">
              View Projects
            </Link>
            <Link href="/contact" className="brand-btn-secondary">
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Platform Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index }}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About This Platform</h2>
            <p className="text-lg text-gray-300 mb-8">
              This platform represents a modern, scalable, and modular approach to personal tech branding. 
              Designed with clean design principles, performance-first approach, and security awareness.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-2xl font-bold text-primary-500">Clean</div>
                <div className="text-sm">Design</div>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-2xl font-bold text-primary-500">Fast</div>
                <div className="text-sm">Performance</div>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-2xl font-bold text-primary-500">Secure</div>
                <div className="text-sm">Protected</div>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-2xl font-bold text-primary-500">Scalable</div>
                <div className="text-sm">Growth Ready</div>
              </div>
            </div>
          </div>
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