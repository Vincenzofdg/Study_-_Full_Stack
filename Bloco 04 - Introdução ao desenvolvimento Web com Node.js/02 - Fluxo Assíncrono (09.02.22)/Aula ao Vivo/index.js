const axios = require('axios');	// importanto o axios

// A Requisição que o axios faz não precisa converter de .Json
const getPokemonById = async (id) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    // O axios traz a requisição da api dentro de um corpo chamado data
    return response.data;
  } catch (error) {
    console.log(error.message);
    return {}; // Para não quebrar o codigo caso haja erro. Retornando Undefined
  }
};

async function main() {
  const promises = [];

  for (let id = 0; id < 10; id++) {
    const pokemonPromise = getPokemonById(id);
    promises.push(pokemonPromise);
  }

  // Passa um array para o promise.all e ele espera todas serem resolvidas para depois me dar os dados 
  const pokemons = await Promise.all(promises);
  pokemons.forEach((pokemon, index) => console.log(`${++index}º Pokemon: ${pokemon.name}`));
}

main();
