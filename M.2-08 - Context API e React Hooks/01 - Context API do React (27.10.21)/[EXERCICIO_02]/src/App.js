import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';

import CarProvider from './context/CarProvider';
import LightProvider from './context/LightProvider';

function App() {
  return (
    <div className="container">
      <CarProvider>
        <Cars />
      </CarProvider>
      <LightProvider>
        <TrafficSignal />
      </LightProvider>
    </div>
  );
}

export default App;
