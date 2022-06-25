const { readFile } = require('fs/promises');

const FILE = './talker.json';
const OK = 200;

module.exports = async (req, res, next) => {
  const { q: info } = req.query;
  
  if (!info || info === '') {
    const file = await readFile(FILE, 'utf-8')
    .then((f) => JSON.parse(f));

    return res.status(OK).json(file);
  }

  next();
};