// Para acessar uma função que criamos dentro de uma classe num eventListener:
import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick() {
    console.log('Clicou!')
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick}>Meu botão</button>;
   )
  }
}

export default App;


// Contructor:
// A função super é chamada para que a logica dentro com construtor rode antes.
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super()
    // Colocar aqui a lógica
  }

  render() {
    return (
      <span>Meu componente!</span>
    )
  }
}

export default App;

// Bind:
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
    console.log(this)
    console.log('Clicou!')
  }

  render() {
    return (
      <button onClick={this.handleClick}>Meu botão</button>
    )
  }
}

export default App;
