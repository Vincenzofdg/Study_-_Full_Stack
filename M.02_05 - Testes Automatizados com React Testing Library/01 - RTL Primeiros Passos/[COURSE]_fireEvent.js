// Função que simula a interação da pessoa usuaria com a aplicação
// 1º Parâmetro: Elemento que vai receber o evento
// 2º Parâmetro: Objeto que representa o evento

// JS:
  // App.js
  import React, { Component } from 'react';
  import './App.css';
  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '' });
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
        </label>
        <input
          id="id-email"
          value={email}
          type="email"
          onChange={(e) => this.changeEmail(e.target.value)}
        />
        <input
          id="btn-enviar"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={() => this.changeSaveEmail(email)}
        />
        <input id="btn-id" type="button" value="Voltar" />
        <h2 data-testid="id-email-user">{`Valor: ${saveEmail}`}</h2>
      </div>
    );
  }
}

export default App;


// Teste:
import { render, fireEvent } from '@testing-library/react';

// Adicione esse teste.
test('Verificando se o botão e o campo email estão funcionando.', () => {
  // Primeiro botão:
  // 1º Acessa os elementos da tela:
  const { getByTestId, getByLabelText } = render(<App />);
  const EMAIL_USER = 'email@email.com';
  const textEmail = getByTestId('id-email-user');

  // 2º Realiza os testes:
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  // Segundo botão:
  // 1º Acessa os elementos da tela:
  const btnSend = getByTestId('id-send');
  const inputEmail = getByLabelText('Email');

  // 2º Interação => Caso seja o caso:
  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  fireEvent.click(btnSend);

  // 3º Realiza os testes:
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});