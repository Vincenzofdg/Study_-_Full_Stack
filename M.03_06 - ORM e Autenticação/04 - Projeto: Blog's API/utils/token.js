const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;
const CONFIG = { expiresIn: '7d', algorithm: 'HS256' };

const create = (data) => jwt.sign({ data }, SECRET, CONFIG);

const verify = (token) => jwt.verify(token, SECRET);

const checkToken = (token) => {
  const user = jwt.verify(token, SECRET);
  console.log(user.data);
  return user.data;
};

module.exports = { 
  create,
  verify,
  checkToken,
};