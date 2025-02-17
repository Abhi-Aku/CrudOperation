const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Handle connection errors
db.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Handle successful connection
db.once('connected', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
