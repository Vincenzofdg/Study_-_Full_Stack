const StorageRecipe = (recipe) => (
  {
    id: recipe.idMeal || recipe.idDrink,
    type: recipe.idMeal ? 'comida' : 'bebida',
    area: recipe.idMeal ? recipe.strArea : '',
    category: recipe.strCategory,
    alcoholicOrNot: recipe.idMeal ? '' : recipe.strAlcoholic,
    name: recipe.strMeal || recipe.strDrink,
    image: recipe.strMealThumb || recipe.strDrinkThumb,
  }
);

const removeRecipeFromFav = (favList, id) => {
  const newFavList = favList.reduce((acc, rec) => {
    if (rec.id === id) return acc;
    acc.push(rec);
    return acc;
  }, []);

  localStorage.setItem('favoriteRecipes', JSON.stringify(
    newFavList,
  ));
  return newFavList;
};

const addRecipeToFav = (favList, recipe) => {
  const newRecipe = StorageRecipe(recipe);
  const newFavList = [...favList, newRecipe];
  localStorage.setItem('favoriteRecipes', JSON.stringify(
    newFavList,
  ));
  return newFavList;
};

const createFavList = (recipe) => {
  const newRecipe = StorageRecipe(recipe);
  const newFavList = [newRecipe];
  localStorage.setItem('favoriteRecipes', JSON.stringify(
    newFavList,
  ));
  return newFavList;
};

export function checkIfRecipeIsFav(id) {
  const favList = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (favList) return favList.some((rec) => rec.id === id);
}

export function FavoriteRecipe(recipe) {
  const id = recipe.idMeal || recipe.idDrink || recipe;
  const favList = JSON.parse(localStorage.getItem('favoriteRecipes'));

  if (favList) {
    const isFav = favList.some((rec) => rec.id === id); // boolean

    if (isFav === true) {
      return removeRecipeFromFav(favList, id);
    }
    if (isFav === false) {
      return addRecipeToFav(favList, recipe);
    }
  } else {
    return createFavList(recipe);
  }
}
