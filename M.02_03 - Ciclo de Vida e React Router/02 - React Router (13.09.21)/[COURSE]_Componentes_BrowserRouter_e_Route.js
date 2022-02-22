// Tendo feito npm install react-router-dom, devemos:

// 1 - importar para nosso app:
import React from 'react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

// 2 - Encapsular o return no <BrowserRouter>
class App extends React.Component {
  render() {
    return(
	<BrowserRouter>
	  <Home />
	</BrowserRouter>
    );
  }
}

export default App;

// No Arquivo Home:
import React from 'react';
import About from './About';
import { Route } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return(
	<div>
	  <h1>Minha Home Page</h1>
	  <Route path="/about" component={ About } />
	</div>
    );
  }
}

export default Home;


// Criando as Rotas no arquivo App.js
import React from 'react';
import Home from './Home';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
	<BrowserRouter>
	  <Route path="/about" component={ About } />
	  <Route path="/howto" component={ HowTo } />
	  <Route path="/profile"><Profile /></Route>
 	  <Route exact path="/" component={ Home } />
	</BrowserRouter>
    );
  }
}

export default App;


