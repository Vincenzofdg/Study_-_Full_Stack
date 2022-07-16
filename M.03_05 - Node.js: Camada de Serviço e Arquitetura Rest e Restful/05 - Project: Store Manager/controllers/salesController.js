const service = require('../services/salesService');
const schema = require('../middlewares/schema');

const create = async (req, res, next) => {
  const { body } = req;
  const { error } = schema.validate(body);

  if (error) {
    return next({
      message: error.details[0].message,
      status: error.details[0].message.includes('greater') ? 422 : 400,
    });
  }

  const created = await service.create(body);
  if (created.error) return next(created.error);

  return res.status(201).json(created);
};

const getAll = async (_req, res) => {
  const result = await service.getAll();
  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const ifFounded = await service.getById(id);
  if (!ifFounded) return res.status(404).json({ message: 'Sale not found' });

  return res.status(200).json(ifFounded);
};

const remove = async (req, res) => {
  const { id } = req.params;

  const removed = await service.remove(id);
  if (!removed) return res.status(404).json({ message: 'Sale not found' });

  return res.status(204).end();
};

const update = async (req, res, next) => {
  const { body } = req;
  const { id } = req.params;

  const { error } = schema.validate(body);

  if (error) {
    return next({
      message: error.details[0].message,
      status: error.details[0].message.includes('greater') ? 422 : 400,
    });
  }

  const updated = await service.update(id, body);
  if (updated.error) return next(updated.error);

  return res.status(200).json(updated);
};

module.exports = { getAll, getById, create, update, remove };