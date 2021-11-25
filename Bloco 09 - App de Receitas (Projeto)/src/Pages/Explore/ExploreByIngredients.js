import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { fetchDrinkIngredientList, fetchMealIngredientsList } from '../../Helper';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import IngredientCard from '../../Components/Cards/IngredientCard';

export default function ExploreByIngredients({ location: { pathname } }) {
  const type = pathname.split('/')[2];
  const [ingredientList, setIngredientList] = useState([]);

  const setList = useCallback(async () => {
    const data = type === 'bebidas'
      ? await fetchDrinkIngredientList()
      : await fetchMealIngredientsList();

    setIngredientList(data);
  }, [type]);

  useEffect(() => {
    setList();
  }, [setList]);

  if (ingredientList === undefined) return null;
  if (ingredientList.length === 0) return null;

  return (
    <>
      <Header title="Explorar Ingredientes" showSearchBtn="" />
      {ingredientList.map((ing, i) => (
        <IngredientCard key={ i } index={ i } ingredient={ ing } type={ type } />))}
      <Footer />
    </>
  );
}

ExploreByIngredients.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};
