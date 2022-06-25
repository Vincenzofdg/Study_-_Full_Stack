const BAD = 400;

module.exports = (req, res, next) => {
  const { talk: { rate: info } } = req.body;

  if (!info && info !== 0) {
    return res.status(BAD).json({
      message: 'O campo "rate" é obrigatório',
    });
  }

  if (info < 1 || info > 5) {
    return res.status(BAD).json({ 
      message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    });
  }

  next();
};

// Retorna verdadeiro se o numero for Inteiro
// const integer = Number.isInteger(info);