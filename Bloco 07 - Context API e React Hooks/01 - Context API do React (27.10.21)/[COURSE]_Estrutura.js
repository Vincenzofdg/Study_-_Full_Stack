// Criando um Contexto para o Context API
// No arquivo MyContext.js
import { createContext } from 'react'; 'react'

const MyContext = createContext();

export default MyContext;

// -------------------------------------------------------------------------------------------
// No arquivo App.js:
import React, { Component } from 'react';
import GreatGrandmother from './GreatGrandmother';

class App extends Component {
  render() {
    return ( <GreatGrandmother /> );
  }
}

export default App;

// -------------------------------------------------------------------------------------------
// No arquivo GreatGranmother.jsx
import React, { Component } from 'react';
import Grandmother from './Grandmother';

import MyContext from './MyContext'

class GreatGranmother extends Component {
  constructor() {
    super();
    this.state = {
      money: 1000000,
    }
    this.spendMoney = this.spendMoney.bind(this);
  }

  spendMoney = () => this.setState(( prev ) => ({money: prev.money - 100}));

  render() {
    const { money } = this.state
    const contextValue = {
      money,
      spendMoney: this.spendMoney,
    }
    return (
      <MyContext.Provider value={ contextValue }>
        <div>
          <h1>Eu sou a Bisavó</h1>
          <Grandmother />
        </div>
      </MyContext.Provider>
    );
  }
}

export default GreatGranmother;

// -------------------------------------------------------------------------------------------
// No arquivo Granmother.jsx
import React, { Component } from 'react';
import Father from './Father';

class Grandmother extends Component {
  render() {
    return (
      <div>
        <h2>Eu sou a Vó</h2>
        <Father />
      </div>
    );
  }
}

export default Grandmother;

// -------------------------------------------------------------------------------------------
// No arquivo Father.jsx
import React, { Component } from 'react';
import Daughter from './Daughter';

class Father extends Component {
  render() {
    return (
      <div>
        <h3>Eu sou o Pai</h3>
        <Daughter />
      </div>
    );
  }
}

export default Father;

// -------------------------------------------------------------------------------------------
// No arquivo Father.jsx
import React, { Component } from 'react';

import MyContext from './MyContext';

class Daughter extends Component {
  render() {
    return (
      <div>
        <h4>Eu sou a Filha</h4>
        <MyContext.Consumer>
          {({ money, spendMoney }) => (
            <div>
              <p>{ `Eu tenho ${money} reais para gastar.` }</p> 
              <button onClick={spendMoney}>PEDIR IFOOD</button>
            </div>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default Daughter;