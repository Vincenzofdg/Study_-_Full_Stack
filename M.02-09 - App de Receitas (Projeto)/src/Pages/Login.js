import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  emailValidation,
  passwordValidation,
  saveApiTokens,
  saveUserToken,
} from '../Helper';

export default function Login() {
  const { push } = useHistory();
  const [user, setInfo] = useState({
    email: '',
    password: '',
  });

  const handleInput = ({ target: { name, value } }) => {
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const enableLogin = (email, password) => {
    if (emailValidation(email) && passwordValidation(password)) {
      return false;
    }
    return true;
  };

  const loginButton = (userEmail) => {
    saveApiTokens();
    saveUserToken(userEmail);
    push('/comidas');
  };

  return (
    <section>
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          data-testid="email-input"
          value={ user.email }
          onChange={ (e) => handleInput(e) }
        />
      </label>
      <label htmlFor="email">
        Password
        <input
          type="password"
          name="password"
          data-testid="password-input"
          value={ user.password }
          onChange={ (e) => handleInput(e) }
        />
        <button
          type="button"
          data-testid="login-submit-btn"
          onClick={ () => loginButton(user.email) }
          disabled={ enableLogin(user.email, user.password) }
        >
          Submit
        </button>
      </label>
    </section>
  );
}
