const express = require('express');
const bodyParser = require('body-parser');
const characterModel = require('./models/character');

const app = express();

app.use(bodyParser.json());

app.get('/character', async (req, res, next) => {
  const charactes = await characterModel.getAll();
  return res.status(200).json(charactes);
});

app.get('/character/:id', async (req, res, next) => {
  const { id } = req.params;
  const character = await characterModel.getById(Number(id));
  return res.status(200).json(character);
});

app.post('/character', async (req, res, next) => {
  const { name, cartoon } = req.body;
  const character = await characterModel.add(name, cartoon);
  return res.status(201).json(character);
});

app.put('/character', async (req, res, next) => {
  const { id, name, cartoon } = req.body;
  const character = await characterModel.update(id, name, cartoon);
  return res.status(201).json(character);
});

app.delete('/character/:id', async (req, res, next) => {
  const { id } = req.params;
  await characterModel.exclude(Number(id));
  return res.status(202).end();
});

app.listen(3000, () => console.log('On na 3000'));

// , add, update, exclude
