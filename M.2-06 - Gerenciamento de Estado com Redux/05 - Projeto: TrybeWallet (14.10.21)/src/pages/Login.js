import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from '../components/Input';
import { setUserValue } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      redirect: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    const { dispatchPayload } = this.props;
    const { email } = this.state;

    event.preventDefault();
    dispatchPayload(email);
    this.setState({ redirect: '/carteira' });
  }

  validateEmail(email) {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return re.test(String(email).toLowerCase());
  }

  render() {
    const MIN_PWD_LENGTH = 6;
    const { email, password, redirect } = this.state;

    if (redirect) {
      return <Redirect to={ redirect } />;
    }

    return (
      <form onSubmit={ this.handleSubmit }>
        <fieldset>
          <Input
            htmlFor="email"
            label="Email:"
            type="email"
            onChange={ this.handleChange }
          />
          <Input
            htmlFor="password"
            label="Senha:"
            type="password"
            onChange={ this.handleChange }
          />
          <button
            type="submit"
            disabled={ password.length < MIN_PWD_LENGTH || !this.validateEmail(email) }
          >
            Entrar
          </button>
        </fieldset>
      </form>
    );
  }
}

Login.propTypes = {
  dispatchPayload: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchPayload: (payload) => dispatch(setUserValue(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
