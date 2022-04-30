export const SELECT_MOVIE = 'SELECT_MOVIE';

export const selectMovie = (selectedMovie, selectedCategory) => ({
  type: SELECT_MOVIE,
  payload: {
    selectedMovie,
    selectedCategory,
  },
});
