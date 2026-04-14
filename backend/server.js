const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
if (!MONGO_URI) {
  console.error("Error: MONGO_URI is not defined in .env file.");
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB successfully");
    // Start the server only after DB connection
    app.listen(PORT, () => {
      console.log(`Server is running beautifully on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const questionRoutes = require('./routes/questionRoutes');

// API Routes
app.use('/api', questionRoutes);

// --- Deployment Logic: Serve Frontend Static Files ---
if (process.env.NODE_ENV === 'production') {
  // Point to the built assets in the frontend directory
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  // For any request that doesn't match an API route, serve index.html
  app.get(/.*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'dist', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API is running in development mode...');
  });
}
