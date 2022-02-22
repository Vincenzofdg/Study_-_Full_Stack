import React, { Component } from 'react';
import Header from '../components/Header';

import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';
import AlbumList from '../components/AlbumList';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      searched: '',
      albums: [],
      visible: false,
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = async (event) => {
    event.preventDefault();
    const { search } = this.state;
    this.setState({
      visible: true,
      loading: true,
      searched: search,
    });
    const result = await searchAlbumsAPI(search);
    this.setState({
      search: '',
      loading: false,
      albums: result,
    });
  }

  albumsGeneration(albums, searched) {
    return (
      <div>
        <h2>{ `Resultado de álbuns de: ${searched}` }</h2>
        {albums.length > 0
          ? albums.map((a) => <AlbumList key={ a.collectionId } album={ a } />)
          : <p>Nenhum álbum foi encontrado</p> }
      </div>
    );
  }

  render() {
    const {
      search,
      searched,
      albums,
      visible,
      loading } = this.state;
    const CHAR = 2;
    const loadType = 'p';
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <input
            data-testid="search-artist-input"
            type="text"
            name="search"
            value={ search }
            onChange={ this.handleChange }
          />
          <button
            type="submit"
            data-testid="search-artist-button"
            disabled={ search.length < CHAR }
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
        </form>

        { visible && this.albumsGeneration(albums, searched) }

        { loading && <Loading type={ loadType } /> }
      </div>
    );
  }
}

export default Search;
