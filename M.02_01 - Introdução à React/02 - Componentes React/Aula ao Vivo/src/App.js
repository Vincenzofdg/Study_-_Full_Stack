import React from 'react';
import SerieList from './components/SerieList';

import catalog from './data';

import './App.css';


class App extends React.Component {
  render() {
    return (
      <main className="main-container">
        <SerieList catalog={ catalog }/>
      </main>
    );
  }
}

export default App;
