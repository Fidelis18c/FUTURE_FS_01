require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Security Middlewares
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || '*', // Restrict this to your frontend URL in production
  methods: ['GET', 'POST', 'OPTIONS'],
}));

// Body Parser Middleware
app.use(express.json());

// Request Logger (Debug) - Moved after body parser to see req.body
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  if (req.method === 'POST') {
    console.log('📦 Body:', JSON.stringify(req.body, null, 2));
  }
  next();
});

// Handle Global JSON syntax errors (e.g. malformed JSON in request)
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('❌ JSON Syntax Error:', err.message);
    return res.status(400).json({ status: 'error', message: 'Malformed JSON. Check your quotes and commas.' });
  }
  next();
});

// Routes
app.use('/api', contactRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', uptime: process.uptime() });
});

// Root endpoint redirect or message
app.get('/', (req, res) => {
  res.send('Portfolio Contact API is running...');
});

// Catch-all for undefined routes
app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Route not found' });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ status: 'error', message: 'Internal Server Error' });
});

module.exports = app;
