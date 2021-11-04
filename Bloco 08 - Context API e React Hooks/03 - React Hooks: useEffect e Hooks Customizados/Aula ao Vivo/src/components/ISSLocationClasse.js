import React, { Component } from 'react';
import Marker from 'pigeon-marker';
import Map from 'pigeon-maps';

import Coordinates from './Coordinates';
import ISSContext from '../context/ISSContext';

const ONE_SECOND = 1000;
class ISSLocation extends Component {
  componentDidMount() {
    const { getISSLocation } = this.context;

    setInterval(() => {
      getISSLocation();
    }, ONE_SECOND);

    document.title = new Date().toLocaleTimeString();
  }

  componentDidUpdate() {
    document.title = new Date().toLocaleTimeString();
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

ISSLocation.contextType = ISSContext;

export default ISSLocation;
