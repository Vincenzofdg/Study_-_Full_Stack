const BAD_STATUS = 400;
const AGE_LIMIT = 18;
const TEXT = [
    { message: 'O campo "age" é obrigatório' },
    { message: 'A pessoa palestrante deve ser maior de idade' },
];

const ageCheck = (req, res, next) => {
    const { age } = req.body;

    if (!age || age === 0) return res.status(BAD_STATUS).json(TEXT[0]);
    if (age < AGE_LIMIT) return res.status(BAD_STATUS).json(TEXT[1]);

    next();
};

module.exports = ageCheck;