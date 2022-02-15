import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';
import { RecipeContext } from '../../Context/RecipeProvider';

export default function IngredientCard({ ingredient, index, type }) {
  const { push } = useHistory();
  const ingredientName = ingredient.strIngredient1 || ingredient.strIngredient;
  const drinksOrMeals = type === 'bebidas' ? 'drinks' : 'meals';
  const { methods: { setListByIngredient } } = useContext(RecipeContext);

  const imgLink = (
    type === 'bebidas'
      ? `https://www.thecocktaildb.com/images/ingredients/${ingredientName}-Small.png`
      : `https://www.themealdb.com/images/ingredients/${ingredientName}-Small.png`
  );

  const redirectToList = async () => {
    await setListByIngredient(drinksOrMeals, ingredientName);
    push(`/${type}`);
  };

  return (
    <section
      data-testid={ `${index}-ingredient-card` }
      onClick={ redirectToList }
      onKeyDown={ redirectToList }
      aria-hidden="true"
    >
      <img
        src={ imgLink }
        alt="ingredient"
        data-testid={ `${index}-card-img` }
      />
      <span
        data-testid={ `${index}-card-name` }
      >
        { ingredientName }

      </span>
    </section>
  );
}

IngredientCard.propTypes = {
  ingredient: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
