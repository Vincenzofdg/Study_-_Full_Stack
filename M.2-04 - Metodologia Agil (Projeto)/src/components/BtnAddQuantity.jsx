import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BtnAddQuantity extends Component {
  render() {
    const { name, id = 'id', onClick, testid, operation } = this.props;
    return (
      <button
        type="button"
        name={ name }
        id={ id }
        onClick={ onClick }
        data-testid={ testid }
      >
        { operation }
      </button>
    );
  }
}

BtnAddQuantity.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  testid: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default BtnAddQuantity;
