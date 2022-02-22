import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { categoryApiThunk, configAction } from '../redux/actions';

import './css/settings.css';

class Settings extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      difficulty: '',
      type: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { categoryApi } = this.props;
    categoryApi();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { setOptions, history } = this.props;
    setOptions(this.state);
    history.push('/');
  }

  render() {
    const { category: { trivia_categories: categories } } = this.props;
    return categories === undefined ? <p>Carregando...</p>
      : (
        <div className="form-container">
          <h3 data-testid="settings-title" className="pb-3 border-bottom">
            Configurações
          </h3>
          <form>
            <select
              name="category"
              onChange={ this.handleChange }
              className="form-select form-select-lg mb-3 settings"
            >
              <option value="">Todas as categorias</option>
              {categories.map(({ name, id }) => (
                <option key={ id } value={ id }>{name}</option>
              ))}
            </select>
            <select
              name="difficulty"
              onChange={ this.handleChange }
              className="form-select form-select-lg mb-3 settings"
            >
              <option value="">Todas as dificuldades</option>
              <option value="easy">Fácil</option>
              <option value="medium">Médio</option>
              <option value="hard">Difícil</option>
            </select>
            <select
              name="type"
              onChange={ this.handleChange }
              className="form-select form-select-lg mb-3 settings"
            >
              <option value="">Todos os tipos</option>
              <option value="multiple">Múltipla escolha</option>
              <option value="boolean">Verdadeiro/Falso</option>
            </select>
            <button
              type="button"
              onClick={ this.handleClick }
              className="btn btn-primary btn-lg settings"
            >
              Salvar configurações
            </button>
          </form>
        </div>
      );
  }
}

Settings.propTypes = {
  category: PropTypes.objectOf(PropTypes.array).isRequired,
  categoryApi: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  setOptions: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  category: state.trivia.category,
});

const mapDispatchToProps = (dispatch) => ({
  categoryApi: () => dispatch(categoryApiThunk()),
  setOptions: (config) => dispatch(configAction(config)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
