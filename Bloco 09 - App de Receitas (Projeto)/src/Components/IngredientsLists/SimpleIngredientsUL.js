import React from 'react';
import PropTypes from 'prop-types';

import { getIngredientList } from '../../Helper';

export default function SimpleIngredientsUL({ recipe }) {
  const ingredientList = getIngredientList(recipe);
  return (
    <ul>
      {ingredientList.map((ingredient, i) => (
        <li data-testid={ `${i}-ingredient-name-and-measure` } key={ i }>
          {ingredient[0]}
          {' '}
          -
          {' '}
          {ingredient[1]}
        </li>
      ))}
    </ul>
  );
}

SimpleIngredientsUL.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
};
