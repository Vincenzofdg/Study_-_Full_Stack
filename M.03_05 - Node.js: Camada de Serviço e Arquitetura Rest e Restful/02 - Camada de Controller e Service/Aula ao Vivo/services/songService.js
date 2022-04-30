// services: Camada intermediaria
const artistModel = require('../models/artistModel');
const songModel = require('../models/songModel');

const addWithArtist = async ({ song, artist }) => {
  const artistResult = await artistModel.findByName(artist.name);
  let artist_id;
  console.log(artistResult);
  // Caso o artista ja exista ira pegar o id existente do artista para usar na aplicação
  if (artistResult.length > 0) {
    artist_id = artistResult[0].id;
  } else {
    const resultArtist = await artistModel.create(artist);
    artist_id = resultArtist.insertId;
  }
  const resultSong = await songModel.create({
    ...song,
    artist_id: artist_id,
  });
  return {
    song: {
      ...song,
      artist_id: artist_id,
      id: resultSong.insertId,
    },
    artist: { ...artist, id: artist_id },
  };
};

const getAll = async () => songModel.getAll()

module.exports = {
  addWithArtist,
  getAll
}