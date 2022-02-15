import React, { Component } from 'react';
import Marker from 'pigeon-marker';
import Map from 'pigeon-maps';
import { connect } from 'react-redux';

import Coordinates from './Coordinates';
import { getISSLocationThunk } from '../actions';

class ISSLocation extends Component {
  componentDidMount() {
    const { getISSLocation } = this.props;

    const ONE_SECOND = 500;
    setInterval(() => getISSLocation(), ONE_SECOND);
  }

  render() {
    const { latitude, longitude } = this.props;

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

const mapStateToProps = (state) => ({
  latitude: state.issLocation.latitude,
  longitude: state.issLocation.longitude,
});

const mapDispatchToProps = (dispatch) => ({
  getISSLocation: () => dispatch(getISSLocationThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);

// state
// {
//   issLocation: {
//     latitude,
//     longitude,
//   }
// }
