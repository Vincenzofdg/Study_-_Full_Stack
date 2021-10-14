import React from 'react';
import { Provider } from 'react-redux';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

import store from './store';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Header />
        <main className="main">
          <Player />
          <Sidebar />
        </main>
      </Provider>
    );
  }
}

export default App;
