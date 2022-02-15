import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';

import {
  addSong,
  // getFavoriteSongs,
  removeSong } from '../services/favoriteSongsAPI';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      album: {},
      tracks: [],
      // favorite: [],
      loading: false,
    };
    this.getAlbumById = this.getAlbumById.bind(this);
    this.checkCapture = this.checkCapture.bind(this);
    // this.myFavoriteSongs = this.myFavoriteSongs.bind(this);
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    await this.getAlbumById(id);
    // await this.myFavoriteSongs();
  }

  getAlbumById = async (param) => {
    const result = await getMusics(param);
    this.setState({
      album: result[0], // Pois o primeiro elemento do array são as infos do album
      tracks: result.slice(1),
    });
  }

  checkCapture = async (marked, name) => {
    this.setState({ loading: true });
    await (marked ? await addSong(name) : await removeSong(name)); // <===
    // const favorite = await getFavoriteSongs();
    this.setState({
      loading: false,
      // favorite,
    });
  }

  // async myFavoriteSongs() {
  //   const favorite = await getFavoriteSongs();
  //   this.setState({ favorite });
  // }

  render() {
    const { album, tracks, loading } = this.state;
    const loadType = 'span';
    return (
      <div data-testid="page-album">
        <Header />
        <div hidden={ loading }>
          <h1 data-testid="artist-name">{ `Artista: ${album.artistName}` }</h1>
          <h2 data-testid="album-name">{ `Album: ${album.collectionName}` }</h2>
          <img src={ album.artworkUrl100 } alt="Album-Img" />
          { tracks.map((music) => (
            <MusicCard
              key={ music.trackId }
              music={ music } // prop o objetos musica
              callback={ this.checkCapture }
            />))}
        </div>
        {loading && <Loading type={ loadType } />}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;
