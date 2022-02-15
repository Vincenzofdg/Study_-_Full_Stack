import React from 'react';

class Header extends React.Component {
  render() {
    const title = 'Pokedex';
    return(
      <div>
        <h1 className="title">{ title }</h1>
      </div>
    )
  }
}

export default Header
