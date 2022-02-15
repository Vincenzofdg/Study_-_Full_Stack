import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { name, score, source } = this.props;
    return (
      <div className="container">
        <header
          className="d-flex flex-wrap align-items-center justify-content-center
          justify-content-md-between py-3 mb-4 border-bottom"
        >
          <div
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto
            text-dark text-decoration-none"
          >
            <img
              className="bi me-2 rounded-circle"
              data-testid="header-profile-picture"
              src={ source }
              alt="gravatar"
            />
            <h3 className="fs-4" data-testid="header-player-name">{ name }</h3>
          </div>
          <p className="fs-4">
            Pontos:
            {' '}
            <span data-testid="header-score">{ score }</span>
          </p>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired,
};

export default Header;
