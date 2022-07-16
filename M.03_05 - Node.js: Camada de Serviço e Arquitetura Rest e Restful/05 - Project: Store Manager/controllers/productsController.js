const Joi = require('joi');
const service = require('../services/productsService');

const getAll = async (_req, res) => {
  const result = await service.getAll();

  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const result = await service.findById(id);
  if (result === null) return res.status(404).json({ message: 'Product not found' });

  return res.status(200).json(result);
};

const searchProducts = async (req, res) => {
  const { q } = req.query;

  const result = await service.search(q);
  if (!result) return res.status(404).json([]);

  return res.status(200).json(result);
};

const create = async (req, res, next) => {
  const { name } = req.body;

  const { error } = Joi.object({
    name: Joi.string().min(5).not().empty()
      .required(),
  }).validate({ name });

  if (error) {
    return next(
      {
        message: error.details[0].message,
        status: error.details[0].message.includes('length') ? 422 : 400,
      },
    );
  }

  const created = await service.create(name);

  return res.status(201).json(created);  
};

const updateProduct = async (req, res, next) => {
  const { name } = req.body;
  const { id } = req.params;

  const { error } = Joi.object({
    name: Joi.string().min(5).not().empty()
      .required(),
  }).validate({ name });

  if (error) {
    return next({
      message: error.details[0].message,
      status: error.details[0].message.includes('length') ? 422 : 400,
    });
  }

  const updated = await service.update(name, id);
  if (!updated) return res.status(404).json({ message: 'Product not found' });  
  
  return res.status(200).json(updated);
};

const removeProduct = async (req, res) => {
  const { id } = req.params;

  const removed = await service.remove(id);
  if (!removed) return res.status(404).json({ message: 'Product not found' });

  return res.status(204).end();
};

module.exports = {
  getAll,
  getById,
  create,
  updateProduct,
  removeProduct,
  searchProducts,
};