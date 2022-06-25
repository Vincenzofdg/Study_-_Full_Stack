const { readFile } = require('fs/promises');

const FILE = './talker.json';
const MSG = 'Pessoa palestrante não encontrada';
const OK = 200;
const BAD = 404;

module.exports = async (req, res, _next) => {
  const { id } = req.params;
  const ID = Number(id);

  const file = await readFile(FILE, 'utf-8')
    .then((convert) => JSON.parse(convert))
    .then((select) => select.find((person) => person.id === ID));

  if (!file) return res.status(BAD).json({ message: MSG });   
  
  return res.status(OK).json(file);
};