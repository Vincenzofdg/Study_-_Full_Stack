const connection = require('./connection');

const findByName = async (name) => {
  const [resultArtist] = await connection.execute(
    'SELECT * FROM musics.artists WHERE name = ?;',
    [name],
  );
  return resultArtist;
};

const create = async ({ name, genre }) => {
  const [result] = await connection.execute(
    'INSERT INTO musics.artists (name, genre) VALUES (?, ?);',
    [name, genre],
  );
  return result;
};

module.exports = { create, findByName };
