const BAD = 400;

module.exports = (req, res, next) => {
  const { talk: info } = req.body;
  
  if (!info) {
    return res.status(BAD).json({
      message: 'O campo "talk" é obrigatório',
    });
  }

  if (!info.watchedAt === '' && !info.rate === '') {
    return res.status(BAD).json({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }
  
  next();
};
