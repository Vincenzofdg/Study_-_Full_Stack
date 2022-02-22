// Utiliza-SE a variável global module.exports para exportar no sistama CommonJS

// brlValue.js
const brl = 5.37;

module.exports = brl;

//--------------------------------------------------------------
// Ao inves de exportar um valor unico (como no exemplo acima), exportaremos uma arrow function

// brlValue.js
const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;

module.exports = usdToBrl;

//--------------------------------------------------------------
// O uso desse nosso módulo se daria da seguinte forma:

// index.js
const convert = require('./brlValue');

const usd = 10;
const brl = convert(usd);

console.log(brl) // 53.7

//--------------------------------------------------------------
// Exportanto tanto a função quanto o valor de brl

// brlValue.js
const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;

module.exports = {
  brl,
  usdToBrl,
};

//--------------------------------------------------------------
// Uso do módulo com mais de uma exportação

const { brl, usdToBrl } = require('./brValue');

console.log(`Valor do dólar: ${brl}`); // Valor do dólar: 5.37
console.log(`10 dólares em reais: ${usdToBrl(10)}`); // 10 dólares em reais: 53.7