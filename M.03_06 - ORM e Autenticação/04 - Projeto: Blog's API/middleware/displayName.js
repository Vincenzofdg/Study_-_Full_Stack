module.exports = (req, res, next) => {
    const { displayName } = req.body;
    const MIN = 8;
    const msg = [
      '"displayName" is required',
      '"displayName" length must be at least 8 characters long',
    ];
    try {
      if (!displayName) return res.status(400).json({ message: msg[0] });
      if (displayName.length < MIN) return res.status(400).json({ message: msg[1] });
      return next();
    } catch (e) {
      return next(e);
    }
};