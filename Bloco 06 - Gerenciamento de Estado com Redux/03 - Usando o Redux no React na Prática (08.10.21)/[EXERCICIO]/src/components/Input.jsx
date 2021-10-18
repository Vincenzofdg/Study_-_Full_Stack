import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { name, onChange, value } = this.props;
    return (
      <label htmlFor={ `input-${name}` }>
        { `${name}: ` }
        <input
          id={ `input-${name}` }
          type="text"
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: '',
  name: '',
  onChange: null,
};

export default Input;
