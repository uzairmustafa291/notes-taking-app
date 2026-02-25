const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI;
  
  if (!mongoURI) {
    console.error('❌ ERROR: MONGODB_URI environment variable is not set!');
    console.error('Please add MONGODB_URI to your environment variables.');
    if (process.env.NODE_ENV === 'production') {
      console.error('For Vercel: Add MONGODB_URI in Project Settings → Environment Variables');
    }
    throw new Error('MONGODB_URI is required');
  }

  try {
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    if (process.env.NODE_ENV === 'production') {
      throw error;
    }
    process.exit(1);
  }
};

module.exports = connectDB;
