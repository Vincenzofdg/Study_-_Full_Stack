import React, { useContext } from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';
import PeopleInSpace from './components/PeopleInSpace';
import ISSContext from './context/ISSContext';

function App() {
  const { showMap, toggleMap } = useContext(ISSContext);

  return (
    <div className="App">
      <h1>
        Space Station
        {' '}
        <span className="purple-font">Tracker</span>
      </h1>
      <button type="button" onClick={ toggleMap }>Remover o Mapa</button>
      {showMap && <ISSLocation />}
      <PeopleInSpace />
    </div>
  );
}

export default App;
