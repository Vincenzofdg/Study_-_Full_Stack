import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // handleChange = (event) => {  // Arrowfunction não precisa de bind
  //   console.log(this);
  //   // this.setState({ email: event.target.value });
  // }

  handleSubmit = (event) => {
    event.preventDefault(); // Para nao dar refresh na pagina 
    const { email } = this.state;
    alert(`O login foi realizado. ${email}`);
  }

  render() {
    const { email, password } = this.state;
    return (
      <section className="login-form">
        <h1>Login</h1>
        <form onSubmit={ this.handleSubmit }> // SEMPRE QUE HOUVER BTN SUBMIT NO FORM
          {/* Referência: https://pt-br.reactjs.org/docs/forms.html */}
          <label htmlFor="email">
            Email
            <input 
              value={ email }
              type="email"
              name="email"
              id="email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              value={ password }
              type="password"
              name="password"
              id="password"
              onChange={ this.handleChange }
            />
          </label>
          <button type="submit">Fazer login</button>
        </form>
      </section>
    );
  }
}

export default LoginForm;
