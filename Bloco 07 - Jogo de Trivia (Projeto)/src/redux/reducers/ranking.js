import { SET_RANKING } from '../actions';

const INITIAL_STATE = [];

const rankingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_RANKING:
    return action.payload.ranking;
  default:
    return state;
  }
};

export default rankingReducer;
