// frontend/components/Layout.js
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children, title = 'Andriyansah - Fullstack Developer' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
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
            <Link href="/">Andriyansah</Link>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-primary-500 transition">Home</Link>
            <Link href="/about" className="hover:text-primary-500 transition">About</Link>
            <Link href="/projects" className="hover:text-primary-500 transition">Projects</Link>
            <Link href="/services" className="hover:text-primary-500 transition">Services</Link>
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

      <main>{children}</main>
    </>
  );
};

export default Layout;