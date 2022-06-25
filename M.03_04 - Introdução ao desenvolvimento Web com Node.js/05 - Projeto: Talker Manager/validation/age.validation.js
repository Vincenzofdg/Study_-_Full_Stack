const BAD = 400;

const ERROR = [
  { message: 'O campo "age" é obrigatório' },
  { message: 'A pessoa palestrante deve ser maior de idade' },
];

module.exports = (req, res, next) => {
  const MIN = 18;
  const { age: info } = req.body;

  if (!info || info === 0) return res.status(BAD).json(ERROR[0]);
  if (info < MIN) return res.status(BAD).json(ERROR[1]);
  next();
};