const { readFile } = require('fs/promises');

const FILE = './talker.json';
const OK_STATUS = 200;

const searchTalker = async (req, res) => {
  const { toBeSearched } = req.query;

  const file = await readFile(FILE, 'utf-8').then((f) => JSON.parse(f));
  if (!toBeSearched || toBeSearched === '') return res.status(OK_STATUS).json(file);
  const searched = file.filter(({ name }) => name.includes(toBeSearched));

  return res.status(OK_STATUS).json(searched);
};

module.exports = searchTalker;