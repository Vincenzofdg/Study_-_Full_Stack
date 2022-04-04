module.exports = async (req, res, next) => {
    const { email } = req.body;
    const msg = [
      '"email" is not allowed to be empty',
      '"email" is required',
      '"email" must be a valid email',
    ];
    try {
      const emailValidRegex = /\S+@\S+\.\S+/;
      const isValid = emailValidRegex.test(email);

      if (email === '') return res.status(400).json({ message: msg[0] });
      if (!email) return res.status(400).json({ message: msg[1] });
      if (!isValid) return res.status(400).json({ message: msg[2] });

      return next();
    } catch (e) {
      return next(e);
    }
};