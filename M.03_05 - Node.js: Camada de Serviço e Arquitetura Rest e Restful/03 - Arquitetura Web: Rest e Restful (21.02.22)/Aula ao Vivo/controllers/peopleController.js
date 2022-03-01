const express = require('express');
const router = express.Router();

// Importando Models:
const peopleModel = require('../models/peopleModel');
// Importando Services:
const peopleService = require('../services/peopleService');

router.get('/', async (_req, res) => {
  try {
    const people = await peopleModel.getAll();
    return res.status(200).json(people);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: 'Erro de servidor' });
  };
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const person = await peopleModel.getById(id);
    if (!person) return res.status(404).json({ msg: 'Pessoa não encontrada' });
    return res.status(200).json(person);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: 'Erro de servidor' });
  };
});

router.post('/', async (req, res) => {
  const { name, age } = req.body;
  try {
    const checkPerson = await peopleModel.getByName(name);
    if (checkPerson) return res.status(404).json({ msg: 'Pessoa ja existente' });
    const newPerson = await peopleModel.add(name, age);
    return res.status(201).json(newPerson);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: 'Erro de servidor' });
  };
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  try {
    const person = await peopleService.update(id, name, age);
    if (!person) return res.status(404).json({ msg: 'Pessoa não encontrada' });
    return res.status(200).json(person);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: 'Erro de servidor' });
  };
});

module.exports = router;
