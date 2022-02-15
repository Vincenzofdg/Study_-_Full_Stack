import { SELECT_MOVIE } from '../action';
import categories from '../data';

const INITIAL_STATE = {
  selectedCategory: categories[0].name,
  selectedMovie: categories[0].movies[0],
  categories,
};

function movieReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SELECT_MOVIE:
    return {
      ...state,
      selectedCategory: action.payload.selectedCategory,
      selectedMovie: action.payload.selectedMovie,
    };
  default:
    return state;
  }
}

export default movieReducer;
