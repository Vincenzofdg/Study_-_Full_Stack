import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBarSelect extends Component {
  render() {
    const { callbackFunc, value } = this.props;
    return (
      <label htmlFor="select" data-testid="select-input-label">
        Filtrar por gênero
        <select
          id="select"
          name="selectedGenre"
          type="select"
          value={ value }
          data-testid="select-input"
          onChange={ callbackFunc }
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

SearchBarSelect.defaultProps = {
  value: '',
  callbackFunc: () => (undefined),
};

SearchBarSelect.propTypes = {
  value: PropTypes.string,
  callbackFunc: PropTypes.func,
};

export default SearchBarSelect;
