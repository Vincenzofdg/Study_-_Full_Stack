// API do POKEMON -> https://pokeapi.co/
// Lista dos Pokemons -> https://www.pokemon.com/br/pokedex/

const appendPokemon = (pokemon, uriImagem) => {
  let ul = document.querySelector("ul");

  let li = document.createElement("li");
  let divNome = document.createElement("div");
  let divImagem = document.createElement("div");
  let img = document.createElement("img");

  divNome.innerHTML = pokemon;
  img.src = uriImagem;
  divImagem.appendChild(img);

  li.appendChild(divNome);
  li.appendChild(divImagem);

  ul.appendChild(li);
};

const fetchPokemon = () => {
  // requestPokemon((pokemon) => {
  //   appendPokemon(pokemon);
  // })
  fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur").then((response) => {
    response.json().then((dados) => {
      appendPokemon(dados.name, dados.sprites.front_default);
    });
    fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((response) => {
      response.json().then((dados) => {
        appendPokemon(dados.name, dados.sprites.front_default);
      });
      fetch("https://pokeapi.co/api/v2/pokemon/rattata").then((response) => {
        response.json().then((dados) => {
          appendPokemon(dados.name, dados.sprites.front_default);
        });
      });
    });
  });
};

const requestPokemon = (callback) => {
  setTimeout(() => {
    callback("Ditto");
    callback("Rattata");
  }, 1000);
};

window.onload = fetchPokemon();
