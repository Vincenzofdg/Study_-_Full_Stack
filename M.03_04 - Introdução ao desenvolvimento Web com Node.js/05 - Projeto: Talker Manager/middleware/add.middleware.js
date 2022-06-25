const { readFile, writeFile } = require('fs/promises');

const FILE = './talker.json';
const CREATED = 201;

module.exports = async (req, res, _next) => {
  const { name, age, talk } = req.body;

  const file = await readFile(FILE, 'utf-8').then((f) => JSON.parse(f));
  const obj = {
    name,
    age,
    id: (file.length + 1),
    talk,
  };

  await writeFile(FILE, JSON.stringify([...file, obj]));

  return res.status(CREATED).json(obj);
};