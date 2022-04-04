module.exports = (req, res, next) => {
  const { categoryIds } = req.body;
  const msg = [
    '"categoryIds" is required',
    '"categoryIds" not found',
    ];
  try {
    if (categoryIds.length === 0 || typeof categoryIds !== 'object') {
      return res.status(400).json({ message: msg[0] });
    } 
    if (!categoryIds) return res.status(400).json({ message: msg[1] });

    return next();
  } catch (e) {
    return next(e);
  }
};