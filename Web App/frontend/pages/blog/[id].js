// frontend/pages/blog/[id].js
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BlogPost({ post }) {
  // For demo purposes, we'll use mock data
  const mockPost = {
    id: 1,
    title: "Getting Started with React and Next.js",
    content: `
      <p>React and Next.js have revolutionized the way we build modern web applications. In this comprehensive guide, we'll explore the fundamentals of creating a powerful web application using these technologies.</p>
      
      <h2>Why React?</h2>
      <p>React has become the go-to library for building user interfaces due to its component-based architecture, virtual DOM, and extensive ecosystem. Its declarative approach makes it easier to reason about your application's state and UI.</p>
      
      <h2>Next.js Advantages</h2>
      <p>Next.js builds on top of React to provide additional features like server-side rendering, static site generation, and API routes. These features make it an excellent choice for production applications that need SEO, performance, and scalability.</p>
      
      <h2>Setting Up Your First Project</h2>
      <p>Getting started with Next.js is straightforward. You can create a new project using the create-next-app command:</p>
      
      <pre><code>npm create next-app@latest my-app --typescript</code></pre>
      
      <p>This command creates a new Next.js project with TypeScript support, which is highly recommended for larger applications.</p>
      
      <h2>Best Practices</h2>
      <p>When building with React and Next.js, consider these best practices:</p>
      
      <ul>
        <li>Use TypeScript for better code quality and maintainability</li>
        <li>Implement proper state management with Context API or libraries like Redux</li>
        <li>Optimize performance with code splitting and lazy loading</li>
        <li>Follow accessibility guidelines to make your app usable for everyone</li>
        <li>Implement proper error boundaries to handle unexpected errors gracefully</li>
      </ul>
      
      <p>By following these practices and leveraging the power of React and Next.js, you can build scalable, performant, and maintainable web applications that provide excellent user experiences.</p>
    `,
    date: "January 15, 2024",
    readTime: "5 min read",
    tags: ["React", "Next.js", "Frontend", "JavaScript"],
    author: "Andriyansah"
  };

  return (
    <div className="min-h-screen bg-brand-light">
      <Head>
        <title>{mockPost.title} - Andriyansah Blog</title>
        <meta name="description" content={mockPost.title} />
      </Head>

      {/* Navigation */}
      <nav className="bg-brand-dark text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Andriyansah</div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-primary-500 transition">Home</Link>
            <Link href="/about" className="hover:text-primary-500 transition">About</Link>
            <Link href="/projects" className="hover:text-primary-500 transition">Projects</Link>
            <Link href="/services" className="hover:text-primary-500 transition">Services</Link>
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

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.article
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {mockPost.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{mockPost.title}</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span>By {mockPost.author}</span>
              <span className="mx-2">•</span>
              <span>{mockPost.date}</span>
              <span className="mx-2">•</span>
              <span>{mockPost.readTime}</span>
            </div>
          </div>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: mockPost.content }}
          ></div>
        </motion.article>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Andriyansah Fullstack Platform. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Building modern tech solutions</p>
        </div>
      </footer>
    </div>
  );
}