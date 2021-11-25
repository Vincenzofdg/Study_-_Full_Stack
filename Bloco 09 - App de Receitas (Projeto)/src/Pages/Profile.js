import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Profile() {
  const user = JSON.parse(localStorage.getItem('user'));
  const userEmail = user === null ? '' : user.email;

  return (
    <div>
      <Header title="Perfil" />
      <main>
        <h2
          data-testid="profile-email"
        >
          { userEmail }
        </h2>
        <Link to="/receitas-feitas">
          <button
            data-testid="profile-done-btn"
            type="button"
          >
            Receitas Feitas
          </button>
        </Link>
        <Link to="/receitas-favoritas">
          <button
            data-testid="profile-favorite-btn"
            type="button"
          >
            Receitas Favoritas
          </button>
        </Link>
        <Link to="/">
          <button
            data-testid="profile-logout-btn"
            type="button"
            onClick={ () => localStorage.clear() }
          >
            Sair
          </button>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
