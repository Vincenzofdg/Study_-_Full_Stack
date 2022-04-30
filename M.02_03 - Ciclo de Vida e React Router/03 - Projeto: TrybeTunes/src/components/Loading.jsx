import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Loading extends Component {
  render() {
    const { type } = this.props;
    const msg = 'Carregando...';
    return (
      <div>
        {type === 'h1' && <h1>{ msg }</h1>}
        {type === 'p' && <p>{ msg }</p>}
        {type === 'span' && <span>{ msg }</span>}
      </div>
    );
  }
}

Loading.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Loading;
