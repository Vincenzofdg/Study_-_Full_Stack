const connection = require('./connection');

const add = async (name, age) => {
  const [result] = await connection.execute(
    'INSERT INTO people (name, age) VALUES (?, ?);',
    [name, age]
  );
  return { id: result.insertId, name, age};
};

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM people;')
  return result;
};

const getById = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM people WHERE id = ?;',
    [id]
  );
  if (!result.length) return null;
  return result;
};

const getByName = async (name) => {
  const [result] = await connection.execute(
    'SELECT * FROM people WHERE name = ?;',
    [name]
  );
  if (!result.length) return null;
  return result;
}

const update = async (id, name, age) => connection.execute(
  'UPDATE people SET name = ?, age = ? WHERE id = ?',
  [name, age, id]
);

const exclude = async (id) => {
  const people = await getById(id);
  if (!people) return null;
  await connection.execute(
    'DELETE FROM people WHERE id = ?',
    [id]
  );
  return people;
};

module.exports = {
  add,
  getAll,
  getById,
  getByName,
  update,
  exclude
}