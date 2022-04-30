const cepModel = require('../models/cepModel');
const cepService = require('../services/cepService');

const OK = 200;
const BAD = 404;
const CONFLICT = 409;

const pong = (_req, res) => res.status(OK).json({ message: 'pong!' });

const findIt = async (req, res, _next) => {
    const { cep } = req.params;
    // Irá fazer a validação
    const foundAdress = await cepService.validateSearch(cep);
    if (foundAdress.error) return res.status(BAD).json(foundAdress.error);
    return res.status(OK).json(foundAdress);
}

const add = async (req, res, _next) => {
    const { cep, logradouro, bairro, localidade, uf } = req.body;

    const cepChecked = await cepService.validateAdd(cep);
    if (cepChecked.error) return res.status(CONFLICT).json(cepChecked.error);

    const obj = { 
        cep: cepChecked,
        logradouro,
        bairro,
        localidade,
        uf
    };

    const addToDB = await cepModel.add(obj)

    return res.status(OK).json(addToDB);
}

module.exports = {
    pong,
    findIt,
    add
}
