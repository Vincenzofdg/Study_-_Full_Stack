import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Comments from './components/Comments';
import Header from './components/Header';
import NotFound from './components/NotFound';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />

        <Switch>
          <Route exact path="/">
            <section>
              <h1>Página sobre mim</h1>
            </section>
          </Route>
          <Route path="/projects">
            <section>
              <h1>Página de projetos</h1>
            </section>
          </Route>
          <Route path="/comments" component={ Comments } />
          <Route component={ NotFound } />
        </Switch>
      </>
    );
  }
}

export default App;
