import React from 'react';

class Card extends React.Component {
  render() {
    const { pokemon } = this.props;
    const weight = pokemon.averageWeight.value;
    const measurement = pokemon.averageWeight.measurementUnit;
    return(
      <div className="pokemon">
        <div>
            <p>{ pokemon.name }</p>
            <p>{ pokemon.type }</p>
            <p>{`Avarege Weight: ${weight} ${measurement}`}</p>
        </div>
        <img className="card-img" src={ pokemon.image } alt={ pokemon.name } />
      </div>
    )
  }
}

export default Card
