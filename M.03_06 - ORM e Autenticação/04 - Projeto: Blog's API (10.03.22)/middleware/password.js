module.exports = (req, res, next) => {
  const { password } = req.body;
  const MIN = 6;
  const msg = [
    '"password" is not allowed to be empty',
    '"password" is required',
    '"password" length must be 6 characters long',
  ];
  try {
    if (password === '') return res.status(400).json({ message: msg[0] });
    if (!password) return res.status(400).json({ message: msg[1] });
    if (password.length < MIN) return res.status(400).json({ message: msg[2] });

    return next();
  } catch (e) {
    return next(e);
  }
};