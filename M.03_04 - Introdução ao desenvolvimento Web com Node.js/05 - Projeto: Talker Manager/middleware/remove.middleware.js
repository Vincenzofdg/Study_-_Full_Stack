const { readFile, writeFile } = require('fs/promises');

const FILE = './talker.json';
const NO_CONTENT = 204;

module.exports = async (req, res, _next) => {
  const { id } = req.params;

  const file = await readFile(FILE, 'utf-8').then((f) => JSON.parse(f));
  const indexFound = file.findIndex((t) => t.id === parseInt(id, 10));

  file.splice(indexFound, 1);

  await writeFile(FILE, JSON.stringify(file));

  return res.status(NO_CONTENT).end();
};
