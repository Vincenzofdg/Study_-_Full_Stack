require('dotenv').config();

const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET || 'secret';

const createToken = (user) => {
  const { password: passDb, ...userWithouPassword } = user.dataValues;
  // jwt.sign(
  //	Paylod(Informacoes que o token ira carregar)
  //	Segredo
  //	{ expiresIn: '15m', algorithm: 'HS256' }
  const token = jwt.sign(userWithouPassword, SECRET, JWT_CONFIG);
  return token;
};

const verifyToken = (token) => {
  // A verificacao fica em um try/catch pois se a verificacao falhar o JWT quebra a aplicacao
  try {
    const dataUser = jwt.verify(token, SECRET);
    return dataUser;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

module.exports = { createToken, verifyToken };
