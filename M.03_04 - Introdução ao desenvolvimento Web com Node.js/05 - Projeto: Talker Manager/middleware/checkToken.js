const LENGTH = 16;
const UNAUTHORIZED_STATUS = 401;
const TEXT = [
  { message: 'Token não encontrado' },
  { message: 'Token inválido' },
];

const checkToken = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token || token === '') return res.status(UNAUTHORIZED_STATUS).json(TEXT[0]);
  if (token.length !== LENGTH) return res.status(UNAUTHORIZED_STATUS).json(TEXT[1]);
  next();
};

module.exports = checkToken;
