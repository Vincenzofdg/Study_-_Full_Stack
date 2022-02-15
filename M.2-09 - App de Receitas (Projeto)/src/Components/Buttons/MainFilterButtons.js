import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { RecipeContext } from '../../Context/RecipeProvider';

export default function MainFilterButtons({ type }) {
  const {
    values: { categories },
    methods: { setListByCategory },
  } = useContext(RecipeContext);

  if (categories.meals.length === 0) return null;
  const categoriesToRender = categories[type];

  return (
    <>
      {categoriesToRender.map(({ strCategory }) => (
        <button
          key={ strCategory }
          type="button"
          data-testid={ `${strCategory}-category-filter` }
          onClick={ () => setListByCategory(strCategory, type) }
        >
          {strCategory}
        </button>
      ))}
      <button
        type="button"
        onClick={ () => setListByCategory('All', type) }
        data-testid="All-category-filter"
      >
        All
      </button>
    </>
  );
}

MainFilterButtons.propTypes = {
  type: PropTypes.string.isRequired,
};
