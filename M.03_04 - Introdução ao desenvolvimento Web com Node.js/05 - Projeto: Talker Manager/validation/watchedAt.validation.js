// const dataFormat = require('../utils/dataFormat.utils');

const BAD = 400;

module.exports = (req, res, next) => {
  const { talk: { watchedAt: info } } = req.body;
  const testFormat = /^(\d{2})\/(\d{2})\/(\d{4})$/.test(info);

  if (!info) {
    return res.status(BAD).json({
      message: 'O campo "watchedAt" é obrigatório',
    });
  }

  if (!testFormat) {
    return res.status(BAD).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }
  
  next();
};
