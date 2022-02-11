// Exemplo 01:
// Sem Utilização de Promises
function calcularDivisao(num1, num2) {
  if (num2 == 0) throw new Error('Não pode ser feito uma divisão por zero');
  const resultado = num1 / num2;
  return resultado;
}

try {
  const resposta = calcularDivisao(2, 0);
  console.log("Resultado: %s", resultado);
} catch (e) {
  console.log("Erro: %s", e.message);
}

// Utilizando Promises
function calcularDivisao(num1, num2) {
  const myPromise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(new Error('Não pode ser feito uma divisão por zero'));
    const resultado = num1 / num2;
    resolve(resultado);
  });
  return promise;
}

calcularDivisao(2, 0)
  .then(result => console.log('Resultado: %s', result))
  .catch(err => console.log('Erro: %s', err.message));


//-------------------------------------------------------------------------------
// Exemplo 02:
const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {

    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      else resolve(content);
    });

  });
}

readFilePromise('file1.txt') // A função me promete que vai ler o arquivo
  .then((content) => { // Caso arquivo 1 seja lido,
    console.log(`Lido file1.txt com ${content.byteLength} bytes`); // Escrevo o resultado no console
    return readFilePromise('file2.txt'); // Chamo novamente a função, que me retorna uma nova Promise
  })
  .then(content => { // Caso a Promise retornada pelo `then` anterior seja resolvida,
    console.log(`Lido file2.txt com ${content.byteLength} bytes`); // Escrevemos o resultado no console
    return readFilePromise('file3.txt'); // E chamamos a função novamente, recebendo uma nova promessa
  })
  .then((content) => { // Caso a promessa de leitura do `file3.txt` seja resolvida,
    console.log(`Lido file3.txt com ${content.byteLength} bytes`); // Logamos o resultado no console
  })
  .catch((err) => { // Caso qualquer uma das promessas ao longo do caminho seja rejeitada
    console.log(`Erro ao ler arquivos: ${err.message}`); // Escrevemos o resultado no console
  });
