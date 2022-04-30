// No componente: 
import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} {this.props.lastName}</h1>;
  }
}

export default Greeting;

// No App:
import Greeting from './Greeting';

function App() {
  return (
    <main>
      <Greeting name="Samuel" lastName="Silva" />
    </main>
  );
}

export default App;

/* Explicação:
Ao declarar no App <Greeting name="Samuel" lastName="Silva" /> o React instantaneamente
cria uma const props = { name: 'Samuel', lastName: 'Silva' } atribuida à Greeting */

// Exercicio de Fixaçao
import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;

/* 01 - Qual o nome do componente declarado acima?
R: Image */

/* 02 - Chame o componente Image, de forma que seja mostrada esta imagem, ou o texto Cute cat staring, caso a imagem não consiga ser carregada? */
import staringCat from './staringCat.jpg';
import Image from './Image';

function App() {
  return (
    <main>
      <Image source={staringCat} alternativeText="Cute cat staring" />
    </main>
  );
}

export default App;
