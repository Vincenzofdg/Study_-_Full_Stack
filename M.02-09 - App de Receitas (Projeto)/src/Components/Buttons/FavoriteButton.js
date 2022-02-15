import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  getHeartIcon,
  FavoriteRecipe,
  checkIfRecipeIsFav,
} from '../../Helper';

export default function FavoriteButton({ recipe, id }) {
  const initialCheck = checkIfRecipeIsFav(id);
  const [isFavorite, setIsFavorite] = useState(initialCheck);

  const favoriteUnfavorite = () => {
    FavoriteRecipe(recipe);
    setIsFavorite((prev) => !prev);
  };

  return (
    <img
      data-testid="favorite-btn"
      src={ getHeartIcon(isFavorite) }
      alt="favorite"
      onClick={ () => favoriteUnfavorite() }
      onKeyDown={ () => favoriteUnfavorite() }
      aria-hidden="true"
    />
  );
}

FavoriteButton.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired,
};
