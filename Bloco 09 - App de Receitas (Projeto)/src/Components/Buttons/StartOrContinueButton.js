import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { LocalStorageContext } from '../../Context/LocalStorageProvider';

export default function StartOrContinueButton({ id, type, recipe }) {
  const { push } = useHistory();

  const {
    values: {
      doneRecipes: { doneMain },
      inProgressRecipes,
    },
    methods: { startRecipe },
  } = useContext(LocalStorageContext);

  const pointer = type === 'bebidas' ? 'cocktails' : 'meals';
  const isRecipeDone = doneMain.some((rec) => rec.id === id);
  const isRecipeInProgress = inProgressRecipes[pointer][id];

  const startAndRedirect = () => {
    if (!isRecipeInProgress) {
      startRecipe(recipe, pointer, id);
    }
    push(`/${type}/${id}/in-progress`);
  };

  const button = () => (
    <button
      type="button"
      data-testid="start-recipe-btn"
      className="start-recipe"
      onClick={ startAndRedirect }
    >
      {isRecipeInProgress ? 'Continuar Receita' : 'Iniciar Receita'}
    </button>
  );

  if (isRecipeDone) return null;
  return button();
}

StartOrContinueButton.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
