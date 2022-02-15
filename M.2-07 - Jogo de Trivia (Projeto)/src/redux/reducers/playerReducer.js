import { LOGIN, SET_SCORE, SET_GRAVATAR } from '../actions';

const INITIAL_STATE = {
  name: '',
  email: '',
  score: 0,
  source: '',
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      name: action.payload.name,
      email: action.payload.email,
    };
  case SET_SCORE:
    return {
      ...state,
      score: action.payload.score,
    };
  case SET_GRAVATAR:
    return {
      ...state,
      source: action.payload.source,
    };
  default:
    return state;
  }
};

export default playerReducer;
