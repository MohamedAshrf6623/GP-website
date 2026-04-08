const path = require('path');
const express = require('express');
const compression = require('compression');
const errorMiddleware = require('./middleware/errorMiddleware');
const ErrorHandler = require('./utils/errorHandler');
require('dotenv').config();
const pageController = require('./controllers/pageController');
const app = express();
let PORT = process.env.PORT || 3000;

// View engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Static files for the client-side rendered app
app.use(express.static(path.join(__dirname, 'public'), { index: false }));

// API endpoint used by the client-side forms
app.post('/api/contact', pageController.contactSubmit);

// Client-side routes fallback to the SPA shell
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return next(new ErrorHandler('API route not found', 404));
  }

  res.render('index', {
    title: 'AlzaWare | Graduation Project'
  });
});

// Global Error Handling Middleware (MUST be last)
app.use(errorMiddleware);

// Catch uncaught exceptions (log only, don't exit)
process.on('uncaughtException', (error) => {
  console.error('⚠️ Uncaught Exception:', error.message);
  if (process.env.NODE_ENV !== 'production') {
    console.error(error.stack);
  }
});

// Catch unhandled promise rejections (log only)
process.on('unhandledRejection', (reason, promise) => {
  console.error('⚠️ Unhandled Rejection:', reason);
});

// Start server with port fallback
const server = app.listen(PORT, () => {
  console.log(`✅ AlzaWare website running on http://localhost:${PORT}`);
});

// Handle port already in use error
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`⚠️ Port ${PORT} is already in use`);
    console.log(`Killing existing process on port ${PORT}...`);

    // Try a different port
    PORT = parseInt(PORT) + 1;
    console.log(`Trying port ${PORT}...`);
    
    const retryServer = app.listen(PORT, () => {
      console.log(`✅ AlzaWare website running on http://localhost:${PORT}`);
    });

    retryServer.on('error', (retryError) => {
      console.error('❌ Failed to start server:', retryError.message);
      process.exit(1);
    });
  } else {
    console.error('❌ Server error:', error.message);
    process.exit(1);
  }
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, closing server...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
