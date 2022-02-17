const express = require('express');
const fs = require('fs/promises');

const FILE = './simpsons.json'
const app = express();
app.use(express.json());

app.get('/', async (_req, res) => {
  const read = await fs.readFile(FILE, 'utf-8');
  const file = JSON.parse(read)
  return res.status(200).json(file);
})

app.listen(3001, () => console.log('Simpsons API (3001)'));
