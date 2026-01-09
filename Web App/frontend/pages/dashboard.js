// frontend/pages/dashboard.js
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProjects: 0,
    totalPosts: 0,
    recentActivity: []
  });

  // Simulate fetching user data and stats
  useEffect(() => {
    // In a real app, this would be an API call
    const mockUser = {
      id: 1,
      email: 'admin@example.com',
      firstName: 'Andriyansah',
      lastName: 'Admin',
      role: 'admin'
    };
    
    setUser(mockUser);
    
    // Mock stats
    setStats({
      totalUsers: 42,
      totalProjects: 15,
      totalPosts: 28,
      recentActivity: [
        { id: 1, action: 'User registered', user: 'John Doe', time: '2 minutes ago' },
        { id: 2, action: 'Project updated', user: 'Jane Smith', time: '15 minutes ago' },
        { id: 3, action: 'New post published', user: 'Admin', time: '1 hour ago' },
        { id: 4, action: 'Contact inquiry', user: 'Visitor', time: '2 hours ago' }
      ]
    });
  }, []);

  const menuItems = [
    { name: 'Users', path: '/dashboard/users', icon: '👥' },
    { name: 'Projects', path: '/dashboard/projects', icon: '💼' },
    { name: 'Blog Posts', path: '/dashboard/posts', icon: '📝' },
    { name: 'Services', path: '/dashboard/services', icon: '⚙️' },
    { name: 'Contact Inquiries', path: '/dashboard/contacts', icon: '📧' },
    { name: 'Analytics', path: '/dashboard/analytics', icon: '📊' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Admin Dashboard - Andriyansah Platform</title>
        <meta name="description" content="Admin dashboard for Andriyansah platform" />
      </Head>

      {/* Navigation */}
      <nav className="bg-brand-dark text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Admin Dashboard</div>
          <div className="flex items-center space-x-4">
            <span>Welcome, {user ? `${user.firstName} ${user.lastName}` : 'Admin'}</span>
            <Link href="/" className="bg-gray-700 hover:bg-gray-600 py-1 px-3 rounded text-sm">
              View Site
            </Link>
            <button className="bg-red-600 hover:bg-red-700 py-1 px-3 rounded text-sm">
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-6">Dashboard Menu</h2>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    href={item.path}
                    className="flex items-center p-3 hover:bg-gray-100 rounded transition-colors"
                  >
                    <span className="text-xl mr-3">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white p-6 rounded-lg shadow text-center"
              >
                <div className="text-3xl font-bold text-blue-600">{stats.totalUsers}</div>
                <div className="text-gray-600">Total Users</div>
              </motion.div>
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow text-center"
              >
                <div className="text-3xl font-bold text-green-600">{stats.totalProjects}</div>
                <div className="text-gray-600">Projects</div>
              </motion.div>
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow text-center"
              >
                <div className="text-3xl font-bold text-purple-600">{stats.totalPosts}</div>
                <div className="text-gray-600">Blog Posts</div>
              </motion.div>
            </div>

            {/* Recent Activity */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow"
            >
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {stats.recentActivity.map((activity) => (
                  <div key={activity.id} className="flex justify-between items-center border-b pb-2">
                    <div>
                      <div className="font-medium">{activity.action}</div>
                      <div className="text-sm text-gray-600">by {activity.user}</div>
                    </div>
                    <div className="text-sm text-gray-500">{activity.time}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow"
            >
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="brand-btn py-2">Create User</button>
                <button className="brand-btn py-2">Add Project</button>
                <button className="brand-btn py-2">Write Post</button>
                <button className="brand-btn py-2">View Reports</button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}