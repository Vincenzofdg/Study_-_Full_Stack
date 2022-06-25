const { readFile } = require('fs/promises');

const FILE = './talker.json';
const OK = 200;

module.exports = async (req, res) => {
  const { q: search } = req.query;

  const file = await readFile(FILE, 'utf-8')
    .then((f) => JSON.parse(f));

  const searched = file.filter(({ name }) => name.includes(search));

  return res.status(OK).json(searched);
};

// Teste:
// localhost:3000/talker/search?q=Henr