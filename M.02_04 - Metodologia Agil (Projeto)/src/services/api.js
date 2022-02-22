const URL = 'https://api.mercadolibre.com/sites/MLB';

export async function getCategories() {
  try {
    const fetchAPI = await fetch(`${URL}/categories`);
    const categories = await fetchAPI.json();
    return categories;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const response = await
    fetch(`${URL}/search?category=${categoryId}&q=$${query}`);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log(error);
  }
}
