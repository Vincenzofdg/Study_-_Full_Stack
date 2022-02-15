import { createStore, combineReducers } from 'redux';

import carReducer from './carReducer';
import signalReducer from './signalReducer';

const reducer = combineReducers({ 
  signal: signalReducer,
  car: carReducer,
 })

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
