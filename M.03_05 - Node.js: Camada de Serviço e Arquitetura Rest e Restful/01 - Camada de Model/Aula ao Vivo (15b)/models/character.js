const connection = require('./connection');

const getAll = async () => {
  const [characters] = await connection.execute(
    'SELECT * FROM live_lecture_23_1.characters;',
  );
  return characters;
};

const getById = async (id) => {
  const [character] = await connection.execute(
    'SELECT * FROM live_lecture_23_1.characters WHERE id = ?;',
    [id],
  );
  return character;
};

const add = async (name, cartoon) => {
  const [result] = await connection.execute(
    'INSERT INTO live_lecture_23_1.characters (name, cartoon) values (?,?);',
    [name, cartoon],
  );
  return { name, cartoon, id: result.insertId };
};

const update = async (id, name, cartoon) => {
  await connection.execute(
    'UPDATE live_lecture_23_1.characters SET name = ?, cartoon = ? WHERE id = ?;',
    [name, cartoon, id],
  );
  
  return { id, name, cartoon };
};

const exclude = async (id) =>
  connection.execute('DELETE FROM live_lecture_23_1.characters WHERE id = ?;', [
    id,
  ]);

module.exports = { getAll, getById, add, update, exclude };
