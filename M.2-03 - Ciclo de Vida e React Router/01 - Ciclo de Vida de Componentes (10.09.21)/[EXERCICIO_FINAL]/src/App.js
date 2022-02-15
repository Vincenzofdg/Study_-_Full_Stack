import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      picture: '', // API retorna um unico objeto
      loading: true,
    }
    this.fetchAPI = this.fetchAPI.bind(this);
    this.imgGenerator = this.imgGenerator.bind(this);
  }

  async fetchAPI() {
    const API = 'https://dog.ceo/api/breeds/image/random';
    this.setState(
      {loading: true},
      async () => {
        const response = await fetch(API);
        const dogPic = await response.json();
        this.setState({
          picture: dogPic.message,
          loading: false,
        })
      }
    )
  }

  componentDidMount() {
    this.fetchAPI();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.picture.includes('terrier') ? false : true;
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('url', [prevState.picture, '']);
  }

  // savingLocalStorage = (url) => {
  //   localStorage.setItem('url', [this.state.picture, '']);
  // }

  imgGenerator = () => {
    const { picture } = this.state
    return (
      <div>
        <p>{ picture.split("/")[4] }</p>
        <img className="img" src={ picture } alt="Cachorro" />
      </div>
    )
  }

  render() {
    const { loading } = this.state;
    const nowOnLoading = <p>Carregando Imagem...</p>;
    return(
      <div className="App">
        <br></br>
        <button onClick={this.fetchAPI}>NEXT DOG</button>
        {loading ? nowOnLoading : this.imgGenerator()} {/* Condicional */}
      </div>
    )
  }
}

export default App;
