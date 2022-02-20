const { readFile, writeFile } = require('fs/promises');

const FILE = './talker.json';
const OK_STATUS = 204;
const PARSEINT = 10;

const deleteTalker = async (req, res) => {
  const { id } = req.params;

  const file = await readFile(FILE, 'utf-8').then((f) => JSON.parse(f));
  const indexFound = file.findIndex((t) => t.id === parseInt(id, PARSEINT));

  file.splice(indexFound, 1);

  await writeFile(FILE, JSON.stringify(file));

  return res.status(OK_STATUS).end();
};

module.exports = deleteTalker;
