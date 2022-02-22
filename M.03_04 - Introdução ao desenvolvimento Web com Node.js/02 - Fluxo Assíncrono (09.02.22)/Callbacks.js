const fs = require('fs');

fs.readFile('./arquivo.txt', (err, content) => {
  if (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
    return;
  } else {
    console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`)ç
  }
});

/* Explicação do Exemplo:
Passamos uma função para readFile, à qual damos o nome de callback. Essa função de callback recebe dois parâmetros:
  1º err: Pode ocorrer error durante a leitura do arquivo. Caso nenhum erro tenha ocorrido, esse parâmetro será undefined; 
  2º content: Uma sequência de bytes, chamada de content. Caso ocorra um erro na leitura do arquivo, esse parâmetro será undefined.

O que o codigo faz:
  1º Pedimos que o Node.js leia o arquivo, e passamos uma função de callback;
  2º Quando a leitura do arquivo é concluída ou um erro acontece, a função é chamada;
  3º Caso exista erro, escrevemos ele no console e encerramos a execução com o return;
  4º Casso não haje erros, seu conteúdo estará no segundo parâmetro, que chamamos de content.
*/

// Exemplo de Codigo sem Callback Hell:
const fs = require('fs');

const file3Callback = (err, file3Content) => {
  if (err) return console.log(`Erro ao ler o arquivo 3: ${err.message}`);
  else console.log(`Lido file3.txt com ${file3Content.byteLength} bytes`);
};

const file2Callback = (err, file2Content) => {
  if (err) return console.log(`Erro ao ler o arquivo 2: ${err.message}`);
  else {
    console.log(`Lido file2.txt com ${file2Content.byteLength} bytes`);
    fs.readFile('file3.txt', file3Callback);
  }
};

const file1Callback = (err, file1Content) => {
  if (err) return console.log(`Erro ao ler arquivo 1: ${err.message}`);
  else {
    console.log(`Lido file1.txt com ${file1Content.byteLength} bytes`);
    fs.readFile('file2.txt', file2Callback);
  }
};

fs.readFile('file1.txt', file1Callback);
