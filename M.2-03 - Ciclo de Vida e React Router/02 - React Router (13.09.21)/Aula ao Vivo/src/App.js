import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Content />
    </BrowserRouter>
  );
}

export default App;
