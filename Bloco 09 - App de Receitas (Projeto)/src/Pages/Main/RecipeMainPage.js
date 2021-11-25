import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { RecipeContext } from '../../Context/RecipeProvider';

import Header from '../../Components/Header';
import RecipeCard from '../../Components/Cards/RecipeCard';
import MainFilterButtons from '../../Components/Buttons/MainFilterButtons';
import Footer from '../../Components/Footer';

export default function RecipeMainPage({ location: { pathname } }) {
  const type = pathname.split('/')[1];
  const title = type === 'comidas' ? 'Comidas' : 'Bebidas';
  const mealsOrDrinks = type === 'comidas' ? 'meals' : 'drinks';

  const {
    values: { listToRender },
  } = useContext(RecipeContext);

  if (!listToRender[mealsOrDrinks]) return null;
  if (listToRender[mealsOrDrinks].length === 0) return null;

  return (
    <main>
      <Header title={ title } showSearchBtn="showSearchBtn" />
      <MainFilterButtons type={ mealsOrDrinks } />
      {listToRender[mealsOrDrinks].map((recipe, i) => (
        <RecipeCard key={ i } index={ i } recipe={ recipe } />))}
      <Footer />
    </main>
  );
}

RecipeMainPage.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};
