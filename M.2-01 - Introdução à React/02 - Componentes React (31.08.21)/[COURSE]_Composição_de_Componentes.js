// O codigo abaixo sera refatorado para melhor entendimento dos Componentes:
// src/App.js
import React from 'react';

class App extends React.Component {
  render() {
    // Declaração do objeto contendo informações do album01
    const album01 = {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };
    // Declaração do objeto contendo informações do album02
    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };
    // Retorno do que será renderizado
    return (
      <article>
        <section>
          <img src={ album01.image } alt={ album01.title } />
          <h2>{ album01.title }</h2>
          <p>Lançamento: { album01.releaseDate.year }</p>
          <p>Gravadora: { album01.others.recordCompany }</p>
          <p>Formatos: { album01.others.formats }</p>
        </section>
        <section>
          <img src={ album02.image } alt={ album02.title } />
          <h2>{ album02.title }</h2>
          <p>Lançamento: { album02.releaseDate.year }</p>
          <p>Gravadora: { album02.others.recordCompany }</p>
          <p>Formatos: { album02.others.formats }</p>
        </section>
      </article>
    );
  }
}

export default App;

//-------------REFATORANDO-------------//
// Arquivo: /src/components/Album.js ==> Ralizar o "Molde" section
class Album extends React.Component {
  render() {
    return (
      <section>
        <img src={ this.props.album.image } alt={ this.props.album.title } />
        <h2>{ this.props.album.title }</h2>
        <p>{ this.props.album.releaseDate.year }</p>
        <p>
          Lançamento:
          { `${ this.props.album.releaseDate.day }/${ this.props.album.releaseDate.month }/${ this.props.album.releaseDate.year }` }
        </p>
        <p>Gravadora: { this.props.album.others.recordCompany }</p>
        <p>Formatos: { this.props.album.others.formats }</p>
      </section>
    );
  }
}

export default Album;

// 1º Passo: Importa-lo no arquivo App.js
import React from 'react';
import Album from './components/Album';

// 2º Passo: Passar as props apropriadas
class App extends React.Component {
  render() {
    return (
      <div>
        <Album album={ album01 } />
        <Album album={ album02 } />
      </div>
    );
  }
}

// 2º Passo: Resultado Final
import React from 'react';
import Album from './components/Album'

class App extends React.Component {
  render() {
    const album01 = {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };

    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };

    return (
      // Arquivo que gera o formato da section esta componentizado
      <div>
        <Album album={ album01 } />
        <Album album={ album02 } />
      </div>
    );
  }
}

export default App;

// Exercicio de Fixação:

// arquivo Order.js
import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order;

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}

export default Order;

// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    return (
      <div className="App">
        <h1> Orders recently created </h1>
         {/*  adicione os componentes aqui */}
         <Order product={ headphone }/>
         <Order product={ energyDrink }/>
      </div>
    );
  }
}

export default App;