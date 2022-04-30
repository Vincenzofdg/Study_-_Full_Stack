const dataBr = require('../modules/dataBr');

const BAD_STATUS = 400;
const TEXT = [
    { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' },
    { message: 'O campo "rate" deve ser um inteiro de 1 à 5' },
    { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' },
];    

const talkerCheck = (req, res, next) => {
    const { talk } = req.body;
    
    if (!talk || !talk.watchedAt || talk.rate === undefined) {
        return res.status(BAD_STATUS).json(TEXT[0]);
    }
    next();
};

const rateCheck = (req, res, next) => {
    const { talk: { rate } } = req.body;
    const integer = Number.isInteger(rate);

    if (rate === undefined) return res.status(BAD_STATUS).json(TEXT[0]);
    if (!integer || rate < 1 || rate > 5) return res.status(BAD_STATUS).json(TEXT[1]);

    next();
};

const watchedAtCheck = (req, res, next) => {
    const { talk: { watchedAt } } = req.body;
    
    if (!dataBr(watchedAt)) return res.status(BAD_STATUS).json(TEXT[2]);
   
    next();
};

module.exports = { 
    talkerCheck,
    rateCheck,
    watchedAtCheck,
};
