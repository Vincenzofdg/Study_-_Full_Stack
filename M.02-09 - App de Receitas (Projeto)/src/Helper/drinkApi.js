const TWELVE = 12;
const FIVE = 5;

export async function fetchDrinkByIngredient(ingredient) {
  try {
    const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const response = await request.json();
    return response.drinks;
  } catch (e) {
    console.error(e);
  }
}

export async function fetchDrinkByName(name) {
  try {
    const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    const response = await request.json();
    console.log(response);
    return response.drinks === null ? response.drinks : response.drinks.slice(0, TWELVE);
  } catch (e) {
    console.error(e);
  }
}

export async function fetchDrinkByFirstLetter(letter) {
  try {
    const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
    const response = await request.json();
    return response.drinks;
  } catch (e) {
    console.error(e);
  }
}

export async function fetchDrinksList() {
  try {
    const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const response = await request.json();
    return response.drinks.slice(0, TWELVE);
  } catch (e) {
    console.error(e);
  }
}

export async function fetchDrinksCategories() {
  try {
    const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const response = await request.json();
    return response.drinks.slice(0, FIVE);
  } catch (e) {
    console.error(e);
  }
}

export async function fetchDrinkById(id) {
  try {
    const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const response = await request.json();
    return response.drinks[0];
  } catch (e) {
    console.error(e);
  }
}

export async function fetchRandomDrink() {
  try {
    const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const response = await request.json();
    return response.drinks[0];
  } catch (e) {
    console.error(e);
  }
}

export async function fetchDrinksByCategory(category) {
  try {
    const link = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
    const request = await fetch(link);
    const response = await request.json();
    return response.drinks.slice(0, TWELVE);
  } catch (e) {
    console.error(e);
  }
}

export async function fetchDrinksIngredient(ingredient) {
  try {
    const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const response = await request.json();
    return response.drinks.slice(0, TWELVE);
  } catch (e) {
    console.error(e);
  }
}

export async function fetchDrinkIngredientList() {
  try {
    const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    const response = await request.json();
    return response.drinks.slice(0, TWELVE);
  } catch (e) {
    console.error(e);
  }
}

export async function fetchRandomDrinkList() {
  try {
    const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const response = await request.json();
    return response.drinks;
  } catch (e) {
    console.error(e);
  }
}
