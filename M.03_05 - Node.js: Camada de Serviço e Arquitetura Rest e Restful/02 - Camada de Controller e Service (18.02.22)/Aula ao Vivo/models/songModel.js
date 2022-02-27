const connection = require('./connection');

// É mandado um objeto para que nao haja erro de ordem dos parametros
const create = async ({ name, album, artist_id }) => {
  const [result] = await connection.execute(
    'INSERT INTO musics.songs (name, album, artist_id) VALUES (?, ?, ?);',
    [name, album, artist_id],
  );
  return result;
};
const getAll = async () => {
  const [songs] = await connection.execute('SELECT * FROM songs;');

  return songs;
};

module.exports = { 
  create, 
  getAll
};
