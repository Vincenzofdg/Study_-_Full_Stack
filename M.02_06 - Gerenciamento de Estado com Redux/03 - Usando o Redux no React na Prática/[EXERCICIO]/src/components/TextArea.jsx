import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { name, onChange, value } = this.props;
    return (
      <label htmlFor={ `textarea-${name}` }>
        { name === 'curriculo' ? `Resumo do ${name}:` : 'Descrição do cargo:' }
        <textarea
          id={ `textarea-${name}` }
          name={ name }
          value={ value }
          onChange={ onChange }
          maxLength={ name === 'curriculo' ? '1000' : '500' }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextArea;
