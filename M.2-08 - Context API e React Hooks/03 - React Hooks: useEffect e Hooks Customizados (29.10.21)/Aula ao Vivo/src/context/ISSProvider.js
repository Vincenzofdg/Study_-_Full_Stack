import React from 'react';
import ISSContext from './ISSContext';
import {
  getCurrentISSLocation,
  getPeopleInSpace as getPeopleInSpaceApi,
} from '../services/issAPI';

class ISSProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      isFetching: false,
      peopleInSpace: [],
      showMap: true,
    };

    this.getISSLocation = this.getISSLocation.bind(this);
    this.getPeopleInSpace = this.getPeopleInSpace.bind(this);
    this.toggleMap = this.toggleMap.bind(this);
  }

  getISSLocation() {
    this.setState({ isFetching: true }, async () => {
      const { iss_position: { latitude, longitude } } = await getCurrentISSLocation();
      this.setState({
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        isFetching: false,
      });
    });
  }

  getPeopleInSpace() {
    this.setState({ isFetching: true }, async () => {
      const { people } = await getPeopleInSpaceApi();
      this.setState({
        peopleInSpace: people,
        isFetching: false,
      });
    });
  }

  toggleMap() {
    this.setState(({ showMap }) => ({ showMap: !showMap }));
  }

  render() {
    const { children } = this.props;
    return (
      <ISSContext.Provider
        value={ {
          ...this.state,
          getISSLocation: this.getISSLocation,
          getPeopleInSpace: this.getPeopleInSpace,
          toggleMap: this.toggleMap,
        } }
      >
        {children}
      </ISSContext.Provider>
    );
  }
}

export default ISSProvider;
