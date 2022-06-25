const BAD = 400;

const ERROR = [
  { message: 'O campo "name" é obrigatório' },
  { message: 'O "name" deve ter pelo menos 3 caracteres' },
];

module.exports = (req, res, next) => {
  const { name: info } = req.body;
  if (!info || info.length === 0) return res.status(BAD).json(ERROR[0]);
  if (info.length < 3) return res.status(BAD).json(ERROR[1]);
  next();
};