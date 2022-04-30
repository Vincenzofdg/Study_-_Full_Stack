const auth = (req, res, next) => {
  if (!req.headers.authorization || req.headers.authorization.length !== 10) {
    return res.status(401).send('token inválido');
  }
  next();
};

module.exports = auth;
