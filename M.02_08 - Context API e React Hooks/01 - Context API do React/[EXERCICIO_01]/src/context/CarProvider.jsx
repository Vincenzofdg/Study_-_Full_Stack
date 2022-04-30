import React from 'react';
import CarContext from './CarContext';

class CarProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      red: false,
      blue: false,
      yellow: false,
    };
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar = (color, value) => this.setState({ [color]: value }); 

  render() {
    const { children } = this.props;
    return (
      <CarContext.Provider value={ { ...this.state, moveCar: this.moveCar } }>
        {children}
      </CarContext.Provider>
    );
  }
}

export default CarProvider;