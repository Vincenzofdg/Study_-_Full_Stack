import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { fetchDrinkById, fetchMealById } from '../Helper';

import ShareButton from '../Components/Buttons/ShareButton';
import FavoriteButton from '../Components/Buttons/FavoriteButton';
import InProgressIngredientsUL
  from '../Components/IngredientsLists/InProgressIngredientsUL';
import FinishRecipeButton from '../Components/Buttons/FinishRecipeButton';
// ['', 'bebidas', '178319', 'in-progress']
export default function RecipeInProgress({ location: { pathname } }) {
  const id = pathname.split('/')[2];
  const type = pathname.split('/')[1];
  const [recipe, setRecipe] = useState({});

  const grabRecipe = useCallback(async () => {
    const data = type === 'bebidas'
      ? await fetchDrinkById(id)
      : await fetchMealById(id);

    if (data) setRecipe(data);
  }, [id, type]);

  useEffect(() => {
    grabRecipe();
  }, [grabRecipe]);

  if (Object.keys(recipe).length === 0) return null;
  if (recipe === undefined) return null;

  const recipeValues = {
    name: recipe.strDrink || recipe.strMeal,
    image: recipe.strDrinkThumb || recipe.strMealThumb,
    category: recipe.strCategory,
    alcoholic: recipe.strAlcoholic || '',
    instructions: recipe.instructions,
  };
  const imgLink = `${recipeValues.image}/Preview`;

  const recipeCategory = () => {
    if (type === 'bebidas') {
      return <span data-testid="recipe-category">{recipeValues.alcoholic}</span>;
    }
    return <span data-testid="recipe-category">{recipeValues.category}</span>;
  };

  return (
    <main>
      <img src={ imgLink } alt={ recipeValues.name } data-testid="recipe-photo" />
      <h3 data-testid="recipe-title">{ recipeValues.name }</h3>
      {recipeCategory()}
      <p data-testid="instructions">{ recipeValues.instructions }</p>
      <ShareButton
        type={ type }
        id={ id }
      />
      <FavoriteButton
        recipe={ recipe }
        id={ id }
      />
      <InProgressIngredientsUL
        recipe={ recipe }
        type={ type }
        id={ id }
      />
      <FinishRecipeButton
        recipe={ recipe }
        type={ type }
        id={ id }
      />
    </main>
  );
}

RecipeInProgress.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};
