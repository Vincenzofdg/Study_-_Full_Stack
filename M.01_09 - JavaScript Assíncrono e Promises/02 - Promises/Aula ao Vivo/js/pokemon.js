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

// Dessa forma estamos usando um callback para fazer uma nova execuçao
// do código após o appendPokemon, mas como estamos encadeando as callback
// perdemos o controle sobre a ordem de execuçao de cada uma delas
// o que acaba gerando uma lista com ordens diferentes a cada chamada
const getPokemon = (pokemon, callback) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
    response.json().then((dados) => {
      appendPokemon(dados.name, dados.sprites.front_default);
      // caso nao seja passada uma callback a funçao retorna um undefined
      // evitando assim o erro no browser
      callback ? callback() : undefined;
    });
  });
};

const erro = (msg) => {
  return msg;
};

// Funcao de exemplo para mostrar que podemos chamar qualquer funcao
// na callback do getPokemon
// const imprimeTexto = () => console.log("Imprime qualquer coisa");

// Funçao estruturada como uma promise o que nos permite maior controle
// sobre a resposta e a possibilidade de verificar se recebemos os dados
// solicitados ou algum erro
const getPokemonPromise = (pokemon) => {
  return new Promise((resolve, reject) => {
    if (pokemon === undefined) {
      reject("Você precisa definir o nome do pokemon para continuar!");
    }else if (pokemon !== "atanes") {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
        if (response.ok) {
          response.json().then((dadosPokemon) => {
            appendPokemon(
              dadosPokemon.name,
              dadosPokemon.sprites.front_default
            );
            resolve();
          });
        } else {
          reject("Atanes não é pokemon meu querido!!");
        }
      });
    } else {
      reject("Atanes não é pokemon meu querido!!");
    }
  });
};

const fetchPokemon = async () => {
  // Usando async e await par ater controle sobre as repostas das
  // promises e deixar o codigo mais organizado
  // Tratando os erros com o bloco try catch
  try {
    await getPokemonPromise("ditto");
    await getPokemonPromise("rattata");
    await getPokemonPromise("pikachu");
    await getPokemonPromise("zubat");
    await getPokemonPromise("atanes");
  } catch (error) {
    console.log(error);
  }

  // Usando o then par controlar a resposta das promises e tratando
  // erro com o catch
  // getPokemonPromise("ditto")
  //   .then(() => getPokemonPromise("rattata"))
  //   .then(() => getPokemonPromise("pikachu"))
  //   .then(() => getPokemonPromise("zubat"))
  //   .then(() => getPokemonPromise("atanes"))
  //   .catch((erro) => console.log(erro));

  // Usando callback para empilhar as funções
  // getPokemon('bulbasaur',
  //   getPokemon('ditto',
  //     getPokemon('rattata')));

  // Usando o hell function - modo não recomendado
  // fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur").then((response) => {
  //   response.json().then((dados) => {
  //     appendPokemon(dados.name, dados.sprites.front_default);
  //     fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((response) => {
  //       response.json().then((dados) => {
  //         appendPokemon(dados.name, dados.sprites.front_default);
  //         fetch("https://pokeapi.co/api/v2/pokemon/rattata").then(
  //           (response) => {
  //             response.json().then((dados) => {
  //               appendPokemon(dados.name, dados.sprites.front_default);
  //               fetch("https://pokeapi.co/api/v2/pokemon/sandshrew").then(
  //                 (response) => {
  //                   response.json().then((dados) => {
  //                     appendPokemon(dados.name, dados.sprites.front_default);
  //                   });
  //                 }
  //               );
  //             });
  //           }
  //         );
  //       });
  //     });
  //   });
  // });
};

window.onload = fetchPokemon();

// new Promise((resolve, reject) => {
//   throw "err";
//   console.log("NEVER REACHED");
// })
// .then(() => console.log("RESOLVED"))
// .catch(() => console.log("REJECTED"));
