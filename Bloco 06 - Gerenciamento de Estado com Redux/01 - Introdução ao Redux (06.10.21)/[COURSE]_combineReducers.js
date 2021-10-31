//  Essa função recebe um objeto como parâmetro contendo cada um dos seus reducers como elementos

// Arquivo index.js
import { combineReducers } from 'redux'; // <== Importando

import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';

const reducerCombinado = combineReducers({ meuReducer, meuOutroReducer});

export default reducerCombinado;

// --------------------------------------------------------- //
import { createStore } from 'redux';
import reducerCombinado from './reducers/index'; // <== Importando o combineReducer

const store = createStore(reducerCombinado);

console.log(store.getState());

//{
// meuReducer: {/_estado do meuReducer_/},
// meuOutroReducer: {/_estado do meuOutroReducer_/,}
//}