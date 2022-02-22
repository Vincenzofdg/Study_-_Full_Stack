import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBarInput extends Component {
  render() {
    const { value, callbackFunc } = this.props;
    return (
      <label htmlFor="input-text" data-testid="text-input-label">
        Inclui o texto:
        <input
          id="input-text"
          name="searchText"
          type="text"
          data-testid="text-input"
          value={ value }
          onChange={ callbackFunc }
        />
      </label>
    );
  }
}

SearchBarInput.defaultProps = {
  value: '',
  callbackFunc: () => (undefined),
};

SearchBarInput.propTypes = {
  value: PropTypes.string,
  callbackFunc: PropTypes.func,
};

export default SearchBarInput;
