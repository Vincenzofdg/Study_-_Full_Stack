const { readFile, writeFile } = require('fs/promises');

const FILE = './talker.json';
const OK = 200;

module.exports = async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;

  const file = await readFile(FILE, 'utf-8')
    .then((f) => JSON.parse(f));

  const indexFound = file.findIndex((i) => i.id === parseInt(id, 10));

  file[indexFound] = {
    ...file[indexFound],
    name,
    age,
    talk, 
  };

  await writeFile(FILE, JSON.stringify(file));

  return res.status(OK).json(file[indexFound]);
};