const model = require('../models/salesModel');

const idCheck = require('../middlewares/idCheck');

const updateError = () => {
  const error = new Error('Sale not found');
  error.code = 'notFound';
  error.status = 404;
  throw error;
};

const getAll = async () => model.getAll();
const getById = async (id) => model.getById(id);

const create = async (reqBody) => {
  const ids = reqBody.map((element) => element.productId);

  await Promise.all(ids.map(async (id) => {
    await idCheck(id);
  }));

  const created = await model.create(reqBody);

  return created;
};

const update = async (id, body) => {
  const ids = body.map((element) => element.productId);

  await Promise.all(ids.map(async (i) => {
    await idCheck(i);
  }));

  const exists = await model.getById(id);
  if (!exists) updateError();
  const updatedSale = await model.update(id, body);

  return updatedSale;
};

const remove = async (id) => {
  const exists = await model.getById(id);
  if (!exists) return null;
  return model.remove(id);
};

module.exports = { getAll, getById, create, update, remove };