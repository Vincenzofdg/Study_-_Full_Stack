import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Meus Imports:
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies, // Nao precisa do this neste caso
    };
    this.filtro = this.filtro.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.filter = this.filter.bind(this);
  }

  // Problema para "desclicar o checkbox"
  handleChange = ({ target }) => {
    const { name, value, checked } = target;
    this.setState({
      [name]: name !== 'checkbox' ? (value) : (checked),
    });
  }

  // Filtro dos Filmes:
  filtro = () => {
    const {
      searchText: text,
      bookmarkedOnly: checkBox,
      selectedGenre: g,
      movies } = this.state;

    return movies
    // Favoritos: é true ? sim : não
      .filter(({ bookmarked }) => (checkBox ? bookmarked : true))
    // Gênero:
      .filter(({ genre }) => (g.length === 0 ? true : g === genre))
    // Pelo o que for digitado:
      .filter(({ title: t, subtitle: s, storyline: st }) => t.includes(text)
      || s.includes(text)
      || st.includes(text));
  }

  // Requisito 19
  // Adiciona o Filme na lista this.state.movie:
  addMovie = (movie) => {
    this.setState((existente) => ({
      movies: [...existente.movies, movie],
    }));
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre } = this.state;
    return (
      <div>
        {/* Requisito 01 ao 05 */}
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        {/* Requisito 18 */}
        <MovieList movies={ this.filtro() } />
        {/* Requisito 06 ao 14 e 19 */}
        <AddMovie addMovieFunc={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
