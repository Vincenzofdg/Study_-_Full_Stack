import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  handleChange = ({ target }) => {
    const { music, callback } = this.props;
    const { checked } = target;
    callback(checked, music);
  }

  render() {
    const { music } = this.props;
    return (
      <div>
        <p>{ music.trackName }</p>
        <audio data-testid="audio-component" src={ music.previewUrl } controls>
          <track kind="captions" />
        </audio>
        <label
          htmlFor={ music.trackId }
          data-testid={ `checkbox-music-${music.trackId}` }
        >
          Favorite
          <input
            type="checkbox"
            id={ music.trackId }
            name={ music.trackName }
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }
}

MusicCard.defaultProps = {
  music: {},
  callback: undefined,
};

MusicCard.propTypes = {
  music: PropTypes.objectOf(PropTypes.any),
  callback: PropTypes.func,
};

export default MusicCard;
