import React from 'react';
import { CarContext } from './context';

import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

class Cars extends React.Component {
  render() {
    const { red, blue, yellow, moveCar } = this.context;
    return (
      <div>
        <div>
          <img className={ red ? 'right' : 'left' } src={ carRed } alt="red" />
          <button type="button" onClick={ () => moveCar('red', !red) }>Move</button>
        </div>
        <div>
          <img className={ blue ? 'right' : 'left' } src={ carBlue } alt="blue" />
          <button type="button" onClick={ () => moveCar('blue', !blue)}>Move</button>
        </div>
        <div>
          <img className={ yellow ? 'right' : 'left' } src={ carYellow } alt="yellow" />
          <button type="button" onClick={ () => moveCar('yellow', !yellow) }>Move</button>
        </div>
      </div>
    )
  }
}

Cars.contextType = CarContext;

export default Cars;
