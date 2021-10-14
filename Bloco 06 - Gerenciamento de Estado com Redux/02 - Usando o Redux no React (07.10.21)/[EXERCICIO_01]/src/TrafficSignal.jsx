import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSignal } from './redux/actionCreators';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') {
    return redSignal;
  }
  if (signalColor === 'green') {
    return greenSignal;
  }
  if (signalColor === 'yellow') {
    return yellowSignal;
  }
  return null;
};

class TrafficSignal extends Component {
  constructor() {
    super();
    this.state = {
      cores: [ 'red', 'yellow', 'green' ],
    }
  }
  render() {
    const { color, change } = this.props;
    const {cores} = this.state;
    return(
      <div>
        <div className="button-container">
        <button onClick={ () => change(cores[0]) } type="button">{ cores[0] }</button>
        <button onClick={ () => change(cores[1]) } type="button">{ cores[1] }</button>
        <button onClick={ () => change(cores[2]) } type="button">{ cores[2] }</button> 
        </div>
        <img className="signal" src={renderSignal(color)} alt="" />
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  color: state.color,
});

const mapDispatchToProps = (dispatch) => ({
  change: (payload) => dispatch(changeSignal(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);