// Array para armazenar as informações recebidas da API e facilitar
// a busca e ordenação de dados
let listagemDeProdutos = [];

// Guarda dos elementos do HTML que precisam ser monitorados
// e ou modificados via código JavaScript
const divListagem = document.getElementById('listagem');
const listaGenero = document.getElementById('genero');
const listaOrdenacao = document.getElementById('ordem');
const filtro = document.getElementById('search');

const btnFiltro = document.getElementById('btn-search');

// Função para criar o elemento img de cada produto
// dessa forma deixamos a função ListaProduto menor
// e o código fica mais organizado e distribuido
const criaImagemProduto = (src) => {
  const imagem = document.createElement('img');
  imagem.classList.add('rounded');
  imagem.classList.add('img_produto');
  imagem.classList.add('img_fluid');
  imagem.src = src;

  return imagem;
};

// Funçao para criar o elemento html com a descricao do produto
const criaDescricaoProduto = (descricao) => {
  const descricaoProduto = document.createElement('p');

  descricaoProduto.classList.add('desc_produto');
  descricaoProduto.innerText = `${descricao.slice(0, 37)}...`;

  return descricaoProduto;
};

// Funçao para criar o elemento html com o preço do produto
const criaPrecoProduto = (preco) => {
  const precoProduto = document.createElement('div');
  precoProduto.className = 'preco_produto';
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
  precoProduto.innerText = Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(preco);

  return precoProduto;
};

// Função que cria cada bloco de informação de produto e coloca na
// div pai preenchendo a página com as informações
// eslint-disable-next-line max-lines-per-function
const listaProduto = (srcImagen, descricaoProduto, precoDoProduto) => {
  const infoProduto = document.createElement('div');

  infoProduto.classList.add('col-md-3');
  infoProduto.classList.add('info-produto');

  infoProduto.appendChild(criaImagemProduto(srcImagen));
  infoProduto.appendChild(criaDescricaoProduto(descricaoProduto));
  infoProduto.appendChild(criaPrecoProduto(precoDoProduto));

  divListagem.appendChild(infoProduto);
};

// Responsável por pegar cada elemento do Array de produtos e chamar a funçao
// listaProduto que faz o preenchimento do html com todos os produtos
const preencheListaDeProdutos = () => {
  divListagem.innerHTML = '';
  listagemDeProdutos.forEach((produto) => {
    listaProduto(produto.thumbnail, produto.title, produto.price);
  });
};

// Funçao que recebe o texto do input de filtro e faz a busca no array de produtos
// para atualizar a página só com os elementos que contem a palavra procurada
const filtrarProdutos = (Textofiltro) => {
  listagemDeProdutos = listagemDeProdutos.filter((produto) =>
    produto.title.toUpperCase().includes(Textofiltro.toUpperCase()));
  preencheListaDeProdutos();
};

// Adicionando o Event Listener no botão serch (procurar)
btnFiltro.addEventListener('click', () => {
  filtrarProdutos(filtro.value);
});

// Função responsável por receber o tipo de ordenação por preço
// e atualizar a página seguindo a ordem solicitada
const ordenaPorPreco = (ordem) => {
  if (ordem === 'menor-preco') {
    listagemDeProdutos.sort((a, b) => a.price - b.price);
  }
  if (ordem === 'maior-preco') {
    listagemDeProdutos.sort((a, b) => b.price - a.price);
  }
  preencheListaDeProdutos();
};

// Adicionando o Event Listener na caixa de seleção de ordenaçao por preço
listaOrdenacao.addEventListener('change', async (event) => {
  await ordenaPorPreco(event.target.value);
});

// Função que faz a busca de dados na API pelo genero de cada produto
const buscaProdutos = async (genero) => {
  const listaDeProdutos = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${genero}`,
  );
  const listaDeProdutosJson = await listaDeProdutos.json();
  listagemDeProdutos = listaDeProdutosJson.results;
};

// Adicionando o Event Listener na caixa de seleção de generos dos produtos
listaGenero.addEventListener('change', async (event) => {
  filtro.value = '';
  listaOrdenacao.value = 'relevancia';
  await buscaProdutos(event.target.value);
  preencheListaDeProdutos();
});

// Faz a carga inicial dos produtos na página com base em um genero geral
window.onload = async () => {
  await buscaProdutos('camisas');
  preencheListaDeProdutos();
};
