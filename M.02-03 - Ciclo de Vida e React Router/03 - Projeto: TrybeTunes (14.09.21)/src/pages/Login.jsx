import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

// import '../css/Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: '',
      nextPag: false,
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = async (event) => {
    event.preventDefault();
    const { login } = this.state;
    this.setState({ loading: true });
    await createUser({ name: login });
    this.setState({ nextPag: true });
  }

  render() {
    const { login, loading, nextPag } = this.state;
    const CHAR = 3;
    const loadType = 'p';
    return (
      <div data-testid="page-login" className="login-container">
        {/* Formulário */}
        <form className="form">
          <h1>TrybeTunes</h1>
          {/* Campo de Login */}
          <input
            name="login"
            value={ login }
            type="text"
            onChange={ this.handleChange }
            data-testid="login-name-input"
            placeholder="Name"
          />
          {/* Botao de Enter */}
          <button
            data-testid="login-submit-button"
            type="submit"
            disabled={ login.length < CHAR }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
        {/* Condicionais de Loading e Redirecionar */}
        { loading && <Loading type={ loadType } /> }
        { nextPag && <Redirect to="/search" /> }
      </div>
    );
  }
}

export default Login;
