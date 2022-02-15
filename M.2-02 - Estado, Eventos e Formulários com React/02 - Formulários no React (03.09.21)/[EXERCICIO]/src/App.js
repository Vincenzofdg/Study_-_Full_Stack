import { Component } from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      sex: 'masculino',
      place: '',
      about: '',
      check: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  render() {
    return(
      <form className="App">

        <fieldset>
        <legend>1° Parte</legend>
          <label htmlFor="sex">Sexo:</label>
          <select onChange={ this.handleChange } name="sex" type="text" id="sexo">
            <option name="masc" value="masculino">Masculino</option>
            <option name="fem" value="feminino">Feminino</option>
          </select>
          <label htmlFor="name">Nome Completo:</label>
          <input onChange={ this.handleChange } name="name"  type="text" id="name"></input>
          <label htmlFor="place">Data de Nascimento:</label>
          <input onChange={ this.handleChange } name="place"  type="date" id="place"></input>
        </fieldset>

        <br></br>

        <fieldset>
        <legend>2° Parte</legend>
        <label htmlFor="about">Sobre Voce:</label>
        <textarea onChange={ this.handleChange } id="about" name="about" cols={100} rows={20} />
        <br></br>
        <label htmlFor="check">Check Me:</label>
        <input type="checkbox" onChange={ this.handleChange } id="check" name="check" />
        </fieldset>
      </form>
    )
  }
}

export default App;
