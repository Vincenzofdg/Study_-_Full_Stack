// Exemplo Utilizando o readFile:
const { readFile } = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

readFile(nomeDoArquivo, 'utf8', (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo: ${data}`);
});

// readFile('Nome do Arquivo', '[OPCIONAL] encoding para leitura do arquivo', 'Callback para manipular os dados')

// callback recebe dois parâmetros:
//   1º err;
//   2º data
