import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import changeTheme from '../actions/changeTheme';

import lightSwitch from '../images/light-switch.png';
import lampLightMode from '../images/lamp-light-mode.png';
import lampDarkMode from '../images/lamp-dark-mode.png';
import sullivanLightMode from '../images/sullivan-light-mode.png';
import sullivanDarkMode from '../images/sullivan-dark-mode.png';
import '../styles/home.css';

class Home extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { theme } = this.props;
    const { setTheme } = this.props;
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  render() {
    const { theme } = this.props;
    return (
      <div className={ theme }>
        <h1 className="title-light-mode">SHOP S.A.</h1>
        <button
          className="light-switch-button"
          type="button"
          onClick={ this.handleClick }
        >
          <img
            className="light-switch"
            src={ lightSwitch }
            alt="Interruptor"
          />
        </button>
        <img
          className="lamp"
          src={ theme === 'light' ? lampLightMode : lampDarkMode }
          alt="Lampada"
        />
        <img
          className="sullivan"
          src={ theme === 'light' ? sullivanLightMode : sullivanDarkMode }
          alt="Sullivan"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.myReducer.theme,
});

const mapDispatchToProps = (dispatch) => ({
  setTheme: (mode) => dispatch(changeTheme(mode)),
});

Home.propTypes = ({
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
