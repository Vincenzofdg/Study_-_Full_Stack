const { Router } = require('express');
const fs = require('fs/promises');
const auth = require('./auth');

const nameRouter = Router();

const FILENAME = './names.txt';

nameRouter.get('/', auth, async (_req, res, next) => {
  try {
    const names = await fs.readFile(FILENAME);
    const parsedNames = names.toString().split('\n');
    return res.status(200).json(parsedNames);
  } catch (error) {
    next(error);
  }
});

nameRouter.post('/', auth, async (req, res, next) => {
  const name = req.body.name;
  console.log(name);
  await fs.appendFile(FILENAME, `\n${name}`);
  res.status(201).end();
});

module.exports = nameRouter;
