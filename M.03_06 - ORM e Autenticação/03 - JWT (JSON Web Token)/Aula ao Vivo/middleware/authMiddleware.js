const { verifyToken } = require('../utils/auth');

const authCheck = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(400).json({ message: 'Faltou Token' });
  const userData = verifyToken(authorization);
  if (!userData) return res.status(400).json({ message: 'problema no token' });
  req.user = userData;
  next();
};

module.exports = authCheck;
