const model = require('../models/productsModel');

const getAll = async () => model.getAll();
const findById = async (id) => model.findById(id);
const create = async (name) => model.create(name);

const update = async (name, id) => {
  const result = await model.findById(id);
  if (!result) return null;
  return model.update(name, id);
};

const remove = async (id) => {
  const result = await model.findById(id);
  if (!result) return null;
  return model.remove(id);
};

const search = async (param) => {
  if (param.length === 0) return getAll();
  const result = await model.search(param);
  if (result.length === 0) return null;
  return result;
};

module.exports = {
  getAll,
  findById,
  create,
  update,
  remove,
  search,
};