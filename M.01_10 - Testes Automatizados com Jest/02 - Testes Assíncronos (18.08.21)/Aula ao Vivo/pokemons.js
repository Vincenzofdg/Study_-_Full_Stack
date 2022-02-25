let starterPokemons = [
  { name: "Bulbasaur", type: "Grass/Poison", speed: 45 },
  { name: "Charmander", type: "Fire", speed: 65 },
  { name: "Squirtle", type: "Water", speed: 43 },
  { name: "Pikachu", type: "Electric", speed: 90 },
];

const clearPokemons = () => (starterPokemons = []);

const populaPokemons = () =>
  (starterPokemons = [
    { name: "Bulbasaur", type: "Grass/Poison", speed: 45 },
    { name: "Charmander", type: "Fire", speed: 65 },
    { name: "Squirtle", type: "Water", speed: 43 },
    { name: "Pikachu", type: "Electric", speed: 90 },
  ]);

const incluirPokemon = (pokemon) =>
  starterPokemons.push({
    name: pokemon.name,
    type: pokemon.type,
    speed: pokemon.speed,
  });

const filterBySpeed = (minimumSpeed) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const bySpeed = starterPokemons
        .filter((pokemons) => pokemons.speed >= minimumSpeed)
        .map((pokemon) => pokemon.name);

      if (bySpeed.length > 0) {
        resolve(bySpeed);
      } else {
        reject("Nenhum Pokemon encontrado.");
      }
    }, 1500);
  });

  const filterByName = (nome) => {
    const byName = starterPokemons.find((pokemon)=>pokemon.name === nome);
    return byName;
  }

module.exports = {
  incluirPokemon,
  clearPokemons,
  populaPokemons,
  filterBySpeed,
  filterByName,
};
