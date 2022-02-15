import React from 'react';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

export default function RecipeCard({ recipe, index }) {
  const { push } = useHistory();

  const type = recipe.idMeal ? 'comidas' : 'bebidas';
  const id = recipe.idMeal || recipe.idDrink;
  const imgLink = (
    recipe.strMealThumb
      ? `${recipe.strMealThumb}/Preview`
      : `${recipe.strDrinkThumb}/Preview`
  );
  return (
    <section
      type="button"
      data-testid={ `${index}-recipe-card` }
      onClick={ () => push(`/${type}/${id}`) }
      onKeyDown={ () => push(`/${type}/${id}`) }
      aria-hidden="true"
    >
      <img
        src={ imgLink }
        alt="recipe-foto"
        data-testid={ `${index}-card-img` }
      />
      <span
        data-testid={ `${index}-card-name` }
      >
        { recipe.strMeal || recipe.strDrink }

      </span>
    </section>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};
