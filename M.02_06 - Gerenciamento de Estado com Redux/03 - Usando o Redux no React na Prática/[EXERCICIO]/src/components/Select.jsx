import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { name, onChange, value } = this.props;
    const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas',
      'São Paulo', 'Ceará', 'Distrito Federal'];
    return (
      <label htmlFor={ `select-${name}` }>
        { `${name}: ` }
        <select
          id={ `select-${name}` }
          name={ name }
          value={ value }
          onChange={ onChange }
        >
          <option>Selecione</option>
          { states.map((option, index) => <option key={ index }>{ option }</option>) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Select;
