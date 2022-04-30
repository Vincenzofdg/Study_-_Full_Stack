// Exemplo:
import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState((estadoAnterior, _props) => ({  // "_" para quando não for usar o parametro obrigatório
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }
  render() {
    return (
      <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
    )
  }
}

export default App;
