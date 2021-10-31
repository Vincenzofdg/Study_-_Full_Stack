import React from 'react';
import PropTypes from 'prop-types';

export default class Select extends React.Component {
  render() {
    const { htmlFor, label, onChange, options, value } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        { label }
        <select
          data-testid={ `${htmlFor}-select` }
          id={ htmlFor }
          name={ htmlFor }
          onChange={ onChange }
          value={ value }
        >
          { options.map((opt) => <option key={ opt } value={ opt }>{ opt }</option>) }
        </select>
      </label>
    );
  }
}

Select.defaultProps = {
  value: undefined,
};

Select.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  value: PropTypes.string,
};
