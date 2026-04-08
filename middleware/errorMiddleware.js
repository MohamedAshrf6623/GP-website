// Global Error Handling Middleware
const errorMiddleware = (err, req, res, next) => {
  // Default error
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal Server Error';

  // Handle specific error types
  if (err.name === 'ReferenceError') {
    err.statusCode = 400;
    err.message = 'Invalid reference';
  }

  if (err.name === 'SyntaxError') {
    err.statusCode = 400;
    err.message = 'Syntax error in request';
  }

  // Log error
  console.error(`[ERROR ${err.statusCode}] ${err.message}`);
  if (process.env.NODE_ENV !== 'production') {
    console.error(err.stack);
  }

  if (res.headersSent) {
    return next(err);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    statusCode: err.statusCode
  });
};

module.exports = errorMiddleware;
