// frontend/pages/about.js
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    { name: "Frontend Development", level: 90, icon: "💻" },
    { name: "Backend Development", level: 85, icon: "⚙️" },
    { name: "Database Design", level: 80, icon: "🗄️" },
    { name: "Cloud Services", level: 75, icon: "☁️" },
    { name: "DevOps", level: 70, icon: "🔄" },
    { name: "UI/UX Design", level: 85, icon: "🎨" }
  ];

  const experiences = [
    {
      title: "Senior Fullstack Developer",
      company: "Tech Innovations Inc.",
      period: "2020 - Present",
      description: "Leading development of scalable web applications using modern technologies."
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Co.",
      period: "2018 - 2020",
      description: "Developed responsive web applications with React and Vue.js frameworks."
    },
    {
      title: "Web Developer",
      company: "StartUp Ventures",
      period: "2016 - 2018",
      description: "Built and maintained company websites and customer portals."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-light">
      <Head>
        <title>About - Andriyansah Fullstack Platform</title>
        <meta name="description" content="Learn more about Andriyansah and his expertise" />
      </Head>

      {/* Navigation */}
      <nav className="bg-brand-dark text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Andriyansah</div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-primary-500 transition">Home</Link>
            <Link href="/about" className="text-blue-400 font-medium">About</Link>
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

      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold mb-4 text-gray-800"
          >
            About Me
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fullstack developer with expertise in building modern, scalable applications
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-5xl">👨‍💻</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Andriyansah</h2>
                <p className="text-gray-600 mb-4">Senior Fullstack Developer</p>
                <p className="text-gray-700">
                  Passionate about creating efficient, scalable solutions with clean, maintainable code.
                </p>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-3">Contact</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Email: contact@andriyansah.dev</p>
                    <p>Location: Indonesia</p>
                    <p>Available for freelance</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-2 space-y-12">
              {/* Experience */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-300">Experience</h2>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                          <p className="text-blue-600 font-medium">{exp.company}</p>
                        </div>
                        <span className="bg-gray-100 text-gray-800 py-1 px-3 rounded text-sm">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-600 mt-3">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Skills */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-300">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3">{skill.icon}</span>
                        <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <div className="text-right text-sm text-gray-600 mt-1">{skill.level}%</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Philosophy */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-white p-8 rounded-lg shadow"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">My Philosophy</h2>
                <p className="text-gray-700 leading-relaxed">
                  I believe in writing clean, maintainable code that solves real problems. 
                  My approach combines technical excellence with user-centered design to 
                  create applications that are both powerful and intuitive.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  With a focus on performance, security, and scalability, I build solutions 
                  that not only meet current needs but are also prepared for future growth.
                </p>
              </motion.div>
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