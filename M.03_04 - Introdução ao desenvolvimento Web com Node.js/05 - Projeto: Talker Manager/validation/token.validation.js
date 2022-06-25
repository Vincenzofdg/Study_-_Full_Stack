const LENGTH = 16;
const UNAUTHORIZED = 401;

module.exports = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(UNAUTHORIZED).json({
      message: 'Token não encontrado',
    });
  }
  if (token.length !== LENGTH) {
    return res.status(UNAUTHORIZED).json({ 
      message: 'Token inválido',
    });
  }
  next();
};

// EXEMPLOS
// authorization: klsabfjdoaksdn32      (DELETA)
// authorization: ''                    (NAO DELETA)
// authorization: asdjkndsfbasdca34     (NAO DELETA)