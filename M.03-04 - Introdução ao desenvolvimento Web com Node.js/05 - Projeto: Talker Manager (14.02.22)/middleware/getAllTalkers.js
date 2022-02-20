const { readFile } = require('fs/promises');

const FILE = './talker.json';
const OK_STATUS = 200;

const getAllTalkers = async (_req, res, _next) => {
    const file = await readFile(FILE, 'utf-8');
    
    res.status(OK_STATUS).json(JSON.parse(file));
};

module.exports = getAllTalkers;
