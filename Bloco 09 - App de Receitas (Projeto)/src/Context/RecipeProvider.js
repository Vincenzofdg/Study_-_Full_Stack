import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  fetchRandomMealList,
  fetchMealCategories,
  fetchMealsByCategory,
  fetchDrinksCategories,
  fetchDrinksByCategory,
  fetchDrinksList,
  fetchDrinksIngredient,
  fetchMealsByIngredient,
  fetchMealsByRegion,
  fetchMealByFirstLetter,
  fetchMealByName,
  fetchDrinkByIngredient,
  fetchDrinkByFirstLetter,
  fetchDrinkByName,
} from '../Helper';

const message = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

export const RecipeContext = createContext();

export default function RecipeProvider({ children }) {
  const [listToRender, setListToRender] = useState({
    meals: [],
    drinks: [],
  });

  const [defaultMealList, setDefaultMealList] = useState([]);
  const [defaultDrinkList, setDefaultDrinkList] = useState([]);

  const [categories, setCategories] = useState({
    meals: [],
    drinks: [],
  });
  const [selectedCategory, setSelectedCategory] = useState({
    meals: '',
    drinks: '',
  });

  const setInitialLists = async () => {
    const mealList = await fetchRandomMealList();
    const drinkList = await fetchDrinksList();

    setListToRender(() => {
      setDefaultMealList(mealList);
      setDefaultDrinkList(drinkList);
      return ({ meals: mealList, drinks: drinkList });
    });
  };

  const setInitialCategories = async () => {
    const mealCategories = await fetchMealCategories();
    const drinkCategories = await fetchDrinksCategories();
    setCategories({
      meals: mealCategories,
      drinks: drinkCategories,
    });
  };

  useEffect(() => {
    setInitialLists();
    setInitialCategories();
  }, []);

  const setListByCategory = async (category, type) => {
    const selectedMealCat = selectedCategory.meals;
    const selectedDrinkCat = selectedCategory.drinks;

    if (type === 'drinks') {
      if (category === selectedDrinkCat || category === 'All') {
        return setListToRender((prev) => ({ ...prev, drinks: defaultDrinkList }));
      }

      const drinkList = await fetchDrinksByCategory(category);

      setSelectedCategory((prev) => {
        setListToRender((previous) => ({ ...previous, drinks: drinkList }));
        return { ...prev, drinks: category };
      });
    }

    if (type === 'meals') {
      if (category === selectedMealCat || category === 'All') {
        return setListToRender((previous) => ({ ...previous, meals: defaultMealList }));
      }

      const mealList = await fetchMealsByCategory(category);

      setSelectedCategory((prev) => {
        setListToRender((previous) => ({ ...previous, meals: mealList }));
        return { ...prev, meals: category };
      });
    }
  };

  const setListByIngredient = async (type, ingredient) => {
    const listByIngredient = type === 'drinks'
      ? await fetchDrinksIngredient(ingredient)
      : await fetchMealsByIngredient(ingredient);

    setListToRender((prev) => ({ ...prev, [type]: listByIngredient }));
  };

  const setListByArea = async (area) => {
    const listByArea = await fetchMealsByRegion(area);
    if (area === 'All') {
      setListToRender((prev) => ({ ...prev, meals: defaultMealList }));
      return;
    }
    setListToRender((prev) => ({ ...prev, meals: listByArea }));
  };

  const searchBarFilterSwitch = async (text, option, type) => {
    let filteredList = [];
    switch (option) {
    case 'ingrediente': {
      filteredList = type === 'bebidas'
        ? await fetchDrinkByIngredient(text)
        : await fetchMealsByIngredient(text);
      break;
    }
    case 'first-letter': {
      filteredList = type === 'bebidas'
        ? await fetchDrinkByFirstLetter(text)
        : await fetchMealByFirstLetter(text);
      break;
    }
    case 'name': {
      filteredList = type === 'bebidas'
        ? await fetchDrinkByName(text)
        : await fetchMealByName(text);
      if (filteredList === null) global.alert(message);
      break;
    }
    default:
    }

    const id = filteredList[0].idDrink || filteredList[0].idMeal;
    const pointer = type === 'comidas' ? 'meals' : 'drinks';

    setListToRender((prev) => ({ ...prev, [pointer]: filteredList }));
    if (filteredList.length === 1) {
      return id;
    }
  };

  const searchBarFilter = async (type, text, option) => {
    const hasOnlyOneRecipe = await searchBarFilterSwitch(text, option, type);
    return hasOnlyOneRecipe;
  };

  const valuesAndMethods = {
    values: {
      listToRender,
      categories,
    },
    methods: {
      setListByCategory,
      setListByIngredient,
      setListByArea,
      searchBarFilter,
    },
  };
  return (
    <RecipeContext.Provider value={ valuesAndMethods }>
      {children}
    </RecipeContext.Provider>
  );
}

RecipeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
