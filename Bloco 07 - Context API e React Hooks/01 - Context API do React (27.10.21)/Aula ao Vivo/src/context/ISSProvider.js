import React from 'react';
import { getCurrentISSLocation } from '../services/issAPI';
import ISSContext from './ISSContext';

class ISSProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      latitude: 0,
      longitude: 0,
      error: null,
      isLoading: false,
    };
    this.getISSLocation = this.getISSLocation.bind(this);
  }

  async getISSLocation() {
    const result = await getCurrentISSLocation();
    this.setState({
      latitude: Number(result.iss_position.latitude),
      longitude: Number(result.iss_position.longitude),
    });
  }

  render() {
    const { children } = this.props;
    const valueProvided = {
      ...this.state,
      getISSLocation: this.getISSLocation,
    }
    return (
      <ISSContext.Provider value={ valueProvided }>
        {children}
      </ISSContext.Provider>
    );
  }
}

export default ISSProvider;
