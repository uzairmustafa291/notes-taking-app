import express from 'express';
import dotenv from 'dotenv';
import connectDB from '../../backend/config/db.js';
import { authenticate } from '../../backend/middleware/auth.js';
import noteRoutes from '../../backend/routes/noteRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB for each request
await connectDB();

// Routes
app.use('/api/notes', noteRoutes);

export default app;
