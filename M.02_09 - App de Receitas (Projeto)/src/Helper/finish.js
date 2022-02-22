export function DoneRecipe(recipe, type) {
  const dateOfConclusion = new Date();
  const tagsArray = () => {
    if (!recipe.strTag) return [];
    if (recipe.strTag === null) return [];
    return recipe.split(',');
  };

  return {
    id: recipe.idDrink || recipe.idMeal,
    type,
    area: recipe.strArea || '',
    category: recipe.strCategory,
    alcoholicOrNot: recipe.strAlcoholic || '',
    name: recipe.strDrink || recipe.strMeal,
    image: recipe.strMealThumb || recipe.strDrinkThumb,
    doneDate: dateOfConclusion.toString(),
    tags: tagsArray(),
  };
}

export function addToFinishedList(recipe, type) {
  const newRecipe = DoneRecipe(recipe, type);
  const doneList = JSON.parse(localStorage.getItem('doneRecipes'));
  const recipeId = recipe.idMeal || recipe.idDrink;

  if (doneList) {
    const isRecipeAlreadyDone = doneList.some((rec) => rec.id === recipeId);
    if (isRecipeAlreadyDone) {
      return doneList;
    }
    doneList.push(newRecipe);
    localStorage.setItem('doneRecipes', JSON.stringify(doneList));
    return doneList;
  }

  localStorage.setItem('doneRecipes', JSON.stringify(
    [newRecipe],
  ));
  return [newRecipe];
}
