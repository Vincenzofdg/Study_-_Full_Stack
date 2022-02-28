// const cepModel = require('../models/cepModel');
const cepService = require('../services/cepService');

const OK = 200;
const BAD = 400;

const pong = (_req, res) => res.status(OK).json({ message: 'pong!' });

const findIt = async (req, res, _next) => {
    const { cep } = req.params;
    // Irá fazer a validação
    const foundAdress = await cepService.validateCEP(cep);
    // if (foundAdress.error) return next(foundAdress.error);
    if (foundAdress.error) return res.status(200).json(foundAdress.error)
    return res.status(OK).json(foundAdress);
}

module.exports = {
    pong,
    findIt
}
