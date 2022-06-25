const { token } = require('../utils');
const { emailVerify, passwordVerify } = require('../validation');

const OK = 200;
const BAD = 400;

module.exports = async (req, res, _next) => {
  const { email, password } = req.body;

  if (!emailVerify(email).pass) return res.status(BAD).json(emailVerify(email).msg);
  if (!passwordVerify(password).pass) return res.status(BAD).json(passwordVerify(password).msg);

  const myToken = token();
  return res.status(OK).json({ token: myToken });
};
