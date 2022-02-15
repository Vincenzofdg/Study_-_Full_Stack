const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}

/*
Esse método é responsável por ler arquivos e trazer seu conteúdo para dentro do Node.js. Por ser síncrono, ele espera a leitura do arquivo terminar para, só então, atribuir o resultado à constante data.
O método readFileSync recebe dois parâmetros:
  1º Nome do Arquivo;
  2º [Opcional] Define o encoding que será utilizado durante a leitura do arquivo (caso seja uma string).
*/
