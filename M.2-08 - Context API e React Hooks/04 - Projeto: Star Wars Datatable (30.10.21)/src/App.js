import React from 'react';
import Home from './pages/Home';

import './App.css';
import SWProvider from './context/SWProvider';

function App() {
  return (
    <SWProvider>
      <Home />
    </SWProvider>
  );
}

export default App;
