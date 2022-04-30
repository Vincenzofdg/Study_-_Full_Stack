// Esta forma funciona mas não é recomendável utilizar, pois a função está fora da classe.
import React from 'react';
import './App.css';

function handleClick() {
  console.log('Clicou no botão!')
}

class App extends React.Component {
  render() {
    return <button onClick={handleClick}>Meu botão</button>
  }
}

export default App;
