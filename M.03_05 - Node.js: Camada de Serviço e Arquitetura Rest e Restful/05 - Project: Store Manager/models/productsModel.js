const connection = require('./connection');

const getAll = async () => {
  const request = 'SELECT * FROM products;';
  const [result] = await connection.execute(request);
  return result;
};

const findById = async (id) => {
  const request = 'SELECT * FROM products WHERE id = ?;';
  const [result] = await connection.execute(request, [id]);
  if (result.length === 0) return null;
  return result[0];
};

const create = async (name) => {
  const request = 'INSERT INTO products (name) VALUES (?);';
  const [result] = await connection.execute(request, [name]);
  return { id: result.insertId, name };
};

const update = async (name, id) => {
  const request = 'UPDATE StoreManager.products SET name = ? WHERE id = ?;';
  await connection.execute(request, [name, id]);
  return { id, name };
};

const remove = async (id) => {
  const request = 'DELETE FROM StoreManager.products WHERE id = ?;';
  await connection.execute(request, [id]);
  return true;
};

const search = async (param) => {
  const request = 'SELECT * FROM StoreManager.products WHERE name LIKE CONCAT("%", ?, "%");';
  const [result] = await connection.execute(request, [param]);
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