const { readFile } = require('fs/promises');

const OK = 200;
const FILE = './talker.json';

module.exports = async (_req, res, _next) => {
  const file = await readFile(FILE, 'utf-8');
  return res.status(OK).json(JSON.parse(file));
};