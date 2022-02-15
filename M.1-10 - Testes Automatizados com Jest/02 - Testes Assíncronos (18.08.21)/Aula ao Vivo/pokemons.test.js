const {
  incluirPokemon,
  clearPokemons,
  populaPokemons,
  filterBySpeed,
  filterByName,
} = require("./pokemons");

beforeEach(() => {
  clearPokemons();
  populaPokemons();
});

describe("Verifica retorno dos pokemons com base na sua velocidade", () => {

  it("Com velocidade acima de 50, incluindo um novo pokemon na lista", () => {
    incluirPokemon({ name: "Atanes", type: "Electric", speed: 99 });
    expect.assertions(1);
    return filterBySpeed(50).then((resposta) => {
      expect(resposta).toEqual(["Charmander", "Pikachu", "Atanes"]);
    });
  });

  it("Com velocidade acima de 50", () => {
    expect.assertions(1);
    return filterBySpeed(50).then((resposta) => {
      expect(resposta).toEqual(["Charmander", "Pikachu"]);
    });
  });

  it("Nao encontra um pokemon com velocidade de 100", () => {
    expect.assertions(1);
    return filterBySpeed(100).catch((resposta) => {
      expect(resposta).toEqual("Nenhum Pokemon encontrado.");
    });
  });
});

describe("Verifica retorno dos pokemons com base na sua velocidade usando async/await", () => {

  it("Com velocidade acima de 50, incluindo um novo pokemon na lista", async () => {
    incluirPokemon({ name: "Atanes", type: "Electric", speed: 99 });
    expect.assertions(1);
    const resposta = await filterBySpeed(50);
    expect(resposta).toEqual(["Charmander", "Pikachu", "Atanes"]);
  });

  it("Com velocidade acima de 50", async () => {
    expect.assertions(1);
    const resposta = await filterBySpeed(50);
    expect(resposta).toEqual(["Charmander", "Pikachu"]);
  });

  it("Nao encontra um pokemon com velocidade de 100", async () => {
    expect.assertions(1);
    try {
      const resposta = await filterBySpeed(100);
    } catch (error) {
      expect(error).toEqual("Nenhum Pokemon encontrado.");
    }
  });

});

test('Verifica se existe um pokemon com o nome Atanes', ()=>{
  incluirPokemon({ name: "Atanes", type: "Electric", speed: 99 });
  expect(filterByName('Atanes')).toEqual({ name: "Atanes", type: "Electric", speed: 99 });
})


