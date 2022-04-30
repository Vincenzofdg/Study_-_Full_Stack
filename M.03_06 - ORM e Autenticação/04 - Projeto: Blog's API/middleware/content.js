module.exports = (req, res, next) => {
  const { content } = req.body;
  const msg = '"content" is required';
  try {
    if (content === '') return res.status(400).json({ message: msg });
    if (!content) return res.status(400).json({ message: msg });

    return next();
  } catch (e) {
    return next(e);
  }
};