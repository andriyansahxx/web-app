// frontend/pages/blog.js
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React and Next.js",
      excerpt: "Learn how to build modern web applications with React and Next.js framework.",
      date: "January 15, 2024",
      readTime: "5 min read",
      tags: ["React", "Next.js", "Frontend"],
      imageUrl: "/placeholder-blog1.jpg"
    },
    {
      id: 2,
      title: "Building Scalable APIs with Node.js",
      excerpt: "Best practices for creating robust and scalable backend services using Node.js.",
      date: "January 10, 2024",
      readTime: "8 min read",
      tags: ["Node.js", "Backend", "API"],
      imageUrl: "/placeholder-blog2.jpg"
    },
    {
      id: 3,
      title: "Database Design Principles",
      excerpt: "Understanding the fundamentals of effective database design for web applications.",
      date: "January 5, 2024",
      readTime: "6 min read",
      tags: ["Database", "Design", "PostgreSQL"],
      imageUrl: "/placeholder-blog3.jpg"
    },
    {
      id: 4,
      title: "Security Best Practices for Web Apps",
      excerpt: "Essential security measures to protect your web applications from common threats.",
      date: "December 28, 2023",
      readTime: "10 min read",
      tags: ["Security", "Authentication", "Best Practices"],
      imageUrl: "/placeholder-blog4.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-light">
      <Head>
        <title>Blog - Andriyansah Fullstack Platform</title>
        <meta name="description" content="Tech articles and insights by Andriyansah" />
      </Head>

      {/* Navigation */}
      <nav className="bg-brand-dark text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Andriyansah</div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-primary-500 transition">Home</Link>
            <Link href="/about" className="hover:text-primary-500 transition">About</Link>
            <Link href="/projects" className="hover:text-primary-500 transition">Projects</Link>
            <Link href="/blog" className="text-blue-400 font-medium">Blog</Link>
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
            Tech Blog
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on modern web development and technology
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Blog Image</span>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="mt-4">
                    <Link href={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                      Read Article
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="brand-btn py-3 px-8">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Subscribe to my newsletter to receive updates on new articles and tech insights.
          </p>
          
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none"
            />
            <button className="bg-green-600 hover:bg-green-700 py-3 px-6 rounded-r-lg font-medium">
              Subscribe
            </button>
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