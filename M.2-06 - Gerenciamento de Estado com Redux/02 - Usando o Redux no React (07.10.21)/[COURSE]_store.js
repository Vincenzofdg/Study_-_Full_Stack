// Pensar na criação do store como o seguinte documento => src/store/index.js
// e com o conteúdo a seguir:
import { createStore, combineReducers } from 'redux';
import rootReducer from '../reducers';
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer); // Sempre receberá o paramentro rootReducer

export default store;

// Recomenda-se a instalação da extenção Redux Devtools
import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools
);

export default store;
