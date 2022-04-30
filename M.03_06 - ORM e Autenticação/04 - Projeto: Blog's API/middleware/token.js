const { token: { verify } } = require('../utils');

const msg = ['Token not found', 'Expired or invalid token'];

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (!token) return res.status(401).json({ message: msg[0] });

    // Caso falhe a aplicação quebra e entra no catch
    const check = verify(token);
    
    req.tokenData = check.data;

    next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: msg[1] });
  }
};