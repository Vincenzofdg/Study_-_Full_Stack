import React, { useContext } from 'react';

import Header from '../Components/Header';

import FavoriteRecipeCard from '../Components/Cards/FavoriteRecipeCard';

import { LocalStorageContext } from '../Context/LocalStorageProvider';

export default function RecipeFavorite() {
  const {
    values: { favoriteRecipes: { favoriteToRender, favoriteMain } },
    methods: { setFilterByType, filterByAll, updateFavoriteContext },
  } = useContext(LocalStorageContext);

  return (
    <main>
      <Header title="Receitas Favoritas" showSearchBtn="" />
      <button
        className="buttons"
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ filterByAll }
      >
        All
      </button>
      <button
        className="buttons"
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => setFilterByType('comida', favoriteMain) }
      >
        Food
      </button>
      <button
        className="buttons"
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => setFilterByType('bebida', favoriteMain) }
      >
        Drink
      </button>
      {favoriteToRender.map((recipe, i) => (
        <FavoriteRecipeCard
          key={ i }
          index={ i }
          receita={ recipe }
          favoriteMain={ favoriteMain }
          updateFavoriteContext={ updateFavoriteContext }
        />
      ))}
    </main>
  );
}
