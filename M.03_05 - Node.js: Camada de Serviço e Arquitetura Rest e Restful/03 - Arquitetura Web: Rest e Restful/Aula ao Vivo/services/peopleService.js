const peopleModel = require('../models/peopleModel');

const add = async () => peopleModel.add();

const getAll = async () => peopleModel.getAll();

// Exemplo: Criando regra de negocio garantindo que o ID do params é um número
const getById = async (name) => {
  if (typeof id === 'string') return null;
  const result = await peopleModel.getById(name);
  return result;
};

const getByName = async (id) => peopleModel.getByName(id);

const update = async (id, name, age) => {
  const numberId = Number(id);
  const updatedPerson = await peopleModel.update(numberId, name, age);
  
  if (!updatedPerson.affectedRows) return null;
  return { id, name, age };
};

const exclude = async (id) => peopleModel.exclude(id);

module.exports = {
  add,
  getAll,
  getById,
  getByName,
  update,
  exclude
};
