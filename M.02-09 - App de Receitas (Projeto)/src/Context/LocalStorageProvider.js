import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { startRecipeProgress, updateStorageProgress, addToFinishedList } from '../Helper';

export const LocalStorageContext = createContext();

export default function LocalStorageProvider({ children }) {
  const [doneRecipes, setDoneRecipes] = useState({
    doneMain: [],
    doneToRender: [],
    filterDone: '',
  });
  const [favoriteRecipes, setFavoriteRecipes] = useState({
    favoriteMain: [],
    favoriteToRender: [],
    favoriteFilter: 'All',
  });
  const [inProgressRecipes, setInProgressRecipes] = useState({
    meals: {},
    cocktails: {},
  });

  const retrieveStorage = () => {
    const doneList = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    const favoriteList = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    const progressList = JSON.parse(localStorage.getItem('inProgressRecipes'));

    setDoneRecipes(() => ({
      doneMain: doneList,
      doneToRender: doneList,
      filterDone: '',
    }));
    setFavoriteRecipes(() => ({
      favoriteMain: favoriteList,
      favoriteToRender: favoriteList,
      favoriteFilter: 'All',
    }));
    setInProgressRecipes(() => ({
      meals: progressList === null ? {} : progressList.meals,
      cocktails: progressList === null ? {} : progressList.cocktails,
    }));
  };

  useEffect(() => {
    retrieveStorage();
  }, []);

  const filterByAll = () => {
    const { favoriteMain } = favoriteRecipes;

    setFavoriteRecipes(() => ({
      favoriteMain,
      favoriteToRender: favoriteMain,
      favoriteFilter: 'All',
    }));
  };

  const filterByType = (type, list) => list.reduce((acc, recipe) => {
    if (recipe.type !== type) return acc;
    acc.push(recipe);
    return acc;
  }, []);

  const setFilterByType = (type, mainList) => {
    const filteredList = filterByType(type, mainList);

    setFavoriteRecipes(() => ({
      favoriteMain: mainList,
      favoriteToRender: filteredList,
      favoriteFilter: type,
    }));
  };

  const updateFavoriteContext = (newList) => {
    const { favoriteFilter } = favoriteRecipes;
    if (favoriteFilter === 'All') {
      setFavoriteRecipes(() => ({
        favoriteMain: newList,
        favoriteToRender: newList,
        favoriteFilter,
      }));
    } else {
      setFilterByType(favoriteFilter, newList);
    }
  };

  const startRecipe = (recipe, type, id) => {
    const newProgress = startRecipeProgress(recipe, type, id);
    setInProgressRecipes(newProgress);
  };

  const updateProgress = (name, id, type, ingredientList) => {
    const pointer = type === 'bebidas' ? 'cocktails' : 'meals';

    const newIngredientList = ingredientList.reduce((acc, ing) => {
      const ingredientToCheck = ing;
      if (ing[0] === name) {
        ingredientToCheck[2] = !ingredientToCheck[2];
      }
      acc.push(ingredientToCheck);
      return acc;
    }, []);

    setInProgressRecipes((prev) => ({
      ...prev,
      [pointer]: {
        ...prev[pointer],
        [id]: newIngredientList,
      },
    }));
    updateStorageProgress(id, pointer, newIngredientList);
  };

  const finishRecipe = (recipe, type) => {
    const newList = addToFinishedList(recipe, type);
    setDoneRecipes(() => ({
      doneMain: newList,
      doneToRender: newList,
    }));
  };

  const filterRecipesDone = (type) => {
    const doneList = JSON.parse(localStorage.getItem('doneRecipes'));
    if (type === 'all') {
      setDoneRecipes(() => ({
        doneMain: doneList,
        doneToRender: doneList,
      }));
    } else {
      const filterResult = doneList.filter((item) => item.type === type);
      setDoneRecipes(() => ({
        doneMain: doneList,
        doneToRender: filterResult,
      }));
    }
  };

  const valuesAndMethods = {
    values: {
      doneRecipes,
      favoriteRecipes,
      inProgressRecipes,
    },
    methods: {
      setFilterByType,
      filterByAll,
      updateFavoriteContext,
      startRecipe,
      updateProgress,
      finishRecipe,
      filterRecipesDone,
    },
  };

  return (
    <LocalStorageContext.Provider value={ valuesAndMethods }>
      {children}
    </LocalStorageContext.Provider>
  );
}

LocalStorageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
