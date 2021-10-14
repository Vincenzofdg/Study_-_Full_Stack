import React from 'react';
import './App.css';
import logo from './logo.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: undefined,
      pokemon: '',
    };
  }

  handleChange(event) {
    this.setState({
      pokemon: event.target.value,
    });
  }

  handleClick(pokemon) {
    fetch(`https://api.pokemontcg.io/v1/cards?name=${pokemon}`)
      .then((resolve) => resolve.json())
      .then((pokemonCards) => this.setState({ cards: pokemonCards.cards[0] }));
  }

  render() {
    const { cards, pokemon } = this.state;
    return (
      <main className="App">
        <img src={ logo } alt="Logo" />

        <h3>Pesquise um Pokemon</h3>

        <div>
        <input 
          type="text"
          className="form__input"
          onChange={ (e) => this.handleChange(e) } 
          data-testid="input-text" 
        />
        <button onClick={ () => this.handleClick(pokemon) }>
          Pesquisar
        </button>
        </div>
        <div>
          {cards && (
            <div>
              <h3>{cards.name}</h3>
              {cards.types.map((type) => (
                <p key={type}> {type} </p>
              ))}
              <img src={cards.imageUrl} alt={`${cards.name}-card`} />
            </div>
          )}
        </div>
      </main>
    );
  }
}

export default App;