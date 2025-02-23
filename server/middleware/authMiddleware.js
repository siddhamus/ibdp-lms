// server/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Expecting token in format: Bearer <token>
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid.' });
  }
};

module.exports = authMiddleware;

