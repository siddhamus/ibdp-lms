// server/middleware/errorMiddleware.js
const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    message: err.message || 'Server Error',
    // Show full stack trace only in development
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
};

module.exports = errorMiddleware;

