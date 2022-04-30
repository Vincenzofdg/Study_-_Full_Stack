import React from 'react';
import { LightContext } from '.';

class LightProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      signalColor: 'red',
    };
  }

  changeSignal = (newColor) => this.setState({ signalColor:  newColor});

  render() {
    const { children } = this.props;
    return (
      <LightContext.Provider value={ { ...this.state , changeSignal: this.changeSignal }}>
        {children}
      </LightContext.Provider>
    );
  }
}

export default LightProvider;