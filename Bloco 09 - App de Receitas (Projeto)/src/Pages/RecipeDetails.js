import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import {
  fetchMealById,
  fetchDrinksList,
  fetchDrinkById,
  fetchRandomMealList,
} from '../Helper';

import '../Styles/reccard.css';

import RecommendationsMap from '../Components/RecommendationsMap';
import StartOrContinueButton from '../Components/Buttons/StartOrContinueButton';
import FavoriteButton from '../Components/Buttons/FavoriteButton';
import ShareButton from '../Components/Buttons/ShareButton';
import SimpleIngredientsUL from '../Components/IngredientsLists/SimpleIngredientsUL';

const SIX = 6;

export default function RecipeDetails({ location: { pathname } }) {
  const id = pathname.split('/')[2];
  const type = pathname.split('/')[1]; // 'comidas' ou 'bebidas'
  const [recipe, setRecipe] = useState({});
  const [recommendationsList, setrecommendationsList] = useState([]);

  const grabMeal = useCallback(async (recipeId) => {
    const recipeData = await fetchMealById(recipeId);
    const recList = await fetchDrinksList();
    return [recipeData, recList.slice(0, SIX)];
  }, []);

  const grabDrink = useCallback(async (recipeId) => {
    const recipeData = await fetchDrinkById(recipeId);
    const recList = await fetchRandomMealList();
    return [recipeData, recList.slice(0, SIX)];
  }, []);

  const grabRecipeAndRec = useCallback(async () => {
    const [recipeData, recList] = type === 'comidas'
      ? await grabMeal(id)
      : await grabDrink(id);

    if (recipeData && recList) {
      setRecipe(recipeData);
      setrecommendationsList(recList);
    }
  }, [grabDrink, grabMeal, type, id]);

  useEffect(() => {
    grabRecipeAndRec();
  }, [grabRecipeAndRec]);

  if (!recipe) return null;
  if (recommendationsList.length === 0) return null;
  if (Object.keys(recipe).length === 0) return null;

  const recipeValues = {
    image: recipe.strMealThumb || recipe.strDrinkThumb,
    category: recipe.strCategory,
    name: recipe.strMeal || recipe.strDrink,
    instructions: recipe.strInstructions,
    youtubeLink: recipe.strYoutube || '',
    alcoholic: recipe.strAlcoholic || '',
  };
  const imgLink = `${recipeValues.image}/Preview`;

  const youtubeEmbbed = () => (
    <iframe
      title="youtubeInstructions"
      width="400"
      height="300"
      src={ recipeValues.youtubeLink }
      data-testid="video"
    />
  );

  const recipeCategory = () => {
    if (type === 'bebidas') {
      return <span data-testid="recipe-category">{recipeValues.alcoholic}</span>;
    }
    return <span data-testid="recipe-category">{recipeValues.category}</span>;
  };

  return (
    <main>
      <h2 data-testid="recipe-title">{recipeValues.name}</h2>
      <img data-testid="recipe-photo" src={ imgLink } alt="foto" />
      {recipeCategory()}
      <ShareButton type={ type } id={ id } />
      <FavoriteButton id={ id } recipe={ recipe } />
      <StartOrContinueButton
        id={ id }
        type={ type }
        recipe={ recipe }
      />
      <SimpleIngredientsUL recipe={ recipe } />
      <p data-testid="instructions">{recipeValues.instructions}</p>
      {recipeValues.youtubeLink !== '' ? youtubeEmbbed() : ''}
      <RecommendationsMap
        recommendationsList={ recommendationsList }
      />
    </main>
  );
}

RecipeDetails.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};
