import { getIngredientList } from './helper';

const createProgress = (recipe) => {
  const ingredientList = getIngredientList(recipe);
  ingredientList.forEach((ingredient) => ingredient.push(false));
  return ingredientList;
};

export function startRecipeProgress(recipe, type, id) {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  if (inProgressRecipes) {
    inProgressRecipes[type][id] = createProgress(recipe);
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    return inProgressRecipes;
  }
  const newProgressStore = {
    meals: {},
    cocktails: {},
  };
  localStorage.setItem('inProgressRecipes', JSON.stringify({
    ...newProgressStore,
    [type]: { [id]: createProgress(recipe) },
  }));

  console.log({
    ...newProgressStore,
    [type]: { [id]: createProgress(recipe) },
  });
  return {
    ...newProgressStore,
    [type]: { [id]: createProgress(recipe) },
  };
}

export function updateStorageProgress(id, type, newList) {
  const previousProgressList = JSON.parse(localStorage.getItem('inProgressRecipes'));
  localStorage.setItem('inProgressRecipes', JSON.stringify({
    ...previousProgressList,
    [type]: {
      ...previousProgressList[type],
      [id]: newList,
    },
  }));
}
