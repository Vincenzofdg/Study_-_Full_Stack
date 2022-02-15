import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

import { fetchRandomMeal, fetchRandomDrink } from '../../../Helper';

export default function SurpriseMeButton({ type }) {
  const { push } = useHistory();

  const randomRecipe = async () => {
    const data = type === 'bebidas'
      ? await fetchRandomDrink()
      : await fetchRandomMeal();

    const id = data.idMeal || data.idDrink;

    push(`/${type}/${id}`, { ...data });
  };

  return (
    <button
      type="button"
      data-testid="explore-surprise"
      onClick={ randomRecipe }
    >
      Me Surpreenda!
    </button>
  );
}

SurpriseMeButton.propTypes = {
  type: PropTypes.string.isRequired,
};
