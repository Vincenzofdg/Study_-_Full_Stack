const connection = require('../models/connection');
const songModel = require('../models/songModel');
const songService = require('../services/songService');

const create = async (req, res, _next) => {
  const { name, artist_id, album } = req.body;
  // Passando um Objeto faz com que a ordem dos parametros nao importem
  const result = await songModel.create({ name, artist_id, album });
  return res.status(201).json({ id: result.insertId, name, artist_id, album });
};

const getAll = async () => {
  const songs = songService.getAll();
};

// Criando um controller que usa um outro controller USE O SERVICES
const createSongAndArtist = async (req, res, _next) => {
  const { song, artist } = req.body;
  // const result = await songModel.create({ name, artist_id, album });
  const result = await songService.addWithArtist({ song, artist });
  return res.status(201).json(result);
};

module.exports = { 
  create, 
  createSongAndArtist, 
  getAll
};
