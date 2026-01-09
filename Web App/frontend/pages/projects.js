// frontend/pages/projects.js
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment processing and inventory management.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      imageUrl: "/placeholder-project1.jpg",
      projectUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management solution with real-time updates.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      imageUrl: "/placeholder-project2.jpg",
      projectUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Health Tracker API",
      description: "RESTful API for health and fitness tracking applications.",
      technologies: ["Express", "MongoDB", "JWT"],
      imageUrl: "/placeholder-project3.jpg",
      projectUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "AI Content Generator",
      description: "Tool that generates marketing content using artificial intelligence.",
      technologies: ["Python", "TensorFlow", "FastAPI"],
      imageUrl: "/placeholder-project4.jpg",
      projectUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-light">
      <Head>
        <title>Projects - Andriyansah Fullstack Platform</title>
        <meta name="description" content="Portfolio of projects by Andriyansah" />
      </Head>

      {/* Navigation */}
      <nav className="bg-brand-dark text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Andriyansah</div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-primary-500 transition">Home</Link>
            <Link href="/about" className="hover:text-primary-500 transition">About</Link>
            <Link href="/projects" className="text-blue-400 font-medium">Projects</Link>
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
            My Projects
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my work and technical expertise across various domains
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Project Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.projectUrl} 
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    >
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a 
                      href={project.githubUrl} 
                      className="text-gray-600 hover:text-gray-800 font-medium flex items-center"
                    >
                      Source Code
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in collaborating?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Have a project in mind? Let's work together to bring your ideas to life.
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