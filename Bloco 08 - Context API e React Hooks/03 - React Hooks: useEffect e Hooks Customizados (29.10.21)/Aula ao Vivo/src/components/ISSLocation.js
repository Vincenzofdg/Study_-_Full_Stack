import React, { useContext, useEffect } from 'react';
import Marker from 'pigeon-marker';
import Map from 'pigeon-maps';

import Coordinates from './Coordinates';
import ISSContext from '../context/ISSContext';
import useTimer from '../hooks/useTimer';

const ONE_SECOND = 1000;
function ISSLocation() {
  const { latitude, longitude, getISSLocation } = useContext(ISSContext);

  useTimer(getISSLocation, ONE_SECOND);

  useEffect(() => {
    document.title = new Date().toLocaleTimeString();
  }); // componentDidUpdate

  // useEffect(() => {}); => componentDidUpdate
  // useEffect(() => {}, []); => componentDidMount
  // useEffect(() => { return () => {} }, []); => componentWillUnmount
  // useEffect(() => {}, [var1, var2]); => componentDidUpdate

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

export default ISSLocation;
