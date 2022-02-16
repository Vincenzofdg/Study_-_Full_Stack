const express = require('express');
const app = express();

// Dados:
const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];


app.listen(3001, () => console.log('Aplicação ouvindo na porta 3001'));

// Receitas:
app.get('/recipes', (_req, res, _next) => res.status(200).json(recipes));

// Rota search vai antes da rota Id, senao entende-se o search sendo um Id
// http :3001/recipes/search name==Macarrão 
// Para testar pelo navegador use a URL completa:
// http://localhost:3001/recipes/search?name=Macarrão
// http://localhost:3001/recipes/search?name=Macarrão&maxPrice=40 
app.get('/recipes/search', (req, res, _next) => {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price <= parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', (req, res, _next) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});
  else return res.status(200).json(recipe);
});

// Bebidas:
app.get('/drinks', (_req, res, _nest) => res.status(200).json(drinks))

app.get('/drinks/search', (req, res, _next) => {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((r) => r.name.includes(name));
  res.status(200).json(filteredDrinks);
});

app.get('/drinks/:id', (req, res, _next) => {
  const { id } = req.params;
  const drink = drinks.find(( i ) => i.id === parseInt(id));

  !drink && res.status(404).json({ message: 'Drink not found!' })
  return res.status(200).json(drink);
})