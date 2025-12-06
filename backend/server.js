const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Import routes
const authRoutes = require('./routes/auth');
const recommendationsRoutes = require('./routes/recommendations');

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/recommendations', recommendationsRoutes);

// Simple get endpoint
app.get('/', (req, res) => {
  res.send('THROUGHOUT HEAVEN AND EARTH, I ALONE AM THE HONOURED ONE');
});

// Connect to MongoDB with fallback and increased timeouts
const connectWithFallback = async () => {
  const primaryUri = process.env.MONGODB_URI;
  const fallbackUri = 'mongodb://localhost:27017/aeturnus';

  const connectOptions = {
    // increase timeout to allow slow networks
    serverSelectionTimeoutMS: 30000,
    connectTimeoutMS: 30000
  };

  if (primaryUri) {
    try {
      await mongoose.connect(primaryUri, connectOptions);
      console.log('Connected to MongoDB (primary)');
      return;
    } catch (err) {
      console.warn('Primary MongoDB connection failed:', err.message || err);
      console.warn('Falling back to local MongoDB...');
    }
  }

  try {
    await mongoose.connect(fallbackUri, connectOptions);
    console.log('Connected to MongoDB (fallback local)');
  } catch (err) {
    console.error('Error connecting to MongoDB (both primary and fallback):', err);
    // Do not crash the process - keep server running so it can return meaningful errors
  }
};

connectWithFallback();

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Server error' });
});

// Server listen
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});