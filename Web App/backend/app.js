// backend/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Import security middleware
const {
  generalLimiter,
  sanitizeInput,
  sanitizeQuery,
  sanitizeParams,
  corsOptions,
  securityHeaders
} = require('./src/middlewares/security');

// Import routes
const authRoutes = require('./src/routes/auth');
const userRoutes = require('./src/routes/users');
const projectRoutes = require('./src/routes/projects');
const blogRoutes = require('./src/routes/blog');

const app = express();
const PORT = process.env.PORT || 5000;

// Security headers
app.use(securityHeaders);

// Security middleware
app.use(helmet());
app.use(cors(corsOptions));

// Rate limiting
app.use(generalLimiter);

// Input sanitization
app.use(sanitizeInput);
app.use(sanitizeQuery);
app.use(sanitizeParams);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/blog', blogRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Andriyansah Fullstack Platform API',
    status: 'running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;