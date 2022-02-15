import React from 'react';
import Header from './components/Header';
import './App.css';

// Meus Imports:
import movies from './data';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Requisito 15 */}
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;
