import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AlbumList extends Component {
  render() {
    const { album } = this.props;
    return (
      <div>
        <Link
          to={ `album/${album.collectionId}` }
          data-testid={ `link-to-album-${album.collectionId}` }
        >
          { album.collectionId }
        </Link>
        <h4>{ album.collectionName }</h4>
        <img src={ album.artworkUrl100 } alt="Album Pic" />
      </div>
    );
  }
}

AlbumList.defaultProps = {
  album: [],
};

AlbumList.propTypes = {
  album: PropTypes.arrayOf(PropTypes.shape({
    collectionId: PropTypes.string,
    collectionName: PropTypes.string,
    artworkUrl100: PropTypes.string,
  })),
};

export default AlbumList;
