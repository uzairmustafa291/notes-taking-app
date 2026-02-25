const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = require('../../backend/config/db');
const { authenticate } = require('../../backend/middleware/auth');
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

// Connect to MongoDB
connectDB().catch(err => console.log('DB Connection Error:', err));

// Routes
app.use('/auth', authRoutes);
app.use('/notes', noteRoutes);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

// Error handling
app.use(errorHandler);

module.exports = app;
