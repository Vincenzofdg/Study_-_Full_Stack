// Precisamos trabalha o arquivo src/index.js para adicionar as configurações do Provider
import React from 'react';
import ReactDOM from 'react-dom';
// o provider é o meio pelo qual disponibilizamos o store
// com os estados de toda a aplicação para todos os demais componentes
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'),
);00
