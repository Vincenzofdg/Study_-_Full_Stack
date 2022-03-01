const peopleModel = require('../models/peopleModel');

const add = async () => peopleModel.add();

const getAll = async () => peopleModel.getAll();

const getById = async (id) => peopleModel.getById(id);

const getByName = async (name) => peopleModel.getByName(name);

const update = async (id, name, age) => {
  const numberId = Number(id);
  const updatedPerson = await peopleModel.update(numberId, name, age);
  
  if (!updatedPerson.affectedRows) return null;
  return { id, name, age };
};

const exclude = async () => peopleModel.exclude();

module.exports = {
  add,
  getAll,
  getById,
  getByName,
  update,
  exclude
};
