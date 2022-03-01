const express = require('express');
const router = express.Router();

// Importando Models:
const peopleMoodel = require('../models/peopleModel');

router.get('/', async (req, res, _next) => {
  const people = await peopleMoodel.getAll();
  return res.status(200).json(people);
})

module.exports = router;