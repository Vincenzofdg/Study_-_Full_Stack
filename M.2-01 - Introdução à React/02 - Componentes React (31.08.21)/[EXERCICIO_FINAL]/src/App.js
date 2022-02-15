import React from 'react';
import './App.css';
import data from './data';

import Header from './components/Header';
import List from './components/List';

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Header />
        <List pokemons={ data } />
      </div>
    );
  }
}

export default App;
