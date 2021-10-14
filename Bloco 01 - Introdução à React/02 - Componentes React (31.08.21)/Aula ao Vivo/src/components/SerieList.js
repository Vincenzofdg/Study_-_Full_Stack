import React from 'react';
import Serie from './Serie';
import PropTypes from 'prop-types';

class SerieList extends React.Component {
  render() {
    const { catalog } = this.props;

    return (
      <div className="serie-list">
        {catalog.map((serie) => <Serie serieInfo={ serie }/>)}
      </div>
    )
  }
}

SerieList.propTypes = {
  catalog: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    genre: PropTypes.string,
  })).isRequired,
}

SerieList.defaultProps = {
  catalog: [{
    id: 0,
    name: 'Nome padrão',
    image: '',
    genre: '',
  }],
}

export default SerieList;
