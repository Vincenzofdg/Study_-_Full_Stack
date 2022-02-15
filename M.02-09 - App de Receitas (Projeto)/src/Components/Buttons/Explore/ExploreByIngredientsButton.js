import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

export default function ExploreByIngredientsButton({ type }) {
  const { push } = useHistory();

  return (
    <button
      type="button"
      data-testid="explore-by-ingredient"
      onClick={ () => { push(`/explorar/${type}/ingredientes`); } }
    >
      Por Ingredientes
    </button>
  );
}

ExploreByIngredientsButton.propTypes = {
  type: PropTypes.string.isRequired,
};
