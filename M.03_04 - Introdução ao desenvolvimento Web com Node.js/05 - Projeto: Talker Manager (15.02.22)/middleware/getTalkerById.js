const { readFile } = require('fs/promises');

const FILE = './talker.json';
const TEXT = { message: 'Pessoa palestrante não encontrada' };
const OK_STATUS = 200;
const ENTITY_STATUS = 404;

const getTalkerById = async (req, res, _next) => {
    const { id } = req.params;

    const file = await readFile(FILE, 'utf-8').then((f) => JSON.parse(f));
    const findId = file.find((i) => i.id === parseInt(id, 10));

    if (!findId) return res.status(ENTITY_STATUS).json(TEXT);   
    res.status(OK_STATUS).json(findId);
};

module.exports = getTalkerById;
