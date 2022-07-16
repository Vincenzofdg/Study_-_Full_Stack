const express = require('express');
const rescue = require('express-rescue');

const router = express.Router();

const {
  getAll,
  getById,
  update,
  create,
  remove,
} = require('../controllers/salesController');

router.get('/', rescue(getAll));
router.get('/:id', rescue(getById));
router.put('/:id', rescue(update));
router.post('/', rescue(create));
router.delete('/:id', rescue(remove));

module.exports = router;