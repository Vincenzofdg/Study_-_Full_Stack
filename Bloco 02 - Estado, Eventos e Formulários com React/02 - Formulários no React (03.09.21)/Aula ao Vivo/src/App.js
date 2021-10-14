import React from 'react';

import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <LoginForm />
        <RegisterForm />
      </main>
    );
  }
}

export default App;
