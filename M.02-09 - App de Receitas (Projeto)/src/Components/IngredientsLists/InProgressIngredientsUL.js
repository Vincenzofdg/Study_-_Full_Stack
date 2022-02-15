import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { LocalStorageContext } from '../../Context/LocalStorageProvider';

// [name, measure, checked];

export default function InProgressIngredientsUL(props) {
  const { type, id, recipe } = props;
  const pointer = type === 'bebidas' ? 'cocktails' : 'meals';
  const {
    values: { inProgressRecipes },
    methods: { updateProgress, startRecipe },
  } = useContext(LocalStorageContext);

  const ingredientList = inProgressRecipes[pointer][id];

  useEffect(() => {
    if (!ingredientList) {
      startRecipe(recipe, pointer, id);
    }
  });

  return (
    <ul>
      {ingredientList && ingredientList.map((ingredient, i) => {
        const [name, measure, isChecked] = ingredient;
        return (
          <li key={ i } data-testid={ `${i}-ingredient-step` }>
            <span>{`${name}${measure === null ? '' : ` - ${measure}`}`}</span>
            <input
              type="checkbox"
              name={ name }
              checked={ isChecked }
              onChange={ () => updateProgress(name, id, type, ingredientList) }
            />
          </li>
        );
      })}
    </ul>
  );
}

InProgressIngredientsUL.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
};
