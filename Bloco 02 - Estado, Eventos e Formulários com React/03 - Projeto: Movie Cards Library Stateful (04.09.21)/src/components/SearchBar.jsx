import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Meus Imports:
import SearchBarInput from './SearchBarInput';
import SearchBarCheck from './SearchBarCheck';
import SearchBarSelect from './SearchBarSelect';

class SearchBar extends Component {
  render() {
    // Criando os componentes chamados (Requisito 01)
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      // Renderizando um formulario (Requisito 02)
      <form data-testid="search-bar-form">

        {/* Adicianando um input do tipo Text (Requisito 03) */}
        <SearchBarInput value={ searchText } callbackFunc={ onSearchTextChange } />

        {/* Adicianando um check box (Requisito 04) */}
        <SearchBarCheck checked={ bookmarkedOnly } callbackFunc={ onBookmarkedChange } />

        {/* Adicianando um select (Requisito 05) */}
        <SearchBarSelect value={ selectedGenre } callbackFunc={ onSelectedGenreChange } />

      </form>
    );
  }
}

// onSearchTextChange, onBookmarkedChange, onSelectedGenreChange
// estão com esse defautProps pois foram ditas como função no propTypes
SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: () => (undefined),
  bookmarkedOnly: false,
  onBookmarkedChange: () => (undefined),
  selectedGenre: '',
  onSelectedGenreChange: () => (undefined),
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func, // <===
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func, // <===
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func, // <===
};

export default SearchBar;
