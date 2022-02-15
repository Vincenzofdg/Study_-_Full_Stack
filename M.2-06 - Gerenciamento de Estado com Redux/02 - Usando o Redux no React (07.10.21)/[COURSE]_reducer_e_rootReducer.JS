// Arquivo myReducer.js dentro do diretório reducers:
const INITIAL = {
  state: '',
};

function myReducer(state = INITIAL, action) {
  switch (action.type) {
    case 'NEW_ACTION':
      return { state: action.state };
    default:
      return state;
  }
}

export default myReducer;


// Arquivo index.js dentro do diretório reducers:
import { combineReducers } from 'redux';
import myReducer from './myReducer';

const rootReducer = combineReducers({ myReducer });

export default rootReducer;