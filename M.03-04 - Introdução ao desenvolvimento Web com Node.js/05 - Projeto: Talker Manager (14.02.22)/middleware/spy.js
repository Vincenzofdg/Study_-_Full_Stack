const login = (req, res, next) => {
  const { email, password } = req.body;
  console.log(`Body: ${email} | ${password}`);
  next();
};

const token = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(`authorization: ${authorization} | ${typeof authorization}`);
  next();
};

module.exports = {
  login,
  token,
};
