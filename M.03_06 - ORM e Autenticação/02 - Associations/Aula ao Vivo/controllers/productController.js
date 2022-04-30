const express = require('express');

const router = express.Router();

const { Product, User } = require('../models');

router.post('/', async (req, res) => {
  const { name, description, price, userId } = req.body;
  try {
    const product = await Product.create({ name, description, price, userId });
    return res.status(201).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: { model: User, as: 'user', attributes: { exclude: ['password']} },
      attributes: {exclude: ['userId']}
    });
    if (!product)
      return res.status(404).json({ message: 'Produto não encontrado' });
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    console.log(product);
    return res.status(200).json({ message: 'Deletado com Sucesso' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;
