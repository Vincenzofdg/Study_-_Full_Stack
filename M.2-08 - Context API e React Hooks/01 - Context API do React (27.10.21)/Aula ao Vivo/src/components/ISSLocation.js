import React, { Component } from 'react';
import Marker from 'pigeon-marker';
import Map from 'pigeon-maps';

import ISSContext from '../context/ISSContext';
import Coordinates from './Coordinates';

const ONE = 1000;

class ISSLocation extends Component {
  componentDidMount() {
    const { getISSLocation } = this.context;
    setInterval(() => { getISSLocation() }, ONE);
  }

  render() {
    const { latitude, longitude } = this.context;
    return (
      <main>
        <div className="map">
          <Map
            center={ [0, 0] }
            defaultWidth={ 450 }
            height={ 450 }
            minZoom={ 1.5 }
            maxZoom={ 8 }
            zoom={ 1.5 }
          >
            <Marker anchor={ [latitude, longitude] } />
          </Map>
        </div>
        <Coordinates latitude={ latitude } longitude={ longitude } />
      </main>
    );
  }
}

// Outra forma de usar o Context => caso no arquivo for usar apenas um context
ISSLocation.contextType = ISSContext;

export default ISSLocation;
