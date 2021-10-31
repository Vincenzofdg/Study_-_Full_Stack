import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  render() {
    const { htmlFor, label, onChange, type, value } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        { label }
        <input
          data-testid={ `${htmlFor}-input` }
          id={ htmlFor }
          name={ htmlFor }
          onChange={ onChange }
          type={ type }
          value={ value }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  value: undefined,
};

Input.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};
