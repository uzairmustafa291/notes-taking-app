const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = require('../../backend/config/db');
const authRoutes = require('../../backend/routes/authRoutes');
const noteRoutes = require('../../backend/routes/noteRoutes');
const errorHandler = require('../../backend/middleware/errorHandler');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB on each request
let dbConnected = false;
app.use(async (req, res, next) => {
  if (!dbConnected) {
    try {
      await connectDB();
      dbConnected = true;
    } catch (err) {
      console.log('DB Connection Error:', err);
    }
  }
  next();
});

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

// Routes
app.use('/auth', authRoutes);
app.use('/notes', noteRoutes);

// 404 handling
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handling
app.use(errorHandler);

// Export as serverless handler
module.exports = app;
