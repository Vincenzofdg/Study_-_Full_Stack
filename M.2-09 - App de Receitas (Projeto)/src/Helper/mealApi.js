const TWELVE = 12;
const FIVE = 5;

export async function fetchMealCategories() {
  try {
    const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const response = await request.json();
    return response.meals.slice(0, FIVE);
  } catch (e) {
    console.error(e);
  }
}

export async function fetchMealRegionList() {
  try {
    const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const response = await request.json();
    return response.meals;
  } catch (e) {
    console.error(e);
  }
}

export async function fetchMealIngredientsList() {
  try {
    const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const response = await request.json();
    return response.meals.slice(0, TWELVE);
  } catch (e) {
    console.error(e);
  }
}

export async function fetchMealsByIngredient(ingredient) {
  try {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const response = await request.json();
    return response.meals.slice(0, TWELVE);
  } catch (e) {
    console.error(e);
  }
}

export async function fetchMealsByRegion(region) {
  try {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${region}`);
    const response = await request.json();
    return response.meals.slice(0, TWELVE);
  } catch (e) {
    console.error(e);
  }
}

export async function fetchMealsByCategory(category) {
  try {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const response = await request.json();
    return response.meals.slice(0, TWELVE);
  } catch (e) {
    console.error(e);
  }
}

export async function fetchRandomMealList() {
  try {
    const request = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const response = await request.json();
    return response.meals.slice(0, TWELVE);
  } catch (e) {
    console.error(e);
  }
}

export async function fetchRandomMeal() {
  try {
    const request = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const response = await request.json();
    return response.meals[0];
  } catch (e) {
    console.error(e);
  }
}

export async function fetchMealByName(mealName) {
  try {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
    const response = await request.json();
    return response.meals;
  } catch (e) {
    console.error(e);
  }
}

export async function fetchMealByFirstLetter(letter) {
  try {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
    const response = await request.json();
    return response.meals;
  } catch (e) {
    console.error(e);
  }
}

export async function fetchMealById(id) {
  try {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const response = await request.json();
    return response.meals[0];
  } catch (e) {
    console.error(e);
  }
}
