import React, { Component } from 'react';
import './App.css';
import MyTask from './MyTask';

import Header from './Header';
import HelloWorld from './HelloWorld';

class App extends Component {
  render() {
    return (
      <>
      <MyTask />
      <hr />
      {/* Arquivos da Aula ao Vivo */}
      <Header />
      <HelloWorld />
      {/* ------------------------ */}
      </>
    );
  }
}

export default App;