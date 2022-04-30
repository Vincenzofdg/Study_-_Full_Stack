import React from 'react';
import { connect } from 'react-redux';

import { selectMovie as selectMovieAction } from '../action';

class Sidebar extends React.Component {
  render() {
    const { categories, selectMovie } = this.props;
    return (
      <aside>
        {categories.map((category) => (
          <div key={ category.id }>
            <h3>{ category.name }</h3>
            <ul>
              {category.movies.map((movie) => (
                <li key={ movie.id }>
                  { movie.title }
                  {' '}
                  was released in
                  {' '}
                  { movie.released }
                  <button
                    type="button"
                    onClick={ () => selectMovie(movie, category) }
                  >
                    Select
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.movies.categories,
});

const mapDispatchToProps = (dispatch) => ({
  selectMovie: (selectedMovie, selectedCategory) => (
    dispatch(selectMovieAction(selectedMovie, selectedCategory))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
