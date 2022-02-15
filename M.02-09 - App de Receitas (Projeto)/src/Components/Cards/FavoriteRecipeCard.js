import React, { useState } from 'react';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FavoriteRecipe } from '../../Helper';

import blackHeart from '../../images/blackHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';

export default function FavoriteRecipeCard({ receita, index, updateFavoriteContext }) {
  const [copiedLink, setCopiedLink] = useState(false);
  if (!receita.id) return null;

  const mealCategoryAndArea = () => (
    <p data-testid={ `${index}-horizontal-top-text` }>
      { `${receita.area} - ${receita.category}` }
    </p>
  );

  const drinkAlcoholic = () => (
    <p data-testid={ `${index}-horizontal-top-text` }>{ receita.alcoholicOrNot }</p>
  );

  const handleCopy = () => {
    copy(`http://localhost:3000/${receita.type}s/${receita.id}`);
    setCopiedLink(true);
  };

  return (
    <section>
      { copiedLink ? <p>Link copiado!</p> : ''}
      <Link
        to={ `/${receita.type}s/${receita.id}` }
      >
        <img
          src={ `${receita.image}/preview` }
          alt={ receita.name }
          data-testid={ `${index}-horizontal-image` }
        />
      </Link>
      <Link
        to={ `/${receita.type}s/${receita.id}` }
      >
        <p data-testid={ `${index}-horizontal-name` }>{ receita.name }</p>
      </Link>
      { receita.type === 'comida' ? mealCategoryAndArea() : drinkAlcoholic()}
      <button
        type="button"
        onClick={ handleCopy }
      >
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          alt="share"
          src={ shareIcon }
        />
      </button>
      <button
        type="button"
        onClick={ () => {
          const newList = FavoriteRecipe(receita.id);
          updateFavoriteContext(newList);
        } }
      >
        <img
          data-testid={ `${index}-horizontal-favorite-btn` }
          alt="desfavoritar"
          src={ blackHeart }
        />
      </button>
    </section>
  );
}

FavoriteRecipeCard.propTypes = {
  receita: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
  updateFavoriteContext: PropTypes.func.isRequired,
};
