// Módulos locais:

/* 
Além de importarmos um arquivo como módulo, podemos importar uma pasta. Isso é útil, pois muitas vezes um módulo está dividido em vários arquivos, 
mas desejamos importar todas as suas funcionalidades de uma vez só. Nesse caso, a pasta precisa conter um arquivo chamado index.js, que importa 
cada um dos arquivos do módulo e os exporta da forma mais conveniente.
*/

// Exemplo:

// meuModulo/funcionalidade-1.js
module.exports = function () {
    console.log('funcionalidade1');
}

// meuModulo/funcionalidade-2.js
module.exports = function () {
    console.log('funcionalidade2');
}

// meuModulo/index.js
const funcionalidade1 = require('./funcionalidade-1');
const funcionalidade2 = require('./funcionalidade-2');

module.exports = { funcionalidade1, funcionalidade2 };

// Utilizando na Aplicação:

// minha-aplicacao/index.js
const meuModulo = require('./meuModulo');

console.log(meuModulo);
// { funcionalidade1: [Function: funcionalidade1], funcionalidade2: [Function: funcionalidade2] }

meuModulo.funcionalidade1();

//--------------------------------------------------------------
// Módulos internos:

// Por exemplo, require('fs') importa o pacote fs , responsável pelo sistema de arquivos.
// Uma vez que importamos um pacote, podemos utilizá-lo no nosso código como uma variável, dessa forma:
const fs = require('fs');

fs.readFileSync('./meuArquivo.txt');