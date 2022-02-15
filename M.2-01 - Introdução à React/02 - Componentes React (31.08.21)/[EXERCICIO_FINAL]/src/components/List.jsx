import React from 'react';

import Card from './Card'

class List extends React.Component {
  render() {
    const { pokemons } = this.props
    return(
      <div className="pokedex">
        {pokemons.map((i) => <Card key={i.id} pokemon={i} />)}
      </div>
    )
  }
}

export default List
