import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';
import { RecipeContext } from '../Context/RecipeProvider';

export default function Searchbar({ type }) {
  const [input, setInput] = useState({
    radio: '',
    text: '',
  });

  const { push } = useHistory();

  const handleInput = ({ target: { name, value } }) => {
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const {
    methods: { searchBarFilter },
  } = useContext(RecipeContext);

  const submitQuery = async () => {
    if (input.text.length === 0) return;

    if (input.text.length > 1 && input.radio === 'first-letter') {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
      return;
    }

    const hasOnlyOneRecipe = await searchBarFilter(type, input.text, input.radio);
    if (hasOnlyOneRecipe) {
      const id = hasOnlyOneRecipe;
      return type === 'comidas'
        ? push(`/comidas/${id}`)
        : push(`/bebidas/${id}`);
    }
    return type === 'comidas'
      ? push('/comidas')
      : push('/bebidas');
  };

  return (
    <form>
      <label htmlFor="input-text">
        <input
          data-testid="search-input"
          type="text"
          name="text"
          value={ input.text }
          onChange={ (e) => handleInput(e) }
        />
      </label>
      <label htmlFor="search-ingredient">
        Ingrediente
        <input
          id="search-ingredient"
          type="radio"
          name="radio"
          data-testid="ingredient-search-radio"
          value="ingrediente"
          onChange={ (e) => handleInput(e) }
        />
      </label>
      <label htmlFor="name">
        Nome
        <input
          id="name"
          type="radio"
          name="radio"
          data-testid="name-search-radio"
          value="name"
          onChange={ (e) => handleInput(e) }
        />
      </label>
      <label htmlFor="first-letter">
        Primeira Letra
        <input
          id="first-letter"
          data-testid="first-letter-search-radio"
          name="radio"
          type="radio"
          value="first-letter"
          onChange={ (e) => handleInput(e) }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ submitQuery }
      >
        Buscar
      </button>
    </form>
  );
}

Searchbar.propTypes = {
  type: PropTypes.string.isRequired,
};
