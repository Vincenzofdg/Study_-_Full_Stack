import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { LocalStorageContext } from '../../Context/LocalStorageProvider';

export default function FinishRecipeButton({ id, type, recipe }) {
  const [redirect, setRedirect] = useState(false);
  const pointer = type === 'bebidas' ? 'cocktails' : 'meals';
  const {
    values: { inProgressRecipes },
    methods: { finishRecipe },
  } = useContext(LocalStorageContext);

  const recipeIngredients = inProgressRecipes[pointer][id];
  if (!recipeIngredients) return null;

  const isDone = () => (inProgressRecipes[pointer][id].reduce((acc, ingredient) => {
    if (ingredient[2] === false) acc = false;
    return acc;
  }, true)
  );

  if (redirect === true) return <Redirect to="/receitas-feitas" />;

  if (recipeIngredients.length !== 0) {
    return (
      <button
        type="button"
        data-testid="finish-recipe-btn"
        onClick={ () => {
          finishRecipe(recipe, type);
          setRedirect(true);
        } }
        disabled={ !isDone() }
      >
        Finalizar
      </button>
    );
  }

  return null;
}

FinishRecipeButton.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
};
