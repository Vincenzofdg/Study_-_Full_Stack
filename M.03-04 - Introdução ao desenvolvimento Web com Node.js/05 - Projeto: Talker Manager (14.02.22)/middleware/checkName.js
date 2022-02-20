const BAD_STATUS = 400;
const TEXT = [
    { message: 'O campo "name" é obrigatório' },
    { message: 'O "name" deve ter pelo menos 3 caracteres' },
];

const nameCheck = (req, res, next) => {
    const { name } = req.body;

    if (!name || name.length === 0) return res.status(BAD_STATUS).json(TEXT[0]);
    if (name.length < 3) return res.status(BAD_STATUS).json(TEXT[1]);

    next();
};

module.exports = nameCheck;
