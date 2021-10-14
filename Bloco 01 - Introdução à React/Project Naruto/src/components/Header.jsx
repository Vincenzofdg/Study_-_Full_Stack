import React from 'react';

class Header extends React.Component {
  render() {
    const title = 'Naruto Movie List';
    return (
      <header className="movie-card-header">
        <h1 className="page-title">{ title }</h1>
      </header>
    );
  }
}

export default Header;
