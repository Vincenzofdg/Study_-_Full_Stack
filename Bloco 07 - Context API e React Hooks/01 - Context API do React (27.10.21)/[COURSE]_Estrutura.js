// No App:
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

class GreatGranmother extends Component {
  render() {
    return (
      <div>
        <h1>Eu sou a Bisavó</h1>
        <Grandmother />
      </div>
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

class Daughter extends Component {
  render() {
    return (
      <div>
        <h4>Eu sou a Filha</h4>
      </div>
    );
  }
}

export default Daughter;