// 1º Para instalar e utilizar o redux-thunk
// > npm install redux-thunk

// 2º Para habilitar o uso dele na sua aplicação, é preciso fazer uso da função applyMiddleware() do Redux:

// arquivo onde a redux store é criada
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '/path/to/your/root/reducer';

const store = createStore(reducer, applyMiddleware(thunk));
