import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About'
import Users from '../pages/Users'
import StrictAcess from './StrictAccess';

class Content extends Component {
  render() {
    const login = {
      username: 'joao',
      password: 1234,
    }
    return (
      <Switch>
        <Route path="/users/:id" render={ (props) => <Users {...props} greetingsMessage="Good Morning"/> } />
        <Route path="/strict-access" render={ (props) => <StrictAcess user={ login } /> } />
        <Route path="/about" component={ About } />
        <Route exact path="/" component={ Home } />
      </Switch>
    );
  }
}

export default Content;
