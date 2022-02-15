import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';
import playerReducer from './playerReducer';
import questionReducer from './questionReducer';
import rankingReducer from './ranking';

const rootReducer = combineReducers({
  player: playerReducer,
  token: tokenReducer,
  trivia: questionReducer,
  ranking: rankingReducer,
});

export default rootReducer;
