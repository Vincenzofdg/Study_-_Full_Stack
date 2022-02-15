import React from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';

function App() {
  return (
    <div className="App">
      <h1>
        Space Station
        {' '}
        <span className="purple-font">Tracker</span>
      </h1>
      <ISSLocation />
    </div>
  );
}

export default App;
