// Módulo sf.promises disponibiliza o método readFile e o writeFile.
const { readFile, writeFile } = require('fs').promises;

writeFile('./meu-arquivo.txt', 'Meu textão')
  .then(() => console.log('Arquivo escrito com sucesso!'))
  .catch((err) => console.error(`Erro ao escrever o arquivo: ${err.message}`));

