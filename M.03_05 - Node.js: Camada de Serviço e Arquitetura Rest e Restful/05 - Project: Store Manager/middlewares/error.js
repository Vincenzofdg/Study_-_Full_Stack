module.exports = (err, _req, res, _next) => {
  switch (err.status) {
    case 400:
    case 422:
      return res.status(err.status).json({ message: err.message.replace('[0].', '') });
    default:
      res.status(err.status).json({ message: err.message });
  }
};