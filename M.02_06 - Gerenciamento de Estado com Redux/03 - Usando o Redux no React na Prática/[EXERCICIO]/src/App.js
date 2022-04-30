import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PersonalForms from './pages/PersonalForms';
import ProfessionalForm from './pages/ProfessionalForm';
import FormDataDisplay from './pages/FormDataDisplay';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={ PersonalForms } />
          <Route path="/professionalform" component={ ProfessionalForm } />
          <Route path="/formdisplay" component={ FormDataDisplay } />
        </Switch>
      </div>
    );
  }
}
export default App;
