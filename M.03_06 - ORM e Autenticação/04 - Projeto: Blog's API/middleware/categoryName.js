module.exports = (req, res, next) => {
    const { name } = req.body;
    const msg = ['"name" is required'];
    try {
      if (name === '' || !name) return res.status(400).json({ message: msg[0] });
      return next();
    } catch (e) {
      return next(e);
    }
};