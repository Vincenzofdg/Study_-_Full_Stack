module.exports = (req, res, next) => {
  const { title } = req.body;
  const msg = '"title" is required';
  try {
    if (title === '') return res.status(400).json({ message: msg });
    if (!title) return res.status(400).json({ message: msg });

    return next();
  } catch (e) {
    return next(e);
  }
};