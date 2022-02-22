// Constantes e variável global que eu declarei:
const items = document.querySelector('.items');
const btnEmpty = document.querySelector('.empty-cart');
const list = document.querySelector('.cart__items');
const pagCart = document.querySelector('.cart');
let globalPrices = [];

// Dadas Funções para o projeto:
function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
}

// Requisito 05 (SUBTRAINDO)  - Entra na Funcção do requisito 03:
const subtracPrice = (request) => {
  const total = document.querySelector('.total-price');
  const arraySub = request.innerText.split('$'); 
  const num = parseFloat(arraySub[1]);
  const indice = globalPrices.indexOf(num);
  switch (indice) {
    case indice === 0:
      globalPrices = globalPrices.shift();
      break;
    case indice === globalPrices.length - 1:
      globalPrices = globalPrices.pop();
      break;
    default:
      globalPrices.splice((indice), 1);
      break;
  }
  const sum = globalPrices.reduce(((acc, cur) => acc + cur), 0);
  total.innerText = Math.round((sum + Number.EPSILON) * 100) / 100;
};

// Requisito 04: Adicionado nas funções cartItemClickListener() e itemsToCart().
const addAndRemoveLocalStorage = () => {
  const info = Array.from(list.children).map((i) => i.innerHTML); // globalInfo.push(ItemInfo);
  localStorage.setItem('items', JSON.stringify(info));
};

const localStorageLoad = () => {
  const listOd = document.querySelector('#lista-items');
  const info = JSON.parse(localStorage.getItem('items'));
  info.forEach((text) => {
    const toBeCreated = document.createElement('li');
    toBeCreated.className = 'cart__item';
    toBeCreated.innerText = text;
    listOd.appendChild(toBeCreated);
  });
};

// Requisito 03:
const cartItemClickListener = (event) => {
  event.target.classList.add('selected');
  const selected = document.querySelector('.selected');
  subtracPrice(selected);
  list.removeChild(selected);
  addAndRemoveLocalStorage();
};

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

// Preparation:
const URL = 'https://api.mercadolibre.com';
const requestFormat = async (type, item, callback) => {
  const url = await fetch(URL + type + item);
  const urlData = await url.json();
  return (!callback) ? (urlData) : (callback(urlData));
};

// Requisito 01:
const itemsToHTML = (request) => {
  const { results } = request;
  results.forEach((data) => {
    const c = createProductItemElement({ sku: data.id, name: data.title, image: data.thumbnail });
    items.appendChild(c);
  });
};

// Requisito 05 (SOMANDO) - Entra na Funcção do requisito 02:
const sumPrice = (request) => {
  const { price } = request;
  const total = document.querySelector('.total-price');
  globalPrices.push(price);
  const sum = globalPrices.reduce(((acc, cur) => acc + cur), 0);
  total.innerText = Math.round((sum + Number.EPSILON) * 100) / 100;
};

// Requisitor 02:
const itemsToCart = (request) => {
  const { id, title, price } = request;
  const c = createCartItemElement({ sku: id, name: title, salePrice: price });
  list.appendChild(c);
  addAndRemoveLocalStorage();
};

const btnClick = () => {
  const btn = document.querySelectorAll('.item__add');

  btn.forEach((b) => b.addEventListener('click', (event) => {
    const productID = event.target.parentElement.firstChild.innerText;
    requestFormat('/items/', productID, itemsToCart);
    requestFormat('/items/', productID, sumPrice);
  }));
};

// Requisito 6:
btnEmpty.addEventListener('click', () => {
  globalPrices = [];
  localStorage.clear();
  while (list.firstChild) list.removeChild(list.firstChild);
});

// Requisito 7:
const loadClean = () => items.removeChild(items.firstChild);

window.onload = async () => {
  try {
    await items.appendChild(createCustomElement('span', 'loading', 'loading...')); // Requisito 7
    await requestFormat('/sites/MLB/search?q=', 'computador', itemsToHTML);
    await pagCart.appendChild(createCustomElement('span', 'total-price', '0'));
    await loadClean();
    await btnClick();
    await localStorageLoad();
  } catch (err) {
    console.log(err);
  }
};