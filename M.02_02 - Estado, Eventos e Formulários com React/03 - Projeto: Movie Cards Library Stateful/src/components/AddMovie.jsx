import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    // Requisito 06
    // Fonte: https://stackoverflow.com/questions/45200535/reset-initial-state-in-react-es6/45200755
    this.initialState = {
      subtitle: '',
      title: '',
      image: '', // <=== mudei imagePath para image, caso de erro no futuro
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.state = this.initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();

    const { addMovieFunc } = this.props;
    addMovieFunc(this.state);

    // Reset para o Valor Inicial estabelecido no construtor
    this.setState(this.initialState);
  }

  // Criador dinamico de Input com label:
  inputCreator(text, name, type, value) {
    return (
      <label htmlFor={ `add-${type}-${name}` } data-testid={ `${name}-input-label` }>
        { text }
        <input
          type={ type }
          name={ name } // <= Passar este parametro para handleChanges
          data-testid={ `${name}-input` }
          id={ `add-${type}-${name}` }
          value={ value } // <= Passar este parametro para handleChanges
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  selectCreator(text, name, type, value) {
    return (
      <label htmlFor={ `add-${type}-${name}` } data-testid={ `${name}-input-label` }>
        { text }
        <select
          type={ type }
          name={ name }
          data-testid={ `${name}-input` }
          id={ `add-${type}-${name}` }
          value={ value }
          onChange={ this.handleChange }
        >
          <option data-testid={ `${name}-option` } value="action">Ação</option>
          <option data-testid={ `${name}-option` } value="comedy">Comédia</option>
          <option data-testid={ `${name}-option` } value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    // Resolve => Must use destructuring state assignment [ERRO Linter]
    const { title, subtitle, image, storyline, rating, genre } = this.state;
    return (
      // Renderizando um formulario (Requisito 07)
      <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        {/* Requisito 08 */}
        {this.inputCreator('Título', 'title', 'text', title)}
        {/* Requisito 09 */}
        {this.inputCreator('Subtítulo', 'subtitle', 'text', subtitle)}
        {/* Requisito 10 */}
        {this.inputCreator('Imagem', 'image', 'text', image)}
        {/* Requisito 11 */}
        {this.inputCreator('Sinopse', 'storyline', 'text', storyline)}
        {/* Requisito 12 */}
        {this.inputCreator('Avaliação', 'rating', 'number', rating)}
        {/* Requisito 13 */}
        {this.selectCreator('Gênero', 'genre', 'text', genre)}
        {/* Requisito 14 */}
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  addMovieFunc: PropTypes.func.isRequired,
};

export default AddMovie;
