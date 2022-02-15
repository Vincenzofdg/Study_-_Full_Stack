const buscaProdutos = async (genero) => {
  const listaDeProdutos = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${genero}`,
  );
  const listaDeProdutosJson = await listaDeProdutos.json();
  return listaDeProdutosJson.results;
};

module.exports = {
  buscaProdutos,
};
