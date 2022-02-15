import React from 'react';
import './App.css';
import Cars from './Cars';

import CarProvider from './context/CarProvider'

  class App extends React.Component {
    render() {
      return (
        <CarProvider>
            <Cars />
        </CarProvider>
    )
  }
}

export default App;
