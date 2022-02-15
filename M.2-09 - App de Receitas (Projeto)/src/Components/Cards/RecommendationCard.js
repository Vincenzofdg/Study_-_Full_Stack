import React from 'react';
import PropTypes from 'prop-types';

export default function RecommendationCard({ recipe, i }) {
  const image = recipe.strDrinkThumb || recipe.strMealThumb;
  const category = recipe.strCategory;
  const title = recipe.strDrink || recipe.strMeal;

  return (
    <div
      className="rec-card"
      data-testid={ `${i}-recomendation-card` }
    >
      <img src={ image } alt={ title } />
      <p>{category}</p>
      <span data-testid={ `${i}-recomendation-title` }>{title}</span>
    </div>
  );
}

RecommendationCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
  i: PropTypes.number.isRequired,
};
