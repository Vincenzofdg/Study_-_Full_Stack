import React, { useState } from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

import Searchbar from './Searchbar';

function Header({ title, showSearchBtn }) {
  const [showSearchBar, setSearchBar] = useState(false);

  return (
    <header>
      <Link to="/perfil">
        <button
          type="button"
        >
          <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="profile-user"
          />
        </button>
      </Link>
      <h1
        data-testid="page-title"
      >
        {title}
      </h1>
      { showSearchBtn
        ? (
          <button
            type="button"
            onClick={ () => setSearchBar(!showSearchBar) }
          >
            <img
              data-testid="search-top-btn"
              src={ searchIcon }
              alt="profile-search"
            />
          </button>
        ) : null }
      { showSearchBar && <Searchbar type={ title.toLowerCase() } /> }
    </header>
  );
}

Header.propTypes = {
  title: string.isRequired,
  showSearchBtn: string.isRequired,
};

export default Header;
