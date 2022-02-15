import React from 'react';

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
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
    // enviar para um server
    event.preventDefault();
    const { email } = this.state;
    alert(`O registro foi realizado. ${email}`);
  }

  render() {
    const { name, email, password } = this.state;
    return (
      <section className="register-form">
        <h1>Register</h1>
        <form onSubmit={ this.handleSubmit }>
          {/* Referência: https://pt-br.reactjs.org/docs/forms.html */}
          <label htmlFor="name">
            Nome
            <input
              value={ name }
              type="text"
              name="name"
              id="name"
              onChange={ this.handleChange }
            />
          </label>
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

export default RegisterForm;
