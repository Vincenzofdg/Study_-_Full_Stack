const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());

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

// Receitas:
app.get('/recipes', (_req, res, _next) => res.status(200).json(recipes));

app.get('/recipes/:id', (req, res, _next) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  
if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});
else return res.status(200).json(recipe);
});

app.post('/recipes', (req, res) => {
  const { id, name, price } = req.body
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

//----------------------------------------------------------------------------
app.put('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));
  const msg = { message: 'Recipe not found!' };

  if (recipeIndex === -1) return res.status(404).json(msg);
  else {
    recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };
    res.status(204).end();
  };
});

// No Postman:
// PUT :3001/recipes/2
//  { 
//    "name": "Mudando", 
//     "price": 300
//  }

app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));
  const msg = { message: 'Recipe not found!' };

  if (recipeIndex === -1) return res.status(404).json(msg);
  else {
    recipes.splice(recipeIndex, 1);
    res.status(204).end();
  };
});

// No Postman:
// DELETE :3001/recipes/2
//----------------------------------------------------------------------------

// Bebidas:
app.get('/drinks', (_req, res, _nest) => res.status(200).json(drinks))

app.get('/drinks/:id', (req, res, _next) => {
  const { id } = req.params;
  const drink = drinks.find(( i ) => i.id === parseInt(id));

  !drink && res.status(404).json({ message: 'Drink not found!' })
  return res.status(200).json(drink);
})

app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price});
  res.status(201).json({ message: 'Drink created successfully!'});
});

app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const indexFound = drinks.findIndex((r) => r.id === parseInt(id));
  const msg = { message: 'Recipe not found!' };

  if (indexFound === -1) return res.status(404).json(msg);
  else {
    drinks[indexFound] = { ...recipes[indexFound], name, price };
    res.status(204).end();
  };
});

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const indexFound = drinks.findIndex((r) => r.id === parseInt(id));
  const msg = { message: 'Recipe not found!' };

  if (indexFound === -1) return res.status(404).json(msg);
  else {
    drinks.splice(indexFound, 1);
    res.status(204).end();
  };
});

//----------------------------------------------------------------------------
// Validação de Token
app.get('/validateToken', (req, res) => {
  const token = req.headers.authorization;
  if (!token || token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});
  else return res.status(200).json({message: 'Valid Token!'})
});
//----------------------------------------------------------------------------

app.listen(3001, () => console.log('Aplicação ouvindo na porta 3001'));
