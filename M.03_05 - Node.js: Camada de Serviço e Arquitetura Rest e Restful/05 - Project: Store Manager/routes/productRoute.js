const express = require('express');

const router = express.Router();
const {
  getAll,
  create,
  getById,
  searchProducts: search,
  updateProduct: update,
  removeProduct: remove,
} = require('../controllers/productsController');

router.get('/', getAll);
router.get('/search', search);
router.post('/', create);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;