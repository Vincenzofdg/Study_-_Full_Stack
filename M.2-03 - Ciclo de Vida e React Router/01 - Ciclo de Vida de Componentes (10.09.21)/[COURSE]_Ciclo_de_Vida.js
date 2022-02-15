// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

/* Montagem:
	- constructor - recebe as props e define o estado;
	- render - renderiza o componente, inserindo-o no DOM;
	- componentDidMount - dispara uma ou mais ações após o componente ser inserido no DOM (ideal para requisições). */

/* Atualização:
	- shouldComponentUpdate - possibilita autorizar ou não o componente a atualizar;
	- componentDidUpdate - dispara uma ou mais ações após o componente ser atualizado. */
	
/* Desmontagem:
	- componentWillUnmount - dispara uma ou mais ações antes de o componente ser desmontado. */


// Exemplo: API - https://icanhazdadjoke.com/api
class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined, // Piada mais recente retornada pela API
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    // Sobre headers => https://developer.mozilla.org/en-US/docs/Web/API/Headers
    // Da API: curl -H "Accept: application/json" https://icanhazdadjoke.com/
    const requestHeaders = { headers: { Accept: 'application/json' } }
    
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    const requestObject = await requestReturn.json();
    this.setState({
      jokeObj: requestObject,
    })
  }

  // Aqui sera feita a requisição da API
  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    //Salvando a piada no array de piadas existentes
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar piada!
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

      	<span>RENDERIZAÇÃO CONDICIONAL</span>

      </div>
    );
  }
}
