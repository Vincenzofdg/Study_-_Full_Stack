const MoviesModel = require('../models/movieModel');

const isValid = (title, directedBy, releaseYear) => {
  if (!title || typeof title !== 'string') return false;
  if (!releaseYear || typeof releaseYear !== 'number') return false;
  if (!directedBy || typeof directedBy !== 'string') return false;

  return true;
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) return false;

  const { id } = await MoviesModel.create({ title, directedBy, releaseYear });

  return {
    id,
  };
};

const getNewMovie = (movie) => {
  const { id, title, directed_by, release_year } = movie;
  return {
    id,
    title,
    directedBy: directed_by,
    releaseYear: release_year,
  };
};

const getAll = async () => {
  const movies = await MoviesModel.getAll();

  return movies.map(getNewMovie);
};

module.exports = {
  create,
  getAll,
};
